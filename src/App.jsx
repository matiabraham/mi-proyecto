import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ProductDetailContainer from "./components/productDetailContainer";
import CartProvider from "./components/cartContext";

const App = () => {
  
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:id" element={<ItemListContainer />} />
        <Route path="producto/:id" element={<ProductDetailContainer />} />
        <Route path="carrito" element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
