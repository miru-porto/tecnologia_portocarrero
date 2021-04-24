import { useState } from "react";
import "./styles.css";

const Item = ({ product }) => {
  return (
    <div className="cards">
      <h2>{product.name}</h2>
      <p>{product.madeBy}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img className="cards_images" src={product.image} />
    </div>
  );
};

/* function Item() {
  const [tragoABuscar, setTragoABuscar] = useState("");
  const [tragos, setTragos] = useState("");

  const handleClick = async () => {
    const solicitarTrago = async (trago) => {
      try {
        console.log("Me fui a buscar el pokemon a la base de datos");
        console.log("tiempo de 2 segundos");

        const respuestaDelServidor = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${trago}`
        );

        const bodyRespuestaDelServidor = respuestaDelServidor.json();

        return bodyRespuestaDelServidor;
      } catch (error) {
        console.error("error:", error);
      }
    };

    const misTragos = await solicitarTrago(tragoABuscar);
    setTragos(misTragos.drinks);

    console.log(misTragos);
  };

  return (
    <div>
      <h1>Buscador de Tragos</h1>
      <input
        type="text"
        placeholder="Ingresa tu trago"
        value={tragoABuscar}
        onChange={(e) => setTragoABuscar(e.target.value)}
      />
      <button onClick={handleClick}>Buscar Tragos!</button>
      {tragos.length > 0 ? (
        tragos.map((trago) => <ItemList bebida={trago} />)
      ) : (
        <p>Todavía no tengo tragos</p>
      )}
    </div>
  );
}
*/

export default Item;
