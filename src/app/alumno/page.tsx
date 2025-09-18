"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import AOS from "aos";
import "aos/dist/aos.css";
import "./alumno.css";

export default function AlumnoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlGrado = searchParams.get("grado");

  const [user, setUser] = useState<any>(null);
  const [alumno, setAlumno] = useState<any>(null);
  const [mensaje, setMensaje] = useState("");
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({ nombre: "", edad: "", telefono: "" });

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR safe

    AOS.init({ duration: 1000, once: true });

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }

    const userData = JSON.parse(storedUser);
    setUser(userData);

    async function fetchAlumno() {
      try {
        const { data, error } = await supabase
          .from("alumnos")
          .select("*")
          .eq("usuario_id", userData.id)
          .single();

        if (error) {
          console.error("Supabase error:", error.message);
          setMensaje("Error al obtener datos del alumno.");
          return;
        }

        if (data) {
          setAlumno(data);
          setForm({
            nombre: data.nombre,
            edad: data.edad,
            telefono: data.telefono,
          });

          if (urlGrado && parseInt(urlGrado) !== data.grado) {
            setMensaje(`Este no es tu grado. Tu grado real es el ${data.grado}º.`);
          }
        }
      } catch (err: any) {
        console.error("❌ Error inesperado en fetchAlumno:", JSON.stringify(err));
        setMensaje("Error inesperado al cargar los datos.");
      }
    }

    fetchAlumno();
  }, [urlGrado, router]);

  const handleGuardar = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("alumnos")
        .update({
          nombre: form.nombre,
          edad: form.edad,
          telefono: form.telefono,
        })
        .eq("usuario_id", user.id);

      if (error) {
        console.error("Supabase update error:", error.message);
        setMensaje("No se pudieron guardar los cambios.");
        return;
      }

      setAlumno({ ...alumno, ...form });
      setEditando(false);
    } catch (err: any) {
      console.error("❌ Error inesperado en handleGuardar:", JSON.stringify(err));
      setMensaje("Error inesperado al guardar los datos.");
    }
  };

  const handleSalir = () => {
    localStorage.clear();
    router.push("/");
  };

  if (!alumno && !mensaje) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  if (mensaje) {
    return (
      <div className="alumno-container">
        <div className="alumno-card" data-aos="fade-up">
          <h2 className="alumno-title">Acceso no permitido</h2>
          <p className="mb-6">{mensaje}</p>
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
            className="alumno-btn"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="alumno-container">
      <div className="alumno-card" data-aos="fade-up">
        <h1 className="alumno-title">Bienvenido, {alumno?.nombre}</h1>

        {!editando ? (
          <>
            <div className="alumno-datos">
              <p><strong>Edad:</strong> {alumno.edad} años</p>
              <p><strong>Teléfono:</strong> {alumno.telefono || "No registrado"}</p>
              <p><strong>Grado:</strong> {alumno.grado}º</p>
              <p><strong>Puntos:</strong> {alumno.puntos || 0}</p>
            </div>

            <div className="alumno-buttons">
              <button onClick={() => setEditando(true)} className="alumno-btn">
                Editar datos
              </button>
              <Link
                href={`/alumno/clases?grado=${alumno.grado}`}
                className="alumno-btn alumno-btn-outline"
              >
                Ver clases
              </Link>
              <button onClick={handleSalir} className="alumno-btn alumno-btn-outline">
                Salir
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="alumno-datos">
              <input
                className="alumno-input"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
              <input
                className="alumno-input"
                placeholder="Edad"
                type="number"
                value={form.edad}
                onChange={(e) => setForm({ ...form, edad: e.target.value })}
              />
              <input
                className="alumno-input"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              />
            </div>

            <div className="alumno-buttons">
              <button onClick={handleGuardar} className="alumno-btn">
                Guardar
              </button>
              <button
                onClick={() => setEditando(false)}
                className="alumno-btn alumno-btn-outline"
              >
                Cancelar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// prueba 01 develop rama
