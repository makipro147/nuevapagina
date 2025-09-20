"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function IndicacionesProyectoPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Indicaciones para tu Proyecto</h1>
        <p className="clase-subtitulo">
          Elegí un tema, justificá tu elección, creá un título llamativo y argumentá tus ideas
        </p>
      </section>

      {/* Sección 1 – Elegí tu tema */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. Elegí tu tema</h2>
        <div className="componente" data-aos="fade-right">
          <h3>📌 Paso a paso</h3>
          <ol>
            <li>Pensá en lo que te <strong>gusta o vivís a diario</strong>.</li>
            <li>Elegí algo sobre lo que puedas <strong>opinar y dar ejemplos</strong>.</li>
            <li>Anotalo: “Mi tema es: _____________”.</li>
          </ol>
        </div>
      </section>

      {/* Sección 2 – ¿Por qué lo elegís? */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. ¿Por qué lo elegís?</h2>
        <div className="componente" data-aos="fade-left">
          <h3>💡 Respondé en una línea</h3>
          <ol>
            <li>Escribí una frase que empiece con <strong>PORQUE…</strong></li>
            <li>Usá letras mayúsculas si querés destacar.</li>
            <li>Ejemplos: <code>PORQUE ME GUSTA</code> / <code>PORQUE ES IMPORTANTE PARA MI BARRIO</code>.</li>
          </ol>
        </div>
      </section>

      {/* Sección 3 – Creá un título llamativo */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Creá un título llamativo</h2>
        <div className="componente" data-aos="fade-right">
          <h3>🎯 Consejos rápidos</h3>
          <ol>
            <li>Que sea una <strong>pregunta, reto o invitación</strong>.</li>
            <li>Máximo 14 palabras.</li>
            <li>Incluí el tema. Ej.: <code>¿Por qué el fútbol une a mi barrio?</code></li>
          </ol>
        </div>
      </section>

      {/* Sección 4 – Argumentá con tus palabras */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Argumentá con tus palabras</h2>
        <div className="componente" data-aos="fade-left">
          <h3>🗣️ Estructura simple</h3>
          <ol>
            <li><strong>Intro:</strong> presentá el tema (1 oración).</li>
            <li><strong>Razones:</strong> 2-3 ideas que expliquen por qué te parece valioso.</li>
            <li><strong>Ejemplo:</strong> contá algo que te pasó o viste.</li>
            <li><strong>Cierre:</strong> invitá a reflexionar o actuar.</li>
          </ol>
        </div>
      </section>

      {/* Sección 5 – Plantilla para copiar y completar */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Plantilla para copiar y completar</h2>
        <div className="componente" data-aos="fade-right">
          <h3>📄 Guion listo</h3>
          <textarea
            rows={12}
            spellCheck={false}
            defaultValue={`TEMA: ___________________________

¿POR QUÉ LO ELEGÍ?
PORQUE ___________________________

TÍTULO LLAMATIVO:
_________________________________

ARGUMENTO:
[Intro] __________________________
[Razón 1] ________________________
[Razón 2] ________________________
[Ejemplo] ________________________
[Cierre] _________________________
            `}
            style={{ width: "100%", resize: "vertical", padding: "1rem" }}
          />
        </div>
      </section>

      {/* Sección 6 – Resumen y entrega */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Resumen y entrega</h2>
        <p className="conclusion">
          Ya tenés todo: tema, justificación, título y argumento.<br />
          ✅ <strong>Actividad:</strong> seguí la plantilla y guardá tu doc en Word.
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