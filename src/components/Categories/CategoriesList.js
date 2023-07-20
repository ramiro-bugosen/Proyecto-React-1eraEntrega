import Container from 'react-bootstrap/Container';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Button } from 'react-bootstrap';

const CategoriesList = () => {


  return (
    <>
    <Container style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap' }}>

    <Button>BEBIDAS</Button>
    <Button>HAMBURGUESAS</Button>
    <Button>GUARNICIONES</Button>

    </Container>
    </>
  ) 
};

export default CategoriesList;
