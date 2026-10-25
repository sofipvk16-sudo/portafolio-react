import { Link } from "react-router-dom";

import "../styles/NotFound.css";

/*
  NotFound: página 404 que se muestra cuando la URL no existe
  (o cuando se busca un proyecto que no está en los datos).
*/
function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>
      <h1 className="not-found-title">PÁGINA NO ENCONTRADA</h1>
      <p>La página que buscás no existe o fue movida.</p>
      <Link to="/" className="project-link">← VOLVER AL INICIO</Link>
    </section>
  );
}

export default NotFound;
