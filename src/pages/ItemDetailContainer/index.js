import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";
//para ver esto tengo que poner la ruta: /item/item TERMINARRRR ESTEEE

const getItem = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      name: "Celular S9",
      madeBy: "Samsung",
      price: "$120.000",
      description:
        "¿Necesitas tomar varias fotos en cuestión de segundos? El S9 se adapta de forma inteligente y aumenta la velocidad de procesamiento para que puedas capturar toda la acción",
      image: "./images/s9.webp",
    });
  }, 2000);
});

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    const res = await getItem;
    console.log(res);
    setProduct(res);
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
