"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Carrusel3D from "./Carrusel3D";
import Link from "next/link";

function GradoInner() {
  const searchParams = useSearchParams();
  const grado = searchParams.get("grado");

  // Validamos si el grado está entre 1 y 5
  const gradoValido = ["1", "2", "3", "4", "5"].includes(grado || "") ? grado! : "1";

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Crear tu Logo en Canva (¡Gratis!)</h1>
        <p className="clase-subtitulo">
          Diseñá un logo profesional en 10 pasos simples y sin experiencia
        </p>
      </section>

      {/* Carrusel 3D */}
      <Carrusel3D />

      {/* Paso 1 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. Entrar a Canva</h2>
        <ul>
          <li>Abrir el navegador → <strong>www.canva.com</strong></li>
          <li>Iniciar sesión con cuenta gratis (Gmail o correo).</li>
        </ul>
      </section>

      {/* Paso 2 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Buscar el formato "Logo"</h2>
        <div className="componente" data-aos="fade-right">
          <ol>
            <li>En la barra de búsqueda escribir <strong>"logo"</strong>.</li>
            <li>Seleccionar <strong>Logo (500 × 500 px)</strong>.</li>
            <li>Este tamaño es cuadrado y sirve para imprimir o redes.</li>
          </ol>
        </div>
      </section>

      {/* Paso 3 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Pantalla de edición de logo</h2>
        <div className="componente" data-aos="fade-left">
          <h3>Partes clave</h3>
          <ul>
            <li><strong>Centro:</strong> el lienzo (espacio en blanco).</li>
            <li><strong>Izquierda:</strong> Plantillas, Elementos, Texto, Colores.</li>
          </ul>
        </div>
      </section>

      {/* Paso 4 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. Elegí una plantilla (opcional)</h2>
        <div className="componente" data-aos="fade-right">
          <ol>
            <li>Buscá una que se parezca a tu tema (tecnología, música, deporte…).</li>
            <li>Hacé clic → se coloca en el lienzo.</li>
            <li>Después cambiá texto, colores e iconos.</li>
          </ol>
        </div>
      </section>

      {/* Paso 5 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Diseñá desde cero (opcional)</h2>
        <div className="componente" data-aos="fade-left">
          <ol>
            <li>Elementos → buscá iconos relacionados.</li>
            <li>Arrastrá al lienzo y cambiá color.</li>
            <li>Texto → Agregá título con el nombre de tu proyecto.</li>
          </ol>
        </div>
      </section>

      {/* Paso 6 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>6. Reglas para un buen logo</h2>
        <div className="componente" data-aos="fade-right">
          <ul>
            <li>✅ Pocas palabras (máx. 3).</li>
            <li>✅ Colores simples (2-3 máximo).</li>
            <li>✅ Un icono principal (no llenar de imágenes).</li>
            <li>✅ Letras claras y grandes.</li>
          </ul>
        </div>
      </section>

      {/* Paso 7 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>7. Personalización</h2>
        <div className="componente" data-aos="fade-left">
          <ul>
            <li><strong>Colores:</strong> que representen tu tema.</li>
            <li><strong>Fuentes:</strong> cambialas en el panel de arriba.</li>
            <li><strong>Formas:</strong> círculos, cuadrados para fondos.</li>
            <li><strong>Duplicar:</strong> clic derecho → Duplicar (simetría rápida).</li>
          </ul>
        </div>
      </section>

      {/* Paso 8 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>8. Revisar</h2>
        <div className="componente" data-aos="fade-right">
          <ol>
            <li>Miraló en pequeño (simulá redes).</li>
            <li>¿Se entiende rápido de qué trata?</li>
            <li>Si es confuso, quitá cosas: <strong>menos es más</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Paso 9 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>9. Descargar el logo</h2>
        <div className="componente" data-aos="fade-left">
          <ol>
            <li>Arriba a la derecha → <strong>Compartir → Descargar</strong>.</li>
            <li>Formato: <strong>PNG</strong> (recomendado).</li>
            <li>Marcá <strong>Fondo transparente</strong> (si está gratis).</li>
            <li>Descargá gratis.</li>
          </ol>
        </div>
      </section>

      {/* Paso 10 */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>10. Usar el logo</h2>
        <div className="componente" data-aos="fade-right">
          <ul>
            <li>Poneló en tus videos de Canva.</li>
            <li>Usalo en portadas, presentaciones o folletos.</li>
            <li>Guardalo en tu carpeta de proyecto (Drive, USB…).</li>
          </ul>
        </div>
      </section>

      {/* Actividad final */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>✅ Actividad práctica</h2>
        <p className="conclusion">
          Creá tu propio logo para el tema que elegiste.  
          Incluí: icono principal, nombre del proyecto y colores representativos.  
          Descargalo en PNG y guardalo en tu carpeta.
        </p>
      </section>

      {/* ✅ Botón dinámico */}
      <div className="clase-footer" data-aos="fade-up">
        <Link href={`/alumno/clases?grado=${gradoValido}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}

export default function ClaseCompleta() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <GradoInner />
    </Suspense>
  );
}