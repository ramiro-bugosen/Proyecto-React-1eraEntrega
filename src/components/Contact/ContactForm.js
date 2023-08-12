import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";


const FormContainer = styled("div")({
  maxWidth: "700px",
  margin: "0 auto",
  padding: "50px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const StyledTextField = styled(TextField)({
  width: "100%",
});

const StyledButton = styled(Button)({
  alignSelf: "flex-end",
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
   <> 
    <h2 style={{display:'flex', justifyContent:'center', padding:'70px'}}>¡Podes contactarte con nosotros por cualquier problema que tengas!</h2>
    <FormContainer>
      <Typography variant="h6">Contáctanos</Typography>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <StyledTextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <StyledTextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <StyledButton type="submit" variant="contained" color="primary">
          Enviar
        </StyledButton>
      </Form>
    </FormContainer>
    </>
  );
};

export default ContactForm;