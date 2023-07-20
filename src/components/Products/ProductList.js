import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../../mocks/products.json";
import UseMock from "../../Hooks/UseMock";
import ProductDetail from "./ProductDetail";
import Container from 'react-bootstrap/Container';
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ProductList = () => {
  const { data, loading } = UseMock(products);
  if (loading) return <h1>Cargando</h1>;

  return (
    <>


    <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap', paddingTop: '100px' }}>
    {data.map((product) => {
      return (
        <ProductDetail key={product.id} product={product} />
      );
    })}
    </Container>
    </>
  ) 
};

export default ProductList;
