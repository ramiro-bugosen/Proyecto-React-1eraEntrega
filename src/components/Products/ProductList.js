import ProductDetail from "./ProductDetail";
import useFirestore from "../../Hooks/useFirestore";


const ProductList = () => {
  const { data, loading } = useFirestore('products');

  if (loading) return <h1 style={{position:'absolute' ,top:'50%', left: '45%'}}>Cargando...</h1>;

  return (
  
   <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap', paddingTop: '100px', paddingLeft:'50px' }}>
    {data.map( (product) => {
      return (<ProductDetail key={product.id} product={product}>
      </ProductDetail>)

   })}
   </div>
  );
};

export default ProductList;
