import CodeWindow from "./CodeWindow.jsx";
import "../styles/About.css";

// Datos destacados de la parte superior
const STATS = [
  { value: "FREELANCE", label: ["MODALIDAD", "REMOTA"] },
  { value: "FRONTEND", label: ["ENFOQUE", "PRINCIPAL"] },
  { value: "2026", label: ["DISPONIBLE PARA", "NUEVOS PROYECTOS"] },
];

/*
  About: sección "Sobre mí".
  Muestra los datos destacados, el texto de presentación y la ventana de código animada.
*/
function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner">
        {/* Datos destacados */}
        <div className="stats-grid reveal">
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.value}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </span>
            </div>
          ))}
        </div>

        <div className="about-content mt-large reveal">
          <h2 className="section-title accent-text">SOBRE MÍ</h2>

          {/* Texto de presentación */}
          <div className="about-text">
            <p>Soy Sofía, desarrolladora web en formación Full Stack y estudiante de Licenciatura en Sistemas e Ingeniería en Sistemas. Me interesa especialmente el desarrollo visual y la creación de experiencias digitales que combinen diseño, funcionalidad y una identidad propia.</p>
            <p>Me gusta involucrarme de lleno en mis proyectos, prestar atención a cada detalle y buscar soluciones que equilibren lo visual con lo funcional. Soy una persona creativa, curiosa y con facilidad para aprender nuevas herramientas y adaptarme a distintos entornos de trabajo.</p>
            <p>Tengo experiencia trabajando en equipo, buena comunicación y una actitud abierta al intercambio de ideas y al feedback durante el desarrollo de cada proyecto. Me organizo para cumplir con los plazos de entrega y valoro el trabajo colaborativo como una forma de mejorar los resultados.</p>
            <p>Disfruto aprender, enfrentar nuevos desafíos y seguir desarrollando mis habilidades, tanto técnicas como creativas, mientras construyo mi camino en el desarrollo de software.</p>
          </div>

          {/* Ventana de código animada */}
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}

export default About;
