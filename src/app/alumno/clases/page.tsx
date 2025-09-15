"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import "./clases.css";

const clasesGrados1a3 = [
  "Componentes de una PC",
  "Atajos de teclado",
  "Explorador de archivos y compresión en RAR",
  "Cómo elegir y presentar un tema con Canva",
  "Uso completo de Canva Presentaciones",
  "Creación de logo con Canva para tu tema",
  "Edición de video con Canva (1 minuto)",
  "Hardware y Software",
  "Sistema Operativo Windows",
  "Introducción a Internet",
  "Navegadores Web",
  "Correo Electrónico",
  "Introducción a Word",
  "Introducción a Excel",
  "Introducción a PowerPoint",
  "Archivos y Carpetas",
  "Teclado y Ratón",
  "Impresoras y Periféricos",
  "Seguridad en la Web",
  "Etiqueta Digital",
];

export default function ClasesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const grado = searchParams.get("grado");

  // ✅ Validar que solo accedan 1º-3º
  if (!grado || !["1", "2", "3"].includes(grado)) {
    return (
      <div className="clases-container">
        <div className="clases-card">
          <h2>Acceso no permitido</h2>
          <p>Esta sección es solo para estudiantes de 1º a 3º grado.</p>
          <Link href="/alumno" className="clases-btn">Volver</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="clases-container">
      <div className="clases-header">
        <h1 className="clases-title">Clases de {grado}º grado</h1>
        <Link href="/alumno" className="clases-btn-outline">Volver</Link>
      </div>

      <div className="clases-grid">
        {clasesGrados1a3.map((clase, index) => (
          <Link
            key={index}
            href={`/alumno/clases/${encodeURIComponent(clase)}?grado=${grado}`}
            className="clase-card appear-wave"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="clase-icon">📘</div>
            <h3 className="clase-titulo">{clase}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}