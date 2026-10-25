import { useEffect } from "react";

/*
  useBubbles
  Dibuja en un <canvas> burbujas bordó que bajan lentamente por el fondo.
  Recibe la ref del canvas. Si el usuario prefiere menos movimiento, se dibujan quietas.
*/
const AREA_PER_BUBBLE = 28000; // más chico = más burbujas
const MAX_BUBBLES = 55;
const MIN_RADIUS = 3;
const MAX_RADIUS = 34;
const MIN_SPEED = 0.15;        // px por cuadro
const MAX_SPEED = 0.6;

const random = (min, max) => min + Math.random() * (max - min);

export default function useBubbles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let bubbles = [];
    let width = 0;
    let height = 0;
    let frame = null;

    // Crea una burbuja: en cualquier lugar (al inicio) o arriba de todo (al reciclarla)
    const createBubble = (startAnywhere) => {
      const radius = random(MIN_RADIUS, MAX_RADIUS);
      return {
        x: random(0, width),
        y: startAnywhere ? random(0, height) : -radius,
        radius,
        speed: random(MIN_SPEED, MAX_SPEED) * (radius / MAX_RADIUS + 0.5), // las grandes bajan un poco más rápido
        drift: random(0, Math.PI * 2),                                    // fase del vaivén lateral
        alpha: random(0.25, 0.7),
      };
    };

    // Ajusta el canvas al tamaño de la ventana (y a la densidad de píxeles de la pantalla)
    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(MAX_BUBBLES, Math.round((width * height) / AREA_PER_BUBBLE));
      bubbles = Array.from({ length: count }, () => createBubble(true));
      if (reducedMotion) draw();
    };

    const drawBubble = ({ x, y, radius, alpha }) => {
      // Relleno bordó difuminado
      const fill = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
      fill.addColorStop(0, `rgba(140, 30, 60, ${alpha})`);
      fill.addColorStop(0.6, `rgba(82, 15, 34, ${alpha * 0.6})`);
      fill.addColorStop(1, "rgba(82, 15, 34, 0)");
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Borde sutil para que se lea como burbuja
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.08})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    function draw() {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach(drawBubble);
    }

    const update = () => {
      bubbles.forEach((bubble, index) => {
        bubble.y += bubble.speed;
        bubble.drift += 0.01;
        bubble.x += Math.sin(bubble.drift) * 0.3;
        if (bubble.y - bubble.radius > height) bubbles[index] = createBubble(false);
      });
    };

    const animate = () => {
      update();
      draw();
      frame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) frame = requestAnimationFrame(animate);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, [canvasRef]);
}
