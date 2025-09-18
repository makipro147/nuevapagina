"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";

export default function GuiaCanvaPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Guía Canva – Presentación paso a paso</h1>
        <p className="clase-subtitulo">
          Aprende a crear tu primera presentación con 7 diapositivas
        </p>
      </section>

      {/* Sección 1 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. Abrir y crear</h2>
        <ol>
          <li>Entra a <strong>www.canva.com</strong> → “Crear diseño” → escribe “Presentación” → elige (16:9).</li>
          <li>Ya estás en el <strong>Editor</strong>; lo más importante está señalado abajo.</li>
        </ol>
      </section>

      {/* Sección 2 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Mapa de la pantalla</h2>
        <table className="clase-tabla">
          <thead>
            <tr><th>Zona</th><th>Para qué sirve</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Barra izq.</strong></td><td>Plantillas, Elementos, Texto, Subidas, Archivos</td></tr>
            <tr><td><strong>Lienzo central</strong></td><td>Diapositiva activa; pincha para cambiar texto o foto</td></tr>
            <tr><td><strong>Barra sup.</strong></td><td>Deshacer, Presentar, Compartir, Descargar</td></tr>
            <tr><td><strong>Miniaturas der.</strong></td><td>Ver todo el deck; arrastra para cambiar orden</td></tr>
          </tbody>
        </table>
      </section>

      {/* Sección 3 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Las 7 herramientas esenciales</h2>
        <table className="clase-tabla">
          <thead>
            <tr><th>Herramienta</th><th>Cómo se usa</th><th>Truco lento</th></tr>
          </thead>
          <tbody>
            <tr><td>1. Plantillas</td><td>Barra izq. → “Plantillas”</td><td>Mira PREVIEW antes de elegir</td></tr>
            <tr><td>2. Texto</td><td>“Texto” → “Agregar un título”</td><td>Usa MAYÚS para mayúsculas</td></tr>
            <tr><td>3. Elementos</td><td>“Elementos” → líneas y formas</td><td>Cambia color con la muestra arriba</td></tr>
            <tr><td>4. Subidas</td><td>“Subidas” → “Cargar archivo”</td><td>Arrastra al lienzo, usa esquinas</td></tr>
            <tr><td>5. Fondo</td><td>Click fuera de texto → “Color de fondo”</td><td>Usa la paleta de la escuela</td></tr>
            <tr><td>6. Añadir diap.</td><td>Botón “+” entre miniaturas</td><td>Mantén mismo estilo</td></tr>
            <tr><td>7. Presentar/Descargar</td><td>Arriba derecha ▶ o ↓</td><td>Elige PDF o PPTX</td></tr>
          </tbody>
        </table>
      </section>

      {/* Sección 4 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Secuencia de 7 diapositivas</h2>
        <table className="clase-tabla">
          <thead>
            <tr><th>Diap.</th><th>Título sugerido</th><th>Contenido mínimo</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Portada</td><td>Título llamativo + nombre + imagen</td></tr>
            <tr><td>2</td><td>¿Por qué elegí el tema?</td><td>1 foto + 1 frase corta</td></tr>
            <tr><td>3</td><td>Idea principal</td><td>Texto grande: “Mi idea es…”</td></tr>
            <tr><td>4</td><td>Razón 1 + imagen</td><td>Icono o foto</td></tr>
            <tr><td>5</td><td>Razón 2 + dato</td><td>Gráfico de Canva</td></tr>
            <tr><td>6</td><td>Ejemplo personal</td><td>Foto propia o del tema</td></tr>
            <tr><td>7</td><td>Invitación / Cierre</td><td>Pregunta o llamado a la acción</td></tr>
          </tbody>
        </table>
        <p className="tip">💡 Usa la misma tipografía y paleta en todas las diapositivas.</p>
      </section>

      {/* Sección 5 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Descargar y presentar</h2>
        <ol>
          <li>Arriba-dcha. → “Compartir” → “Descargar”.</li>
          <li>Elige: PDF estándar, MP4 o PPTX.</li>
          <li>Para presentar: botón “Presentar” en Canva, o abre el PDF con F5.</li>
        </ol>
      </section>

      {/* Sección 6 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Mini-rúbrica de autoevaluación</h2>
        <table className="clase-tabla">
          <thead>
            <tr><th>Ítem</th><th>Pregunta</th><th>¿Lo logré?</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>¿Tengo exactamente 7 diapositivas?</td><td>✔ / ✘</td></tr>
            <tr><td>2</td><td>¿El título llama la atención?</td><td>✔ / ✘</td></tr>
            <tr><td>3</td><td>¿Usé mi propia foto?</td><td>✔ / ✘</td></tr>
            <tr><td>4</td><td>¿Solo usé 3-4 colores?</td><td>✔ / ✘</td></tr>
            <tr><td>5</td><td>¿La diap. 7 invita a pensar?</td><td>✔ / ✘</td></tr>
            <tr><td>6</td><td>¿Está guardado en PDF con mi nombre?</td><td>✔ / ✘</td></tr>
          </tbody>
        </table>
      </section>

      {/* Sección 7 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>7. Chuleta rápida de atajos</h2>
        <ul>
          <li><strong>Ctrl + Z</strong> = deshacer</li>
          <li><strong>Ctrl + D</strong> = duplicar</li>
          <li><strong>Ctrl + G</strong> = agrupar</li>
          <li><strong>Flechas</strong> = mover 1 px</li>
          <li><strong>Mayús + flechas</strong> = mover 10 px</li>
        </ul>
      </section>

      {/* Footer */}
      <div className="clase-footer" data-aos="fade-up">
        <Link href="/alumno/clases?grado=1" className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}
