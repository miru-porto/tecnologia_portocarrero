import { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({ product }) => {
  const [showButton, setShowButton] = useState(false);
  const history = useHistory();
  const onAdd = (e) => {
    console.log(e);
    setShowButton(true);
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
          {showButton ? (
            <button onClick={() => history.push("/cart")}>
              Ir al carrito
            </button>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          )}
          <p>{product.description}</p>
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
