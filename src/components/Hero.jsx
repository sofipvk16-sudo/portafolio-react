import { Link } from "react-router-dom";

import sofiPhoto from "../assets/sofi_portafolio.png";
import "../styles/Hero.css";

// Ficha técnica de la derecha del hero
const SPECS = [
  { number: "01", title: "FRONTEND", detail: "HTML / CSS / JS / REACT" },
  { number: "02", title: "BACKEND", detail: "PYTHON / APIs" },
  { number: "03", title: "TOOLS", detail: "GIT / GITHUB / FIGMA" },
];

/*
  Hero: primera sección del inicio, armada en 3 capas:
  1) texto gigante de fondo, 2) la foto, 3) el contenido (nombre, rol y ficha técnica).
*/
function Hero() {
  return (
    <section className="hero" id="hero">
      {/* CAPA 1: texto gigante de fondo */}
      <h1 className="giant-bg-text">PORTAFOLIO</h1>

      {/* CAPA 2: foto */}
      <div className="hero-image-wrapper">
        <img src={sofiPhoto} alt="Sofía Paviskov" className="hero-image" />
      </div>

      {/* CAPA 3: contenido frontal */}
      <div className="hero-inner">
        <div className="hero-content reveal">
          <p className="greeting">Hola, soy</p>
          <div className="hero-name">
            <h2>SOFIA</h2>
            <h2 className="accent-text">PAVISKOV</h2>
          </div>

          <h3 className="hero-role">
            FULL STACK DEVELOPER
            <br />
            <span className="role-sub">WEB · DESIGN · CREATIVE DEVELOPMENT</span>
          </h3>

          <div className="hero-description">
            <p>
              <strong>DETAIL MATTERS.</strong> Desarrollo experiencias digitales donde el código, el diseño y cada detalle trabajan juntos.
            </p>
            <Link to="/#projects" className="cta-button">VER PROYECTOS ↗</Link>
          </div>
        </div>

        <div className="hero-floating-stats reveal">
          <div className="stat-row">
            <span className="accent-text">+</span>
            <p>AVAILABLE FOR WORK</p>
          </div>

          <div className="tech-specs">
            {SPECS.map((spec) => (
              <div className="spec-item" key={spec.number}>
                <span className="spec-num">{spec.number}</span>
                <div className="spec-info">
                  <h4>{spec.title}</h4>
                  <span>{spec.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
