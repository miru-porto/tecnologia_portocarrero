import "./style.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Navbarc = () => {
  const { getSize } = useContext(CartContext);

  return (
    <Navbar className="header_color" expand="lg">
      <Navbar.Brand>
        <img src="../images/estrella.png" className="header_logo" />
        <NavLink to={"/"} className="header_title1">
          Bijouterie
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title="Categorias"
            id="basic-nav-dropdown"
            className="header_dropdown"
          >
            <NavDropdown.Item>
              <NavLink to={"/category/collares"} className="header_categories">
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
          <img src="../images/carro-de-la-compra.png" className="header_car" />
          <p className="header_select">({getSize()})</p>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarc;

/*<header className="header">
      <div className="header_navbar">
        <div className="header_1">
          <img src="../images/logo.png" className="header_logo" />
          <h1>
            <NavLink
              to={"/"}
              className="navlink"
              activeClassName="active-navlink"
            >
              Tecnologia
            </NavLink>
          </h1>
        </div>
        <nav>
          <ul className="header_nav">
            <li>
              <NavLink
                exact
                to={"/"}
                className="navlink"
                activeClassName="active-navlink"
              >
                Inicio
              </NavLink>
            </li>
            {categories.map((c) => {
              return (
                <li>
                  <NavLink
                    to={`/category/${c}`}
                    className="navlink"
                    activeClassName="active-navlink"
                  >
                    {c}
                  </NavLink>
                </li>
              );
            })}

            <li className="header_car">
              {" "}
              <CartWidget />{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  ); */
