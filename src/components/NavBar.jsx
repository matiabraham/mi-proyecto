import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="barra-nav">
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
      </nav>
      <CartWidget />
    </>
  )
}

export default NavBar;