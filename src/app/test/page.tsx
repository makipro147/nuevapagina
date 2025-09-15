"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TestPage() {
  const [profesores, setProfesores] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("profesores").select("*");
      setProfesores(data || []);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Profesores</h1>
      {profesores.map((p) => (
        <div key={p.id} className="mb-2">
          {p.nombre} {p.apellido} - {p.curso}
        </div>
      ))}
    </div>
  );
}