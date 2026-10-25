import { useRef } from "react";

import useBubbles from "../hooks/useBubbles.js";
import "../styles/Bubbles.css";

/*
  Bubbles: fondo animado de burbujas bordó.
  El componente solo renderiza el <canvas>; el dibujo lo hace el hook useBubbles.
*/
function Bubbles() {
  const canvasRef = useRef(null);
  useBubbles(canvasRef);

  return <canvas ref={canvasRef} className="bubbles-bg" aria-hidden="true" />;
}

export default Bubbles;
