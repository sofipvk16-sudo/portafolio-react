import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

/*
  App: archivo principal donde se definen las rutas.
  - "/"              → página de inicio con todas las secciones
  - "/proyecto/:id"  → detalle de un proyecto (con galería de imágenes)
  - "*"              → cualquier otra URL muestra la página 404
  Todas comparten el Layout (navbar, fondo animado y footer).
*/
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
