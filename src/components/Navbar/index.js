import "./style.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CartWidget from "../CartWidget";
import { CartContext } from "../../context/cartContext";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const categories = ["anillos", "aros", "collares"];

const Navbarc = () => {
  const { getSize } = useContext(CartContext);

  return (
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
  );
};

export default Navbarc;

/*
<NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="header_dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  to={"/category/collares"}
                  className="header_categories"
                >
                  Collares
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={"/category/aros"} className="header_categories">
                  Aros
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={"/category/anillos"} className="header_categories">
                  Anillos
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
*/
