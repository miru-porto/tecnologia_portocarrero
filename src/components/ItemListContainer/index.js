import "./style.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";

const getItems = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          name: "iphone 99",
          madeBy: "Apple",
          price: "$200.000",
          description: "Muy caro",
          image: "/images/iphone99.jpg",
        },

        {
          name: "1100",
          madeBy: "Nokia",
          price: "$178.000",
          description: "Durisimo!",
          image: "./images/nokia.jpg",
        },

        {
          name: "S9",
          madeBy: "Samsung",
          price: "$120.000",
          description: "Bueno",
          image: "./images/s9.webp",
        },

        {
          name: "G1",
          price: "$90.000",
          madeBy: "Motorola",
          description: "ultimo modelo",
          image: "./images/moto.jpg",
        },

        {
          name: "Note 10",
          price: "$100.000",
          madeBy: "Xiaomi",
          description: "Excelente!!",
          image: "./images/xiaomi.jpg",
        },
      ]);
    }, 2000);
  });

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(async () => {
    const res = await getItems();
    console.log(res);
    setProducts(res);
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
