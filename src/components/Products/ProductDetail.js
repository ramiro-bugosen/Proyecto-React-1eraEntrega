import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ProductDetail = ({ product }) => {
  const { producto, precio, img, stock } = product;

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
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductDetail;
