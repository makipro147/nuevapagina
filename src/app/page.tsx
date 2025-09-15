"use client";
import CarruselHorizontal from "@/app/components/CarruselHorizontal";
import MusicaFondo from "@/app/components/MusicaFondo";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav slide-left">
        <div className="container nav-inner">
          <div className="brand">
            MI PÁGINA PERSONAL<span className="name"> · DE CÓMPUTO</span>
          </div>
          <div className="nav-links">
            <a href="#sobre">Sobre mí</a>
            <a href="#galeria">Galería</a>
            <a href="#clases">Clases</a>
            <a href="#redes">Redes</a>
            {/* Botón de música integrado en el navbar */}
            <MusicaFondo />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="inicio" className="hero fade-in">
        <span className="tag">Youtuber · Profesor · Bajista</span>
        <h1 className="zoom-in">
          Hola, soy <span className="name">Michael Rojas Urtecho</span>
        </h1>
        <p className="lead fade-in">
          Hago directos, toco bajo eléctrico con mi banda y construyo proyectos creativos
        </p>
        <div className="cta fade-in">
          <a className="btn-glow" href="#galeria">Ver Galería</a>
          <a className="btn-glow btn-cyan" href="#clases">Ir a Grados</a>
        </div>
      </header>

     {/* SOBRE MÍ */}
      <section id="sobre" className="section fade-in">
        <div className="container">
          <div className="card">
            <h2>Sobre mí</h2>
            <div style={{ textAlign: 'center' }}>
              <p>
               Estoy esperando que disfruten de observar esta página que he creado y pronto seré un artista consagrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA con carrusel horizontal */}
      <section id="galeria" className="section fade-in">
        <div className="container">
          <h2>Galería</h2>
          <CarruselHorizontal />
        </div>
      </section>

      {/* CLASES */}
      <section id="clases" className="section fade-in">
        <div className="container">
          <h2>Grados</h2>
          <div className="buttons-grid">
            {[1, 2, 3, 4, 5].map((g) => (
             <a key={g} className="btn-glow-white appear-wave" href={`/login?grado=${g}`}>
  {g}º de secundaria
</a>
            ))}
          </div>
        </div>
      </section>

      {/* REDES */}
      <section id="redes" className="section fade-in">
        <div className="container">
          <div className="card">
            <h2>Redes Sociales</h2>
            <div style={{ textAlign: 'center' }}>
              <p>
                YouTube:{" "}
                <a href="https://www.youtube.com/@neko_jemkiller_band" target="_blank">
                  SSj Neko X
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/neko_jemkiller_band/" target="_blank">
                  @neko_jemkiller_band
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/921866613" target="_blank">
                  Directo a WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}