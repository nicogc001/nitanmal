import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      city: formData.get("city"),
      salary: Number(formData.get("salary")),
      situation: formData.get("situation"),
    };

    localStorage.setItem("nitanmalUser", JSON.stringify(userData));

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
            Únete a la beta.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Cuéntanos un poco sobre tu situación y te mostraremos un primer
            análisis mock de tu vida financiera.
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="font-bold text-green-800">Después del registro verás:</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✅ Dashboard privado</li>
              <li>✅ Tranquilidad financiera mock</li>
              <li>✅ Ahorro estimado</li>
              <li>✅ Transporte y gastos principales</li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleRegister}
          className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-slate-200"
        >
          <h2 className="text-3xl font-black">Crear acceso beta</h2>

          <label className="mt-8 block">
            <span className="text-sm font-bold text-slate-700">Nombre</span>
            <input
              name="name"
              type="text"
              defaultValue="Alex"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">Email</span>
            <input
              name="email"
              type="email"
              defaultValue="alex@nitanmal.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">Ciudad</span>
            <input
              name="city"
              type="text"
              defaultValue="Madrid"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">
              Sueldo bruto anual aproximado
            </span>
            <input
              name="salary"
              type="number"
              defaultValue="30000"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-700">
              Situación actual
            </span>
            <select
              name="situation"
              defaultValue="Quiero independizarme"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-green-600"
            >
              <option>Quiero independizarme</option>
              <option>Quiero ahorrar más</option>
              <option>Estoy comparando ofertas</option>
              <option>Quiero saber si mi coche me compensa</option>
            </select>
          </label>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-800"
          >
            Ver mi análisis mock <ArrowRight size={18} />
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            ¿Ya tienes acceso?{" "}
            <Link to="/login" className="font-bold text-green-700">
              Entrar
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;