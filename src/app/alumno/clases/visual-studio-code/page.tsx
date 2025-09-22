"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

// 👉 Componente con toda la lógica
function VisualStudioCodePageContent() {
  const grado = useGradoFromUrl(); // grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []); // ✅ sin dependencias innecesarias

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">💻 Guía: Visual Studio Code (VS Code)</h1>
        <p className="clase-subtitulo">
          Aprendé a usar el editor de código más popular del mundo
        </p>
      </section>

      {/* Sección 1 – ¿Qué es VS Code? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es Visual Studio Code?</h2>
        <p>
          Visual Studio Code (VS Code) es un editor de código gratuito creado
          por Microsoft.
        </p>
        <ul>
          <li>
            Sirve para escribir programas en muchos lenguajes (Python,
            JavaScript, C++, etc.).
          </li>
          <li>
            Es muy usado porque es rápido, liviano y fácil de personalizar.
          </li>
          <li className="tip">
            👉 Piensa en VS Code como un cuaderno inteligente donde los
            programadores escriben sus instrucciones.
          </li>
        </ul>
      </section>

      {/* Sección 2 – ¿Por qué usar VS Code? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. ¿Por qué usar VS Code?</h2>
        <ul>
          <li>✅ Gratuito.</li>
          <li>✅ Compatible con Windows, Mac y Linux.</li>
          <li>✅ Soporta muchos lenguajes.</li>
          <li>
            ✅ Se puede personalizar con extensiones (para hacerlo más bonito y
            útil).
          </li>
          <li>
            ✅ Tiene autocompletado de código, depuración y herramientas para
            programar mejor.
          </li>
        </ul>
      </section>

      {/* Sección 3 – ¿Qué son las extensiones? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. ¿Qué son las extensiones?</h2>
        <p>
          Las extensiones son como aplicaciones extras que mejoran a VS Code.
        </p>
        <div className="componente">
          <h3>Ejemplos útiles:</h3>
          <ul>
            <li>
              <strong>Material Icon Theme</strong> → cambia los íconos de
              carpetas y archivos.
            </li>
            <li>
              <strong>Python</strong> → permite programar en Python con ayuda.
            </li>
            <li>
              <strong>Prettier</strong> → organiza y da formato bonito al
              código.
            </li>
            <li>
              <strong>Live Server</strong> → para ver páginas web en tiempo
              real.
            </li>
          </ul>
        </div>
      </section>

      {/* Sección 4 – Instalar extensiones */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Paso a paso: Instalar extensiones en VS Code</h2>
        <ol>
          <li>Abre Visual Studio Code.</li>
          <li>
            En la barra izquierda, hacé clic en el ícono de cuadrados
            (Extensiones) o presioná <kbd>Ctrl + Shift + X</kbd>.
          </li>
          <li>
            En la barra de búsqueda, escribí el nombre de la extensión (ejemplo:
            Material Icon Theme).
          </li>
          <li>Hacé clic en <strong>Instalar</strong>.</li>
          <li>¡Listo! Ya está activa.</li>
        </ol>
        <div className="componente">
          <h3>👉 Para usar Material Icon Theme:</h3>
          <ol>
            <li>Luego de instalar, presioná <kbd>Ctrl + Shift + P</kbd></li>
            <li>Buscá "Material Icon Theme"</li>
            <li>Elegí un estilo de íconos</li>
            <li>
              Los íconos de tus carpetas y archivos cambiarán automáticamente.
            </li>
          </ol>
        </div>
      </section>

      {/* Sección 5 – Cambiar idioma */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Cómo poner VS Code en español</h2>
        <ol>
          <li>Abre VS Code.</li>
          <li>Ve a la sección de Extensiones.</li>
          <li>
            Buscá <strong>Spanish Language Pack for Visual Studio Code</strong>.
          </li>
          <li>Instalalo.</li>
          <li>Reiniciá VS Code.</li>
        </ol>
        <p className="tip">
          👉 Ahora los menús y mensajes estarán en español.
        </p>
      </section>

      {/* Sección 6 – Actividad */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Actividad para los alumnos</h2>
        <div className="componente">
          <ol>
            <li>Abrir VS Code.</li>
            <li>
              Instalar la extensión <strong>Material Icon Theme</strong>.
            </li>
            <li>Cambiar el idioma a español.</li>
            <li>
              Crear una carpeta llamada <code>Proyecto1</code> y dentro un
              archivo <code>hola.txt</code>.
            </li>
            <li>
              Observar cómo el ícono del archivo y carpeta cambian con el nuevo
              tema.
            </li>
          </ol>
        </div>
      </section>

      {/* Sección 7 – Resumen */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Resumen fácil de recordar</h2>
        <p className="conclusion">
          VS Code = editor gratuito para programar.
          <br />
          Extensiones = extras para personalizar y mejorar (ejemplo: Material
          Icon Theme).
          <br />
          Para instalarlas: <kbd>Ctrl + Shift + X</kbd> → buscar → instalar.
          <br />
          Se puede cambiar al idioma español con la extensión{" "}
          <strong>Spanish Language Pack</strong>.
        </p>
      </section>

      {/* Botón dinámico */}
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

// 👉 Se exporta envuelto en Suspense (arregla el error en build)
export default function VisualStudioCodePage() {
  return (
    <Suspense fallback={<div>Cargando clase...</div>}>
      <VisualStudioCodePageContent />
    </Suspense>
  );
}
