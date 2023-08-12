import Card from "react-bootstrap/Card";
import ProductInfo from "./ProductInfo";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import AddToCartButton from "../AddToCartButton";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";

const ProductDetail = ({ product }) => {
  const { producto, precio, img, stock } = product;
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(product, selectedQuantity);
  };

  return (
    <>
      <Card 
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "25px",
          margin: '20px',
          boxShadow: '0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030',
          
        }}
      >
        <Card.Body style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
          <Card.Img
            style={{ height: "250px", width: "300px" }}
            variant="top"
            src={img}
          />
          <Card.Title style={{fontSize:'20px'}}>{producto}</Card.Title>
          <Card.Text style={{color:'#263A29'}}>${precio}</Card.Text>
          <Card.Text>Stock:{stock}</Card.Text>
          <ItemCount stock={stock} initial={selectedQuantity} onAdd={(quantity) => setSelectedQuantity(quantity)}/>
          <AddToCartButton product={product} />
        </Card.Body> 
        </Card>
        
      
     
    </>
  );
};

export default ProductDetail;
