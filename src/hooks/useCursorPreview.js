import { useCallback, useEffect, useRef, useState } from "react";

/*
  useCursorPreview
  Maneja la vista previa flotante que sigue al mouse al pasar por una card de proyecto.
  Solo se activa en computadoras con mouse (en celular la imagen se muestra dentro de la card).
  Devuelve:
  - previewRef: ref del elemento flotante
  - image: imagen que se está mostrando
  - visible: si la vista previa está visible
  - show(image, event), move(event), hide(): funciones para los eventos de la card
*/
const OFFSET = 24;  // distancia entre el cursor y la vista previa
const EASE = 0.18;  // suavidad del movimiento (más bajo = más lento)

export default function useCursorPreview() {
  const previewRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });   // hacia dónde tiene que ir
  const position = useRef({ x: 0, y: 0 }); // dónde está ahora
  const frame = useRef(null);

  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(false);

  const isDesktop = () => window.matchMedia("(hover: hover) and (min-width: 1001px)").matches;

  // Calcula la posición: a la derecha del cursor, o a la izquierda si no entra en pantalla
  const updateTarget = (event) => {
    const preview = previewRef.current;
    if (!preview) return;
    const { offsetWidth: w, offsetHeight: h } = preview;
    const fitsRight = event.clientX + OFFSET + w < window.innerWidth;
    target.current.x = fitsRight ? event.clientX + OFFSET : event.clientX - OFFSET - w;
    target.current.y = Math.min(Math.max(event.clientY - h / 2, 80), window.innerHeight - h - 20);
  };

  // Animación: acerca la vista previa a su objetivo en cada cuadro
  const animate = useCallback(() => {
    const preview = previewRef.current;
    if (!preview) return;
    position.current.x += (target.current.x - position.current.x) * EASE;
    position.current.y += (target.current.y - position.current.y) * EASE;
    preview.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
    frame.current = requestAnimationFrame(animate);
  }, []);

  const show = (newImage, event) => {
    if (!isDesktop()) return;
    updateTarget(event);
    position.current = { ...target.current };
    setImage(newImage);
    setVisible(true);
  };

  const move = (event) => updateTarget(event);

  const hide = () => setVisible(false);

  // Mientras está visible corre la animación; al ocultarse se detiene
  useEffect(() => {
    if (!visible) return undefined;
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [visible, animate]);

  return { previewRef, image, visible, show, move, hide };
}
