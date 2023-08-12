import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import useFirestore from '../../Hooks/useFirestore';


const Categories = () => {
    const { data, loading, error } = useFirestore('categories');
    if (loading) return <h1 style={{position:'absolute' ,top:'50%', left: '45%'}}>Cargando...</h1>;

    return(
        <>
           <div className='container-categories'>
                <h2 style={{display: 'flex', justifyContent:'center', paddingBottom:'70px'}}>Categorias</h2>
            </div>
             
                {
                    data.map( category => {
                        return(
                    <>
                        <div style={{display:'inline-block', justifyContent:'center', alignItems:'center', paddingLeft:'150px'}}>
                            <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', borderRadius: '25vh', boxShadow: '8px 4px 8px 8px #00000033, 8px 6px 20px 8px #00000030'}}>
                                <Link to={`/categories/${category.id}`}> 
                                    <Card>
                                    <img src={category.img} style={{width:'420px', height:'220px'}}/>
                                    <h3 style={{paddingLeft:'150px'}}>{category.category}</h3> </Card>
                               </Link>    
                            </div>
                        </div> 
                    </>    
                        ) 
                    })
                } 
                
        </>
    )
}
export default Categories