"use client";
import "./login.css";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

const allowedEmails = ["rojasmichael148@gmail.com"];

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grado, setGrado] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const gradoURL = params.get("grado");
    if (gradoURL) setGrado(gradoURL);

    const checkGoogleUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) return;

        const user = data?.user;
        if (user?.email) {
          if (!allowedEmails.includes(user.email)) {
            alert("Acceso no permitido con este correo");
            await supabase.auth.signOut();
            router.push("/");
          } else {
            localStorage.setItem(
              "user",
              JSON.stringify({ email: user.email, rol: "profesor" })
            );
            const grado = params.get("grado");
            if (grado && ["1", "2", "3", "4", "5"].includes(grado)) {
              router.push(`/profesor?grado=${grado}`);
            } else {
              router.push("/profesor");
            }
          }
        }
      } catch (err) {
        console.error("Error en login Google:", err);
        alert("Por favor, inicia sesión con tu correo y contraseña.");
      }
    };

    checkGoogleUser();
  }, [router]);

  const login = async () => {
    try {
      const { data: user, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (error || !user) {
        alert("Credenciales incorrectas");
        return;
      }

      if (user.rol === "profesor") {
        localStorage.setItem("user", JSON.stringify(user));
        const gradoURL = searchParams.get("grado");
        if (gradoURL && ["1", "2", "3", "4", "5"].includes(gradoURL)) {
          router.push(`/profesor?grado=${gradoURL}`);
        } else {
          router.push("/profesor");
        }
      } else if (user.rol === "alumno") {
        if (!grado) {
          alert("Selecciona un grado");
          return;
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("grado", grado);
        router.push(`/alumno?grado=${grado}`);
      }
    } catch (err) {
      console.error("Error en login:", err);
      alert("Ocurrió un error al iniciar sesión.");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const grado = searchParams.get("grado");
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL ||
        (typeof window !== "undefined" ? window.location.origin : "");
      const redirectTo = `${siteUrl}/login${grado ? `?grado=${grado}` : ""}`;
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
    } catch (err) {
      console.error("Error al iniciar con Google:", err);
      alert("No se pudo iniciar sesión con Google.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-gif">
        <img src="/gif/login.gif" alt="Login animado" />
      </div>

      <Link href="/" className="login-exit">
        ← Volver al inicio
      </Link>

      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <p className="login-subtitle">Accede a tu cuenta</p>

        <input
          type="email"
          placeholder="Correo"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="login-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="login-toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {!grado && (
          <select
            className="login-select"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
          >
            <option value="">Selecciona tu grado</option>
            <option value="1">1º de secundaria</option>
            <option value="2">2º de secundaria</option>
            <option value="3">3º de secundaria</option>
            <option value="4">4º de secundaria</option>
            <option value="5">5º de secundaria</option>
          </select>
        )}

        {grado && <p className="login-grado-text">Grado seleccionado: {grado}º</p>}

        <button onClick={login} className="login-btn">
          Entrar
        </button>

        <button onClick={loginWithGoogle} className="login-google-btn">
          Iniciar con Google
        </button>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LoginContent />
    </Suspense>
  );
}