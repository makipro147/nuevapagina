"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Carrusel3D from "./Carrusel3D.jsx";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function HardwareSoftwarePage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">¿Qué es Hardware y Software?</h1>
        <p className="clase-subtitulo">
          Descubrí la diferencia entre lo que podés tocar y lo que hace funcionar a tu computadora
        </p>
      </section>

      {/* Sección 1 – Introducción */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. Introducción</h2>
        <p>
          La computadora es como una persona:
        </p>
        <ul>
          <li><strong>Hardware</strong> es el cuerpo (las partes físicas que se pueden tocar).</li>
          <li><strong>Software</strong> es la mente (los programas e instrucciones que hacen funcionar al cuerpo).</li>
        </ul>
      </section>

      {/* Sección 2 – Hardware */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Hardware (lo que podés tocar)</h2>
        <div className="componente" data-aos="fade-right">
          <p>Es todo lo físico de la computadora.</p>
          <h3>Ejemplos:</h3>
          <ul>
            <li><strong>CPU</strong> → el cerebro de la PC.</li>
            <li><strong>Monitor</strong> → la pantalla.</li>
            <li><strong>Teclado</strong> → para escribir.</li>
            <li><strong>Mouse</strong> → para mover el cursor.</li>
            <li><strong>Impresora</strong> → para sacar en papel.</li>
            <li><strong>Disco duro / SSD</strong> → donde se guarda la información.</li>
            <li><strong>Memoria RAM</strong> → donde se guarda lo que usás en el momento.</li>
          </ul>
          <p>👉 Sin hardware, no habría computadora.</p>
        </div>
      </section>

      {/* Sección 3 – Software */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Software (lo que no podés tocar)</h2>
        <div className="componente" data-aos="fade-left">
          <p>Es el conjunto de programas e instrucciones que hacen funcionar al hardware.</p>
          <h3>Tipos de software:</h3>
          <ul>
            <li><strong>Software de sistema</strong> → hace que la PC funcione.<br />Ejemplo: Windows, Linux, macOS.</li>
            <li><strong>Software de aplicación</strong> → programas que usamos para trabajar o divertirnos.<br />Ejemplo: Word, Excel, Paint, Google Chrome, WhatsApp, videojuegos.</li>
            <li><strong>Software de programación</strong> → para crear otros programas.<br />Ejemplo: Python, Java, C++.</li>
          </ul>
          <p>👉 Sin software, el hardware sería como un cuerpo sin mente.</p>
        </div>
      </section>

      {/* Sección 4 – Relación entre ambos */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Relación entre hardware y software</h2>
        <ul>
          <li>El <strong>hardware</strong> necesita al <strong>software</strong> para funcionar (ej.: un celular sin apps no sirve).</li>
          <li>El <strong>software</strong> necesita al <strong>hardware</strong> para ejecutarse (ej.: no podés usar Word sin una computadora).</li>
        </ul>
      </section>

      {/* Sección 5 – Ejemplo práctico */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Ejemplo práctico (para entenderlo fácil)</h2>
        <div className="componente" data-aos="fade-right">
          <p>Imagina un celular:</p>
          <ul>
            <li><strong>Hardware:</strong> la pantalla, la batería, la cámara.</li>
            <li><strong>Software:</strong> WhatsApp, YouTube, el sistema Android.</li>
          </ul>
          <p>
            Si tenés solo el celular (hardware), no podés chatear.<br />
            Si tenés solo WhatsApp (software), no sirve sin celular.<br />
            👉 ¡Necesitan trabajar juntos!
          </p>
        </div>
      </section>

      {/* Sección 6 – Actividad para los alumnos */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Actividad para los alumnos</h2>
        <div className="componente" data-aos="fade-left">
          <h3>En sus cuadernos:</h3>
          <ul>
            <li>Dibujar una computadora.</li>
            <li>Colorear y señalar sus partes (hardware).</li>
            <li>Escribir al costado qué software usan más (Word, Google, juegos, etc.).</li>
          </ul>
          <h3>En clase:</h3>
          <ul>
            <li>Cada alumno dice un ejemplo de hardware y uno de software que usa todos los días.</li>
          </ul>
          <h3>Extra:</h3>
          <p>Crear en Canva un afiche que diga:</p>
          <blockquote>
            “Hardware = lo que toco”<br />
            “Software = lo que uso”
          </blockquote>
        </div>
      </section>

      {/* Sección 7 – Resumen fácil */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>7. Resumen fácil de recordar</h2>
        <p className="conclusion">
          <strong>Hardware</strong> = partes físicas (teclado, mouse, pantalla).<br />
          <strong>Software</strong> = programas (Word, juegos, navegador).<br />
          Los dos juntos hacen posible que la computadora funcione.
        </p>
      </section>

      {/* Carrusel 3D al final */}
      <Carrusel3D />

      {/* ✅ Botón dinámico */}
      <div className="clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}