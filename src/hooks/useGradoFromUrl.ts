"use client";

import { useSearchParams } from "next/navigation";

export default function useGradoFromUrl(): string {
  const searchParams = useSearchParams();
  const grado = searchParams.get("grado");
  return ["1", "2", "3", "4", "5"].includes(grado || "") ? grado! : "1";
}