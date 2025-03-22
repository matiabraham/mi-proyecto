import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<ItemListContainer />} />
        <Route path="/categorias/:id" element={<ItemListContainer />} />
        <Route path="carrito" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
