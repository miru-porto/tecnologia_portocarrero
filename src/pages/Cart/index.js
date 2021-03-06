import "./styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, getSubtotal, removeItems } =
    useContext(CartContext);

  return (
    <>
      <h1 className="titleOne">Mi compra</h1>
      <div className="cart">
        {cart.length > 0 ? (
          <>
            <table>
              <tr className="cartTable">
                <th className="cartTableTitleName">PRODUCTO</th>
                <td className="cartTableTitleName">PRECIO</td>
                <td className="cartTableTitleName">CANTIDAD</td>
                <td className="cartTableTitleName">SUBTOTAL</td>
              </tr>

              {cart.map((p) => {
                return (
                  <tr key={p.id}>
                    <th>
                      <Link className="cartTableInfo" to={`/item/${p.id}`}>
                        {p.name}
                      </Link>
                    </th>
                    <td className="cartTableInfo">ARS${p.price}</td>
                    <td className="cartTableInfo">{p.qty}</td>
                    <td className="cartTableInfo">ARS${getSubtotal(p)}</td>
                    <td>
                      <button
                        className="cartTableBtn"
                        onClick={() => removeFromCart(p.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>

            <div className="cart_recibo">
              <div className="cart_info">
                <p className="cart_nameRecibo">Resumen de compra</p>
                <div className="cart_totalForPay">
                  <p>Total:</p>
                  <p>ARS$ {getTotalPrice()}</p>
                </div>
              </div>
              <div className="cart_final">
                <Link to={"/checkout"} className="cart_btnFinalMargins">
                  <button className="cart_btnfinal">Finalizar compra</button>
                </Link>
                <button
                  className="cart_btnDelete"
                  onClick={() => removeItems()}
                >
                  Eliminar Productos
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2 className="cart_noProductsTitle">
              El carrito de compras est?? vac??o
            </h2>
            <p className="cart_noProductsSubtitle">
              Usted no tiene art??culos en su carrito de compra.
            </p>
            <p className="cart_noProductsSubtitle">
              Click{" "}
              <Link
                to={"/tecnologia_portocarrero"}
                className="cart_noProductsLink"
              >
                aqu??
              </Link>{" "}
              para continuar comprando
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
