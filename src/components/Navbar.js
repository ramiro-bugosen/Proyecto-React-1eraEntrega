import CartWidget from "./CartWidget/CartWidget"
import {Container, Button, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h2>FastBurger</h2>
            <div className="navbar" style={{ paddingLeft: '500px'}}> 
            <NavLink to="/" className="navbar-link" activeClassName="active-navbar-link">
                    <button>
                        Inicio
                    </button>
                </NavLink>

                <NavLink to="/products" className="navbar-link" activeClassName="active-navbar-link">
                    <button>
                        Productos
                    </button>
                </NavLink>
                <NavLink to="/categories" className="navbar-link" activeClassName="active-navbar-link">
                    <button>
                        Categorias
                    </button>
                </NavLink>
                <NavLink to="/contact" className="navbar-link" activeClassName="active-navbar-link">
                    <button>
                        Contacto
                    </button>
                </NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar