import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import CheckoutModal from "./CheckoutModal";

const CartView = () => {
  const { cart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const handleCheckout = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleFormSubmit = () => {
    window.location.reload();
  };

  useEffect(() => {
    const updatedTotalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
    const updatedTotalPrice = cart.items.reduce((total, item) => total + item.precio * item.quantity, 0);
    setTotalPrice(updatedTotalPrice);
    setTotalQuantity(updatedTotalQuantity);
  }, [cart.items]);

  return (
    <div style={{position:'relative', left:'5%', top:'50px'}}>
      {cart.items.map((item, index) => (
        <div style={{display:'flex'}} key={index}>
          <Typography style={{fontSize:"19px", padding:'3px'}}>{item.producto} - Cantidad: {item.quantity}</Typography>
          
          <Typography style={{fontSize:"17px", marginLeft:'50px', position:'absolute', left:'300px'}} >Precio: ${item.precio}</Typography>
        </div>
      ))}
      <Typography style={{fontSize:"20px",paddingTop:'20px'}}>Total de productos: {totalQuantity}</Typography>
      <Typography style={{fontSize:"20px",padding:'20px'}}>Total: ${totalPrice}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Finalizar compra
      </Button>
      <CheckoutModal open={showModal}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}/>
    </div>
  );
};

export default CartView;

