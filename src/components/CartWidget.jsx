import carrito from "../Assets/carrito.svg"

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={carrito} alt="carrito" className="carrito__icono" />
      1
    </div>
  )
}
export default CartWidget