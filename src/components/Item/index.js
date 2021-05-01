import { useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Item = ({ product}) => {
  return (
    <div className="cards">
      <h2>{product.name}</h2>
      <p>{product.madeBy}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <NavLink to={'item/1'}>Ver detalles</NavLink>
      <img className="cards_images" src={product.image} />
    </div>
  );
};

export default Item;
/*

<NavLink to={"/item/1"}>Ver detalles</NavLink>
*/