import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import Loader from "../../components/Loader";
import { getFirestore } from "../../firebase";

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
          //tengo que decir que no existe categoria
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

  return (
    <>
      <div className="category-image">
        <p>{(categoryId && `_${categoryId}`) || "Bijou"}</p>
      </div>
      {loading ? <Loader /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;


/* || ([se llama 'or'] => si el primer miembro es true, se ejecuta el primero miembro y
se descarta el segundo. Pero si el primero es falso
y el otro tmb es falso. ninguno se ejecuta)
EJEMPLO: {true || <p>adios</p>} => se ejecuta el primero porque es true y el segundo se descarta
*/