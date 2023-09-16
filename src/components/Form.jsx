import { useState, useEffect } from "react";
import "./Form.modules.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length <= 2 || !email.includes("@")) {
      setError("Datos inválidos");
      return;
    }
    setMensaje(`Gracias ${name}, te contactaremos por ${email}`);
    setError("");
  }

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setName("");
        setEmail("");
        setMensaje("");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="formulario-input"
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="formulario-input"
          type="email"
          value={email}
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="form-button" type="submit">
          Enviar
        </button>
        {error && <p className="error">{error}</p>}
        {mensaje && <p className="enviado">{mensaje}</p>}
      </form>
    </div>
  );
}
