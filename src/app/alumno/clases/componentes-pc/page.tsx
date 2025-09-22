"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

function ContenidoClase() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero con parallax */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">Componentes de una PC</h1>
        <p className="clase-subtitulo">
          Descubre cómo funciona tu computadora por dentro
        </p>
      </section>

      {/* Contenido con parallax */}
      <section className="clase-seccion" data-aos="fade-up">
        <h2>1. ¿Qué es una computadora?</h2>
        <p>
          Es un dispositivo electrónico que{" "}
          <strong>recibe datos, los procesa y genera información</strong>.
          Necesita <em>hardware</em> (partes físicas) y <em>software</em>{" "}
          (programas) para funcionar.
        </p>
      </section>

      <section className="clase-seccion" data-aos="fade-up">
        <h2>2. Hardware interno</h2>

        <div className="componente" data-aos="fade-right">
          <h3>🔧 Placa base (Motherboard)</h3>
          <p>
            Es la tarjeta principal. Conecta todos los componentes y permite su
            comunicación.
          </p>
        </div>

        <div className="componente" data-aos="fade-left">
          <h3>🧠 Procesador (CPU)</h3>
          <p>
            Es el "cerebro". Ejecuta instrucciones y coordina operaciones. Su
            velocidad se mide en GHz.
          </p>
        </div>

        <div className="componente" data-aos="fade-right">
          <h3>💾 Memoria RAM</h3>
          <p>
            Memoria temporal. Guarda datos mientras la PC está encendida. Al
            apagar, se borra.
          </p>
        </div>

        <div className="componente" data-aos="fade-left">
          <h3>💽 Disco duro (HDD) o SSD</h3>
          <p>
            Almacenamiento permanente. Aquí guardas programas, fotos, música.
            SSD = más rápido.
          </p>
        </div>

        <div className="componente" data-aos="fade-right">
          <h3>🔌 Fuente de poder</h3>
          <p>
            Transforma la corriente eléctrica para que todos los componentes
            funcionen.
          </p>
        </div>

        <div className="componente" data-aos="fade-left">
          <h3>🎮 Tarjeta de video (GPU)</h3>
          <p>
            Procesa gráficos. Esencial para videojuegos, diseño y edición de
            video.
          </p>
        </div>
      </section>

      <section className="clase-seccion" data-aos="fade-up">
        <h2>3. Hardware externo (periféricos)</h2>
        <ul>
          <li>
            <strong>Monitor:</strong> muestra la información.
          </li>
          <li>
            <strong>Teclado y mouse:</strong> entrada de datos.
          </li>
          <li>
            <strong>Impresora:</strong> salida en papel.
          </li>
          <li>
            <strong>Parlantes y micrófono:</strong> audio.
          </li>
        </ul>
      </section>

      <section className="clase-seccion" data-aos="fade-up">
        <h2>4. ¿Cómo interactúan?</h2>
        <div className="ejemplo-box">
          <p>
            1. Presionas una tecla → <br />
            2. La CPU interpreta → <br />
            3. La RAM guarda → <br />
            4. El disco lo almacena → <br />
            5. El monitor muestra el resultado.
          </p>
        </div>
      </section>

      <section className="clase-seccion" data-aos="fade-up">
        <h2>5. Conclusión</h2>
        <p className="conclusion">
          Una PC es un sistema de partes que trabajan juntas. Conocerlos te hace
          más inteligente digitalmente.
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

export default function ComponentesPCPage() {
  return (
    <Suspense fallback={<p>Cargando contenido...</p>}>
      <ContenidoClase />
    </Suspense>
  );
}
