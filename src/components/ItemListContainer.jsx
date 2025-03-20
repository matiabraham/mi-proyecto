import { useState, useEffect } from "react";
import Item from "./item";

const ItemListContainer = () => {
  //Estados

  const [resultado, setResultado] = useState([]);

  //Efectos

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setResultado(res))
      .catch((error) => {
        console.error("Hubo un error al obtener los productos:", error);
      });
  }, []);

  //Acciones

  //Vista
  return (
    <div className="fluid-grid">
      {resultado.map((products) => {
        return (
          <Item key={products.id} products={products}/> 
        );
      })}
    </div>
  );
};

export default ItemListContainer;
