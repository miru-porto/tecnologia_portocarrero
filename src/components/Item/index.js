import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="cards">
      <h2>{product.name}</h2>
      <p>{product.madeBy}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Link to={`/item/${product.id}`}>Ver más detalles</Link>
      <img className="cards_images" src={product.image} />
    </div>
  );
};

export default Item;
/*
{ids.map((id) => {
              return (
                <li>
                  <Link
                    to={`/item/${id}`}
                  >
                    {id}
                  </Link>
                </li>
              );
            })}
*/
