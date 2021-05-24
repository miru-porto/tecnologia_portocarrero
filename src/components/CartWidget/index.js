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
        <img className="img" src="../images/agregar.png" />
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
                <div className="infoFather">
                  <table className="infoSon">
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
