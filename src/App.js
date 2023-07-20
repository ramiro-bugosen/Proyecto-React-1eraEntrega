import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import ProductList from "./components/Products/ProductList";
import CategoriesList from "./components/Categories/CategoriesList"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Router>
  
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a FastBurger" />}/>
      <Route exact path="/products" element={<ProductList />} />
       <Route exact path="/categories" element={<CategoriesList />} />
      {/*<Route exact path="/categories/:categoryId" element={<CategoryProductList />} />
 */}
      </Routes>

    </Router>
  );
}

export default App;
