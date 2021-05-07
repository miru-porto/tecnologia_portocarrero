import "./styles.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
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
    <div className="">
      <p className="carNombre">Producto X</p>
      <div className="carHorizonal">
        <p>{count}</p>
        <button className="carBtns" onClick={resta} disabled={count <= initial}>
          -
        </button>
        <button className="carBtns" onClick={suma} disabled={count >= stock}>
          +
        </button>
      </div>
      <button className="carBtnAgregar" onClick={()=>onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
/*
<button onClick={finish}>Terminar</button>
*/
export default ItemCount;
