import { Link, NavLink } from "react-router-dom";
import carrito from "../Assets/carrito.svg"

const NavBar = () => {
  return (
    <>
      <nav className="barra-nav">
        <NavLink to="/home" className="barra-nav__link">Home</NavLink>
        <NavLink to="/categorias/men's clothing" className="barra-nav__link">Ropa Hombre</NavLink>
        <NavLink to="/categorias/women's clothing" className="barra-nav__link">Ropa Mujer</NavLink>
        <NavLink to="/categorias/jewelery" className="barra-nav__link">Joyería</NavLink>
        <NavLink to="/categorias/electronics" className="barra-nav__link">Electrónica</NavLink>
        <NavLink to="/carrito" className="barra-nav__link">
          <img src={carrito} alt="carrito" className="carrito__icono" />
        </NavLink>
      </nav>
    </>
  )
}

export default NavBar;