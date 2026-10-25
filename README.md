# Portafolio · Sofía Paviskov (React)

Trabajo Práctico Final (PF.A) — **Migración a React: de HTML a aplicación con componentes**.        

Migración de mi portafolio personal, maquetado originalmente en HTML, CSS y JavaScript, a una aplicación en **React** con **Vite**, manteniendo el diseño original y aprovechando la componentización.

##  Cómo ejecutar el proyecto

Requisitos: [Node.js](https://nodejs.org/) 18 o superior. 

```bash
# 1. Clonar el repositorio
git clone https://github.com/sofipvk16-sudo/portafolio-react.git
cd portafolio-react

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrir el link que muestra la terminal (por defecto http://localhost:5173).

Otros comandos:

| Comando           | Qué hace                                   |
| ----------------- | ------------------------------------------ |
| `npm run build`   | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión de producción  |
| `npm run lint`    | Revisa el código con ESLint                |

## 🧩 Componentes

| Componente   | Descripción                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `Navbar`     | Barra de navegación fija; menú desplegable en celular y sección activa.     |
| `Layout`     | Contenedor principal: fondo animado, Navbar, contenido dinámico y Footer.   |
| `Card`       | Tarjeta de proyecto (número, título, descripción, tecnologías e imagen).    |
| `Gallery`    | Grilla de imágenes del proyecto, con placeholder si una imagen no carga.    |
| `Contact`    | Formulario controlado con `useState` (enviar y resetear) y links de contacto. |
| `Footer`     | Pie de página reutilizable con el año automático.                           |
| `Hero`       | Portada con el nombre, rol y ficha técnica.                                 |
| `About`      | Sección "Sobre mí".                                                         |
| `CodeWindow` | Ventana de código que se escribe sola.                                      |
| `Projects`   | Lista de proyectos con vista previa que sigue al mouse.                     |
| `Stack`      | Tecnologías agrupadas y educación.                                          |
| `Experience` | Experiencia freelance.                                                      |
| `Bubbles`    | Fondo animado de burbujas en un `<canvas>`.                                 |

## 🛣 Rutas (React Router)

| Ruta             | Página                                                   |
| ---------------- | -------------------------------------------------------- |
| `/`              | Inicio con todas las secciones                           |
| `/proyecto/:id`  | Detalle de un proyecto (descripción, stack y galería)    |
| `*`              | Página 404 personalizada                                 |

## 🪝 Custom Hooks

| Hook               | Qué hace                                                        |
| ------------------ | --------------------------------------------------------------- |
| `useScrollReveal`  | Anima los elementos `.reveal` cuando entran en pantalla.        |
| `useActiveSection` | Detecta la sección visible para marcarla en la Navbar.          |
| `useTypewriter`    | Escribe un texto letra por letra cuando aparece en pantalla.    |
| `useCursorPreview` | Maneja la vista previa flotante de los proyectos.               |
| `useBubbles`       | Dibuja y anima las burbujas del fondo.                          |

## 📨 Formulario de contacto

- Cada campo está conectado al estado con `useState` (formulario controlado).
- Cada cambio en un input se muestra en la consola del navegador.
- Al enviar, se ejecuta `event.preventDefault()` y los datos se muestran en la consola.
- El botón **Borrar** resetea el formulario.
- No hay integración con un servidor: todo se maneja en el frontend.

## 📁 Estructura

```
src/
├── assets/       → Imágenes (foto y capturas de proyectos)
├── components/   → Componentes reutilizables
├── data/         → Datos de los proyectos
├── hooks/        → Custom Hooks
├── pages/        → Páginas (Home, ProjectDetail, NotFound)
├── styles/       → Un archivo CSS por componente + global.css
├── App.jsx       → Definición de rutas
└── main.jsx      → Punto de entrada (BrowserRouter)
```


