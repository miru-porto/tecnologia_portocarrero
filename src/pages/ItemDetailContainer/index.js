import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../components/ItemDetail";

//para ver esto tengo que poner la ruta: /item/item TERMINARRRR ESTEEE

const getItems = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          name: "Celular iphone 11 pro max",
          madeBy: "Indrustrias Apple",
          price: "$300.000",
          description: "Cómodo",
          image: "../images/celuApple.png",
          categoryId: "Celulares",
          id: "1",
        },

        {
          name: "Celular Plateado",
          madeBy: "Indrustrias Nokia",
          price: "$49.000",
          description: "Durisimo!",
          image: "../images/celuNokia.png",
          categoryId: "Celulares",
          id: "2",
        },

        {
          name: "Celular S9",
          madeBy: "Samsung",
          price: "$120.000",
          description: "Bueno",
          image: "../images/s9.webp",
          categoryId: "Celulares",
          id: "3",
        },
        {
          name: "Celular G1",
          price: "$90.000",
          madeBy: "Motorola",
          description: "ultimo modelo",
          image: "../images/moto.jpg",
          categoryId: "Celulares",
          id: "4",
        },
        {
          name: "Celular Note 10",
          price: "$100.000",
          madeBy: "Xiaomi",
          description: "Excelente!!",
          image: "../images/xiaomi.jpg",
          categoryId: "Celulares",
          id: "5",
        },
        {
          name: "Notebook HP",
          price: "$90.646",
          madeBy: "Industrias Hp",
          description: "Perfecta para el HomeOffice",
          image: "../images/compuHp.png",
          categoryId: "Computadoras",
          id: "6",
        },
        {
          name: "Notebook Lenovo",
          price: "$99.000",
          madeBy: "Industrias Lenovo",
          description: "Apta para el estudio y el hogar",
          image: "../images/compuLenovo.png",
          categoryId: "Computadoras",
          id: "7",
        },
        {
          name: "Notebook Vaio",
          price: "$89.000",
          madeBy: "Industrias Vaio",
          description: "Lista para su uso",
          image: "../images/compuVaio.png",
          categoryId: "Computadoras",
          id: "8",
        },
        {
          name: "Notebook Asus",
          price: "$189.000",
          madeBy: "Industrias Asus",
          description: "Muy óptima",
          image: "../images/compuAsus.png",
          categoryId: "Computadoras",
          id: "9",
        },
        {
          name: "Impresora HP",
          price: "$10.439",
          madeBy: "Industrias Asus",
          description: "Preciosa",
          image: "../images/impreHp.png",
          categoryId: "Impresoras",
          id: "10",
        },
        {
          name: "Impresora Canon",
          price: "$32.999",
          madeBy: "Industrias Canon",
          description: "Multifución",
          image: "../images/impreCanon.png",
          categoryId: "Impresoras",
          id: "11",
        },
        {
          name: "Impresora Epson",
          price: "$13.399",
          madeBy: "Industrias Epson",
          description: "De muy buena calidad",
          image: "../images/impreEpson.png",
          categoryId: "Impresoras",
          id: "12",
        },
        {
          name: "Impresora Brother",
          price: "$46.985",
          madeBy: "Industrias Brother",
          description: "Hace las mejores impresiones",
          image: "../images/impreBrother.png",
          categoryId: "Impresoras",
          id: "13",
        },
      ]);
    }, 2000);
  });

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(async () => {
    const res = await getItems();
    const p = res.find((pr) => pr.id === itemId);
    console.log("¡Producto con más dellate, ven a mí! ✨");
    console.log(p);
    setProduct(p);
  }, [itemId]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
