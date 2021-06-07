import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import Error404 from "../Error404";
import Loader from "../../components/Loader";
import { getFirestore } from "../../firebase";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
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
          setNotFound(true);
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
  }, [categoryId]);

  if (notFound) {
    return <Error404 />;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="category-image">
            <p>{(categoryId && `_${categoryId}`) || "Bijou"}</p>
          </div>
          <ItemList products={products} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
