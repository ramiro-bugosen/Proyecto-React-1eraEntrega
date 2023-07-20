import { useState } from "react"

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial) 


    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="contador">
            <div className="contadorHijo">
                <button className="botonContador" onClick={increment}>+</button>
                <h4 className="numeroContador">{quantity}</h4>
                <button className="botonContador" onClick={decrement}>-</button>
            </div>
            <div>
                <button className="botonContador" onClick={()=> onAdd(quantity)} disabled={!stock}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
