import "./styles.css";
import { NavLink } from "react-router-dom";

import Loader from "../../components/Loader"; //importando el loader
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const {
    cart,
    setCart,
    removeFromCart,
    getTotalPrice,
    getSubtotal,
    removeItems,
  } = useContext(CartContext);

  return (
    <>
      <h1 className="titleOne">Mi compra</h1>
      <div className="cart">
        {cart.length > 0 ? (
          <>
            <div>
              <table>
                <tr className="cartTable">
                  <th className="cartTableTitleName">PRODUCTO</th>
                  <td className="cartTableTitleName">PRECIO</td>
                  <td className="cartTableTitleName">CANTIDAD</td>
                  <td className="cartTableTitleName">SUBTOTAL</td>
                </tr>

                {cart.map((p) => {
                  return (
                    <>
                      <tr>
                        <th className="cartTableInfoName">{p.name}</th>
                        <td className="cartTableInfo">ARS${p.price}</td>
                        <td className="cartTableInfo">{p.qty}</td>
                        <td className="cartTableInfo">ARS${getSubtotal(p)}</td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="cart_noProductsTitle">
                El carrito de compras está vacío
              </h2>
              <p className="cart_noProductsSubtitle">
                Usted no tiene artículos en su carrito de compra.
              </p>
              <p className="cart_noProductsSubtitle">
                Click{" "}
                <NavLink to={"/"} className="cart_noProductsLink">
                  aquí
                </NavLink>{" "}
                para continuar comprando
              </p>
            </div>
          </>
        )}

        <div className="cart_recibo">
          <div className="cart_info">
            <p className="cart_nameRecibo">Resumen de compra</p>
            <div className="cart_totalForPay">
              <p className="cart_total">Total:</p>
              <p>ARS${getTotalPrice()}</p>
            </div>
          </div>
          <div className="cart_final">
            <button className="cart_btnfinal">
              <NavLink to={"/checkout"} className="cart_btnfinal">
                Finalizar compra
              </NavLink>{" "}
            </button>
            <button className="cart_btnDelete" onClick={() => removeItems()}>
              Eliminar Productos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
