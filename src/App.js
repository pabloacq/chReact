import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css';
import { CartProvider } from './store/CartContext'
import { Index, Product, ProductList, Cart, Success, Ofertas } from './pages/Pages'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <main className="ct-main d-flex py-4">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products/detail/:id" element={<Product />} />
              <Route path="/products/:id" element={<ProductList />} />
              <Route path="/products/" element={<ProductList />} />
              <Route path="/ofertas/" element={<Ofertas />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sucess/:id" element={<Success />} />
            </Routes>
          </main>
          <Footer></Footer>
        </CartProvider>
      </BrowserRouter>

    </div >
  );
}

export default App;
