import { useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "./CartContextTemp";

const Cart = () => {
  const valorContexto = useContext(CartContext);
  console.log(valorContexto);

  return (
    <div>
      <h2>Carrito</h2>
      <p>Cantidad de productos: {valorContexto.cantProd}</p>
      <p>total: $ {valorContexto.totalPrecio}</p>
      <ul>
        {valorContexto.carrito.map((item, indice) => {
          return (
            <li className="productos-carrito" key={indice.id}>
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
