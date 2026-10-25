import { useEffect, useState } from "react";

/*
  useActiveSection
  Devuelve el id de la sección que se está viendo en pantalla,
  para marcar el link correspondiente en la Navbar.
  - ids: lista de ids de secciones a observar (ej: ["about", "projects"])
  - dependency: valor que, al cambiar (ej: la ruta), vuelve a buscar las secciones
*/
export default function useActiveSection(ids, dependency) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    // Si no hay secciones (por ejemplo en otra página), no se marca ninguna
    if (sections.length === 0) {
      setActiveId(null);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // ids es una lista fija definida fuera del componente, por eso solo depende de "dependency"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  return activeId;
}
