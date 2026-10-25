import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Bubbles from "./Bubbles.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

/*
  Layout: contenedor principal de todas las páginas.
  Mantiene fijos el fondo animado, la Navbar y el Footer,
  y en el medio (<Outlet />) muestra la página que corresponde a la ruta.
*/
function Layout() {
  const location = useLocation();

  // Activa las animaciones de aparición cada vez que cambia la página
  useScrollReveal(location.pathname);

  // Al navegar: si la URL tiene un #ancla, baja hasta esa sección; si no, vuelve arriba de todo
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" }); // al cambiar de página se arranca arriba sin animación
  }, [location.pathname, location.hash, location.key]);

  return (
    <>
      {/* Fondo de burbujas */}
      <Bubbles />
      {/* Menú */}
      <Navbar />
      {/* Página actual */}
      <main>
        <Outlet />
      </main>
      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default Layout;
