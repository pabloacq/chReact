import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import './style.css';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <main>
          <ItemListContainer greeting="Ofertas"/>
        </main>
    </div>
  );
}

export default App;
