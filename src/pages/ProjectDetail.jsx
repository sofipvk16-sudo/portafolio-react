import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Gallery from "../components/Gallery.jsx";
import NotFound from "./NotFound.jsx";
import projects from "../data/projects.js";
import "../styles/ProjectDetail.css";

/*
  ProjectDetail: página con toda la información de un proyecto.
  Lee el id desde la URL (/proyecto/:id) con useParams y busca el proyecto en los datos.
  Si el id no existe, muestra la página 404.
*/
function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  // Cambia el título de la pestaña según el proyecto
  useEffect(() => {
    if (project) document.title = `${project.title} | IMSOFIIE`;
    return () => {
      document.title = "Sofía Paviskov — Full Stack Developer | IMSOFIIE";
    };
  }, [project]);

  if (!project) return <NotFound />;

  const links = project.links.filter((link) => link.href);
  const meta = [
    { label: "ROL", value: project.role },
    { label: "AÑO", value: project.year },
    { label: "TIPO", value: project.type },
  ];

  return (
    <article className="project-detail">
      <div className="detail-inner">
        {/* Barra superior: número + volver */}
        <div className="detail-top">
          <span className="detail-number">{project.number}</span>
          <Link to="/#projects" className="project-link">← VOLVER A PROYECTOS</Link>
        </div>

        {/* Título y categoría */}
        <h1 className="detail-title reveal">{project.title}</h1>
        <p className="detail-category reveal">{project.category}</p>

        {/* Rol / año / tipo */}
        <dl className="detail-meta reveal">
          {meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="detail-grid">
          {/* Descripción */}
          <div className="detail-text reveal">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Columna lateral: stack, lo que hice y links */}
          <aside className="detail-aside reveal">
            <h2>STACK</h2>
            <ul className="project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <h2>LO QUE HICE</h2>
            <ul className="detail-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {links.length > 0 && (
              <div className="detail-links">
                {links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>

        {/* Galería de imágenes */}
        <div className="detail-gallery reveal">
          {/* key: si se pasa de un proyecto a otro, la galería arranca de cero */}
          <Gallery key={project.id} images={project.images} title={project.title} />
        </div>
      </div>
    </article>
  );
}

export default ProjectDetail;
