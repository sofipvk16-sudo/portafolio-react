import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useActiveSection from "../hooks/useActiveSection.js";
import "../styles/Navbar.css";

// Links de navegación: se usan tanto en el menú de escritorio como en el de celular
const NAV_LINKS = [
  { id: "about", label: "Sobre Mí" },
  { id: "projects", label: "Proyectos" },
  { id: "tech", label: "Stack" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

const SECTION_IDS = ["about", "projects", "tech", "contact"];

/*
  Navbar: barra de navegación fija y reutilizable.
  - En escritorio muestra todos los links y marca la sección visible.
  - En celular muestra un botón que abre/cierra el menú (estado isOpen).
*/
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeId = useActiveSection(SECTION_IDS, location.pathname);

  // Mientras el menú de celular está abierto, se bloquea el scroll de la página
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  // Stack y Experiencia están en la misma sección, así que se marcan juntos
  const isActive = (id) => activeId === id || (id === "experience" && activeId === "tech");

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          IMSOFIIE<span className="accent-dot">.</span>
          <small>/ 24/7 </small>
        </Link>

        {/* Links de escritorio */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link key={link.id} to={`/#${link.id}`} className={isActive(link.id) ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón menú celular */}
        <button
          type="button"
          className="menu-button"
          aria-expanded={isOpen}
          aria-controls="mobileNav"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "CLOSE —" : "MENU +"}
        </button>
      </div>

      {/* Menú celular desplegable */}
      <nav id="mobileNav" className={`mobile-nav ${isOpen ? "open" : ""}`} aria-label="Navegación móvil">
        {NAV_LINKS.map((link) => (
          <Link key={link.id} to={`/#${link.id}`} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
