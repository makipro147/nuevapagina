"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function LenguajesProgramacionPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">💻 Guía: Los Lenguajes de Programación</h1>
        <p className="clase-subtitulo">
          Descubrí cómo hablarle a la computadora y crear tus propios programas
        </p>
      </section>

      {/* Sección 1 – ¿Qué es un lenguaje de programación? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es un lenguaje de programación?</h2>
        <p>
          Es un idioma especial que usamos para dar instrucciones a la computadora y que realice tareas.
        </p>
        <ul>
          <li>👉 Así como hablamos español o inglés para comunicarnos con las personas, usamos lenguajes de programación para comunicarnos con las computadoras.</li>
        </ul>
      </section>

      {/* Sección 2 – ¿Para qué sirve? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. ¿Para qué sirve un lenguaje de programación?</h2>
        <ul>
          <li>Crear programas (Word, juegos, apps).</li>
          <li>Diseñar páginas web.</li>
          <li>Hacer aplicaciones móviles.</li>
          <li>Controlar robots y dispositivos electrónicos.</li>
          <li>Analizar datos y resolver problemas.</li>
        </ul>
      </section>

      {/* Sección 3 – Tipos de lenguajes */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Tipos de lenguajes de programación</h2>
        <p>Existen muchos lenguajes, cada uno con su función principal:</p>
        <ul>
          <li><strong>Python</strong> → fácil de aprender, usado en ciencia de datos, inteligencia artificial y web.</li>
          <li><strong>Java</strong> → usado en apps, videojuegos y sistemas grandes.</li>
          <li><strong>C y C++</strong> → muy rápidos, para sistemas operativos y juegos.</li>
          <li><strong>JavaScript</strong> → para páginas web interactivas.</li>
          <li><strong>PHP</strong> → para páginas dinámicas y bases de datos.</li>
          <li><strong>Scratch</strong> → lenguaje gráfico para principiantes (bloques de colores).</li>
        </ul>
      </section>

      {/* Sección 4 – ¿Cómo entiende la computadora? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. ¿Cómo entienden las computadoras los lenguajes?</h2>
        <ol>
          <li>El programador escribe el código en un lenguaje (ejemplo: Python).</li>
          <li>El compilador o intérprete traduce ese código a lenguaje máquina (ceros y unos).</li>
          <li>La computadora ejecuta la orden.</li>
        </ol>
        <div className="componente">
          <p><strong>Ejemplo en Python:</strong></p>
          <code>print("Hola Mundo")</code>
          <p>La computadora muestra en pantalla:</p>
          <strong>Hola Mundo</strong>
        </div>
      </section>

      {/* Sección 5 – Ventajas de aprender programación */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Ventajas de aprender programación</h2>
        <ul>
          <li>✅ Desarrolla el pensamiento lógico.</li>
          <li>✅ Permite crear aplicaciones y proyectos propios.</li>
          <li>✅ Es muy útil para el futuro laboral.</li>
          <li>✅ Da la posibilidad de automatizar tareas.</li>
        </ul>
      </section>

      {/* Sección 6 – Actividad práctica */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Actividad práctica para los alumnos</h2>
        <div className="componente">
          <h3>Explicación sencilla en clase:</h3>
          <p>Hacer la comparación: “El profe da instrucciones, ustedes las cumplen. Igual pasa con las computadoras”.</p>
          <h3>En la computadora (opcional con Scratch o Python online):</h3>
          <ul>
            <li>Escribir un programa que muestre un mensaje, por ejemplo:</li>
            <li><code>Hola, soy [nombre del alumno].</code></li>
          </ul>
          <h3>En el cuaderno:</h3>
          <ul>
            <li>Dibujar un robot y escribir 3 órdenes que le darían (ejemplo: caminar, encender luz, saludar).</li>
            <li>Luego, pensar qué lenguaje se usaría para programarlo.</li>
          </ul>
        </div>
      </section>

      {/* Sección 7 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Resumen fácil de recordar</h2>
        <p className="conclusion">
          Un lenguaje de programación es un idioma para hablar con la computadora.<br />
          Sirve para hacer programas, apps, juegos y páginas web.<br />
          Hay muchos: Python, Java, C++, JavaScript, Scratch.<br />
          👉 Programar desarrolla la lógica y prepara para el futuro.
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