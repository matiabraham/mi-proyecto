import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer bienvenida= "Bienvenido a la tienda!" />
      <Main />
      <Footer />
    </>
  );
}

export default App
