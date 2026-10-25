import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./styles/global.css";

// Punto de entrada: BrowserRouter habilita la navegación entre páginas en toda la app.
// Las opciones "future" activan el comportamiento de React Router v7 (y evitan avisos en consola).
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
