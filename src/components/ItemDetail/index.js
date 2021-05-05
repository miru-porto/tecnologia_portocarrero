import { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({ product }) => {
  const [showButton, setShowButton] = useState(false);
  const history = useHistory();
  const onAdd = (e) => {
    console.log(e);
    setShowButton(true);
  };

  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.madeBy}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} />
      {showButton ? (
        <button onClick={() => history.push("/cart")}>Terminar compra</button>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      )}
    </>
  );
};

export default ItemDetail;
