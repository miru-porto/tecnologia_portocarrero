import "./styles.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
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
        <table className="cartTable">
          <tr className="cartTableborder">
            <th className="cartTableTitleName">PRODUCTO</th>
            <td className="cartTableTitleName">PRECIO</td>
            <td className="cartTableTitleName">CANTIDAD</td>
            <td className="cartTableTitleName">SUBTOTAL</td>
          </tr>

          {cart.length > 0 ? (
            cart.map((p) => {
              return (
                <tr>
                  <th>{p.name}</th>
                  <td className="cartTableInfo">ARS${p.price}</td>
                  <td className="cartTableInfo">{p.qty}</td>
                  <td className="cartTableInfo">ARS${getSubtotal(p)}</td>
                </tr>
              );
            })
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
        </table>

        <div className="cart_recibo">
          <div className="cart_info">
            <p className="cart_nameRecibo">Resumen de compra</p>
            <div className="cart_totalForPay">
              <p className="cart_total">Total:</p>
              <p>ARS${getTotalPrice()}</p>
            </div>
          </div>
          <div className="cart_final">
            <button className="cart_btnfinal">Finalizar compra</button>
            <button className="cart_btnDelete" onClick={() => removeItems()}>
              Eliminar Productos
            </button>
            {/* hacer funcionar este btn */}
          </div>
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
