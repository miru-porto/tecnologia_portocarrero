import "./style.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = ({categories}) => {
  return (
    <header className="header">
      <div className="granNavbar">
        <h1>Tecnologia</h1>
        <nav>
          <ul className="navbar">
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
            {categories.map(c => {
              return <li>
                <NavLink to={`/category/${c}`}>{c}</NavLink>
              </li>
            })}
            <li className="navbarImg">
              {" "}
              <CartWidget />{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
