"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";

import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";
import Carrusel3D from "./Carrusel3D.jsx";

export default function ImagenesCarruselPage() {
  const grado = useGradoFromUrl();

  // 🔒 Solo permitir acceso a 4º y 5º
  if (!["4", "5"].includes(grado)) {
    return (
      <div className="clase-completa-container">
        <section className="clase-hero" data-aos="fade-down">
          <h1 className="clase-titulo">Acceso no permitido</h1>
          <p className="clase-subtitulo">Esta clase es solo para alumnos de 4º y 5º grado.</p>
        </section>
        <div className="clase-footer" data-aos="fade-up">
          <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
            Volver a las clases
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">🖼️ Html y Css carrusel</h1>
        <p className="clase-subtitulo">
          Aprendé a crear un carrusel de imágenes con HTML y CSS, y descargá el paquete de imágenes de práctica
        </p>
      </section>

      {/* Sección 1 – ¿Qué vamos a hacer? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué vamos a hacer?</h2>
        <p>
          Vamos a construir un <strong>carrusel de imágenes</strong> con HTML y CSS puro, sin JavaScript. También vas a poder <strong>descargar un paquete de imágenes</strong> para practicar.
        </p>
      </section>

      {/* Carrusel 3D al final */}
            <Carrusel3D />

      {/* Sección 2 – Pasos a seguir */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. Pasos a seguir</h2>
        <ol>
          <li>Descargá el paquete de imágenes desde el enlace de abajo.</li>
          <li>Descomprimí el archivo <code>imagenes-carrusel.rar</code> en una carpeta de tu PC.</li>
          <li>Seguí la guía paso a paso para crear tu carrusel con HTML y CSS.</li>
          <li>Personalizá el diseño como quieras.</li>
        </ol>
      </section>

      {/* Sección 3 – Descarga del archivo */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Descargá el paquete de imágenes</h2>
        <div className="componente" style={{ textAlign: "center" }}>
          <p>Hacé clic en el botón para descargar el archivo <strong>imagenes-carrusel.rar</strong></p>
          <a href="/image/imagenes-carrusel.rar" download className="clase-btn" style={{ marginTop: "1rem" }}>
            📦 Descargar .rar
          </a>
        </div>
      </section>

      {/* Sección 4 – Contenido del .rar */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. ¿Qué incluye el archivo?</h2>
        <ul>
          <li>5 imágenes en formato <code>.jpg</code> para usar en el carrusel.</li>
          <li>1 archivo <code>index.html</code> de ejemplo.</li>
          <li>1 archivo <code>styles.css</code> con estilos básicos.</li>
           <li>1 archivo <code>image</code>Las imagenes que se usaran</li>
                  </ul>
      </section>

      {/* Sección 5 – Actividad */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Actividad final</h2>
        <p className="conclusion">
          ✅ Creá tu propio carrusel con HTML y CSS usando las imágenes que descargaste.<br />
          ✅ Subí tu trabajo a Google Drive y compartí el enlace con tu profesor.
        </p>
      </section>

      {/* ✅ Botón dinámico */}
      <div className="clase-seccion cuadro-rebote clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}