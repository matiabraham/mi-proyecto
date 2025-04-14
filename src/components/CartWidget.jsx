import { NavLink } from "react-router-dom";
import carrito from "../Assets/carrito.svg";
import { useContext } from "react";
import { cartContext } from "./CartContext";

const CartWidget = () => {
  const valorContexto = useContext(cartContext);

  return (
    <NavLink to="/carrito" className="barra-nav__link">
      <img src={carrito} alt="carrito" className="carrito__icono" />
      {valorContexto.cantProd}
    </NavLink>
  );
};
export default CartWidget;
