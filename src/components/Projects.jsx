import Card from "./Card.jsx";
import projects from "../data/projects.js";
import useCursorPreview from "../hooks/useCursorPreview.js";
import "../styles/Projects.css";

/*
  Projects: sección de proyectos del inicio.
  Recorre la lista de proyectos y crea una Card por cada uno (pasándole los datos por props).
  También maneja la vista previa flotante que sigue al mouse.
*/
function Projects() {
  const preview = useCursorPreview();

  return (
    <section className="projects" id="projects">
      <div className="section-inner">
        <div className="section-meta">
          <span>PROYECTOS SELECCIONADOS</span>
          <span>CLIENT WORK & DEV</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project}
              onMouseEnter={(event) => preview.show(project.cover, event)}
              onMouseMove={preview.move}
              onMouseLeave={preview.hide}
            />
          ))}
        </div>

        {/* Vista previa flotante (solo escritorio) */}
        <div
          ref={preview.previewRef}
          className={`project-preview ${preview.visible ? "visible" : ""}`}
          aria-hidden="true"
        >
          {preview.image && <img src={preview.image} alt="" />}
        </div>
      </div>
    </section>
  );
}

export default Projects;
