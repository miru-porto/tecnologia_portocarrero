import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import Loader from "../../components/Loader";
import { getFirestore } from "../../firebase";
import "./styles.css";

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
          setProduct(false);
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

  if (!product) {
    return (
      <>
        <div className="detailContainer">
          <img src="https://ar.todomoda.com/media/wysiwyg/TODOMODA/banners-estaticas/success.jpg" />
          <h2>El producto no existe</h2>
        </div>
        <div className="detailContainer_mensaje">
          <div>
            <p className="detailContainer_parrafo">
              Para buscar lo que querés, podés navegar a nuestro menú principal.
            </p>
          </div>
          <div className="detailContainer_btn">
            <button><Link to={'/'}><p className="detailContainer_btnSon">Ir al inicio</p></Link></button>
          </div>
        </div>
      </>
    );
  }

  return <>{loading ? <Loader /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
