import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
const ProductDetail = ({ product }) => {
  const { producto, precio, img, stock } = product;
  console.log(typeof img);
  return (
    <>
      <Card
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3e6ead",
          margin: '5px',
        }}
      >
        <Card.Body>
          <Card.Img
            style={{ height: "200px", width: "350px" }}
            variant="top"
            src={img}
          />
          <Card.Title>{producto}</Card.Title>
          <Card.Text>${precio}</Card.Text>
          <Card.Text>Stock:{stock}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductDetail;
