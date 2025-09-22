"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

function WindowsContent() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Guía: El Sistema Operativo Windows</h1>
        <p className="clase-subtitulo">
          Conocé cómo funciona Windows, sus partes y por qué es esencial para usar la computadora
        </p>
      </section>

      {/* Sección 1 – Introducción */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h2>1. ¿Qué es un sistema operativo?</h2>
        <p>
          El sistema operativo (SO) es el programa principal que controla toda la computadora.<br />
          👉 Sin un SO, la computadora no funciona, porque no sabría cómo usar el hardware.
        </p>
      </section>

      {/* Sección 2 – ¿Qué es Windows? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. ¿Qué es Windows?</h2>
        <ul>
          <li>Windows es un sistema operativo creado por Microsoft.</li>
          <li>Es el más usado en el mundo en computadoras personales.</li>
          <li>Su característica principal es que trabaja con ventanas, iconos y menús fáciles de usar.</li>
        </ul>
      </section>

      {/* Sección 3 – Versiones principales */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Versiones principales de Windows</h2>
        <ul>
          <li><strong>Windows 95, 98, XP</strong> → versiones antiguas.</li>
          <li><strong>Windows 7</strong> → muy popular en su tiempo.</li>
          <li><strong>Windows 8 / 8.1</strong> → con pantalla de inicio.</li>
          <li><strong>Windows 10</strong> → todavía muy usado.</li>
          <li><strong>Windows 11</strong> → el más nuevo (hasta 2025).</li>
        </ul>
        <p>👉 Cada versión trae mejoras en rapidez, seguridad y diseño.</p>
      </section>

      {/* Sección 4 – Elementos de Windows */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Elementos principales de Windows</h2>
        <div className="componente">
          <ul>
            <li><strong>Escritorio</strong> → la pantalla principal, donde están los iconos y el fondo.</li>
            <li><strong>Iconos</strong> → pequeños dibujos que representan programas, carpetas o archivos.</li>
            <li><strong>Barra de tareas</strong> → está abajo, muestra programas abiertos, la hora y accesos rápidos.</li>
            <li><strong>Botón de inicio</strong> → el logo de Windows, sirve para abrir programas y configuraciones.</li>
            <li><strong>Ventanas</strong> → cada programa se abre en una ventana que podés mover, agrandar o cerrar.</li>
          </ul>
        </div>
      </section>

      {/* Sección 5 – Funciones básicas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Funciones básicas de Windows</h2>
        <ul>
          <li>Encender y apagar la computadora de forma correcta.</li>
          <li>Abrir programas como Word, Paint, Google Chrome.</li>
          <li>Crear carpetas y guardar archivos.</li>
          <li>Personalizar el fondo de escritorio y los colores.</li>
          <li>Configurar internet, impresoras y sonido.</li>
        </ul>
      </section>

      {/* Sección 6 – ¿Por qué es importante? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. ¿Por qué es importante Windows?</h2>
        <ul>
          <li>Es fácil de usar (con iconos y ventanas).</li>
          <li>Permite usar miles de programas.</li>
          <li>Es compatible con la mayoría de computadoras.</li>
          <li>Tiene actualizaciones para mayor seguridad.</li>
        </ul>
      </section>

      {/* Sección 7 – Actividad práctica */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Actividad práctica para tus alumnos</h2>
        <div className="componente">
          <h3>En la computadora:</h3>
          <ul>
            <li>Encender Windows y observar el escritorio.</li>
            <li>Identificar: Escritorio, Iconos, Barra de tareas, Botón inicio.</li>
            <li>Crear una carpeta con su nombre en el escritorio.</li>
            <li>Guardar un archivo de Word o Paint dentro.</li>
          </ul>
          <h3>En su cuaderno:</h3>
          <ul>
            <li>Dibujar la pantalla de Windows y señalar sus partes.</li>
          </ul>
        </div>
      </section>

      {/* Sección 8 – Ejemplo comparativo */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Ejemplo comparativo (para que entiendan)</h2>
        <div className="componente">
          <p>
            El sistema operativo es como el <strong>director de un colegio</strong>:
          </p>
          <ul>
            <li>Ordena y organiza todo.</li>
            <li>Dice qué hacer a cada profesor (hardware).</li>
            <li>Hace que los alumnos (software) puedan trabajar en orden.</li>
          </ul>
          <p>👉 Sin director (sistema operativo), el colegio (computadora) sería un caos.</p>
        </div>
      </section>

      {/* Sección 9 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>9. Resumen fácil de recordar</h2>
        <p className="conclusion">
          <strong>Windows</strong> = Sistema Operativo de Microsoft.<br />
          Nos deja usar la computadora de manera sencilla.<br />
          Sus partes más importantes: escritorio, iconos, barra de tareas, botón inicio.<br />
          Sin Windows, no podrías abrir Word, jugar o conectarte a internet.
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

export default function WindowsPage() {
  return (
    <Suspense fallback={<p className="loading">Cargando contenido...</p>}>
      <WindowsContent />
    </Suspense>
  );
}
