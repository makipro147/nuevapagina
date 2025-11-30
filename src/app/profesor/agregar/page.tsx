"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import "./agregar.css";

function AgregarAlumnoForm() {
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

    try {
      // Import validation functions
      const { validateEmail, validatePassword, validatePhone, validateAge, hashPassword, sanitizeInput } = await import("@/lib/authHelpers");

      // Validate email format
      if (!validateEmail(form.email)) {
        alert("Por favor, ingresa un correo electrónico válido");
        return;
      }

      // Validate password strength
      const passwordValidation = validatePassword(form.password);
      if (!passwordValidation.isValid) {
        alert("La contraseña debe:\n" + passwordValidation.errors.join("\n"));
        return;
      }

      // Validate age
      const edad = parseInt(form.edad);
      if (!validateAge(edad)) {
        alert("La edad debe estar entre 12 y 20 años");
        return;
      }

      // Validate phone if provided
      if (form.telefono && !validatePhone(form.telefono)) {
        alert("Por favor, ingresa un número de teléfono válido");
        return;
      }

      // Check for duplicate email
      const { data: existing } = await supabase
        .from("usuarios")
        .select("id")
        .eq("email", form.email)
        .single();

      if (existing) {
        alert("Este correo ya está registrado");
        return;
      }

      // Hash the password
      const passwordHash = await hashPassword(form.password);

      // 1️⃣ Insert user into 'usuarios' table with hashed password
      const { data: usuario, error: userError } = await supabase
        .from("usuarios")
        .insert([
          {
            email: sanitizeInput(form.email),
            password_hash: passwordHash,
            rol: "alumno",
          },
        ])
        .select("*")
        .single();

      if (userError || !usuario) {
        alert("Error al crear usuario: " + userError?.message);
        return;
      }

      // 2️⃣ Insert data into 'alumnos' table
      const { error: alumnoError } = await supabase.from("alumnos").insert([
        {
          usuario_id: usuario.id,
          nombre: sanitizeInput(form.nombre),
          edad: edad,
          telefono: sanitizeInput(form.telefono || ""),
          grado: parseInt(grado as string),
        },
      ]);

      if (alumnoError) {
        alert("Error al crear alumno: " + alumnoError.message);
        return;
      }

      alert("Alumno agregado con éxito");
      router.push(`/profesor?grado=${grado}`);
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error inesperado");
    }
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

export default function AgregarAlumnoPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AgregarAlumnoForm />
    </Suspense>
  );
}
