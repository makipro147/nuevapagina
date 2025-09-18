"use client";
import { useEffect, useRef, useState } from "react";
import "./musicaFondo.css"; // 👈 agregamos estilos propios

export default function MusicaFondo() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/se-fue-la-luz.mp3");
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;
  }, []);

  const toggleMusica = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={toggleMusica}
      className={`btn-musica-estilo ${playing ? 'activo' : ''}`}
      title={playing ? "Pausar música" : "Reproducir música"}
    >
      {playing ? "🎵" : "🎶"}
    </button>
  );
}