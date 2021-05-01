import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
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
          image: "../images/celuApple.png",
          categoryId: "Celulares",
        },

        {
          name: "Celular Plateado",
          madeBy: "Indrustrias Nokia",
          price: "$49.000",
          description: "Durisimo!",
          image: "../images/celuNokia.png",
          categoryId: "Celulares",
        },

        {
          name: "Celular S9",
          madeBy: "Samsung",
          price: "$120.000",
          description: "Bueno",
          image: "../images/s9.webp",
          categoryId: "Celulares",
        },
        {
          name: "Celular G1",
          price: "$90.000",
          madeBy: "Motorola",
          description: "ultimo modelo",
          image: "../images/moto.jpg",
          categoryId: "Celulares",
        },
        {
          name: "Celular Note 10",
          price: "$100.000",
          madeBy: "Xiaomi",
          description: "Excelente!!",
          image: "../images/xiaomi.jpg",
          categoryId: "Celulares",
        },
        {
          name: "Notebook HP",
          price: "$90.646",
          madeBy: "Industrias Hp",
          description: "Perfecta para el HomeOffice",
          image: "../images/compuHp.png",
          categoryId: "Computadoras",
        },
        {
          name: "Notebook Lenovo",
          price: "$99.000",
          madeBy: "Industrias Lenovo",
          description: "Apta para el estudio y el hogar",
          image: "../images/compuLenovo.png",
          categoryId: "Computadoras",
        },
        {
          name: "Notebook Vaio",
          price: "$89.000",
          madeBy: "Industrias Vaio",
          description: "Lista para su uso",
          image: "../images/compuVaio.png",
          categoryId: "Computadoras",
        },
        {
          name: "Notebook Asus",
          price: "$189.000",
          madeBy: "Industrias Asus",
          description: "Muy óptima",
          image: "../images/compuAsus.png",
          categoryId: "Computadoras",
        },
        {
          name: "Impresora HP",
          price: "$10.439",
          madeBy: "Industrias Asus",
          description: "Preciosa",
          image: "../images/impreHp.png",
          categoryId: "Impresoras",
        },
        {
          name: "Impresora Canon",
          price: "$32.999",
          madeBy: "Industrias Canon",
          description: "Multifución",
          image: "../images/impreCanon.png",
          categoryId: "Impresoras",
        },
        {
          name: "Impresora Epson",
          price: "$13.399",
          madeBy: "Industrias Epson",
          description: "De muy buena calidad",
          image: "../images/impreEpson.png",
          categoryId: "Impresoras",
        },
        {
          name: "Impresora Brother",
          price: "$46.985",
          madeBy: "Industrias Brother",
          description: "Hace las mejores impresiones",
          image: "../images/impreBrother.png",
          categoryId: "Impresoras",
        },
      ]);
    }, 2000);
  });

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filteredProducts, setFilteredProducts] = useState(products);

  //== -> compara valores  1 == "1" (true)
  //=== -> tipo de dato y valor 1 === "1" (false)
  useEffect(async () => {
    setLoading(true);
    const res = await getItems();
    if (categoryId) {
      const result = res.filter((res) => res.categoryId == categoryId);
      console.log("si hay id");
      console.log(result);
      setProducts(result);

      //filtro los productos x categoria. Arreglar el uso del filter q no c por q me anda mal
    } else {
      setProducts(res);
      console.log(categoryId);
    }
    setLoading(false);
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
