import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../components/ItemDetail";
import Loader from "../../components/Loader";

const getItems = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          name: "Cadena corta con dije para compartir",
          madeBy: "Bijouterie",
          price: "549",
          description:
            "Cadena corta con dije para compartir de estrella, planeta y luna",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/1800x/040ec09b1e35df139433887a97daa66f/7/7/77877203_1.Jpg",
          categoryId: "collares",
          id: "1",
          stock: "4",
        },

        {
          name: "Collar místico",
          madeBy: "Bijouterie",
          price: "399",
          description:
            "Collar largo con dijes de ojo, mano y redondo con relieve",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77712601_1.Jpg",
          categoryId: "collares",
          id: "2",
          stock: "5",
        },

        {
          name: "Cadena corta con dije para compartir",
          madeBy: "Bijouterie",
          price: "499",
          description:
            "Cadena corta con dije para compartir bff de palta corazono",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77879801_1.Jpg",
          categoryId: "collares",
          id: "3",
          stock: "3",
        },
        {
          name: "Choker set",
          price: "549",
          description:
            "Choker set con cadenas delicadas con detalles esmaltados, chapitas de metal y dije de vibora",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77891201_1.Jpg",
          categoryId: "collares",
          id: "4",
          stock: "6",
        },
        {
          name: "Cadena corta para compartir",
          price: "499",
          description: "Cadena corta con dije para compartir bff de unicornios",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77879601_1.Jpg",
          categoryId: "collares",
          id: "5",
          stock: "4",
        },
        {
          name: "Aros argollas con corazon",
          price: "249",
          description: "Aros argolla con dije de corazon esmaltado",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77878901_1.Jpg",
          categoryId: "aros",
          id: "6",
          stock: "2",
        },
        {
          name: "Argollas gold",
          price: "149",
          description: "Aros argolla doble plana 3 cm",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77356701_1.Jpg",
          categoryId: "aros",
          id: "7",
          stock: "6",
        },
        {
          name: "Aros pasantes de perla",
          price: "129",
          description: "Aros pasantes perlas 10 mm",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77292201.Jpg",
          categoryId: "aros",
          id: "8",
          stock: "5",
        },
        {
          name: "Aros sets con cuff",
          price: "399",
          description:
            "Aros set por 8 piezas: 2 argollas, 2 pasantes, 1 colgante corto y 3 cuff",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77876801_1.Jpg",
          categoryId: "aros",
          id: "9",
          stock: "4",
        },
        {
          name: "Set de anillos ethnic",
          price: "499",
          description: "Set de 8 anillos labrados, 2 con piedras",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77699601.Jpg",
          categoryId: "anillos",
          id: "10",
          stock: "6",
        },
        {
          name: "Sets anillos con piedra",
          price: "399",
          description: "Sets Anillos por seis de piedra grandes",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77902201_1.Jpg",
          categoryId: "anillos",
          id: "11",
          stock: "5",
        },
        {
          name: "Anillo chico con strass",
          price: "149",
          description: "Anillo fino con 1 piedra de strass grande engarzado",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77288403.Jpg",
          categoryId: "anillos",
          id: "12",
          stock: "8",
        },
        {
          name: "Anillo ethnic",
          price: "299",
          description: "Anillo con piedra y relieve bajo",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/7/7/77715204.Jpg",
          categoryId: "anillos",
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
    console.log(p);
    setProduct(p);
    setLoading(false);
  }, [itemId]);

  return <>{loading ? <Loader /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;