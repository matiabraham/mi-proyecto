import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="barra-nav">
        <NavLink to="/" className="barra-nav__link">Home</NavLink>
        <NavLink to="/categorias/men's clothing" className="barra-nav__link">Ropa Hombre</NavLink>
        <NavLink to="/categorias/women's clothing" className="barra-nav__link">Ropa Mujer</NavLink>
        <NavLink to="/categorias/jewelery" className="barra-nav__link">Joyería</NavLink>
        <NavLink to="/categorias/electronics" className="barra-nav__link">Electrónica</NavLink>
        <CartWidget />
      </nav>
    </>
  )
}

export default NavBar;