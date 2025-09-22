"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

function ExploradorArchivosRARContent() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Explorador de Archivos y Compresión RAR</h1>
        <p className="clase-subtitulo">
          Aprendé a organizar, comprimir y proteger tus archivos como un profesional
        </p>
      </section>

      {/* Sección 1 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. ¿Qué es el Explorador de Archivos?</h2>
        <p>
          Es la herramienta de Windows que te permite <strong>ver, copiar, mover, eliminar y organizar</strong> archivos y carpetas.
        </p>
        <ul>
          <li>Accedé a discos, USB, carpetas y archivos.</li>
          <li>Buscá archivos por nombre o tipo.</li>
          <li>Abrilo con <kbd>Windows + E</kbd> o desde el icono de carpeta.</li>
        </ul>
      </section>

      {/* Sección 2 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Crear una carpeta</h2>
        <div className="componente" data-aos="fade-right">
          <h3>📂 Paso a paso</h3>
          <ol>
            <li>Abrí el Explorador (Windows + E).</li>
            <li>Navegá hasta Escritorio o Documentos.</li>
            <li>Hacé clic derecho → Nueva → Carpeta.</li>
            <li>Escribí el nombre (ej. <code>MisArchivos</code>) y presioná Enter.</li>
          </ol>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Comprimir la carpeta en RAR con WinRAR</h2>
        <div className="componente" data-aos="fade-left">
          <h3>📦 Usá WinRAR (debe estar instalado)</h3>
          <ol>
            <li>Hacé clic derecho sobre la carpeta.</li>
            <li>Seleccioná <strong>“Añadir al archivo...”</strong>.</li>
            <li>Elegí formato <strong>RAR</strong> y personalizá opciones.</li>
            <li>Poné nombre como <code>MisArchivos.rar</code>.</li>
          </ol>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Proteger con contraseña</h2>
        <div className="componente" data-aos="fade-right">
          <h3>🔑 Seguridad extra</h3>
          <ol>
            <li>En la ventana de WinRAR, pulsá <strong>“Establecer contraseña...”</strong>.</li>
            <li>Escribí la contraseña deseada.</li>
            <li>Marcá <strong>“Codificar nombres de archivo”</strong> (opcional).</li>
            <li>Aceptá y listo: tu <code>.rar</code> ahora está protegido.</li>
          </ol>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Eliminar la carpeta original (opcional)</h2>
        <div className="componente" data-aos="fade-left">
          <h3>🗑️ Liberá espacio</h3>
          <p>
            Una vez que verifiques que el <code>.rar</code> funciona, podés eliminar la carpeta original y vaciar la papelera.
          </p>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Descomprimir el archivo RAR</h2>
        <div className="componente" data-aos="fade-right">
          <h3>📂 Recuperá tus archivos</h3>
          <ol>
            <li>Hacé doble clic en <code>MisArchivos.rar</code>.</li>
            <li>Introducí la contraseña cuando te la pida.</li>
            <li>Seleccioná <strong>Extraer en...</strong> y elegí destino.</li>
            <li>¡Listo! Se crea la carpeta original con todo el contenido.</li>
          </ol>
        </div>
      </section>

      {/* Sección 7 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>7. Resumen y actividad</h2>
        <p className="conclusion">
          Ya sabés usar el Explorador, crear carpetas, comprimir en RAR, ponerle contraseña y descomprimir.  
          <br />
          ✅ <strong>Actividad:</strong> Creá una carpeta con tu nombre, comprimilá en RAR con contraseña y subí la evidencia.
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

export default function ExploradorArchivosRARPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ExploradorArchivosRARContent />
    </Suspense>
  );
}
