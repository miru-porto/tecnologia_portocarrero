import "./style.css";
import { NavLink } from "react-router-dom";
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
          <NavLink to={"/"} className="header_title1">
            <img src="../images/estrella.png" className="header_logo" />
            <img src="https://ar.todomoda.com/media/wysiwyg/logo_negro_new3.jpg" />
          </NavLink>

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
                    <Dropdown.Item>
                      <NavLink
                        to={`/category/${category}`}
                        className="header_categories"
                      >
                        {category}
                      </NavLink>
                    </Dropdown.Item>
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
