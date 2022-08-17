import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Ofertas" />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
        </Routes>
        <main className="container ct-main">
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
