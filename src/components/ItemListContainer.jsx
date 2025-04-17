import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { getProductsUrl } from "../Assets/utils/api";
import {} from "firebase/firestore"
import { app } from "../firebase/firebaseConfig";
app


const ItemListContainer = () => {

  const [resultado, setResultado] = useState([]);
  const params = useParams();


  useEffect(() => {

    fetch(getProductsUrl(params.id))
      .then((res) => res.json())
      .then((data) => setResultado(data))
      .catch((error) => {
        console.error("Hubo un error al obtener los productos:", error);
      });
  }, [params.id]);


  return (
    <div className="fluid-grid">
      {resultado.map((products) => {
        return <Item key={products.id} products={products} />;
      })}
    </div>
  );
};

export default ItemListContainer;
