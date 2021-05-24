import "./style.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartWidget from "../CartWidget";
import { CartContext } from "../../context/cartContext";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";

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
        <div>
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

/*
 <Navbar className="header_color" expand="lg">
      <Navbar.Brand>
        <NavLink to={"/"} className="header_title1">
          <img src="../images/estrella.png" className="header_logo" />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="header_carrito">
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="header_dropdown"
            >
              {categories.map((category) => {
                return (
                  <>
                    <NavDropdown.Item>
                      <NavLink
                        to={`/category/${category}`}
                        className="header_categories"
                      >
                        {category}
                      </NavLink>
                    </NavDropdown.Item>
                  </>
                );
              })}
            </NavDropdown>

            <div className="header_cartwidget">
              <CartWidget />
              <p className="header_select">({getSize()})</p>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
*/
