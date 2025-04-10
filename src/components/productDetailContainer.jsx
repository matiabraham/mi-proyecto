import { useContext } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  
  const params = useParams();

  const handleClick = () => {
    valorDelContexto.setCantidadProductos(valorDelContexto.cantProd + 1)
  }

  return (
    <div className="flex-grow">
      <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetailContainer;
