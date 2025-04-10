import { createContext, useState } from "react";

export const cartContext = createContext();
export const Provider = cartContext.Provider;

const CartProvider = (props) => {

  const [carrito,setCarrito] = useState ([]);
  const [cantProd, setcantProd] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);

  const handleAgregar = (producto) => {}

  const handleElimilar = (producto) => {}

  const handleVaciar = () => {
    setcantProd(0);
    setTotalPrecio(0);
    setCarrito([]);
  }

  const valorContexto = {
    carrito,
    cantProd,
    totalPrecio,
    handleAgregar,
    handleElimilar,
    handleVaciar,
  }

  return (
  <Provider value={valorContexto}>
    {props.children}
  </Provider>
  )
};

export default CartProvider;
