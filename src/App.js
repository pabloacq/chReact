import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './style.css';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <main className="container ct-main">
          <ItemListContainer greeting="Ofertas"/>
        </main>
    </div>
  );
}

export default App;
