import "./styles.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd, remove }) => {
  const [count, setCount] = useState(initial);

  const resta = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div className="carHorizonal">
        <p className="carText">CANTIDAD:</p>
        <p className="carCount">{count}</p>
        <div className="carContainer">
          <button className="carBtns" onClick={suma} disabled={count >= stock}>
            +
          </button>
          <button
            className="carBtns"
            onClick={resta}
            disabled={count <= initial}
          >
            -
          </button>
        </div>
      </div>
      <button className="carBtnAgregar" onClick={() => onAdd(count)}>
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
