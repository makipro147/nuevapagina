"use client";

import { Suspense } from "react";
import AlumnoPageContent from "./AlumnoPageContent";

export default function AlumnoPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Cargando...</p>}>
      <AlumnoPageContent />
    </Suspense>
  );
}
