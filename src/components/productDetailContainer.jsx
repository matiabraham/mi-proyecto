import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";
import { addDoc, collection, getDocs, getFirestore, query, where, getDoc } from "firebase/firestore";
import { app } from "../firebase/firebaseConfig";

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const params = useParams();
  const valorContexto = useContext(CartContext);

  useEffect(() => {

    const idNumerico = parseInt(params.id);
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
    const miFiltro = query(productosCollection,where("id","==",idNumerico))
    const miConsulta = getDocs(miFiltro)
    .then((respuesta) => {

        const productoEncontrado = respuesta.docs.map((doc) => {
          return doc.data()
        })

        setProducto(productoEncontrado[0]);

        
    })
    .catch(() => {
      console.log("salio todo malll")
    });
  }, []);

  const handleClick = () => {
    const productoCarrito = producto;
    const db = getFirestore(app);
    const carritoCollection = collection(db, "carrito");
    const query = addDoc(carritoCollection, productoCarrito);

    query
      .then(() => {
        valorContexto.handleAgregar(producto);
        toast.success("Agregado al carrito");
      })
      .catch(() => {
      });
  };

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="flex-grow">
      <h2>
        {producto.title} - ${producto.price}
      </h2>
      <img
        className="imagen-producto"
        src={producto.image}
        alt={producto.title}
      />
      <p className="descripcion-producto">{producto.description}</p>
      <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetailContainer;
