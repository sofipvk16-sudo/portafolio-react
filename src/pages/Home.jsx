import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Stack from "../components/Stack.jsx";
import Experience from "../components/Experience.jsx";
import Contact from "../components/Contact.jsx";

/*
  Home: página de inicio. Une todas las secciones del portafolio en orden.
*/
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />

      {/* Stack y Experiencia comparten sección, en dos columnas */}
      <section className="tech" id="tech">
        <div className="section-inner">
          <div className="split-section">
            <Stack />
            <Experience />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Home;
