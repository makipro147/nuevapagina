"use client";
import "./carrusel3d.css";

export default function Carrusel3D() {
  const imagenes = [
    "/image/navega.jpg",
    "/image/brave.jpg",
    "/image/edge.png",
    "/image/mozilla.jpg",
  ];

  return (
    <div className="carousel3d-wrapper">
      <div className="scene3d">
        <div className="carousel3d">
          {imagenes.map((src, i) => (
            <div className="panel3d" key={i}>
              <img src={src} alt={`Imagen ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}