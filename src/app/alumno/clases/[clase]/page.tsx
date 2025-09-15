"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase.css";
import Link from "next/link";

const contenido = {
  "Componentes de una PC": {
    titulo: "Componentes de una PC",
    introduccion: "Descubre qué hay dentro de tu computadora y cómo funciona cada pieza.",
    secciones: [
      {
        titulo: "¿Qué es un componente?",
        texto: "Un componente es una pieza física que forma parte de tu computadora. Sin ellos, tu PC no funcionaría.",
        icono: "🧩",
        detalle: "Ejemplos: CPU, RAM, disco duro, fuente, placa madre, tarjeta gráfica, etc.",
      },
      {
        titulo: "CPU – El cerebro",
        texto: "El Procesador (CPU) es el encargado de ejecutar instrucciones. Mientras más rápido, más tareas puede hacer al mismo tiempo.",
        icono: "🧠",
        detalle: "Ejemplos: Intel Core i5, AMD Ryzen 5, velocidad en GHz, núcleos, hilos.",
      },
      {
        titulo: "RAM – La memoria de trabajo",
        texto: "La Memoria RAM es donde se guardan temporalmente los programas que estás usando. Se borra al apagar la PC.",
        icono: "💾",
        detalle: "Ejemplos: 8 GB DDR4, 16 GB DDR5, frecuencia en MHz.",
      },
      {
        titulo: "Disco Duro – El almacén",
        texto: "Guarda permanentemente tus archivos, fotos, videos y programas. Puede ser HDD (mecánico) o SSD (más rápido).",
        icono: "💿",
        detalle: "Ejemplos: SSD 512 GB, HDD 1 TB, velocidad de lectura/escritura.",
      },
      {
        titulo: "Fuente de Poder – El corazón",
        texto: "Convierte la energía eléctrica y la distribuye a todos los componentes. Sin ella, nada funciona.",
        icono: "⚡",
        detalle: "Ejemplos: 500W, 80 Plus Bronze, cables SATA, PCIe, ATX.",
      },
      {
        titulo: "Placa Madre – El esqueleto",
        texto: "Conecta todos los componentes entre sí. Es como el cuerpo de tu PC.",
        icono: "🦴",
        detalle: "Ejemplos: ATX, Micro-ATX, sockets, ranuras RAM, puertos USB.",
      },
    ],
  },
};

export default function ClasePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const titulo = decodeURIComponent(params.clase as string);
  const grado = searchParams.get("grado");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  if (!grado || !["1", "2", "3"].includes(grado)) {
    return <p className="clase-error">Acceso no permitido</p>;
  }

  const claseData = contenido[titulo as keyof typeof contenido];

  if (!claseData) {
    return <p className="clase-error">Clase no encontrada</p>;
  }

  return (
    <div className="clase-page-container">
      {/* HEADER CON BRILLO */}
      <div className="clase-header" data-aos="fade-down">
        <h1 className="clase-titulo" data-aos="zoom-in">
          {claseData.titulo}
        </h1>
        <p className="clase-grado" data-aos="fade-right">
          Clase de {grado}º grado
        </p>
      </div>

      {/* INTRODUCCIÓN CON BRILLO */}
      <div className="clase-intro" data-aos="fade-up">
        <p className="clase-intro-text" data-aos="fade-up">
          {claseData.introduccion}
        </p>
      </div>

      {/* SECCIONES CON ICONOS Y BRILLO */}
      <div className="clase-secciones">
        {claseData.secciones.map((sec, i) => (
          <div
            key={i}
            className="clase-seccion"
            data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="clase-icon" data-aos="zoom-in">
              {sec.icono}
            </div>
            <div className="clase-texto" data-aos="fade-up">
              <h3 className="clase-seccion-titulo">{sec.titulo}</h3>
              <p className="clase-seccion-texto">{sec.texto}</p>
              {sec.detalle && (
                <p className="clase-seccion-detalle">{sec.detalle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
   

      {/* FOOTER CON BOTÓN MEJORADO */}
      <div className="clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn-volver-mejorado">
          <span className="btn-icono">👈</span>
          <span className="btn-texto">Volver a mis clases</span>
          <span className="btn-subtitle">Continúa tu aprendizaje</span>
        </Link>
        
        <div className="clase-progreso" data-aos="fade-up" data-aos-delay="200">
          <p>✅ ¡Felicidades! Has completado esta lección</p>
          <div className="progreso-bar">
            <div className="progreso-fill" style={{width: '100%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}