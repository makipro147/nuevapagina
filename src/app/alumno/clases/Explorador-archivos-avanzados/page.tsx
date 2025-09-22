"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function ExploradorArchivosPage() {
  const grado = useGradoFromUrl();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">📁 Explorador de Archivos</h1>
        <p className="clase-subtitulo">
          Nivel “casi-experto” explicado como si fuera tu propia casa
        </p>
        {/* 👉 Imagen opcional */}
        {/* <img src="/images/explorador-hero.png" alt="Explorador de archivos" className="clase-img" /> */}
      </section>

      {/* 1. Qué es realmente */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es realmente?</h2>
        <p>
          Es la casa entera de tus archivos. Cada “disco” o “carpeta” es un cuarto.
          Dentro hay cajones (subcarpetas) y papeles (archivos).
        </p>
      </section>

      {/* 2. Los cuartos más importantes */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. Los “cuartos” que siempre verás</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Icono</th>
              <th>Nombre real</th>
              <th>Para qué sirve</th>
              <th>Ejemplo práctico</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>🏠</td><td>Inicio rápido</td><td>Atajo a lo más usado</td><td>Entrada principal de la escuela</td></tr>
            <tr><td>💾</td><td>Discos locales (C:, D:)</td><td>Armarios empotrados del disco</td><td>C: Windows / D: Tareas</td></tr>
            <tr><td>📱</td><td>USB</td><td>Cajón móvil</td><td>Llevar tu tarea a otra PC</td></tr>
            <tr><td>☁️</td><td>OneDrive</td><td>Armario en internet</td><td>Tarea en casa y escuela</td></tr>
            <tr><td>📥</td><td>Descargas</td><td>Entrada de paquetes</td><td>Todo lo que bajas de Chrome</td></tr>
            <tr><td>🖼️</td><td>Imágenes</td><td>Álbum familiar digital</td><td>Fotos del celular</td></tr>
            <tr><td>🎬</td><td>Vídeos</td><td>Cine personal</td><td>TikToks y grabaciones</td></tr>
          </tbody>
        </table>
        {/* 👉 Imagen opcional */}
        {<img src="/image/explorador.png" alt="Vista de carpetas" className="clase-img" />}
      </section>

      {/* 3. Vista de cuartos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Vista de “cuartos”</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Modo</th>
              <th>Cuándo usarlo</th>
              <th>Truco</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Iconos grandes</td><td>Para fotos</td><td>Miniaturas visibles</td></tr>
            <tr><td>Lista</td><td>Muchos archivos</td><td>Desplazamiento rápido</td></tr>
            <tr><td>Detalles</td><td>Para tareas</td><td>Fecha y tamaño</td></tr>
            <tr><td>Iconos medianos</td><td>Vista equilibrada</td><td>Más usada</td></tr>
            <tr><td>Contenido</td><td>Ver 1ª línea</td><td>Revisar sin abrir</td></tr>
          </tbody>
        </table>
        <p className="tip">👉 Atajo: Ctrl + rueda del mouse para cambiar tamaño de iconos.</p>
      </section>

      {/* 4. Barra de herramientas oculta */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Barra de herramientas oculta</h2>
        <ul>
          <li>✔ Mostrar extensiones de archivo (.docx, .jpg)</li>
          <li>✔ Mostrar archivos ocultos</li>
          <li>✘ No ocultar extensiones conocidas</li>
        </ul>
      </section>

      {/* 5. Columna detalles */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Columna “Detalles”</h2>
        <p>Tamaño, fecha, autor → todo sin abrir el archivo.</p>
      </section>

      {/* 6. Ordenar y buscar */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Ordenar y buscar como ninja</h2>
        <ul>
          <li>Clic en columnas → ordena.</li>
          <li>Buscar *.pptx → todas las presentaciones.</li>
          <li>Buscar tarea espa → encuentra “tarea español.docx”.</li>
        </ul>
      </section>

      {/* 7. Rutas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Rutas</h2>
        <p>La barra superior muestra la dirección completa. Puedes copiarla y pegarla en WhatsApp.</p>
      </section>

      {/* 8. Acciones masivas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Acciones masivas</h2>
        <ul>
          <li>Ctrl + clic → varios archivos.</li>
          <li>Mayús + clic → bloque continuo.</li>
          <li>Ctrl + C / X / V → copiar, cortar, pegar.</li>
          <li>Supr → papelera | Mayús + Supr → borrar directo.</li>
        </ul>
      </section>

      {/* 9. Compresión */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>9. Compresión y extracción</h2>
        <p>Comprime en .zip para enviar todo junto. Extraer arrastrando fuera.</p>
      </section>

      {/* 10. Atajos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>10. Atajos de teclado</h2>
        <table className="tabla">
          <thead>
            <tr><th>Teclas</th><th>Acción</th></tr>
          </thead>
          <tbody>
            <tr><td>Alt + ←</td><td>Atrás</td></tr>
            <tr><td>Alt + →</td><td>Adelante</td></tr>
            <tr><td>F2</td><td>Renombrar</td></tr>
            <tr><td>Ctrl + Z</td><td>Deshacer</td></tr>
            <tr><td>Ctrl + Mayús + N</td><td>Nueva carpeta</td></tr>
          </tbody>
        </table>
      </section>

      {/* 11. Qué no tocar */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>11. Qué NO tocar</h2>
        <ul>
          <li>C:\Windows → tablero eléctrico</li>
          <li>.dll y .sys → si los borras, Windows no arranca</li>
          <li>OneDrive personales → borrar aquí lo borra en todos lados</li>
        </ul>
      </section>

      {/* 12. Mini-reto */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>12. Mini-reto (10 min)</h2>
        <ol>
          <li>Entrar a Descargas y ordenar por fecha.</li>
          <li>Crear carpeta “Trabajos esta semana”.</li>
          <li>Mover 3 archivos recientes.</li>
          <li>Comprimir → renombrar: ApellidoNombre_Semana8.zip</li>
          <li>Copiar ruta y pegar en un Word.</li>
        </ol>
      </section>

      {/* Footer */}
      <div className="clase-seccion clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}
