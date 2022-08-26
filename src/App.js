import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css';
import { CartProvider } from './store/CartContext'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Ofertas" />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <main className="container ct-main">
          </main>
        </CartProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
