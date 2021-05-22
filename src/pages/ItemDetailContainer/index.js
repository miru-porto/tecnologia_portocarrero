import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../components/ItemDetail";
import Loader from "../../components/Loader";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const itemColletion = db.collection("items");
    const itemById = itemColletion.doc(itemId);

    itemById
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El item no existe");
          return;
        }
        console.log("El item si existe");
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("error buscando el item", error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);


  return <>{loading ? <Loader /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
