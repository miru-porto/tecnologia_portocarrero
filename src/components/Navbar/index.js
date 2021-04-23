import './style.css';
import CartWidget from '../CartWidget';

const Navbar = () => {
    return (
    <header className="header">
        <div className="granNavbar">

            <h1>Tecnologia</h1>
            <nav>
                <ul className="navbar"> 
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                        <li className="navbarImg"> <CartWidget/> </li>
                </ul> 
            </nav>
        </div>
        
    </header>

 
    );
}

export default Navbar;