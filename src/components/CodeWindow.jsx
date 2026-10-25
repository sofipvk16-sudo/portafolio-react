import useTypewriter from "../hooks/useTypewriter.js";
import "../styles/CodeWindow.css";

/*
  Contenido de la ventana: cada línea es una lista de [texto, tipo].
*/
const LINES = [
  [["const ", "keyword"], ["sofia", "name"], [" = {", ""]],
  [["  rol", "prop"], [": ", ""], ['"Full Stack Developer"', "string"], [",", ""]],
  [["  base", "prop"], [": ", ""], ['"La Plata, AR"', "string"], [",", ""]],
  [["  stack", "prop"], [": [", ""], ['"React"', "string"], [", ", ""], ['"Next.js"', "string"], [", ", ""], ['"TypeScript"', "string"], ["],", ""]],
  [["  enfoque", "prop"], [": [", ""], ['"diseño"', "string"], [", ", ""], ['"código"', "string"], [", ", ""], ['"detalle"', "string"], ["],", ""]],
  [["  disponible", "prop"], [": ", ""], ["true", "bool"], [",", ""]],
  [["};", ""]],
];

// Se arma la lista de tokens con salto de línea entre líneas, y se calcula el total de letras
const TOKENS = LINES.flatMap((line, index) =>
  index < LINES.length - 1 ? [...line, ["\n", ""]] : line
);
const TOTAL_CHARS = TOKENS.reduce((sum, [text]) => sum + text.length, 0);

// Posiciones donde hay un salto de línea 
const LINE_BREAKS = new Set();
TOKENS.reduce((position, [text]) => {
  if (text === "\n") LINE_BREAKS.add(position);
  return position + text.length;
}, 0);
const isLineEnd = (index) => LINE_BREAKS.has(index);

/*
  CodeWindow: ventana tipo editor donde se escribe sola una ficha en código.
*/
function CodeWindow() {
  const { ref, count } = useTypewriter(TOTAL_CHARS, { isLineEnd });

  // Muestra solo las primeras letras
  let remaining = count;
  const visibleTokens = [];
  for (const [text, type] of TOKENS) {
    if (remaining <= 0) break;
    visibleTokens.push([text.slice(0, remaining), type]);
    remaining -= text.length;
  }

  return (
    <div className="about-visual code-window" aria-hidden="true" ref={ref}>
      {/* Barra superior con los 3 puntitos */}
      <div className="code-bar">
        <span></span>
        <span></span>
        <span></span>
        <p>sofia.js</p>
      </div>
      {/* Código que se va escribiendo ycursor */}
      <pre className="code-body">
        <code>
          {visibleTokens.map(([text, type], index) => (
            <span key={index} className={type ? `tok-${type}` : undefined}>
              {text}
            </span>
          ))}
          <span className="code-cursor"></span>
        </code>
      </pre>
    </div>
  );
}

export default CodeWindow;