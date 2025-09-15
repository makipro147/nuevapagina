"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import "./profesor.css";

export default function ProfesorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [alumnos, setAlumnos] = useState<any[]>([]);
  const [grado, setGrado] = useState<number | null>(null);
  const [editando, setEditando] = useState<string | null>(null);
  const [form, setForm] = useState({ nombre: "", email: "", password: "", telefono: "", edad: "" });

  // Modal de puntos
  const [modalPuntos, setModalPuntos] = useState<{
    abierto: boolean;
    tipo: "subir" | "bajar";
    alumnoId: string;
    puntosActuales: number;
  }>({ abierto: false, tipo: "subir", alumnoId: "", puntosActuales: 0 });

  const [cantidadPuntos, setCantidadPuntos] = useState("");

  useEffect(() => {
    const gradoURL = searchParams.get("grado");
    if (gradoURL && ["1", "2", "3", "4", "5"].includes(gradoURL)) {
      const g = parseInt(gradoURL);
      setGrado(g);
      fetchAlumnos(g);
    } else {
      const gradoPrompt = prompt("¿Qué grado quieres gestionar? (1-5)");
      if (gradoPrompt && ["1", "2", "3", "4", "5"].includes(gradoPrompt)) {
        const g = parseInt(gradoPrompt);
        setGrado(g);
        fetchAlumnos(g);
        router.push(`/profesor?grado=${g}`);
      } else {
        alert("Grado no válido");
        router.push("/");
      }
    }
  }, []);

  const fetchAlumnos = async (g: number) => {
    const { data } = await supabase
      .from("alumnos")
      .select("*, usuarios!inner(*)")
      .eq("grado", g);
    if (data) setAlumnos(data);
  };

  const handleEditar = (alumno: any) => {
    setEditando(alumno.id);
    setForm({
      nombre: alumno.nombre,
      email: alumno.usuarios.email,
      password: alumno.usuarios.password,
      telefono: alumno.telefono,
      edad: alumno.edad,
    });
  };

  const handleGuardar = async (alumnoId: string, usuarioId: string) => {
    const edadNum = parseInt(form.edad);
    if (isNaN(edadNum) || edadNum < 12 || edadNum > 20) {
      alert("La edad debe estar entre 12 y 20 años");
      return;
    }

    const { data: existing } = await supabase
      .from("usuarios")
      .select("id")
      .eq("email", form.email)
      .neq("id", usuarioId)
      .single();

    if (existing) {
      alert("Este correo ya está registrado por otro usuario");
      return;
    }

    await supabase.from("alumnos").update({
      nombre: form.nombre,
      edad: edadNum,
      telefono: form.telefono,
    }).eq("id", alumnoId);

    await supabase.from("usuarios").update({
      email: form.email,
      password: form.password,
    }).eq("id", usuarioId);

    setEditando(null);
    if (grado) fetchAlumnos(grado);
  };

  const handleEliminar = async (alumnoId: string, usuarioId: string) => {
    if (!confirm("¿Seguro que quieres eliminar este alumno?")) return;
    await supabase.from("alumnos").delete().eq("id", alumnoId);
    await supabase.from("usuarios").delete().eq("id", usuarioId);
    if (grado) fetchAlumnos(grado);
  };

  const handleAgregar = () => {
    router.push(`/profesor/agregar?grado=${grado}`);
  };

  const abrirModalPuntos = (tipo: "subir" | "bajar", alumnoId: string, puntosActuales: number) => {
    setModalPuntos({ abierto: true, tipo, alumnoId, puntosActuales });
    setCantidadPuntos("");
  };

  const cerrarModalPuntos = () => {
    setModalPuntos({ abierto: false, tipo: "subir", alumnoId: "", puntosActuales: 0 });
  };

  const aplicarPuntos = async () => {
    const cantidad = parseInt(cantidadPuntos);
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Cantidad no válida");
      return;
    }

    const nuevosPuntos =
      modalPuntos.tipo === "subir"
        ? modalPuntos.puntosActuales + cantidad
        : Math.max(modalPuntos.puntosActuales - cantidad, 0);

    await supabase.from("alumnos").update({ puntos: nuevosPuntos }).eq("id", modalPuntos.alumnoId);
    cerrarModalPuntos();
    if (grado) fetchAlumnos(grado);
  };

  const handleSalir = () => {
    localStorage.clear();
    router.push("/");
  };

  const handleVerClases = () => {
    router.push(`/profesor/clases?grado=${grado}`);
  };

  return (
    <>
      <div className="profesor-container">
        <h1 className="profesor-title">Panel de Profesor - {grado}º grado</h1>

        <div className="profesor-buttons-top">
          <button onClick={handleAgregar} className="profesor-btn">Agregar alumno</button>
          <button onClick={handleVerClases} className="profesor-btn">Ver clases</button>
          <button onClick={handleSalir} className="profesor-btn-outline">Salir</button>
        </div>

        <table className="profesor-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Usuario (email)</th>
              <th>Contraseña</th>
              <th>Puntos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((a) => (
              <tr key={a.id}>
                <td>{editando === a.id ? <input value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="profesor-input" /> : a.nombre}</td>
                <td>{editando === a.id ? <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="profesor-input" /> : a.usuarios.email}</td>
                <td>{editando === a.id ? <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="profesor-input" /> : a.usuarios.password}</td>
                <td>{a.puntos || 0}</td>
                <td className="profesor-actions">
                  {editando === a.id ? (
                    <>
                      <button onClick={() => handleGuardar(a.id, a.usuario_id)} className="profesor-btn-small">Guardar</button>
                      <button onClick={() => setEditando(null)} className="profesor-btn-small-outline">Cancelar</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditar(a)} className="profesor-btn-small">Editar</button>
                      <button onClick={() => abrirModalPuntos("subir", a.id, a.puntos || 0)} className="profesor-btn-small">+</button>
                      <button onClick={() => abrirModalPuntos("bajar", a.id, a.puntos || 0)} className="profesor-btn-small">-</button>
                      <button onClick={() => handleEliminar(a.id, a.usuario_id)} className="profesor-btn-small-danger">Eliminar</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalPuntos.abierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{modalPuntos.tipo === "subir" ? "Subir puntos" : "Bajar puntos"}</h3>
            <input
              type="number"
              placeholder="Cantidad"
              value={cantidadPuntos}
              onChange={(e) => setCantidadPuntos(e.target.value)}
              className="profesor-input"
            />
            <div className="modal-actions">
              <button onClick={aplicarPuntos} className="profesor-btn">Aplicar</button>
              <button onClick={cerrarModalPuntos} className="profesor-btn-outline">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}