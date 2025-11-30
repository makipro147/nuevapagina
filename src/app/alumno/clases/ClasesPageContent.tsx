"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clases.css";

/* ===== 1º-3º ===== */
const clasesGrados1a3 = [
  { nombre: "Componentes de una PC", ruta: "componentes-pc" },
  { nombre: "Atajos de teclado", ruta: "atajos-teclado" },
  { nombre: "Explorador de archivos y compresión en RAR", ruta: "explorador-archivos-rar" },
  { nombre: "Cómo elegir y presentar un tema con Canva", ruta: "canva-presentar-tema" },
  { nombre: "Uso completo de Canva Presentaciones", ruta: "canva-presentaciones" },
  { nombre: "Creación de logo con Canva para tu tema", ruta: "canva-logo" },
  { nombre: "Edición de video con Canva (1 minuto)", ruta: "canva-video" },
  { nombre: "Hardware y Software", ruta: "hardware-software" },
  { nombre: "Sistema Operativo Windows", ruta: "sistema-windows" },
  { nombre: "Introducción a Internet", ruta: "introduccion-internet" },
  { nombre: "Navegadores Web", ruta: "navegadores-web" },
  { nombre: "Correo Electrónico", ruta: "correo-electronico" },
];

/* ===== 4º-5º ===== */
const clasesGrados4y5 = [
  { nombre: "Componentes de una PC", ruta: "componentes-pc" },
  { nombre: "Atajos de teclado", ruta: "atajos-teclado" },
  { nombre: "Explorador de archivos y compresión en RAR", ruta: "explorador-archivos-rar" },
  { nombre: "Visual Studio Code y extensiones", ruta: "visual-studio-code" },
  { nombre: "Lenguajes de Programacion", ruta: "lenguajes-programacion" },
  { nombre: "Empezaremos con HTML", ruta: "lenguaje-html" },
  { nombre: "Mini Proyecto Html", ruta: "proyecto-html" },
  { nombre: "Html y Css carrusel", ruta: "imagenes-carrusel" },
  { nombre: "Introduccion a base de datos", ruta: "introduccion-bases-datos" },
  { nombre: "Bases de datos en superbase", ruta: "introduccion-supabase" },
  { nombre: "Como usar Explorador de archivos", ruta: "Explorador-archivos-avanzados" },
  { nombre: "Robótica con Arduino", ruta: "arduino-robotica" },
  { nombre: "Impresión 3D básica", ruta: "impresion-3d" },
  { nombre: "Ciber-seguridad y privacidad", ruta: "ciberseguridad" },
  { nombre: "Emprendimiento digital", ruta: "emprendimiento-digital" },
];

export default function ClasesPageContent() {
  const searchParams = useSearchParams();
  const grado = searchParams.get("grado");

  /* ---------- Initialize AOS and Error handling ---------- */
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });

    // Error handlers
    const handleError = (ev: ErrorEvent) => {
      const msg = ev.error?.message ?? ev.message ?? "Error desconocido";
      console.error("❌ Error capturado:", ev.error || ev);
      alert("Error: " + msg);
    };

    const handleRejection = (ev: PromiseRejectionEvent) => {
      const reason = ev.reason;
      const msg =
        reason instanceof Error
          ? reason.message
          : typeof reason === "string"
            ? reason
            : JSON.stringify(reason);
      console.error("❌ Promesa rechazada:", reason);
      alert("Error: " + msg);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      // Refresh AOS on unmount to clean up
      AOS.refresh();
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  /* ---------- Validación ---------- */
  const gradosPermitidos = ["1", "2", "3", "4", "5"];
  if (!grado || !gradosPermitidos.includes(grado)) {
    return (
      <div className="clases-container">
        <div className="clases-card">
          <h2>Acceso no permitido</h2>
          <p>Solo estudiantes de 1º a 5º grado pueden ingresar.</p>
          <Link href="/alumno" className="clases-btn">Volver</Link>
        </div>
      </div>
    );
  }

  /* ---------- Lista dinámica ---------- */
  const lista =
    ["1", "2", "3"].includes(grado) ? clasesGrados1a3 : clasesGrados4y5;

  /* ---------- Vista ---------- */
  return (
    <div className="clases-container">
      <div className="clases-header">
        <h1 className="clases-title">Clases de {grado}º grado</h1>
        <Link href="/alumno" className="clases-btn-outline">Volver</Link>
      </div>

      {lista.length === 0 ? (
        <div className="clases-card" style={{ marginTop: "2rem" }}>
          <h3>Próximamente</h3>
          <p>Las clases para {grado}º grado estarán disponibles muy pronto.</p>
        </div>
      ) : (
        <div className="clases-grid">
          {lista.map((clase, index) => (
            <Link
              key={index}
              href={`/alumno/clases/${clase.ruta}?grado=${grado}`}
              className="clase-card appear-wave"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="clase-icon">📘</div>
              <h3 className="clase-titulo">{clase.nombre}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
