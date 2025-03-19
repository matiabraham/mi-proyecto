import { useState, useEffect } from "react";

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
  return <div>{JSON.stringify(resultado)}</div>;
};

export default ItemListContainer;
