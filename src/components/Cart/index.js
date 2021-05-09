import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <h1 className="titleOne">Mi compra</h1>
      <div className="cart">
        <table className="cartTable">
          <tr className="cartTableborder">
            <th className="cartTableTitleName">PRODUCTO</th>
            <td className="cartTableTitleName">PRECIO</td>
            <td className="cartTableTitleName">CANTIDAD</td>
            <td className="cartTableTitleName">SUBTOTAL</td>
          </tr>
          {cart.map((p) => {
            return (
              <tr>
                <th>{p.name}</th>
                <td>ARS${p.price}</td>
                <td>{p.qty}</td>
                <td>SUBTOTAL</td>
              </tr>
            );
          })}
        </table>

        <div className="cart_recibo">
          <div className="cart_info">
            <p>Resumen de compra</p>
            <p>Total: ARS$ XXX</p>
          </div>
          <button>Finalizar compra</button>
        </div>
      </div>
    </>
  );
};

/*
<h1 className="cart_title">Mi compra</h1>
      <div className="cart">
        <div className="cart_components">
          <div className="cart_subtitles">
            <p>Producto</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Subtotal</p>
          </div>
          <div className="cartProductList">
            {cart.map((p) => {
              return (
                <div className="cartProductItem">
                  <p className="cartProductName">{p.name}</p>
                  <p>{p.price}</p>
                  <p>{p.qty}</p>
                  <p>SUBTOTAL</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart_recibo">
          <div className="cart_info">
            <p>Resumen de compra</p>
            <p>Total: ARS$ XXX</p>
          </div>
          <button>Finalizar compra</button>
        </div>
      </div>

*/

export default Cart;
