import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const params = useParams();
  const valorContexto = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((error) => {
        console.error("Hubo un error al obtener el producto:", error);
      });
  }, []);

  const handleClick = () => {
    toast.success("Agregado al carrito");
    valorContexto.handleAgregar(producto);
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
