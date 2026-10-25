import "../styles/Experience.css";

// Trabajos realizados como freelance
const JOBS = [
  {
    name: "Todo Carnes VP",
    type: "Sistema de gestión comercial",
    tasks: [
      "Diseño y desarrollo full stack de un sistema web a medida para una distribuidora de La Plata.",
      "Pedidos con carrito, entregas programadas, registro del pesaje real y cuentas corrientes.",
      "Panel administrativo para gestionar clientes, productos, precios y pedidos.",
    ],
  },
  {
    name: "Glowa Beauty",
    type: "E-commerce en Shopify",
    tasks: [
      "Creación desde cero de la tienda online de una marca de colágeno en polvo.",
      "Dirección estética y diseño visual desarrollados por completo por mí.",
      "Páginas de producto y landing pages responsive.",
    ],
  },
];

/*
  Experience: columna derecha de la sección "Stack & Tools".
  Lista la experiencia freelance y los proyectos realizados.
*/
function Experience() {
  return (
    <div className="experience-block reveal" id="experience">
      <h2 className="section-title section-title-sm">EXPERIENCIA</h2>

      <div className="edu-item exp-item">
        <h4 className="exp-role">Freelance Web Developer</h4>
        <p className="exp-date">2026 — Actualidad</p>
        <p className="exp-intro">Proyectos a medida para clientes, del diseño a la puesta en marcha.</p>

        {/* Proyectos freelance */}
        {JOBS.map((job) => (
          <div className="exp-project" key={job.name}>
            <h5>
              {job.name} <span>· {job.type}</span>
            </h5>
            <ul className="exp-list">
              {job.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Tareas generales */}
        <ul className="exp-list">
          <li>Gestión de entregas, tiempos de trabajo y feedback con cada cliente.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
