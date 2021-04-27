import { useState } from "react";

const ItemDetail = ({ product }) => {
  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.madeBy}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image}/>
    </>
  );
};

export default ItemDetail;
