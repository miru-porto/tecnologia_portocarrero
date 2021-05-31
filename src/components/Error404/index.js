import { Link } from "react-router-dom";
import "./styles.css";

const Error404 = () => {
  return (
    <>
      <div className="detailContainer">
        <img src="https://ar.todomoda.com/media/wysiwyg/TODOMODA/banners-estaticas/success.jpg" />
        <h2>Pagina no encontrada</h2>
      </div>
      <div className="detailContainer_mensaje">
        <div>
          <p className="detailContainer_parrafo">
            Para buscar lo que querés, podés navegar a nuestro menú principal.
          </p>
        </div>
        <div className="detailContainer_btn">
          <button>
            <Link to={"/"}>
              <p className="detailContainer_btnSon">Ir al inicio</p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Error404;
