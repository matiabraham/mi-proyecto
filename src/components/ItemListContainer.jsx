import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  //Estados

  const [resultado, setResultado] = useState([]);
  const params = useParams();
  //console.log("ItemListContainer params:", params.id)

  //Efectos

  useEffect(() => {
    const url =
      params.id === undefined
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(
            params.id
          )}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setResultado(res))
      .catch((error) => {
        console.error("Hubo un error al obtener los productos:", error);
      });
  }, [params.id]);

  //Acciones

  //Vista
  return (
    <div className="fluid-grid">
      {resultado.map((products) => {
        return <Item key={products.id} products={products} />;
      })}
    </div>
  );
};

export default ItemListContainer;
