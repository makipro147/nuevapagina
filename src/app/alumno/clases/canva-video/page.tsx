"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Carrusel3D from "./Carrusel3D";   // <- NUEVA LÍNEA
import Link from "next/link";

export default function CrearVideoCanvaPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <div className="clase-completa-container">
        
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Cómo crear un video en Canva (gratis y dinámico)</h1>
        <p className="clase-subtitulo">
          Aprendé paso a paso a diseñar un video atractivo usando Canva sin pagar nada
        </p>
      </section>

      {/* Sección 1 */}
      {/* 🎯 CARRUSEL 3D – NUEVO */}
      <Carrusel3D />

      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. Entrar a Canva</h2>
        <ol>
          <li>Abrí el navegador (Chrome, Firefox, etc.).</li>
          <li>Escribí <code>www.canva.com</code> en la barra y presioná Enter.</li>
          <li>Iniciá sesión con tu cuenta de Gmail o registrate gratis.</li>
          <li>👉 Usá siempre la versión <strong>gratuita</strong>.</li>
        </ol>
      </section>

      {/* Sección 2 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Pantalla principal de Canva</h2>
        <ul>
          <li><strong>Arriba:</strong> barra de búsqueda (ej. “video”).</li>
          <li><strong>Centro:</strong> botones grandes para elegir tipo de diseño.</li>
          <li><strong>Izquierda:</strong> menú lateral con herramientas como “Texto”, “Plantillas”, “Subidos”.</li>
        </ul>
      </section>

      {/* Sección 3 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Crear un video</h2>
        <ol>
          <li>Escribí <strong>video</strong> en la barra de búsqueda.</li>
          <li>Seleccioná “Video 1920x1080”.</li>
          <li>Se abrirá el editor con:
            <ul>
              <li><strong>Centro:</strong> el lienzo.</li>
              <li><strong>Izquierda:</strong> herramientas.</li>
              <li><strong>Abajo:</strong> línea de tiempo.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Sección 4 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Usar plantillas</h2>
        <p>
          En la columna izquierda, hacé clic en <strong>Plantillas</strong>. Elegí una que te guste (educación, tecnología, moderno) y se aplicará automáticamente.
        </p>
        <p>👉 Luego podés cambiar texto, colores e imágenes.</p>
      </section>

      {/* Sección 5 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Escenas del video (modelo)</h2>
        <p>El video debe tener <strong>7 escenas</strong>, cada una de 5 a 10 segundos:</p>
        <ul>
          <li><strong>Portada:</strong> título + tu nombre.</li>
          <li><strong>Introducción:</strong> por qué elegiste el tema.</li>
          <li><strong>Explicación 1:</strong> primera idea + imagen.</li>
          <li><strong>Explicación 2:</strong> segunda idea + gráfico.</li>
          <li><strong>Desarrollo:</strong> ejemplo o caso.</li>
          <li><strong>Conclusión:</strong> resumen + frase motivadora.</li>
          <li><strong>Cierre:</strong> créditos (“Realizado por…”).</li>
        </ul>
        <p>💡 Tip: dividí cada escena larga en sub-escenas de 5 segundos.</p>
      </section>

      {/* Sección 6 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Añadir contenido</h2>
        <div className="componente" data-aos="fade-right">
          <h3>🔹 Texto</h3>
          <p>Usá “Agregar título” o “Agregar subtítulo” desde el menú Texto. Mantené frases breves (máx. 2 líneas).</p>
          <h3>🔹 Imágenes / íconos</h3>
          <p>Ir a Elementos → buscar íconos como “libro”, “computadora”, etc. Elegí solo los que son gratis.</p>
          <h3>🔹 Audio</h3>
          <p>Desde Música podés agregar canciones sin coronita (gratis). Para voces: grabá con el celular y subí desde “Subidos”.</p>
        </div>
      </section>

      {/* Sección 7 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>7. Audios largos vs. escenas cortas</h2>
        <div className="componente" data-aos="fade-left">
          <h3>🎧 Opción A – Audio largo</h3>
          <ol>
            <li>Subí el audio completo (ej. 20s).</li>
            <li>Dividí en escenas de 5s.</li>
            <li>Seleccioná el audio → usá “Dividir” para cortar en los tiempos justos.</li>
          </ol>

          <h3>🎙️ Opción B – Audios cortos (más fácil)</h3>
          <ol>
            <li>Grabá 4 audios de 5s.</li>
            <li>Subilos todos a Canva.</li>
            <li>Arrastrá cada uno a su escena correspondiente.</li>
          </ol>

          <p>✅ Así el video se mueve y no queda “pegado”.</p>
        </div>
      </section>

      {/* Sección 8 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>8. Duración y ajustes</h2>
        <ul>
          <li>En la línea de tiempo, arrastrá los bordes para ajustar duración.</li>
          <li>Verificá que texto e imágenes cambien cada 5s.</li>
          <li>Si el audio es más largo, podés alargar la escena o recortar el audio.</li>
        </ul>
      </section>

      {/* Sección 9 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>9. Animaciones y efectos</h2>
        <p>Seleccioná cualquier texto o imagen y hacé clic en <strong>Animar</strong> (arriba). Usá efectos como Aparecer, Deslizar, Rebote.</p>
        <p>👉 No uses demasiados efectos, solo para resaltar.</p>
      </section>

      {/* Sección 10 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>10. Revisar el video</h2>
        <p>Presioná <strong>Play ▶️</strong> arriba a la derecha para revisar audio y ritmo visual. Ajustá los tiempos si es necesario.</p>
      </section>

      {/* Sección 11 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>11. Descargar el video</h2>
        <ol>
          <li>Hacé clic en <strong>Compartir</strong> (arriba a la derecha).</li>
          <li>Elegí <strong>Descargar</strong> → MP4 video.</li>
          <li>Se guardará en tu compu o celular.</li>
        </ol>
      </section>

      {/* Sección 11b – Generar voz con IA dentro de Canva */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>🗣️ Generar voz con IA dentro de Canva — guía paso a paso</h2>

        <h3>¿Qué hace esta herramienta y dónde está?</h3>
        <p>
          Canva tiene una función llamada <strong>AI Voice / Texto a voz</strong> que convierte texto en una locución que puedes añadir directamente a tu video. La herramienta permite elegir idioma y voz, y generar el audio desde el mismo editor.
        </p>

        <h3>Paso 1 – Preparar el guion</h3>
        <ul>
          <li>Escribí tu guion en un archivo de texto (Bloc de notas, Google Docs).</li>
          <li>Tené en cuenta que Canva convierte hasta ~40 caracteres por vez (si el texto es más largo, dividilo en partes).</li>
          <li><strong>Consejo:</strong> dividí el guion por sub-escenas (p. ej. 4 partes de ~5 segundos cada una) para que el video se mueva y no se vuelva aburrido.</li>
        </ul>

        <h3>Paso 2 – Abrir la herramienta en el editor</h3>
        <ul>
          <li>Abrí tu diseño de video en Canva.</li>
          <li>En el panel izquierdo buscá <strong>“AI Voice”</strong>, o escribí <strong>“Texto a voz”</strong> / <strong>“Text to Speech”</strong> en la barra de apps/elementos y seleccioná la opción. (A veces está dentro de Elementos o Apps).</li>
        </ul>

        <h3>Paso 3 – Pegar texto y elegir voz</h3>
        <ul>
          <li>En la ventana de AI Voice / Texto a voz pegá el texto (máx. 2000 caracteres por bloque).</li>
          <li>Seleccioná el idioma (ej. Español - Perú/España según disponibilidad) y la voz (hay varias: masculinas, femeninas, acentos).</li>
          <li>Algunas voces son gratuitas; otras requieren Pro. Elegí las que <strong>no muestran la “corona/Pro”</strong> para que siga siendo gratis.</li>
        </ul>

        <h3>Paso 4 – Ajustes (volumen, velocidad, tono)</h3>
        <p>
          Antes de generar podés ajustar velocidad, pitch (tono) y volumen si aparecen esas opciones (Canva permite ajustar estos parámetros para hacerla más natural).
        </p>

        <h3>Paso 5 – Generar y añadir al timeline</h3>
        <ul>
          <li>Pulsá <strong>“Crear audio”</strong> / <strong>“Generate audio”</strong> (o botón similar). Canva generará la pista y te dará una vista previa.</li>
          <li>Insertá ese audio en tu video: la pista aparecerá en la línea de tiempo (abajo).</li>
          <li>Mové la pista para alinearla con la escena correcta. Si generaste bloques (recomendado), colocá cada bloque bajo su sub-escena correspondiente.</li>
        </ul>

        <h3>Paso 6 – Si necesitás dividir o recortar audios</h3>
        <ul>
          <li>Podés recortar / ajustar la duración del clip de audio arrastrando los bordes en la línea de tiempo o usando la herramienta de recorte.</li>
          <li>También existe la función de <strong>Split / Dividir</strong> en muchos proyectos (mové el cabezal al punto y usá Dividir o recortar).</li>
          <li>Si no aparece, usá recortar o generá el audio en partes.</li>
          <li><strong>Consejo práctico:</strong> si la opción “Dividir” no funciona por un fallo, subí el audio ya cortado (grabado por partes) o editálo fuera y volvé a subirlo.</li>
        </ul>

        <h3>Paso 7 – Mezclar con música y efectos</h3>
        <ul>
          <li>Si ponés música de fondo, bajá el volumen de la música para que la locución se escuche clara.</li>
          <li>Usá fundidos (fade in/out) en la música para que suene profesional. (Estas opciones están en la edición de audio en la línea de tiempo).</li>
        </ul>

        <h3>Paso 8 – Para guiones largos (ejemplo práctico)</h3>
        <p>Guion total: 20s → dividí así:</p>
        <ul>
          <li>Portada (voz breve) — 4–5s</li>
          <li>Idea 1 — 5s</li>
          <li>Idea 2 — 5s</li>
          <li>Cierre — 5s</li>
        </ul>
        <p><strong>Flujo recomendado:</strong></p>
        <ol>
          <li>Generar 4 bloques de texto (cada bloque ≤2000 caracteres y ~5s).</li>
          <li>Crear 4 audios con AI Voice en Canva.</li>
          <li>Poner cada audio bajo su escena (o usar un audio largo y dividir en la línea de tiempo si preferís).</li>
        </ol>

        <h3>Paso 9 – Previsualizar y ajustar</h3>
        <ul>
          <li>Reproducí el video (Play ▶️) y revisá si la voz entra justo cuando aparece el texto.</li>
          <li>Ajustá tiempos (arrastrando la escena o el audio) hasta que coincidan.</li>
        </ul>

        <h3>Paso 10 – Descargar</h3>
        <p>
          Cuando todo esté listo, descargá el video como MP4 (igual que antes). El audio IA quedará incrustado en el MP4.
        </p>

        <h3>Problemas comunes y soluciones rápidas</h3>
        <ul>
          <li><strong>No veo AI Voice</strong> → Actualizá la página, probá otro navegador (Chrome), o revisá en la app móvil. Si no aparece, subí audios generados fuera de Canva (grabación de celular o página TTS) y subilos en <strong>Subidos</strong>.</li>
          <li><strong>Quiero voces diferentes para personajes</strong> → generá un bloque por personaje y elegí voces distintas.</li>
          <li><strong>Evitar Pro</strong> → antes de usar una voz, cerciorate que no tenga la corona “Pro”.</li>
        </ul>

        <h3>Mini-ficha imprimible (para pegar en el aula)</h3>
        <ul>
          <li>Abrir diseño → Elementos/Apps → buscar <strong>AI Voice / Texto a voz</strong>.</li>
          <li>Pegar texto (≤2000 caracteres).</li>
          <li>Elegir idioma y voz (usar voces gratis).</li>
          <li>Generar audio → arrastrar al timeline → colocar bajo la escena.</li>
          <li>Descargar MP4.</li>
        </ul>
      </section>

      {/* Sección 12 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>12. Entregar el trabajo</h2>
        <ul>
          <li>Subí el archivo a Google Drive del curso.</li>
          <li>Mandalo por WhatsApp al profe.</li>
          <li>O guardalo en un USB.</li>
        </ul>
      </section>

      {/* Resumen */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>📌 Reglas rápidas para no perderse</h2>
        <ul>
          <li>✅ Escenas de 5s → más dinámico.</li>
          <li>✅ Dividir audio largo en partes.</li>
          <li>✅ Texto breve (máximo 2 líneas).</li>
          <li>✅ Revisar antes de descargar.</li>
          <li>✅ Usar solo lo gratuito (sin coronita “Pro”).</li>
        </ul>
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

      {/* Botón de regreso */}
      <div className="clase-footer" data-aos="fade-up">
        <Link href="/alumno/clases?grado=1" className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}