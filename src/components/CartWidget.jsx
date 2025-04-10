import { NavLink } from "react-router-dom";
import carrito from "../Assets/carrito.svg";
import { useContext } from "react";
import { cartContext } from "./cartContext";

const CartWidget = () => {
  const valor = useContext(cartContext);
  console.log(valor);

  return (
    <NavLink to="/carrito" className="barra-nav__link">
      <img src={carrito} alt="carrito" className="carrito__icono" />
    </NavLink>
  );
};
export default CartWidget;
