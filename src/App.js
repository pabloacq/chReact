import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './style.css';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <main className="container ct-main">
          {/* <ItemListContainer greeting="Ofertas"/> */}
          <ItemDetailContainer id={2} />
        </main>
    </div>
  );
}

export default App;
