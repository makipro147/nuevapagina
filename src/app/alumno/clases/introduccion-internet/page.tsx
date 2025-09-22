"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

function IntroduccionInternetContent() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">🌐 Introducción a Internet</h1>
        <p className="clase-subtitulo">
          Descubrí qué es Internet, cómo funciona y cómo usarlo de forma responsable
        </p>
      </section>

      {/* Sección 1 – ¿Qué es Internet? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es Internet?</h2>
        <p>
          Internet es una red mundial de computadoras conectadas entre sí.<br />
          Gracias a Internet, podemos buscar información, comunicarnos y compartir archivos en cualquier parte del mundo.
        </p>
        <p className="tip">👉 Es como una autopista de la información.</p>
      </section>

      {/* Sección 2 – ¿Para qué sirve? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. ¿Para qué sirve Internet?</h2>
        <ul>
          <li><strong>Buscar información</strong> (Google, Wikipedia).</li>
          <li><strong>Comunicación</strong> (WhatsApp, correo electrónico, videollamadas).</li>
          <li><strong>Entretenimiento</strong> (YouTube, juegos en línea, música).</li>
          <li><strong>Educación</strong> (aulas virtuales, cursos, tutoriales).</li>
          <li><strong>Trabajo</strong> (oficinas virtuales, reuniones online).</li>
        </ul>
      </section>

      {/* Sección 3 – ¿Cómo funciona? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. ¿Cómo funciona Internet?</h2>
        <ol>
          <li>Tu computadora o celular se conecta a un <strong>proveedor de internet (ISP)</strong> como Movistar, Claro, etc.</li>
          <li>El ISP conecta tu equipo a la red mundial.</li>
          <li>A través de navegadores (Google Chrome, Edge, Firefox) podés visitar páginas web.</li>
        </ol>
        <p className="tip">
          👉 Cada página tiene una dirección única llamada <strong>URL</strong> (ejemplo: <code>www.google.com</code>).
        </p>
      </section>

      {/* Sección 4 – Servicios más usados */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Servicios más usados de Internet</h2>
        <ul>
          <li><strong>Navegación web</strong> → visitar páginas y buscar información.</li>
          <li><strong>Correo electrónico</strong> → enviar y recibir mensajes (Gmail, Outlook).</li>
          <li><strong>Redes sociales</strong> → Facebook, Instagram, TikTok.</li>
          <li><strong>Videollamadas</strong> → Zoom, Meet, WhatsApp.</li>
          <li><strong>Almacenamiento en la nube</strong> → Google Drive, OneDrive.</li>
          <li><strong>Streaming</strong> → ver videos, música y películas en línea.</li>
        </ul>
      </section>

      {/* Sección 5 – Ventajas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Ventajas de Internet</h2>
        <ul>
          <li>✅ Información rápida y actualizada.</li>
          <li>✅ Comunicación instantánea en todo el mundo.</li>
          <li>✅ Acceso a educación y cursos.</li>
          <li>✅ Entretenimiento variado.</li>
          <li>✅ Facilita el trabajo y el comercio.</li>
        </ul>
      </section>

      {/* Sección 6 – Desventajas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Desventajas de Internet</h2>
        <ul>
          <li>⚠️ Peligros de ciberacoso.</li>
          <li>⚠️ Adicción al uso excesivo (redes, juegos).</li>
          <li>⚠️ Información falsa (fake news).</li>
          <li>⚠️ Virus y fraudes.</li>
        </ul>
        <p className="tip">👉 Por eso es importante usar Internet con responsabilidad.</p>
      </section>

      {/* Sección 7 – Consejos de uso responsable */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Consejos de uso responsable</h2>
        <ul>
          <li>No compartir datos personales con desconocidos.</li>
          <li>Usar contraseñas seguras.</li>
          <li>Verificar que la información sea confiable.</li>
          <li>No pasar demasiado tiempo conectado.</li>
        </ul>
      </section>

      {/* Sección 8 – Actividad para los alumnos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Actividad para los alumnos</h2>
        <div className="componente">
          <h3>En sus cuadernos:</h3>
          <ul>
            <li>Escribir 3 cosas positivas de Internet y 3 negativas.</li>
          </ul>
          <h3>En la computadora:</h3>
          <ul>
            <li>
              Abrir un navegador y entrar a{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.google.com
              </a>.
            </li>
            <li>
              Buscar: <strong>“Historia del Internet”</strong> y anotar un dato curioso.
            </li>
          </ul>
          <h3>Dinámica grupal:</h3>
          <ul>
            <li>
              Cada grupo arma un afiche en Canva sobre{" "}
              <strong>“Cómo usar Internet de manera segura”</strong>.
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 9 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>9. Resumen fácil de recordar</h2>
        <p className="conclusion">
          <strong>Internet</strong> = Red mundial de computadoras.<br />
          Sirve para comunicarnos, aprender, trabajar y divertirnos.<br />
          Tiene ventajas y desventajas.<br />
          👉 Usar siempre Internet de manera responsable.
        </p>
      </section>

      {/* ✅ Botón dinámico */}
      <div
        className="clase-seccion cuadro-rebote clase-footer"
        data-aos="fade-up"
      >
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}

export default function IntroduccionInternetPage() {
  return (
    <Suspense fallback={<div className="cargando">⏳ Cargando clase...</div>}>
      <IntroduccionInternetContent />
    </Suspense>
  );
}
