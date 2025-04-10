import { useState } from "react";
import Input from "./Input";

function Formulario() {
  const [valorDelInput, setValorDelInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("El usuario escribio : " + valorDelInput);
  };

  const saludar = (event) => {};

  const handleTitle = (event) => {};

  const handleInputValue = (data) => {
    setValorDelInput(data);
  };

  return (
    <div onClick={saludar}>
      <h2 onClick={handleTitle}>Suscribete al newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <Input onInputValue={handleInputValue} />
        </div>
        <button type="submit">suscribir</button>
      </form>
    </div>
  );
}
export default Formulario;
