"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "./atajos-teclado.css";

const atajos = [
  { keys: "Ctrl + C", desc: "Copiar" },
  { keys: "Ctrl + V", desc: "Pegar" },
  { keys: "Ctrl + X", desc: "Cortar" },
  { keys: "Ctrl + Z", desc: "Deshacer" },
  { keys: "Ctrl + Y", desc: "Rehacer" },
  { keys: "Ctrl + A", desc: "Seleccionar todo" },
  { keys: "Ctrl + S", desc: "Guardar" },
  { keys: "Alt + Tab", desc: "Cambiar entre ventanas" },
  { keys: "Windows + D", desc: "Mostrar escritorio" },
  { keys: "Ctrl + T", desc: "Nueva pestaña" },
  { keys: "Ctrl + W", desc: "Cerrar pestaña" },
  { keys: "Windows + Shift + S", desc: "Captura de pantalla" },
];

export default function AtajosTecladoPage() {
  const searchParams = useSearchParams();
  const grado = searchParams.get("grado");

  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ✅ Animación de entrada suave
    gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

    // ✅ Animación escalonada de tarjetas
    gsap.fromTo(cardRefs.current, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="atajos-container">
      <section className="atajos-hero">
        <h1 ref={titleRef} className="atajos-titulo">
          Atajos de Teclado
        </h1>
        <p className="atajos-subtitulo">
          Aprende a usar tu computadora más rápido y sin mouse
        </p>
      </section>

      <section className="atajos-grid">
        {atajos.map((item, index) => (
  <div
    key={index}
    ref={(el) => {
      if (el) cardRefs.current[index] = el;
    }}
    className="atajo-card"
  >
    <div className="atajo-teclas">{item.keys}</div>
    <div className="atajo-desc">{item.desc}</div>
  </div>
))}
      </section>

      <div className="atajos-footer">
        <Link href={`/alumno/clases?grado=${grado}`} className="atajos-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}