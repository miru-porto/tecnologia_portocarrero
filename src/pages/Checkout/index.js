import { useEffect, useState } from "react";
import "./styles.css";
import { useContext } from "react"; /* necesito pasarle el contexto */
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase";

const Checkout = () => {
  /* const [product, setProduct] = useState({}); */
  const [buyer, setBuyer] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    cart /* aca tengo que pasarle los datos que voy a usar de por ejemplo los productos que voy a comrpar*/,
    getSubtotal,
    getTotalPrice,
  } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const itemColletion =
      db.collection("orders"); /*es como si no lo encontrara */
    const buyerInfo = itemColletion.doc();

    buyerInfo
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El comprador si existe!!");
          /* quiero llamar un valor de la base de datos por ej el email*/
          return;
        }
        console.log("El comprador si existe");

        setBuyer({ ...doc.data() });
      })
      .catch((error) => {
        console.log("error buscando la info del comprador", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>
        <div>
          <p>FORMULARIO DE COMPRA</p>
        </div>
        <div>
          <h1 className="checkout_title">Detalle de compra</h1>

          <table /*  className="checkout_padreSeccion" */>
            <tr>
              <th className="checkout_titleSection">Productos</th>
              <th className="checkout_titleSection">Precio</th>
              <th className="checkout_titleSection">Cantidad</th>
              <th className="checkout_titleSection">Subtotal</th>
            </tr>
          </table>

          {cart.map((p) => {
            return (
              <>
                <table /*  className="checkout_padreSeccion" */>
                  <tr>
                    <td className="checkout_section">{p.name}</td>
                    <td className="checkout_section">ARS${p.price}</td>
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
    </>
  );
};
export default Checkout;
