import { useState } from "react";
import "./styles.css";
/* importanddo link */
import { Link } from "react-router-dom";
/*imports para poner fecha */
import "firebase/firestore";
import firebase from "firebase/app";

import Loader from "../../components/Loader";
import { useContext } from "react"; /* necesito pasarle el contexto */
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase";

const Checkout = () => {
  const [orderId, setOrderId] = useState({});
  const [loading, setLoading] = useState("");
  const [showLink, setShowLink] = useState(false);
  const {
    cart /* aca tengo que pasarle los datos que voy a usar de por ejemplo los productos que voy a comrpar*/,
    removeItems,
    getTotalPrice,
  } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    email2: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(buyerId, evt) {
    const value = evt.target.value;
    const formData = { ...form, [buyerId]: value };
    setForm(formData);
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
      setStatus("Listo: tu pedido ha sido enviado con éxito");
      removeItems();
      setShowLink(true);
    } else {
      setStatus("Error: los mails no coinciden");
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

  if (loading) {
    return <Loader />;
  }

  if (showLink) {
    //hace que el carrito se vacie
    return (
      <>
        <div className="form_bienEnviado">
          <Link to={"/"}>
            <p className="form_link">Volvé a la Home</p>
          </Link>
          <p className="form_correcto">{status}</p>
          <p>Id de compra: {orderId}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <form className="form">
        <label className="form_label">
          Nombre:
          <input
            className="form_input"
            type="text"
            placeholder="Nombre y Apellido"
            onChange={(evt) => {
              handleChange("name", evt);
            }}
          />
        </label>
        <label className="form_label">
          Email:
          <input
            className="form_input"
            type="text"
            placeholder="Email"
            onChange={(evt) => {
              handleChange("email", evt);
            }}
          />
        </label>
        <label className="form_label">
          Confirma tu email:
          <input
            className="form_input"
            type="text"
            placeholder="Repetí tu Email"
            onChange={(evt) => {
              handleChange("email2", evt);
            }}
          />
        </label>
        <label className="form_label">
          Teléfono:
          <input
            className="form_input"
            type="text"
            placeholder="Teléfono"
            onChange={(evt) => {
              handleChange("phone", evt);
            }}
          />
        </label>
        {status && <p className="form_status">{status}</p>}
      </form>
      <input
        className="form_btn"
        type="submit"
        value="enviar"
        onClick={(e) => handleSubmit(e)}
        disabled={fieldEmpty()}
      />
    </>
  );
};
export default Checkout;
