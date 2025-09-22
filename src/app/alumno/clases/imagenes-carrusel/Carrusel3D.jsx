"use client";
import "./carrusel3d.css";

export default function Carrusel3D() {
  const imagenes = [
    "/image/dra.jpg",
    "/image/dra2.jpg",
    "/image/dra3.jpg",
    "/image/dra4.jpg",
    "/image/dra5.jpg",
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