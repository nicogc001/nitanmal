import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    localStorage.setItem(
      "nitanmalUser",
      JSON.stringify({
        name: "Alex",
        email: "demo@nitanmal.com",
        city: "Madrid",
      })
    );

    navigate("/app/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#f7faf3] text-slate-950">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 md:grid-cols-2">
        <div>
          <Link to="/" className="text-2xl font-black">
            🐸 NiTanMal
          </Link>

          <h1 className="mt-12 max-w-xl text-5xl font-black leading-tight md:text-6xl">
            Vuelve a tu vida financiera real.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Entra para ver tu análisis, tus gastos, transporte, objetivos y
            comparadores.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#eef8eb] p-6">
            <p className="font-bold text-green-800">Demo privada</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              De momento el login es simulado. Más adelante lo conectaremos con
              Supabase y usuarios reales.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-slate-200"
        >
          <h2 className="text-3xl font-black">Entrar</h2>

          <p className="mt-2 text-slate-500">
            Accede a tu panel privado de NiTanMal.
          </p>

          <label className="mt-8 block">
            <span className="text-sm font-bold text-slate-700">Email</span>
            <input
              type="email"
              defaultValue="demo@nitanmal.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">Contraseña</span>
            <input
              type="password"
              defaultValue="123456"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            />
          </label>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-800"
          >
            Entrar al dashboard <ArrowRight size={18} />
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="font-bold text-green-700">
              Únete a la beta
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;