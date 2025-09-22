"use client";

import { Suspense } from "react";
import ClasesPageContent from "./ClasesPageContent";

export default function ClasesPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Cargando clases...</p>}>
      <ClasesPageContent />
    </Suspense>
  );
}
