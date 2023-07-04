import cart from './assets/cart.png';

const CartWidget = () => {
    return (
        <div className="carritoContainer">
            <img className="carrito" src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget