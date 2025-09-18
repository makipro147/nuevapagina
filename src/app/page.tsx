"use client";

import Carrusel3D from "./components/Carrusel3D";
import MusicaFondo from "@/app/components/MusicaFondo";
import FondoScroll from "@/app/components/FondoScroll";




export default function Home() {
  return (
    <>

      <FondoScroll />

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
            <MusicaFondo/>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="inicio" className="hero fade-in scroll-section" data-bg="#f5f5f5">
        <span className="tag">Youtuber · Profesor · Bajista</span>
        <h1 className="zoom-in">
          Hola, soy <span className="name">Michael Rojas Urtecho</span>
        </h1>
        <p className="lead fade-in">
          Hago directos, toco bajo eléctrico con mi banda y construyo proyectos creativos
        </p>
        <div className="cta fade-in">
          <a className="btn-glow btn-cyan" href="#galeria">Ver Galería</a>
          <a className="btn-glow btn-cyan" href="#clases">Ir a Grados</a>
        </div>
      </header>

      {/* SOBRE MÍ */}
      <section id="sobre" className="section fade-in scroll-section" data-bg="#ffffff">
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

      {/* GALERÍA con carrusel 3D */}
      <section id="galeria" className="section fade-in scroll-section" data-bg="#e0e0e0">
  <div className="container">
    <h2 style={{ marginBottom: '3rem' }}>Galería</h2>
    <div className="carousel3d-wrapper">
      <Carrusel3D />
    </div>
  </div>
</section>



   <section id="clases" className="section fade-in scroll-section" data-bg="#f0f0f0">
  <div className="container" style={{ marginTop: '4rem' }}>
    <h2 style={{ marginBottom: '2rem' }}>Grados</h2>
    <div className="buttons-grid">
      {[1, 2, 3, 4, 5].map((g) => (
        <a key={g} className="btn-glow btn-cyan" href={`/login?grado=${g}`}>
          {g}º de secundaria
        </a>
      ))}
    </div>
  </div>
</section>

      {/* REDES */}
      <section id="redes" className="section fade-in scroll-section" data-bg="#fafafa">
        <div className="container">
          <div className="card">
            <h2>Redes Sociales</h2>
            <div style={{ textAlign: 'center' }}>
              <p>
                YouTube:{" "}
                <a href="https://www.youtube.com/@neko_jemkiller_band" target="_blank" rel="noopener noreferrer">
                  SSj Neko X
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/neko_jemkiller_band/" target="_blank" rel="noopener noreferrer">
                  @neko_jemkiller_band
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/921866613" target="_blank" rel="noopener noreferrer">
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