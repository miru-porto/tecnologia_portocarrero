import { useState } from "react";
import "./styles.css";
/*imports para poner fecha */
import "firebase/firestore";
import firebase from "firebase/app";

import { useContext } from "react"; /* necesito pasarle el contexto */
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase";

const Checkout = () => {
  const [orderId, setOrderId] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    cart /* aca tengo que pasarle los datos que voy a usar de por ejemplo los productos que voy a comrpar*/,
    getSubtotal,
    getTotalPrice,
  } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    email2: "",
    phone: "",
  });

  const [error, setError] = useState('');

  function handleChange(buyerId, evt) {
    const value = evt.target.value;
    const formData = { ...form, [buyerId]: value };
    const { name, email, email2, phone } = formData;
    setForm(formData);
    console.log(name);
    console.log(email);
    console.log(email2);
    console.log(phone);
  }
  //crear una función que habilite el btn 'enviar' cuando todos los campos esten completados
  const fieldEmpty = () => {
    const { name, email, email2, phone } = form;
    return [name, email, email2, phone].includes(""); //si da true el btn se desactiva
  };
  
  const handleSubmit = () => {
    const { email, email2 } = form;
    if (email == email2) {
      console.log("el email introducido ha sido confirmado");
      generateOrder();
    } else {
      setError('Los mails no coinciden')
    }
  };
  // [] para arrray, {} para objetos
  const generateOrder = async () => {
    setLoading(true);
    const db = getFirestore();
    const orders = db.collection("orders");

    const newOrder = {
      buyer: { ...form },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getTotalPrice(),
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id); 
      })
      .catch((err) => {
        console.log("error buscando la info del comprador", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div>
        <p>Nombre:</p>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          onChange={(evt) => {
            handleChange("name", evt);
          }}
        />
        <p>Email:</p>
        <input
          type="text"
          placeholder="Email"
          onChange={(evt) => {
            handleChange("email", evt);
          }}
        />
        <p>Confirma tu email:</p>
        <input
          type="text"
          placeholder="Repetí tu Email"
          onChange={(evt) => {
            handleChange("email2", evt);
          }}
        />
        <p>Teléfono:</p>
        <input
          type="text"
          placeholder="Teléfono"
          onChange={(evt) => {
            handleChange("phone", evt);
          }}
        />
        {error && <p>{error}</p>}
        <button onClick={(e) => handleSubmit(e)} disabled={fieldEmpty()}>
          Enviar
        </button>
      </div>
    </>
  );
};
export default Checkout;

