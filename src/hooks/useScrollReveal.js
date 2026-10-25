import { useEffect } from "react";

/*
  useScrollReveal
  Busca todos los elementos con la clase "reveal" y les agrega "visible"
  cuando entran en pantalla, para que aparezcan con una animación suave.
  Recibe una dependencia (por ejemplo la ruta actual) para volver a buscar
  los elementos cuando cambia la página.
*/
export default function useScrollReveal(dependency) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.visible)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // una vez visible, no hace falta seguir observándolo
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    // Limpieza: se desconecta el observer al cambiar de página
    return () => observer.disconnect();
  }, [dependency]);
}
