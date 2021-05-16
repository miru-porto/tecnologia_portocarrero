import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <div className="card_item">
        <Link to={`/item/${product.id}`}>
        <img className="card_image" src={product.image} />
        <h2 className="card_name">{product.name}</h2>
        <p className="card_price">ARS${product.price}</p>
        </Link>
      </div>
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
