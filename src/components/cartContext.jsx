import { createContext, useState } from "react";

export const cartContext = createContext();
export const Provider = cartContext.Provider;

const CartProvider = (props) => {

  const [carrito,setCarrito] = useState ([]);
  const [cantProd, setCantProd] = useState(0);
  const [totalPrecio, setTotalPrecio] = useState(0);

  const handleAgregar = (producto) => {
    
    const copia = [...carrito]

    copia.push(producto)

    setCarrito(copia)
    setCantProd(cantProd + 1)
    setTotalPrecio(totalPrecio + producto.price)
    console.log(copia)
  }
  

  const handleElimilar = (producto) => {}

  const handleVaciar = () => {
    setCantProd(0);
    setTotalPrecio(0);
    setCarrito([]);
  }

  const valorContexto = {
    carrito,
    cantProd,
    setCantProd,
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
