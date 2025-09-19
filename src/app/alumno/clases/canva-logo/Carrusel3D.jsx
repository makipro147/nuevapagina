"use client";
import "./carrusel3d.css";

export default function Carrusel3D() {
  const imagenes = [
    "/image/logo1.jpg",
    "/image/logo2.jpg",
    "/image/logo3.jpg",
    "/image/logo4.jpg",
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