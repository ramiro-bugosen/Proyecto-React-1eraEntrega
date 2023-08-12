import cartimg from './assets/cartimg.png';
import { CartContext } from '../Context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartView from '../Checkout/CartView';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  }
    return (
        <Link to={"/cart"}>
            <div className="carritoContainer">
            <img onClick={toggleCart} className="carrito" src={cartimg} alt="cart-widget"/>{cart.items.length}
            

        </div>
        </Link>
    )
}

export default CartWidget