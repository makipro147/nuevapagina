"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./clase-completa.css";
import Link from "next/link";
import useGradoFromUrl from "@/hooks/useGradoFromUrl";

export default function EstructuraCarpetasArchivosPage() {
  const grado = useGradoFromUrl(); // 👉 grado real del alumno

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="clase-completa-container">
      {/* Hero */}
      <section className="clase-hero" data-aos="fade-down">
        <h1 className="clase-titulo">📂 Estructura de Carpetas y Archivos</h1>
        <p className="clase-subtitulo">
          Aprendé a organizar tu proyecto web como un profesional
        </p>
      </section>

      {/* Sección 1 – ¿Qué vamos a hacer? */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>1. ¿Qué vamos a hacer?</h2>
        <p>
          Vamos a crear un proyecto web completo con varias páginas, estilos, JavaScript e imágenes, todo bien organizado en carpetas.
        </p>
      </section>

      {/* Sección 2 – Estructura completa */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>2. Estructura completa del proyecto</h2>
        <div className="componente">
          <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`proyecto/
│── index.html
│
├── pages/
│     ├── login.html
│     ├── datos.html
│     └── pasatiempos.html
│
├── css/
│     ├── estilo.css
│     ├── loginestilo.css
│     ├── datos.css
│     └── pasatiempos.css
│
├── js/
│     └── login.js
│
└── images/
      ├── logo.png
      ├── fondo.jpg
      └── hobbie.jpg`}</pre>
        </div>
      </section>

      {/* Sección 3 – index.html */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>3. index.html (página principal)</h2>
        <div className="componente">
          <p>Será la página principal con un botón de Login que manda a <code>login.html</code>.</p>
          <pre style={{ background: "#eef", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Inicio - Proyecto</title>
  <link rel="stylesheet" href="css/estilo.css">
</head>
<body>
  <header>
    <h1>Bienvenidos a mi Proyecto</h1>
  </header>
  <main>
    <img src="images/logo.png" alt="Logo" width="200">
    <p>Este es el inicio de mi página web.</p>
    <a href="pages/login.html">
      <button>Login</button>
    </a>
  </main>
</body>
</html>`}</pre>
        </div>
      </section>

      {/* Sección 4 – login.html */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>4. login.html (en carpeta pages/)</h2>
        <div className="componente">
          <p>Página con formulario de login.</p>
          <pre style={{ background: "#eef", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" href="../css/loginestilo.css">
</head>
<body>
  <h2>Iniciar Sesión</h2>
  <form id="loginForm">
    <label>Usuario:</label><br>
    <input type="text" id="usuario"><br><br>
    <label>Contraseña:</label><br>
    <input type="password" id="contrasena"><br><br>
    <button type="submit">Entrar</button>
  </form>
  <script src="../js/login.js"></script>
</body>
</html>`}</pre>
        </div>
      </section>

      {/* Sección 5 – datos.html */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>5. datos.html (en carpeta pages/)</h2>
        <div className="componente">
          <p>Página a la que se redirige después del login.</p>
          <pre style={{ background: "#eef", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Datos</title>
  <link rel="stylesheet" href="../css/datos.css">
</head>
<body>
  <h1>Bienvenido a la sección de Datos</h1>
  <p>Aquí aparecerá tu información.</p>
  <a href="pasatiempos.html">Ir a Pasatiempos</a>
</body>
</html>`}</pre>
        </div>
      </section>

      {/* Sección 6 – pasatiempos.html */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>6. pasatiempos.html (en carpeta pages/)</h2>
        <div className="componente">
          <p>Página de pasatiempos.</p>
          <pre style={{ background: "#eef", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Pasatiempos</title>
  <link rel="stylesheet" href="../css/pasatiempos.css">
</head>
<body>
  <h1>Mis Pasatiempos</h1>
  <ul>
    <li>Escuchar música</li>
    <li>Jugar fútbol</li>
    <li>Leer libros</li>
  </ul>
  <img src="../images/hobbie.jpg" alt="Hobbie" width="300">
</body>
</html>`}</pre>
        </div>
      </section>

      {/* Sección 7 – login.js */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>7. login.js (en carpeta js/)</h2>
        <div className="componente">
          <p>Lógica simple del login.</p>
          <pre style={{ background: "#eef", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`// login.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Login muy básico (ejemplo)
    if (usuario === "admin" && contrasena === "1234") {
        alert("Login exitoso ✅");
        window.location.href = "datos.html"; // redirige a datos
    } else {
        alert("Usuario o contraseña incorrectos ❌");
    }
});`}</pre>
        </div>
      </section>

      {/* Sección 8 – Archivos CSS */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>8. Archivos CSS (en carpeta css/)</h2>
        <div className="componente">
          <h3>css/estilo.css</h3>
          <pre>{`body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #f0f0f0;
}
button {
  padding: 10px 20px;
  background: #0077ff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #0055aa;
}`}</pre>

          <h3>css/loginestilo.css</h3>
          <pre>{`body {
  font-family: Verdana;
  background: #eef;
  text-align: center;
}
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 0 10px gray;
}`}</pre>

          <h3>css/datos.css</h3>
          <pre>{`body {
  background: #ffe;
  font-family: Georgia;
  text-align: center;
}`}</pre>

          <h3>css/pasatiempos.css</h3>
          <pre>{`body {
  background: #efe;
  font-family: Tahoma;
  text-align: center;
}
ul {
  list-style-type: square;
}`}</pre>
        </div>
      </section>

      {/* Sección 9 – Imágenes */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>9. Imágenes (en carpeta images/)</h2>
        <p>Guardá ahí cualquier imagen con nombres como:</p>
        <ul>
          <li><code>logo.png</code> → para el index.</li>
          <li><code>fondo.jpg</code> → si querés un fondo.</li>
          <li><code>hobbie.jpg</code> → para pasatiempos.</li>
        </ul>
      </section>

      {/* Sección 10 – Conclusión */}
      <section className="clase-seccion cuadro-rebote" data-aos="fade-up">
        <h2>10. ¡Listo para navegar!</h2>
        <p className="conclusion">
          ✅ Con esto ya tenés un proyecto completo, ordenado y sencillo.<br />
          Abrí <code>index.html</code> en el navegador y navegá entre páginas.
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