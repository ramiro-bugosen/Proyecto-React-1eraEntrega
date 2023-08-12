import { Typography, Button } from "@mui/material"

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 style={{position: "absolute", top:"50%", left: "20%",fontFamily: "Brush Script MT, cursive", fontSize:"40px", color:"#1935b3"}}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer