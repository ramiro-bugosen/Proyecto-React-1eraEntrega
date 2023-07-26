import CartWidget from "./CartWidget/CartWidget"
import {Container, Button, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
        <NavLink to="/" className="navbar-link" activeClassName="active-navbar-link">
            <h2>FastBurger</h2>
            <img src="https://i.pinimg.com/originals/30/3c/d5/303cd5c4e2169130a9ddd90bfab76982.png" style={{width: "40px", position: "absolute", top: "30px", left:"170px"}}></img>
        </NavLink>
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