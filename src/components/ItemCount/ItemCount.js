import { Button } from "@mui/material"
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
            <div className="contadorHijo" style={{display:'flex', fontSize: '20px'}}>
                <Button style={{fontSize:'20px'}} className="botonContador" onClick={increment}>+</Button>
                <h4 className="numeroContador">{quantity}</h4>
                <Button style={{fontSize:'20px'}} className="botonContador" onClick={decrement}>-</Button>
            </div>
            <div>
                <Button className="botonContador" onClick={()=> onAdd(quantity)} disabled={!stock}></Button>
            </div>
        </div>
    )
}

export default ItemCount
