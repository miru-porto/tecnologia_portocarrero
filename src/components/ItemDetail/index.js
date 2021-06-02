import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({ product }) => {
  const [showButton, setShowButton] = useState(false);
  const history = useHistory();
  const { addToCart, message } = useContext(CartContext);

  const onAdd = (count) => {
    console.log(count);
    setShowButton(true);
    addToCart(count, product);
  };

  return (
    <>
      <div className="cardDetail">
        <div className="cardDetail_1">
          <img className="cardDetail_img" src={product.image} />
        </div>
        <div className="cardDetail_info">
          <h2 className="cardDetail_name">{product.name}</h2>
          <p className="cardDetail_price">ARS${product.price}</p>
          <p className="cardDetail_id">Nº Artículo: {product.id}</p>
          <p className="cardDetail_description">{product.description}</p>
          <p className="cardDetail_message">{message}</p>

          {showButton ? (
            <button
              onClick={() => history.push("/cart")}
              className="cardDetail_btn"
            >
              Ir al carrito
            </button>
          ) : (
            <>
              <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
