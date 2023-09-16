/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    claro: {
      nav: "#f2e6e2",
      home: "#e6d7d4",
      footer: "#f2e6e2",
      font: "#634e4a",
    },
    oscuro: {
      nav: "#262626",
      home: "#1f1f1f",
      footer: "#262626",
      font: "#e0e0e0",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);
