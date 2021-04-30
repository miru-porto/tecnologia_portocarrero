import { useState } from "react";
import "./styles.css";

const Item = ({ product }) => {
  return (
    <div className="cards">
      <h2>{product.name}</h2>
      <p>{product.madeBy}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <a>Ver detalles</a>
      <img className="cards_images" src={product.image} />
    </div>
  );
};

export default Item;
