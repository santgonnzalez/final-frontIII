/* eslint-disable react/prop-types */
import { useState } from "react";
import { ContextGlobal, estadoInicial } from "./global.context";

export function ContextProvider({ children }) {
  const [tema, setTema] = useState(estadoInicial.tema.claro);
  const cambioTema = () => {
    setTema((e) =>
      e === estadoInicial.tema.claro
        ? estadoInicial.tema.oscuro
        : estadoInicial.tema.claro
    );
  };

  return (
    <ContextGlobal.Provider value={{ tema, cambioTema }}>
      {children}
    </ContextGlobal.Provider>
  );
}
