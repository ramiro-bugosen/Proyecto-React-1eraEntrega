import { useParams } from 'react-router-dom';
import UseMock from '../../Hooks/UseMock';
import categories from '../../mocks/categories.json'
import ProductDetail from '../Products/ProductDetail';

const CategoryProductList = () => {
  const {categoryId} = useParams();
  const {data, loading} = UseMock(categories)

  if (loading) return <h1 style={{position:'absolute' ,top:'50%', left: '45%'}}>Cargando...</h1>

  const category = data.filter((category) => category.id === parseInt(categoryId))
  if (!category) return( <h4>Categoria no encontrada</h4>)

    return(
      <>
        <div>
        {category.map((category) => {
                    console.log(category)
                    return category.products.map((product) => {
                        return <ProductDetail key={product.id} product={product} />
                    })
                })
                }
        </div>
      </>
    )
}

export default CategoryProductList


