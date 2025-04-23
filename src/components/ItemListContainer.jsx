import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import { app } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [resultado, setResultado] = useState([]);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
    
    let miConsulta;

    if (params.id === undefined) {
      miConsulta = getDocs(productosCollection);
    } else {
      const miFiltro = query(productosCollection,where("category","==",params.id))
      miConsulta = getDocs(miFiltro)
    }

    miConsulta
      .then((respuesta) => {

        const productosConFormato = []

        respuesta.docs.forEach((doc) => {
          productosConFormato.push(doc.data())
        });

        setResultado(productosConFormato)
      })
      .catch(() => {
        console.log("salio todo maaaaaaaal");
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
