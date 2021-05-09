import "./styles.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartWidgetContainer">
      <img className="img" src="../images/carro-de-la-compra.png" />
      <div className="modal">
        <div className="title">
          <p>Producto</p>
          <p>Cantidad</p>
        </div>
        {cart.map((p) => {
          return (
            <>
              <div className="infoFather">
                <div className="infoSon">
                  <p>{p.name}</p>
                  <p>{p.qty}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CartWidget;
