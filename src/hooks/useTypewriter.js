import { useEffect, useRef, useState } from "react";

/*
  useTypewriter
  Simula que un texto se escribe solo, letra por letra.
  Empieza cuando el elemento (ref) aparece en pantalla.
  - totalChars: cantidad total de letras a escribir
  - options.speed: milisegundos entre cada letra
  - options.isLineEnd(index): función que indica si en esa letra termina una línea (para hacer una pausa)
  Devuelve: { ref, count } → count es cuántas letras ya se escribieron.
*/
export default function useTypewriter(totalChars, { speed = 35, linePause = 180, isLineEnd = () => false } = {}) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  // Si el usuario prefiere menos movimiento, se muestra todo el texto de una
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1) Detecta cuándo el bloque entra en pantalla para empezar a escribir
  useEffect(() => {
    if (reducedMotion || !ref.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  // 2) Mientras haya letras pendientes, suma una cada "speed" ms (con pausa al final de cada línea)
  useEffect(() => {
    if (!started || count >= totalChars) return undefined;

    const delay = isLineEnd(count) ? linePause : speed;
    const timer = setTimeout(() => setCount((current) => current + 1), delay);
    return () => clearTimeout(timer);
  }, [started, count, totalChars, speed, linePause, isLineEnd]);

  return { ref, count: reducedMotion ? totalChars : count };
}
