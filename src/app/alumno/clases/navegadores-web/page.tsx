"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Carrusel3D from "./Carrusel3D.jsx";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function NavegadoresWebPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">🌐 Guía: Navegadores Web</h1>
        <p className="clase-subtitulo">
          Aprendé qué es un navegador, cuáles son los más usados y cómo usarlo de forma segura
        </p>
      </section>

      {/* Sección 1 – ¿Qué es un navegador web? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es un navegador web?</h2>
        <p>
          Un navegador web es un programa que usamos para entrar a Internet y visitar páginas.
        </p>
        <ul>
          <li>👉 Es como un carro que nos lleva por la autopista de Internet.</li>
          <li>👉 Ejemplo: si Internet es una gran ciudad, el navegador es el vehículo que usamos para movernos en ella.</li>
        </ul>
      </section>

      {/* Sección 2 – Los navegadores más usados */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. Los navegadores más usados</h2>
        <ul>
          <li><strong>Google Chrome</strong> → el más popular, rápido y fácil.</li>
          <li><strong>Microsoft Edge</strong> → viene en Windows, muy parecido a Chrome.</li>
          <li><strong>Mozilla Firefox</strong> → seguro y personalizable.</li>
          <li><strong>Safari</strong> → usado en iPhone y Mac.</li>
          <li><strong>Opera</strong> → rápido y con ahorro de datos.</li>
        </ul>
      </section>

      {/* Sección 3 – Partes principales de un navegador */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Partes principales de un navegador web</h2>
        <ul>
          <li><strong>Barra de direcciones (URL)</strong> → donde escribimos la dirección de la página (ejemplo: <code>www.google.com</code>).</li>
          <li><strong>Pestañas</strong> → permiten abrir varias páginas a la vez en la misma ventana.</li>
          <li><strong>Botón atrás y adelante</strong> → para volver a la página anterior o avanzar.</li>
          <li><strong>Botón recargar</strong> → para actualizar la página.</li>
          <li><strong>Favoritos / marcadores</strong> → guardar páginas importantes.</li>
          <li><strong>Historial</strong> → muestra las páginas visitadas.</li>
          <li><strong>Descargas</strong> → lista de archivos que bajamos de Internet.</li>
        </ul>
      </section>

      {/* Sección 4 – ¿Para qué sirve? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. ¿Para qué sirve un navegador web?</h2>
        <ul>
          <li>Buscar información (Google, Wikipedia).</li>
          <li>Usar redes sociales (Facebook, TikTok, Instagram).</li>
          <li>Ver videos y escuchar música (YouTube, Spotify).</li>
          <li>Descargar archivos (imágenes, documentos, juegos).</li>
          <li>Usar aplicaciones en línea (Google Docs, Canva, Classroom).</li>
        </ul>
      </section>

      {/* Sección 5 – Diferencia entre navegador y buscador */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Diferencia entre navegador y buscador</h2>
        <div className="componente">
          <p className="tip">⚠️ Muchos alumnos confunden esto.</p>
          <ul>
            <li><strong>Navegador</strong> = el programa que abre las páginas (Chrome, Firefox).</li>
            <li><strong>Buscador</strong> = página para encontrar información (Google, Bing, Yahoo).</li>
          </ul>
          <p>👉 Ejemplo: Usás Google Chrome (navegador) para entrar a Google.com (buscador).</p>
        </div>
      </section>

      {/* Sección 6 – Ventajas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Ventajas de los navegadores</h2>
        <ul>
          <li>✅ Acceso rápido a la información.</li>
          <li>✅ Permiten guardar páginas favoritas.</li>
          <li>✅ Varios se pueden personalizar con extensiones.</li>
          <li>✅ Compatibles con casi todas las páginas web.</li>
        </ul>
      </section>

      {/* Sección 7 – Actividad para los alumnos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Actividad para los alumnos</h2>
        <div className="componente">
          <h3>En la computadora:</h3>
          <ul>
            <li>Abrir Google Chrome.</li>
            <li>Identificar: barra de direcciones, pestañas, botón atrás, favoritos.</li>
            <li>Buscar <strong>“Historia del navegador web”</strong> y anotar un dato curioso.</li>
          </ul>
          <h3>En el cuaderno:</h3>
          <ul>
            <li>Dibujar un navegador y señalar sus partes.</li>
          </ul>
          <h3>Extra (dinámica en grupos):</h3>
          <p>Hacer un afiche en Canva que responda:</p>
          <ul>
            <li>¿Qué es un navegador?</li>
            <li>¿Cuáles son los más usados?</li>
            <li>¿Qué diferencias hay con un buscador?</li>
          </ul>
        </div>
      </section>

      {/* Sección 8 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Resumen fácil de recordar</h2>
        <p className="conclusion">
          <strong>Navegador</strong> = programa para entrar a Internet.<br />
          Ejemplos: Chrome, Edge, Firefox, Safari.<br />
          Sus partes: barra de direcciones, pestañas, botones de navegación.<br />
          👉 No confundir: navegador ≠ buscador.
        </p>
      </section>
      
        {/* Carrusel 3D al final */}
            <Carrusel3D />

      {/* ✅ Botón dinámico */}
      <div className="clase-seccion cuadro-rebote clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}