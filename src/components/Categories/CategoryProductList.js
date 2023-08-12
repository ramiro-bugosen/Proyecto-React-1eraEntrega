import { useParams } from 'react-router-dom';
import ProductDetail from '../Products/ProductDetail';
import useFirestore from '../../Hooks/useFirestore';
import { Grid } from '@mui/material';

const CategoryProductList = () => {
  const {categoryId} = useParams();
  const { data, loading, error } = useFirestore('categories');

  if (loading) return (<h1 style={{position:'absolute' ,top:'50%', left: '45%'}}>Cargando...</h1>)

  const category = data.filter(category => category.id === parseInt(categoryId))

  if (!category) return( <h4>Categoria no encontrada</h4>)

  return (<>
    <div className="container">
        <Grid container spacing={3} style={{paddingTop:'50px'}}>
            {category.map((category) => {
                return category.products.map((product) => {
                    return <ProductDetail key={product.id} product={product} >
                    </ProductDetail>
                })
            })}
        </Grid> 
    </div>
</>
)
};

export default CategoryProductList


