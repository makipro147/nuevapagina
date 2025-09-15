"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const imagenes = [
  { titulo: "Mi artista favorito", src: "/image/Duko_concierto.jpg" },
  { titulo: "Mi bajo eléctrico", src: "/image/bass.jpg" },
  { titulo: "YouTube SSj Neko", src: "/image/youtube.jpeg" },
  { titulo: "Pc de Trabajo", src: "/image/programar.jpeg" },
];

export default function CarruselHorizontal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % imagenes.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="carrusel-horizontal glow-cyan">
      <div 
        style={{ 
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '500px'
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            width: `${imagenes.length * 100}%`,
            height: '100%'
          }}
          animate={{ x: `-${index * (100 / imagenes.length)}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {imagenes.map((img, i) => (
            <div
              key={i}
              style={{
                width: `${100 / imagenes.length}%`,
                height: '100%',
                flexShrink: 0,
                position: 'relative'
              }}
            >
              <img
                src={img.src}
                alt={img.titulo}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain', // Cambiado de 'cover' a 'contain'
                  display: 'block',
                  backgroundColor: '#000' // Fondo negro para las barras
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'var(--cyan)',
                  textAlign: 'center',
                  padding: '12px',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '1.1rem'
                }}
              >
                {img.titulo}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Indicadores */}
      <div 
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10
        }}
      >
        {imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: i === index ? 'var(--cyan)' : 'rgba(0, 240, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: i === index ? '0 0 10px var(--cyan)' : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
}