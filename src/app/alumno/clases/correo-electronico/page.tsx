"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function CorreoElectronicoPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">📧 Guía: El Correo Electrónico</h1>
        <p className="clase-subtitulo">
          Aprendé a crear tu cuenta, enviar mensajes y usarlo de forma segura
        </p>
      </section>

      {/* Sección 1 – ¿Qué es el correo electrónico? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es el correo electrónico?</h2>
        <p>
          El correo electrónico (e-mail) es un servicio de Internet que permite enviar y recibir mensajes digitales de manera rápida, desde cualquier parte del mundo.
        </p>
        <ul>
          <li>👉 Es como una carta tradicional, pero en vez de papel, se envía por computadora o celular.</li>
        </ul>
      </section>

      {/* Sección 2 – ¿Para qué sirve? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. ¿Para qué sirve?</h2>
        <ul>
          <li>Enviar y recibir mensajes escritos.</li>
          <li>Adjuntar archivos (documentos, fotos, audios, videos).</li>
          <li>Registrarse en páginas web o redes sociales.</li>
          <li>Comunicación en trabajo y estudios (clases virtuales, tareas).</li>
        </ul>
      </section>

      {/* Sección 3 – Servicios más usados */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Servicios de correo electrónico más usados</h2>
        <ul>
          <li><strong>Gmail (Google)</strong> → el más popular.</li>
          <li><strong>Outlook / Hotmail (Microsoft)</strong>.</li>
          <li><strong>Yahoo Mail</strong>.</li>
          <li><strong>ProtonMail</strong> (seguro y privado).</li>
        </ul>
      </section>

      {/* Sección 4 – Partes de una dirección de correo */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Partes de una dirección de correo</h2>
        <div className="componente">
          <p>Ejemplo: <code>maria123@gmail.com</code></p>
          <ul>
            <li><strong>maria123</strong> → nombre del usuario.</li>
            <li><strong>@</strong> → símbolo que separa.</li>
            <li><strong>gmail.com</strong> → servicio de correo que se usa.</li>
          </ul>
          <p className="tip">👉 Siempre debe escribirse bien, porque si hay error, el mensaje no llega.</p>
        </div>
      </section>

      {/* Sección 5 – Ventajas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Ventajas del correo electrónico</h2>
        <ul>
          <li>✅ Rápido → llega en segundos.</li>
          <li>✅ Gratis → no cuesta nada crear una cuenta.</li>
          <li>✅ Global → puedes enviar a cualquier país.</li>
          <li>✅ Permite adjuntar archivos.</li>
        </ul>
      </section>

      {/* Sección 6 – Desventajas */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Desventajas del correo electrónico</h2>
        <ul>
          <li>⚠️ Puede llegar spam (correos basura).</li>
          <li>⚠️ Riesgo de virus si abres archivos sospechosos.</li>
          <li>⚠️ Necesita internet para funcionar.</li>
        </ul>
      </section>

      {/* Sección 7 – Pasos básicos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Pasos básicos para usar el correo electrónico</h2>
        <ol>
          <li><strong>Crear una cuenta</strong><br />Ir a Gmail.com u otro servicio.<br />Llenar nombre, usuario, contraseña.</li>
          <li><strong>Iniciar sesión</strong><br />Escribir tu correo y contraseña.</li>
          <li><strong>Redactar un correo</strong><br />
            - Hacer clic en <strong>Redactar</strong>.<br />
            - En <strong>Para:</strong> escribir dirección del destinatario.<br />
            - En <strong>Asunto:</strong> poner el tema del mensaje.<br />
            - En el cuerpo: escribir el mensaje.<br />
            - Adjuntar archivos si es necesario (clic en el clip 📎).<br />
            - Dar clic en <strong>Enviar</strong>.
          </li>
          <li><strong>Revisar la bandeja de entrada</strong><br />Allí llegan los mensajes recibidos.</li>
        </ol>
      </section>

      {/* Sección 8 – Actividad para los alumnos */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Actividad para los alumnos</h2>
        <div className="componente">
          <h3>En la computadora:</h3>
          <ul>
            <li>Crear una cuenta en Gmail (si aún no tienen).</li>
            <li>Enviar un correo de prueba al profesor con:
              <ul>
                <li><strong>Asunto:</strong> Tarea de práctica.</li>
                <li><strong>Mensaje:</strong> Hola profe, estoy practicando mi correo.</li>
              </ul>
            </li>
          </ul>
          <h3>En el cuaderno:</h3>
          <ul>
            <li>Dibujar una ventana de correo electrónico y señalar:</li>
            <li>Para, Asunto, Cuerpo, Botón Enviar.</li>
          </ul>
          <h3>Dinámica grupal:</h3>
          <p>Hacer un afiche en Canva que explique las ventajas y cuidados del correo electrónico.</p>
        </div>
      </section>

      {/* Sección 9 – Resumen fácil */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>9. Resumen fácil de recordar</h2>
        <p className="conclusion">
          El correo electrónico es como una carta digital.<br />
          Se necesita una cuenta (ejemplo: Gmail).<br />
          Sirve para enviar mensajes y archivos.<br />
          Es rápido, gratuito y global.<br />
          👉 Debemos cuidarnos del spam y correos sospechosos.
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