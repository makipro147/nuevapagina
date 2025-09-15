"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import "./agregar.css";

export default function AgregarAlumnoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const grado = searchParams.get("grado");

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    edad: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuardar = async () => {
    if (!form.nombre || !form.email || !form.password || !form.edad) {
      alert("Completa todos los campos obligatorios");
      return;
    }

    // 1. Crear usuario
    const { data: usuario, error: userError } = await supabase
      .from("usuarios")
      .insert([
        {
          email: form.email,
          password: form.password,
          rol: "alumno",
        },
      ])
      .select("*")
      .single();

    if (userError || !usuario) {
      alert("Error al crear usuario: " + userError?.message);
      return;
    }

    // 2. Crear alumno
    const { error: alumnoError } = await supabase.from("alumnos").insert([
      {
        usuario_id: usuario.id,
        nombre: form.nombre,
        edad: parseInt(form.edad),
        telefono: form.telefono,
        grado: parseInt(grado as string),
      },
    ]);

    if (alumnoError) {
      alert("Error al crear alumno: " + alumnoError.message);
      return;
    }

    alert("Alumno agregado con éxito");
    router.push(`/profesor?grado=${grado}`);
  };

  return (
    <div className="agregar-container">
      <div className="agregar-card">
        <h2 className="agregar-title">Agregar Alumno - {grado}º grado</h2>

        <input
          name="nombre"
          placeholder="Nombre completo"
          className="agregar-input"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Correo (usuario)"
          className="agregar-input"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Contraseña"
          className="agregar-input"
          value={form.password}
          onChange={handleChange}
        />
        <input
          name="edad"
          type="number"
          placeholder="Edad"
          className="agregar-input"
          value={form.edad}
          onChange={handleChange}
        />
        <input
          name="telefono"
          placeholder="Teléfono (opcional)"
          className="agregar-input"
          value={form.telefono}
          onChange={handleChange}
        />

        <div className="agregar-buttons">
          <button onClick={handleGuardar} className="agregar-btn">
            Guardar
          </button>
          <button
            onClick={() => router.push(`/profesor?grado=${grado}`)}
            className="agregar-btn-outline"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}