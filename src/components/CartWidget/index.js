import "./styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="cartWidgetContainer">
        <Link to={"/cart"}>
          <img
            className="cartWidgetContainer_img"
            src="https://firebasestorage.googleapis.com/v0/b/coderhouse-bijouterie.appspot.com/o/agregar.png?alt=media&token=83258dc7-2c0b-4834-9fd7-e0d21f68d10c"
          />
        </Link>
        <div className="modal">
          {cart.length > 0 ? (
            <>
              <table className="infoContainerTable">
                <td className="infoTable">Producto</td>
                <td className="infoTable">Cantidad</td>
              </table>

              {cart.map((p) => {
                return (
                  <>
                    <div key={p.id}>
                      <table>
                        <td className="infoTable">{p.name}</td>
                        <td className="infoTable">{p.qty}</td>
                      </table>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <p className="infoNoProducts">Aún no hay productos</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartWidget;
