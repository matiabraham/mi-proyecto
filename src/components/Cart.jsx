import { useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "./CartContext";

const Cart = () => {
  const valorContexto = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      <p>Cantidad de productos: {valorContexto.cantProd}</p>
      <p>total: $ {valorContexto.totalPrecio}</p>
      <ul>
        {valorContexto.carrito.map((item) => {
          return (
            <li className="productos-carrito" key={item.id}>
              <p>
                {item.title} - unidad : ${item.price}
              </p>{" "}
              <img className="image-carrito" src={item.image} alt="" />
            </li>
          );
        })}
      </ul>
      <Formulario />
    </div>
  );
};

export default Cart;
