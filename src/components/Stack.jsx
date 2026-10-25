import "../styles/Stack.css";

// Tecnologías agrupadas por área
const SKILL_GROUPS = [
  {
    label: "FRONTEND",
    skills: ["HTML5", "CSS3", "JAVASCRIPT", "TYPESCRIPT", "REACT", "NEXT.JS", "TAILWIND CSS"],
  },
  {
    label: "BACKEND & DATOS",
    skills: ["PYTHON", "REST APIs", "PRISMA", "SQLITE"],
  },
  {
    label: "HERRAMIENTAS & DISEÑO",
    skills: ["GIT / GITHUB", "VITE", "SHOPIFY", "FIGMA", "UI / UX"],
  },
];

const EDUCATION = [
  { title: "Desarrollo Web Full Stack", detail: "Formación Profesional — 2026" },
  { title: "Ingeniería en Sistemas", detail: "2022 — Actualidad" },
  { title: "Licenciatura en Sistemas", detail: "2025 — Actualidad" },
];

/*
  Stack: columna izquierda de la sección "Stack & Tools".
  Muestra las tecnologías por grupo y la educación.
*/
function Stack() {
  return (
    <div className="tech-stack reveal">
      <h2 className="section-title">
        STACK &amp;
        <br />
        TOOLS
      </h2>

      {/* Grupos de tecnologías */}
      {SKILL_GROUPS.map((group) => (
        <div className="skills-group" key={group.label}>
          <h3 className="skills-label">{group.label}</h3>
          <div className="skills-list">
            {group.skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Educación */}
      <div className="education-list mt-medium">
        <h2 className="section-title section-title-sm">EDUCACIÓN</h2>
        {EDUCATION.map((item) => (
          <div className="edu-item" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
