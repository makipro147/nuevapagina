"use client";

import { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

// ✅ Componente interno envuelto en Suspense
function IntroduccionSupabaseContent() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">🌐 Introducción a Supabase</h1>
        <p className="clase-subtitulo">
          Conectá tu proyecto web a una base de datos real en la nube sin instalar nada
        </p>
      </section>

      {/* Sección 1 – ¿Qué es Supabase? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué es Supabase?</h2>
        <p>Supabase es una plataforma que ofrece:</p>
        <ul>
          <li>Base de datos PostgreSQL en la nube (gratis en plan básico).</li>
          <li>Autenticación de usuarios (con email, contraseña, Google, GitHub, etc.).</li>
          <li>API automática para manejar tus datos.</li>
          <li>Dashboard sencillo para crear tablas y administrar todo sin instalar nada.</li>
        </ul>
        <p className="tip">👉 En pocas palabras: es como Firebase, pero con SQL (PostgreSQL).</p>
      </section>

      {/* Sección 2 – Crear cuenta */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. Crear cuenta en Supabase</h2>
        <ol>
          <li>
            Ir a{" "}
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://supabase.com/
            </a>
          </li>
          <li>Registrate con Google o GitHub.</li>
          <li>Crear un nuevo proyecto (elegí nombre y contraseña de la base de datos).</li>
          <li>Se abrirá el Dashboard de tu proyecto.</li>
        </ol>
      </section>

      {/* Sección 3 – Crear tabla usuarios */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. Crear tabla usuarios</h2>
        <ol>
          <li>En el menú izquierdo, entrá a <strong>Table Editor</strong>.</li>
          <li>Hacé clic en <strong>New Table</strong>.</li>
          <li>
            Configurá la tabla:
            <ul>
              <li>
                <strong>Name:</strong> usuarios
              </li>
              <li>
                <strong>Primary Key:</strong> id (tipo uuid, marcado como primary
                key)
              </li>
              <li>
                <strong>Columnas:</strong>
                <ul>
                  <li>usuario → text (obligatorio)</li>
                  <li>contrasena → text (obligatorio)</li>
                  <li>
                    (Opcional: fecha_creacion → timestamp con valor por defecto
                    now())
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Hacé clic en <strong>Save</strong>. ✅</li>
        </ol>
      </section>

      {/* Sección 4 – Obtener API Key y URL */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. Obtener la API Key y URL</h2>
        <ol>
          <li>
            En el Dashboard, andá a <strong>Settings → API</strong>.
          </li>
          <li>
            Copiá:
            <ul>
              <li>
                <strong>Project URL</strong> (empieza con
                https://xxxx.supabase.co)
              </li>
              <li>
                <strong>anon public key</strong> (clave pública)
              </li>
            </ul>
          </li>
        </ol>
        <p className="tip">
          👉 Estas las usarás en tu proyecto para conectarte desde JavaScript.
        </p>
      </section>

      {/* Sección 5 – Conectar mini-proyecto */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. Conectar mini-proyecto a Supabase</h2>
        <p>
          En tu carpeta <code>js/</code>, creá un archivo{" "}
          <code>supabaseClient.js</code>:
        </p>
        <div className="componente">
          <pre>{`// supabaseClient.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://TU_URL_PROYECTO.supabase.co";
const SUPABASE_KEY = "TU_API_KEY_PUBLICA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);`}</pre>
        </div>
      </section>

      {/* Sección 6 – Cambiar login.js */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. Cambiar login.js para usar Supabase</h2>
        <div className="componente">
          <pre>{`import { supabase } from "./supabaseClient.js";

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Buscar usuario en la base de datos
    const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("usuario", usuario)
        .eq("contrasena", contrasena)
        .single();

    if (error) {
        alert("Error en la conexión: " + error.message);
        return;
    }

    if (data) {
        alert("Login exitoso ✅");
        window.location.href = "datos.html";
    } else {
        alert("Usuario o contraseña incorrectos ❌");
    }
});`}</pre>
        </div>
      </section>

      {/* Sección 7 – Insertar más usuarios */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. Insertar más usuarios</h2>
        <p>Podés hacerlo desde el Table Editor de Supabase, o también con código:</p>
        <div className="componente">
          <pre>{`async function registrarUsuario(usuario, contrasena) {
  const { data, error } = await supabase
    .from("usuarios")
    .insert([{ usuario: usuario, contrasena: contrasena }]);

  if (error) {
    console.error("Error al registrar:", error.message);
  } else {
    console.log("Usuario registrado:", data);
  }
}`}</pre>
        </div>
      </section>

      <div className="conclusion">
        ✅ Con esto, tu mini-proyecto ya está conectado a una base de datos real en la nube.
        <br />
        Los alumnos podrán:
        <ul>
          <li>Registrarse (si hacés un formulario de registro).</li>
          <li>Iniciar sesión (con el login).</li>
        </ul>
      </div>

      {/* ✅ Botón dinámico */}
      <div
        className="clase-seccion cuadro-rebote clase-footer"
        data-aos="fade-up"
      >
        <Link href={`/alumno/clases?grado=${grado}`} className="clase-btn">
          Volver a las clases
        </Link>
      </div>
    </div>
  );
}

// ✅ Export final con Suspense
export default function IntroduccionSupabasePage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <IntroduccionSupabaseContent />
    </Suspense>
  );
}
