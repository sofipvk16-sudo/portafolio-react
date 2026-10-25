import { useNavigate } from "react-router-dom";

import "../styles/Card.css";

/*
  Card: tarjeta que muestra la información principal de un proyecto
  (número, título, categoría, descripción, tecnologías e imagen).
  Props:
  - project: objeto con los datos del proyecto (ver data/projects.js)
  - onMouseEnter / onMouseMove / onMouseLeave: eventos para la vista previa flotante
  Al hacer clic se navega a la página de detalle del proyecto.
*/
function Card({ project, onMouseEnter, onMouseMove, onMouseLeave }) {
  const navigate = useNavigate();
  const detailPath = `/proyecto/${project.id}`;

  const goToDetail = () => {
    onMouseLeave?.(); // oculta la vista previa antes de cambiar de página
    navigate(detailPath);
  };

  return (
    <article
      className="project-card reveal"
      onClick={goToDetail}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Número */}
      <div className="project-number">{project.number}</div>

      {/* Título, descripción y tecnologías */}
      <div className="project-body">
        <div className="project-info">
          <h3>{project.title}</h3>
          <p className="project-category">{project.cardCategory}</p>
        </div>

        <p className="project-description">{project.summary}</p>

        <ul className="project-stack" aria-label="Tecnologías">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        {/* Botón accesible con teclado; el clic en toda la card hace lo mismo */}
        <button
          type="button"
          className="project-link project-more"
          onClick={(event) => {
            event.stopPropagation();
            goToDetail();
          }}
        >
          MÁS INFO +
        </button>
      </div>

      {/* Imagen dentro de la card (solo en celular y tablet) */}
      <figure className="project-media">
        <img src={project.cover} alt={`Captura de ${project.title}`} loading="lazy" />
      </figure>
    </article>
  );
}

export default Card;
