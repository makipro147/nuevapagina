"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Carrusel3D from "./Carrusel3D";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

function ContenidoClase() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">
          Cómo crear un video en Canva (gratis y dinámico)
        </h1>
        <p className="clase-subtitulo">
          Aprendé paso a paso a diseñar un video atractivo usando Canva sin pagar nada
        </p>
      </section>

      {/* Carrusel 3D */}
      <Carrusel3D />

      {/* Sección 1 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. Entrar a Canva</h2>
        <ol>
          <li>Abrí el navegador (Chrome, Firefox, etc.).</li>
          <li>
            Escribí <code>www.canva.com</code> en la barra y presioná Enter.
          </li>
          <li>Iniciá sesión con tu cuenta de Gmail o registrate gratis.</li>
          <li>
            👉 Usá siempre la versión <strong>gratuita</strong>.
          </li>
        </ol>
      </section>

      {/* Sección 2 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Crear un diseño de video</h2>
        <ol>
          <li>En el buscador de Canva escribí: <strong>"video"</strong>.</li>
          <li>
            Elegí la opción: <strong>Video 1920x1080</strong> (formato estándar).
          </li>
          <li>Se abrirá el editor con un lienzo en blanco.</li>
        </ol>
      </section>

      {/* Sección 3 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Insertar plantillas</h2>
        <ol>
          <li>En el panel izquierdo, hacé clic en <strong>Plantillas</strong>.</li>
          <li>Buscá un estilo que te guste (ej: "moderno", "educativo").</li>
          <li>
            Aplicá la plantilla a todas las páginas o a una sola escena.
          </li>
        </ol>
      </section>

      {/* Sección 4 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Agregar texto</h2>
        <ol>
          <li>Seleccioná <strong>Texto</strong> en el panel izquierdo.</li>
          <li>Elegí un título llamativo y colócalo en la primera escena.</li>
          <li>
            Usá fuentes fáciles de leer como <strong>Arial</strong> o{" "}
            <strong>Poppins</strong>.
          </li>
        </ol>
      </section>

      {/* Sección 5 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Insertar imágenes y videos</h2>
        <ol>
          <li>
            Hacé clic en <strong>Elementos</strong> y buscá imágenes libres de
            derechos.
          </li>
          <li>
            También podés subir tus propias fotos con el botón{" "}
            <strong>Subidos</strong>.
          </li>
          <li>Arrastrá las imágenes al lienzo y ajustalas al diseño.</li>
        </ol>
      </section>

      {/* Sección 6 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Agregar música</h2>
        <ol>
          <li>En el panel izquierdo, buscá la pestaña <strong>Audio</strong>.</li>
          <li>
            Elegí una canción gratuita de la librería o subí un archivo MP3.
          </li>
          <li>
            Ajustá la duración de la música para que coincida con tu video.
          </li>
        </ol>
      </section>

      {/* Sección 7 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>7. Descargar el video</h2>
        <ol>
          <li>
            En la esquina superior derecha, hacé clic en{" "}
            <strong>Compartir → Descargar</strong>.
          </li>
          <li>
            Elegí el formato <strong>MP4 Video</strong>.
          </li>
          <li>Presioná <strong>Descargar</strong> y guardá tu archivo.</li>
        </ol>
      </section>

      {/* Actividad final */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>📽️ Actividad final</h2>
        <p className="conclusion">
          Creá un video en Canva con 7 escenas usando texto, imágenes y audio.
          <br />
          ✅ Subilo a Drive o mandalo por WhatsApp al profe.
        </p>
      </section>

      {/* ✅ Botón dinámico */}
      <div className="clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}

export default function CrearVideoCanvaPage() {
  return (
    <Suspense fallback={<p>Cargando contenido...</p>}>
      <ContenidoClase />
    </Suspense>
  );
}
