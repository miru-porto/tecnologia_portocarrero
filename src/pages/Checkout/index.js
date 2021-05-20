import { useEffect, useState } from "react";
import "./styles.css";
import { useContext } from "react"; /* necesito pasarle el contexto */
import { CartContext } from "../../context/cartContext";

const Checkout = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    cart /* aca tengo que pasarle los datos que voy a usar de por ejemplo los productos que voy a comrpar*/,
    getSubtotal,
    getTotalPrice,
  } = useContext(CartContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <h1 className="checkout_title">Detalle de compra</h1>

      <table /*  className="checkout_padreSeccion" */>
        <tr>
          <th className="checkout_section">Productos</th>
          <th className="checkout_section">Precio</th>
          <th className="checkout_section">Cantidad</th>
          <th className="checkout_section">Subtotal</th>
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

      <p className="checkout_total">Total: ARS${getTotalPrice()}</p>
    </>
  );
};
export default Checkout;
