import React, { useState } from "react";
import { Modal, TextField, Button } from "@mui/material";

const CheckoutModal = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, phone, email });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content">
        <h2>Completa tus datos</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Confirmar compra
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CheckoutModal;