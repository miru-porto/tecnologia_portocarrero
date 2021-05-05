import "./style.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Navbarc = ({ categories }) => {
  return (
    <Navbar className="header_color" expand="lg">
      <Navbar.Brand>
        <img src="../images/logo.png" className="header_logo" />
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
              <NavLink to={"/category/Celulares"} className="header_categories">
                Celulares
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to={"/category/Computadoras"}
                className="header_categories"
              >
                Computadoras
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to={"/category/Impresoras"}
                className="header_categories"
              >
                Impresoras
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <img src="../images/carro-de-la-compra.png" className="header_car" />
          <input placeholder="0" className="header_select" />
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
