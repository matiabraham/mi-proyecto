import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="barra-nav">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Ropa">Ropa</NavLink>
        <NavLink to="/Joyeria">Joyeria</NavLink>
        <NavLink to="/Tecnologia">Tecnologia</NavLink>
        <NavLink to="/Carrito">Carrito</NavLink>
      </nav>
      <CartWidget />
    </>
  )
}

export default NavBar;