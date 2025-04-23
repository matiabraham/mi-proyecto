import { useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "./CartContext";
import { app } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";

const Cart = () => {
  const valorContexto = useContext(CartContext);

  const handleClick = () => {
    const nuevoProducto = {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      }

    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
    const miConsulta = addDoc(productosCollection,nuevoProducto);

    miConsulta
      .then(() => {
        console.log("salio todo bien");
      })
      .catch(() => {
        console.log("salio todo maaaaaaaal");
      });
  };

  const handleClickTraer = () => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");
    const miConsulta = getDocs(productosCollection)

      miConsulta 
      .then((resultadoCollection)=> {
        console.log("salio todo bien")
        console.log(resultadoCollection)
      })
      .catch(()=> {
        console.log("salio todo mal")
      })
  };

  return (
    <div>
      <h2>Carrito</h2>
      <p>Cantidad de productos: {valorContexto.cantProd}</p>
      <p>total: $ {valorContexto.totalPrecio}</p>
      <ul>
        {valorContexto.carrito.map((item) => {
          return (
            <li className="productos-carrito" key={item.id}>
              <p>
                {item.title} - unidad : ${item.price}
              </p>{" "}
              <img className="image-carrito" src={item.image} alt="" />
            </li>
          );
        })}
      </ul>
      <Formulario />
      <button onClick={handleClick}>agregar producto a DB</button>
      <button onClick={handleClickTraer}>traer productos de la DB</button>
    </div>
  );
};
export default Cart;
