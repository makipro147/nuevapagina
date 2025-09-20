"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function LenguajeHTMLPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">🌐 Guía: Lenguaje HTML</h1>
        <p className="clase-subtitulo">
          Aprendé a crear tu primera página web con HTML paso a paso
        </p>
      </section>

      {/* Sección 1 – ¿Qué es HTML? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es HTML?</h2>
        <p>
          HTML significa <strong>HyperText Markup Language</strong> (Lenguaje de Marcado de Hipertexto).
        </p>
        <ul>
          <li>Es el lenguaje básico para crear páginas web.</li>
          <li>Sirve para estructurar el contenido (textos, imágenes, enlaces, tablas, etc.).</li>
          <li className="tip">👉 HTML no es un lenguaje de programación, es un lenguaje de marcado.</li>
        </ul>
      </section>

      {/* Sección 2 – Estructura básica */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. Estructura básica de un documento HTML</h2>
        <div className="componente">
          <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mi primera página</title>
</head>
<body>
  <h1>¡Hola mundo!</h1>
  <p>Esta es mi primera página en HTML.</p>
</body>
</html>`}
          </pre>
        </div>
      </section>

      {/* Sección 3 – Principales etiquetas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Principales etiquetas de HTML</h2>

        <h3>🔹 Estructura general</h3>
        <ul>
          <li><code>&lt;!DOCTYPE html&gt;</code> → Indica que el documento es HTML5.</li>
          <li><code>&lt;html&gt;...&lt;/html&gt;</code> → Contiene todo el documento.</li>
          <li><code>&lt;head&gt;...&lt;/head&gt;</code> → Información de la página (no visible).</li>
          <li><code>&lt;body&gt;...&lt;/body&gt;</code> → Todo lo que se ve en la página.</li>
        </ul>

        <h3>🔹 Texto y encabezados</h3>
        <ul>
          <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> → Títulos (h1 = más grande).</li>
          <li><code>&lt;p&gt;</code> → Párrafo.</li>
          <li><code>&lt;br&gt;</code> → Salto de línea.</li>
          <li><code>&lt;hr&gt;</code> → Línea horizontal.</li>
          <li><code>&lt;strong&gt;</code> o <code>&lt;b&gt;</code> → Negrita.</li>
          <li><code>&lt;em&gt;</code> o <code>&lt;i&gt;</code> → Cursiva.</li>
          <li><code>&lt;u&gt;</code> → Subrayado.</li>
          <li><code>&lt;mark&gt;</code> → Resaltado.</li>
          <li><code>&lt;small&gt;</code> → Texto pequeño.</li>
          <li><code>&lt;sup&gt;</code> y <code>&lt;sub&gt;</code> → Superíndice y subíndice.</li>
        </ul>

        <h3>🔹 Listas</h3>
        <ul>
          <li><code>&lt;ul&gt;</code> → Lista desordenada (viñetas).</li>
          <li><code>&lt;ol&gt;</code> → Lista ordenada (números).</li>
          <li><code>&lt;li&gt;</code> → Elemento de la lista.</li>
        </ul>
        <div className="componente">
          <strong>Ejemplo:</strong>
          <pre>{`<ul>
  <li>Perú</li>
  <li>Chile</li>
  <li>Argentina</li>
</ul>`}</pre>
        </div>

        <h3>🔹 Enlaces e imágenes</h3>
        <ul>
          <li><code>&lt;a href="url"&gt;</code> → Enlace.</li>
          <li><code>&lt;img src="imagen.jpg" alt="texto"&gt;</code> → Imagen.</li>
        </ul>

        <h3>🔹 Tablas</h3>
        <ul>
          <li><code>&lt;table&gt;</code> → Tabla.</li>
          <li><code>&lt;tr&gt;</code> → Fila.</li>
          <li><code>&lt;td&gt;</code> → Celda.</li>
          <li><code>&lt;th&gt;</code> → Celda de encabezado.</li>
        </ul>
        <div className="componente">
          <strong>Ejemplo:</strong>
          <pre>{`<table border="1">
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Michael</td>
    <td>16</td>
  </tr>
</table>`}</pre>
        </div>

        <h3>🔹 Formularios</h3>
        <ul>
          <li><code>&lt;form&gt;</code> → Formulario.</li>
          <li><code>&lt;input&gt;</code> → Campo de entrada.</li>
          <li><code>&lt;textarea&gt;</code> → Área de texto.</li>
          <li><code>&lt;select&gt;</code> y <code>&lt;option&gt;</code> → Lista desplegable.</li>
          <li><code>&lt;button&gt;</code> → Botón.</li>
        </ul>
        <div className="componente">
          <strong>Ejemplo:</strong>
          <pre>{`<form>
  Nombre: <input type="text"><br>
  Contraseña: <input type="password"><br>
  <button type="submit">Enviar</button>
</form>`}</pre>
        </div>

        <h3>🔹 Multimedia</h3>
        <ul>
          <li><code>&lt;audio controls&gt;</code> → Audio.</li>
          <li><code>&lt;video controls&gt;</code> → Video.</li>
          <li><code>&lt;iframe&gt;</code> → Insertar otra página o video de YouTube.</li>
        </ul>

        <h3>🔹 Otros elementos útiles</h3>
        <ul>
          <li><code>&lt;div&gt;</code> → Contenedor genérico.</li>
          <li><code>&lt;span&gt;</code> → Contenedor en línea.</li>
          <li><code>&lt;nav&gt;</code> → Menú de navegación.</li>
          <li><code>&lt;header&gt;</code> → Encabezado de página.</li>
          <li><code>&lt;footer&gt;</code> → Pie de página.</li>
          <li><code>&lt;section&gt;</code> → Sección de contenido.</li>
          <li><code>&lt;article&gt;</code> → Artículo.</li>
          <li><code>&lt;aside&gt;</code> → Barra lateral.</li>
        </ul>
      </section>

      {/* Sección 4 – Actividad para los alumnos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Actividad para los alumnos</h2>
        <div className="componente">
          <ol>
            <li>Crear un archivo <code>index.html</code>.</li>
            <li>Dentro, hacer:
              <ul>
                <li>Un título con <code>&lt;h1&gt;</code>.</li>
                <li>Un párrafo explicando un tema que eligieron.</li>
                <li>Una imagen.</li>
                <li>Una lista de 3 cosas favoritas.</li>
                <li>Un enlace a Google.</li>
              </ul>
            </li>
            <li>Guardar y abrir en el navegador.</li>
          </ol>
        </div>
      </section>

      {/* Sección 5 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Resumen fácil de recordar</h2>
        <p className="conclusion">
          HTML = lenguaje de marcado para páginas web.<br />
          Estructura básica: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>.<br />
          Las etiquetas van entre <code>&lt; &gt;</code>.<br />
          Sirve para texto, imágenes, enlaces, tablas, formularios y multimedia.
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