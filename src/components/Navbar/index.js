import "./style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartWidget from "../CartWidget";
import { CartContext } from "../../context/cartContext";
import { Dropdown } from "react-bootstrap";

const categories = ["anillos", "aros", "collares"];

const Navbarc = () => {
  const { getSize } = useContext(CartContext);

  return (
    <>
      <div className="header">
        <div className="header_1">
          <Link to={"/tecnologia_portocarrero"} className="header_title1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-bijouterie.appspot.com/o/estrella.png?alt=media&token=5777fd32-95a8-40b9-9278-e83c69e2214a"
              className="header_logo"
            />
            <img src="https://ar.todomoda.com/media/wysiwyg/logo_negro_new3.jpg" />
          </Link>

          <CartWidget />
          <p className="header_select">({getSize()})</p>
        </div>
        <div className="header_dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Categorias
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categories.map((category) => {
                return (
                  <>
                    <div key={category.id}>
                      <Dropdown.Item>
                        <Link
                          to={`/category/${category}`}
                          className="header_categories"
                        >
                          {category}
                        </Link>
                      </Dropdown.Item>
                    </div>
                  </>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbarc;
