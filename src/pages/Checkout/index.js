import { useEffect, useState } from "react";
import "./styles.css";
import { useContext } from "react"; /* necesito pasarle el contexto */
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase";

const Checkout = () => {
  /* const [product, setProduct] = useState({}); */
  const [buyer, setBuyer] = useState({});
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

  function handleChange(buyerId, evt) {
    const value = evt.target.value;
    const formData = { ...form, [buyerId]: value };
    const { name, email, phone } = formData;
    setForm(formData);
    console.log(name);
    console.log(email);
    console.log(phone);
  }

  const generateOrder = async () => {
    setLoading(true);
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer,
      items: cart,
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
        <p>Email:</p>
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
      </div>
    </>
  );
};
export default Checkout;

{
  /* 
<h1 className="">Proceso de pago</h1>
      <h2 className="checkout_datBuyer">1 Datos del comprador</h2>
      <div className="checkout">
        <div className="checkout_part1">
          <div className="checkout_part1s">
            <div className="checkout_part1sub">
              <p>Nombre</p>
              <input type="text" />
            </div>
            <div className="checkout_part1sub">
              <p>Apellido</p>
              <input type="text" />
            </div>
          </div>
          
          <div className="checkout_part1s">
            <div className="checkout_part1sub">
              <p>Email</p>
              <input type="email" />
            </div>
            <div className="checkout_part1sub">
              <p>Teléfono/Celular</p>
              <input type="number" />
            </div>
          </div>

          <div className="checkout_part1s">
            <div className="checkout_part1sub">
              <p>Domicilio Completo</p>
              <input type="text" />
            </div>
            <div className="checkout_part1sub">
              <p>Ciudad</p>
              <input type="text" />
            </div>
          </div>
          <div className="checkout_part1s">
            <div className="checkout_part1sub">
              <p>Código Postal</p>
              <input type="text" />
            </div>
            <div className="checkout_part1sub">
              <p>Provincia</p>
              <input type="text" />
            </div>
          </div>
          <div className="checkout_part1s">
            <div className="checkout_part1sub">
              <p>País</p>
              <input type="text" />
            </div>
            <div className="checkout_part1sub">
              <p>Dni</p>
              <input type="number" />
            </div>
          </div>
          <button className="checkout_btn">Continuar</button>
          
          </div>
          <div className="checkout_part2">
            <h1 className="checkout_title">Resumen de compra</h1>
  
            <table>
              <tr>
                <th className="checkout_titleSection">Productos</th>
                <th className="checkout_titleSection">Cantidad</th>
                <th className="checkout_titleSection">Subtotal</th>
              </tr>
            </table>
  
            {cart.map((p) => {
              return (
                <>
                  <table>
                    <tr>
                      <td className="checkout_section">{p.name}</td>
                      <td className="checkout_section">{p.qty}</td>
                      <td className="checkout_section">ARS${getSubtotal(p)}</td>
                    </tr>
                  </table>
                </>
              );
            })}
          </div>
        </div>
  
        <p className="checkout_total">Total: ARS${getTotalPrice()}</p>

*/
}
