import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../components/ItemDetail";
import Loader from "react-loader-spinner";

const getItems = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          name: "Celular iphone 11 pro max",
          madeBy: "Indrustrias Apple",
          price: "$300.000",
          description: "Cómodo",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77905202_1.Jpg",
          categoryId: "Celulares",
          id: "1",
          stock: "4",
        },

        {
          name: "Celular Plateado",
          madeBy: "Indrustrias Nokia",
          price: "$49.000",
          description: "Durisimo!",
          image: "../images/celuNokia.png",
          categoryId: "Celulares",
          id: "2",
          stock: "5",
        },

        {
          name: "Celular S9",
          madeBy: "Samsung",
          price: "$120.000",
          description: "Bueno",
          image: "../images/s9.webp",
          categoryId: "Celulares",
          id: "3",
          stock: "3",
        },
        {
          name: "Celular G1",
          price: "$90.000",
          madeBy: "Motorola",
          description: "ultimo modelo",
          image: "../images/moto.jpg",
          categoryId: "Celulares",
          id: "4",
          stock: "6",
        },
        {
          name: "Celular Note 10",
          price: "$100.000",
          madeBy: "Xiaomi",
          description: "Excelente!!",
          image: "../images/xiaomi.jpg",
          categoryId: "Celulares",
          id: "5",
          stock: "4",
        },
        {
          name: "Notebook HP",
          price: "$90.646",
          madeBy: "Industrias Hp",
          description: "Perfecta para el HomeOffice",
          image: "../images/compuHp.png",
          categoryId: "Computadoras",
          id: "6",
          stock: "2",
        },
        {
          name: "Notebook Lenovo",
          price: "$99.000",
          madeBy: "Industrias Lenovo",
          description: "Apta para el estudio y el hogar",
          image: "../images/compuLenovo.png",
          categoryId: "Computadoras",
          id: "7",
          stock: "6",
        },
        {
          name: "Notebook Vaio",
          price: "$89.000",
          madeBy: "Industrias Vaio",
          description: "Lista para su uso",
          image: "../images/compuVaio.png",
          categoryId: "Computadoras",
          id: "8",
          stock: "5",
        },
        {
          name: "Notebook Asus",
          price: "$189.000",
          madeBy: "Industrias Asus",
          description: "Muy óptima",
          image: "../images/compuAsus.png",
          categoryId: "Computadoras",
          id: "9",
          stock: "4",
        },
        {
          name: "Impresora HP",
          price: "$10.439",
          madeBy: "Industrias Asus",
          description: "Preciosa",
          image: "../images/impreHp.png",
          categoryId: "Impresoras",
          id: "10",
          stock: "6",
        },
        {
          name: "Impresora Canon",
          price: "$32.999",
          madeBy: "Industrias Canon",
          description: "Multifución",
          image: "../images/impreCanon.png",
          categoryId: "Impresoras",
          id: "11",
          stock: "5",
        },
        {
          name: "Impresora Epson",
          price: "$13.399",
          madeBy: "Industrias Epson",
          description: "De muy buena calidad",
          image: "../images/impreEpson.png",
          categoryId: "Impresoras",
          id: "12",
          stock: "8",
        },
        {
          name: "Impresora Brother",
          price: "$46.985",
          madeBy: "Industrias Brother",
          description: "Hace las mejores impresiones",
          image: "../images/impreBrother.png",
          categoryId: "Impresoras",
          id: "13",
          stock: "7",
        },
      ]);
    }, 2000);
  });

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(async () => {
    const res = await getItems();
    const p = res.find((pr) => pr.id === itemId);
    console.log("¡Producto con más dellate, ven a mí! ✨");
    console.log(p);
    setProduct(p);
    setLoading(false);
  }, [itemId]);

  return (
    <>
      {loading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;
/* 
<ItemDetail product={product} />
*/
