import { useState } from "react";

import "../styles/Gallery.css";

/*
  Gallery: muestra una grilla de imágenes. La primera se ve grande.
  Props:
  - images: lista de { src, alt }
  - title: nombre que se muestra si una imagen no carga
  Si una imagen falla, se guarda su índice en el estado "failed" y se muestra un placeholder.
*/
function Gallery({ images, title }) {
  const [failed, setFailed] = useState([]);

  if (!images || images.length === 0) return null;

  const markAsFailed = (index) => setFailed((current) => [...current, index]);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <figure key={image.src} className={`gallery-figure ${failed.includes(index) ? "is-empty" : ""}`}>
          <img src={image.src} alt={image.alt} loading="lazy" onError={() => markAsFailed(index)} />
          <span className="project-media-fallback">{title}</span>
        </figure>
      ))}
    </div>
  );
}

export default Gallery;
