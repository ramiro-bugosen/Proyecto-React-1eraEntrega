import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
import { Button } from "@mui/material";


const AddToCartButton = ({product}) => {
    const {addToCart} = useContext(CartContext)
    return (
        <Button
            className="button-add-to-cart"
            variant="contained"
            fullWidth
            style={{ alignSelf: "end", marginBottom:'15px' }}
            onClick={() => addToCart(product)}>
            Agregar al carrito
        </Button>
    );
};
export default AddToCartButton;