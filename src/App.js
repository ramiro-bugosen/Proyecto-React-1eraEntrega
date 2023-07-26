import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import ProductList from "./components/Products/ProductList";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Categories from './components/Categories/Categories';
import ContactForm from './components/Contact/ContactForm';
import CategoryProductList from './components/Categories/CategoryProductList';

function App() {
  return (
    <Router>
  
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<ItemListContainer  greeting="Bienvenido a FastBurger, que disfrutes de nuestra comida !" />}/>
      <Route exact path="/products" element={<ProductList />} />
      <Route exact path="/categories" element={<Categories/>} />
      <Route exact path="/categories/:categoryId" element={<CategoryProductList/>} />
      <Route exact path="/contact" element={<ContactForm/>}/>
      </Routes>

    </Router>
  );
}

export default App;
