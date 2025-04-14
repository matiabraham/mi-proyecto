import { useState } from "react";
import Input from "./Input";
import toast from "react-hot-toast";

function Formulario() {
  const [valorDelInputNombre, setValorDelInputNombre] = useState("");
  const [valorDelInputEmail, setValorDelInputEmail] = useState("");
  const [valorDelInputTelefono, setValorDelInputTelefono] = useState("");
  const [valorDelInputTarjeta, setValorDelInputTarjeta] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "El usuario escribio : " +
        valorDelInputNombre +
        " " +
        valorDelInputEmail +
        " " +
        valorDelInputTelefono +
        " " +
        valorDelInputTarjeta
    );
  };

  const handleInputValueNombre = (data) => {
    setValorDelInputNombre(data);
  };

  const handleInputValueEmail = (data) => {
    setValorDelInputEmail(data);
  };

  const handleInputValueTelefono = (data) => {
    setValorDelInputTelefono(data);
  };

  const handleInputValueTarjeta = (data) => {
    setValorDelInputTarjeta(data);
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <Input onInputValue={handleInputValueNombre} />
        </div>
        <div>
          <label htmlFor="nombre">Email</label>
          <Input onInputValue={handleInputValueEmail} />
        </div>
        <div>
          <label htmlFor="nombre">Telefono</label>
          <Input onInputValue={handleInputValueTelefono} />
        </div>
        <div>
          <label htmlFor="nombre">Tarjeta de Credito</label>
          <Input onInputValue={handleInputValueTarjeta} />
        </div>
        <button
          type="submit"
          onClick={() => toast.success("Compra realizada con éxito!")}
        >
          Comprar
        </button>
      </form>
    </div>
  );
}
export default Formulario;
