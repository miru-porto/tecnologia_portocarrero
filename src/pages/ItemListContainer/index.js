import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../../components/ItemList";

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
          categoryId: 'celulares'
        },

        {
          name: "1100",
          madeBy: "Nokia",
          price: "$178.000",
          description: "Durisimo!",
          image: "./images/nokia.jpg",
          categoryId: 'celulares'
        },

        {
          name: "S9",
          madeBy: "Samsung",
          price: "$120.000",
          description: "Bueno",
          image: "./images/s9.webp",
          categoryId: 'celulares'
        },

        {
          name: "G1",
          price: "$90.000",
          madeBy: "Motorola",
          description: "ultimo modelo",
          image: "./images/moto.jpg",
          categoryId: 'celulares'
        },

        {
          name: "Note 10",
          price: "$100.000",
          madeBy: "Xiaomi",
          description: "Excelente!!",
          image: "./images/xiaomi.jpg",
          categoryId: 'celulares'
        },
      ]);
    }, 2000);
  });

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(async () => {
    const res = await getItems();
    if(categoryId){
      const result = res.filter(res => res = 'celulares');
      console.log(result);
      //filtro los productos x categoria. Arreglar el uso del filter q no c por q me anda mal

    } else {
      setProducts(res);
      console.log(categoryId);
    }

  }, [categoryId]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
