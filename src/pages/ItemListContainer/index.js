import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import Loader from "../../components/Loader";
import { getFirebase, getFirestore } from "../../firebase";

/*
const getItems = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          name: "Collar Cadena corta con dije para compartir",
          price: "549",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77877203_1.Jpg",
          categoryId: "collares",
          id: "1",
        },

        {
          name: "Collar místico",
          price: "399",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77712601_1.Jpg",
          categoryId: "collares",
          id: "2",
        },

        {
          name: "Cadena corta con dije para compartir",
          price: "499",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77879801_1.Jpg",
          categoryId: "collares",
          id: "3",
        },
        {
          name: "Choker set",
          price: "549",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77891201_2.Jpg",
          categoryId: "collares",
          id: "4",
        },
        {
          name: "Cadena corta para compartir",
          price: "499",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77879601_1.Jpg",
          categoryId: "collares",
          id: "5",
        },
        {
          name: "Aros argollas con corazon",
          price: "249",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77878901_1.Jpg",
          categoryId: "aros",
          id: "6",
        },
        {
          name: "Argollas gold",
          price: "149",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77356701_1.Jpg",
          categoryId: "aros",
          id: "7",
        },
        {
          name: "Aros pasantes de perla",
          price: "129",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77292201.Jpg",
          categoryId: "aros",
          id: "8",
        },
        {
          name: "Aros sets con cuff",
          price: "399",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77876801_1.Jpg",
          categoryId: "aros",
          id: "9",
        },
        {
          name: "Set de anillos ethnic",
          price: "499",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77699601.Jpg",
          categoryId: "anillos",
          id: "10",
        },
        {
          name: "Sets anillos con piedra",
          price: "399",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77902201_1.Jpg",
          categoryId: "anillos",
          id: "11",
        },
        {
          name: "Anillo chico con strass",
          price: "149",
          image:
            "https://ar.todomoda.com/media/catalog/product/cache/2/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77288403.Jpg",
          categoryId: "anillos",
          id: "12",
          stock: "8",
        },
        {
          name: "Anillo ethnic",
          price: "299",
          image: "https://ar.todomoda.com/media/catalog/product/cache/2/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/7/7/77715204.Jpg",
          categoryId: "anillos",
          id: "13",
          stock: "7",
        },
      ]);
    }, 2000);
  });
*/

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemColletion = db.collection("items");
    const filterQuery = categoryId
      ? itemColletion.where("categoryId", "==", categoryId)
      : itemColletion;

    filterQuery
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados");
        }
        console.log(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setProducts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log("error buscando items", error);
      })
      .finally(() => setLoading(false));

    /*
    if (categoryId) {
      const result = res.filter((res) => res.categoryId == categoryId);
      console.log(result);
      setProducts(result);

      //filtro los productos x categoria
    } else {
      setProducts(res);
      console.log(categoryId);
    }
    setLoading(false);    
    */
    // const res = await getItems();
  }, [categoryId]);

  return <>{loading ? <Loader /> : <ItemList products={products} />}</>;
};

export default ItemListContainer;
