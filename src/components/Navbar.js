import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h2>FastBurger</h2>
            <div> 
                <button>Inicio</button>
                <button>Productos</button>
                <button>Preguntas Frecuentes</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar