import { Link } from "react-router-dom";
import "../components/Navbar.modules.css";
import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

export function Navbar() {
  const { cambioTema } = useContext(ContextGlobal);
  const { tema } = useContext(ContextGlobal);
  const [colorBoton, setColorBoton] = useState("#8B4513");

  function cambiarColorBoton() {
    if (colorBoton === "#8B4513") {
      setColorBoton("#c199956c");
    } else {
      setColorBoton("#8B4513");
    }
  }
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: tema.nav, color: tema.font }}
    >
      <Link className="nav-title" to={"/"}>
        Principal
      </Link>
      <Link className="nav-title" to={"/contact"}>
        Contacto
      </Link>
      <Link className="nav-title" to={"/favs"}>
        Favoritos
      </Link>
      <button
        className="boton"
        onClick={() => {
          cambioTema();
          cambiarColorBoton();
        }}
        style={{ backgroundColor: colorBoton }}
      >
        Tema
      </button>
    </nav>
  );
}
