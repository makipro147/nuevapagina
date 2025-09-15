"use client";
import { useState } from "react";

export default function Navbar() {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const toggleMusica = () => {
    if (!audio) {
      const newAudio = new Audio("/audio/se-fue-la-luz.mp3");
      newAudio.volume = 0.3;
      newAudio.loop = true;
      setAudio(newAudio);
      newAudio.play();
      setPlaying(true);
    } else {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <nav className="nav slide-left">
      <div className="container nav-inner">
        {/* Título a la izquierda */}
        <div className="brand">
          MI PÁGINA PERSONAL<span className="name"> · DE CÓMPUTO</span>
        </div>

        {/* Enlaces + botón en línea horizontal */}
        <div className="nav-links">
          <a href="#sobre">Sobre mí</a>
          <a href="#galeria">Galería</a>
          <a href="#clases">Clases</a>
          <a href="#redes">Redes</a>

          {/* Botón de música al costado de Redes */}
          <button
            onClick={toggleMusica}
            className={`btn-musica ${playing ? "activo" : ""}`}
            aria-label="Activar/Desactivar música"
          >
            {playing ? "🔊" : "🔇"}
          </button>
        </div>
      </div>
    </nav>
  );
}