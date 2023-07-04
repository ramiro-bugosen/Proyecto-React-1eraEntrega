import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer className="bienvenidos" greeting={'Bienvenidos a FastBurger. Para iniciar tu pedido clickea en continuar'}/>
      <ItemListContainer greeting={<button className= "botonBienvenidos">Continuar</button>}/>
    </div>
  );
}

export default App;
