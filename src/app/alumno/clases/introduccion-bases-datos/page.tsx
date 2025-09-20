"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function IntroduccionBasesDatosPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">📚 Introducción a las Bases de Datos</h1>
        <p className="clase-subtitulo">
          Aprendé qué son, por qué sirven y cómo usarlas para organizar información
        </p>
      </section>

      {/* Sección 1 – ¿Qué es una Base de Datos? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es una Base de Datos?</h2>
        <p>
          Una Base de Datos (BD) es un lugar donde se guarda y organiza información para poder usarla fácilmente después.
        </p>
        <ul>
          <li className="tip">👉 Ejemplos de bases de datos en la vida diaria:
            <ul>
              <li>Lista de contactos en un celular.</li>
              <li>Los registros de alumnos en el colegio.</li>
              <li>Catálogo de productos en una tienda online.</li>
              <li>Publicaciones en redes sociales.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Sección 2 – ¿Por qué son importantes? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. ¿Por qué son importantes?</h2>
        <ul>
          <li>✅ Permiten guardar gran cantidad de datos.</li>
          <li>✅ Se pueden buscar rápidamente.</li>
          <li>✅ Evitan errores y repeticiones.</li>
          <li>✅ Sirven para compartir información entre usuarios y programas.</li>
        </ul>
      </section>

      {/* Sección 3 – Tipos de Bases de Datos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Tipos de Bases de Datos</h2>
        <ul>
          <li><strong>Jerárquicas</strong> → Como un árbol (padres e hijos).</li>
          <li><strong>De red</strong> → Los datos se relacionan de muchas formas.</li>
          <li><strong>Relacionales (más usadas)</strong> → Tablas con filas y columnas.</li>
          <li><strong>NoSQL</strong> → Para grandes volúmenes de datos, como redes sociales.</li>
        </ul>
      </section>

      {/* Sección 4 – Base de Datos Relacional */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Base de Datos Relacional (la más común)</h2>
        <p>En este tipo, los datos se guardan en <strong>tablas</strong>:</p>
        <ul>
          <li><strong>Tabla</strong> → como una hoja de Excel.</li>
          <li><strong>Fila</strong> → un registro (ej: un alumno).</li>
          <li><strong>Columna</strong> → un campo (ej: nombre, edad, grado).</li>
        </ul>

        <div className="componente">
          <h3>Ejemplo: Tabla "Alumnos"</h3>
          <table className="clase-tabla">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Grado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ana Pérez</td>
                <td>15</td>
                <td>4°</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Luis Díaz</td>
                <td>14</td>
                <td>3°</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carla Ríos</td>
                <td>16</td>
                <td>5°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sección 5 – Lenguaje SQL */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Lenguaje SQL</h2>
        <p>
          El SQL (Structured Query Language) se usa para manejar bases de datos. Con SQL se puede:
        </p>
        <ul>
          <li>Crear tablas.</li>
          <li>Insertar datos.</li>
          <li>Consultar (buscar información).</li>
          <li>Actualizar.</li>
          <li>Borrar registros.</li>
        </ul>

        <div className="componente">
          <h3>Ejemplos básicos en SQL:</h3>
          <pre>{`-- Crear tabla
CREATE TABLE Alumnos (
  ID INT PRIMARY KEY,
  Nombre VARCHAR(50),
  Edad INT,
  Grado VARCHAR(10)
);

-- Insertar datos
INSERT INTO Alumnos VALUES (1, 'Ana Pérez', 15, '4°');

-- Consultar
SELECT * FROM Alumnos;`}</pre>
        </div>
      </section>

      {/* Sección 6 – Ejemplos de sistemas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Ejemplos de Sistemas de Base de Datos</h2>
        <ul>
          <li><strong>MySQL</strong> → muy usado en páginas web.</li>
          <li><strong>PostgreSQL</strong> → software libre.</li>
          <li><strong>SQLite</strong> → para celulares y apps pequeñas.</li>
          <li><strong>SQL Server</strong> → Microsoft.</li>
          <li><strong>Oracle</strong> → usado en empresas grandes.</li>
        </ul>
      </section>

      {/* Sección 7 – Actividad para los alumnos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Actividad para los alumnos</h2>
        <div className="componente">
          <p><strong>👉 En su cuaderno:</strong></p>
          <ol>
            <li>Hacer una tabla de <strong>alumnos</strong> con columnas: Nombre, Edad, Grado.</li>
            <li>Hacer una tabla de <strong>películas favoritas</strong> con: Título, Género, Año.</li>
            <li>Después, pensar qué consultas podrían hacer, por ejemplo:</li>
            <ul>
              <li>“Mostrar solo los alumnos de 5°”.</li>
              <li>“Buscar la película más reciente”.</li>
            </ul>
          </ol>
        </div>
      </section>

      {/* Sección 8 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Resumen fácil de recordar</h2>
        <p className="conclusion">
          Una Base de Datos = lugar para guardar información organizada.<br />
          Lo más usado: Bases de Datos Relacionales con tablas.<br />
          Se maneja con SQL.<br />
          👉 Ejemplos: MySQL, SQLite, PostgreSQL.
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