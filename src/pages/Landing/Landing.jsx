import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Car,
  ShieldCheck,
  Target,
} from "lucide-react";

function Landing() {
  return (
    <main className="min-h-screen bg-[#f7faf3] text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-black">
          🐸 NiTanMal
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#como-funciona" className="hover:text-slate-950">
            Cómo funciona
          </a>
          <a href="#comparador" className="hover:text-slate-950">
            Comparador
          </a>
          <a href="#transporte" className="hover:text-slate-950">
            Transporte
          </a>
          <a href="#beta" className="hover:text-slate-950">
            Beta
          </a>
        </div>

        <Link
          to="/login"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Entrar
        </Link>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            Tu vida financiera real
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Entiende tu dinero.
            <br />
            Vive mejor.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            NiTanMal te ayuda a entender cuánto te cuesta realmente vivir,
            trabajar, moverte y tomar decisiones como independizarte, cambiar
            de trabajo o ahorrar con calma.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="flex items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-800"
            >
              Unirme a la beta <ArrowRight size={18} />
            </Link>

            <a
              href="#demo"
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Ver demo
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Sin bancos. Sin Excel. Sin juzgarte.
          </p>
        </div>

        <div
          id="demo"
          className="rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-slate-200"
        >
          <div className="rounded-[2rem] bg-[#eef8eb] p-6">
            <p className="text-sm font-bold text-green-800">
              Ejemplo de análisis
            </p>

            <h2 className="mt-5 text-4xl font-black">
              Bueno...
              <br />
              ni tan mal.
            </h2>

            <p className="mt-4 text-slate-700">
              Con remoto 3 días podrías ahorrar más de{" "}
              <strong className="text-green-800">230€/mes</strong> y recuperar
              tiempo para ti.
            </p>

            <div className="mt-6 grid gap-3">
              <MiniInsight
                icon={<Car size={22} />}
                title="Transporte real"
                text="Tu coche cuesta más de lo que parece."
              />

              <MiniInsight
                icon={<BarChart3 size={22} />}
                title="Comparador"
                text="Compara vida, no solo sueldo."
              />

              <MiniInsight
                icon={<Target size={22} />}
                title="Objetivos"
                text="Ahorra con una visión clara."
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="mx-auto max-w-7xl px-6 pb-20"
      >
        <div className="grid gap-5 md:grid-cols-4">
          <Feature
            icon={<BarChart3 size={24} />}
            title="Sueldo real"
            text="Calcula lo que realmente te queda cada mes."
          />

          <Feature
            icon={<Car size={24} />}
            title="Transporte"
            text="Gasolina, mantenimiento, seguro, parking y tiempo."
          />

          <Feature
            icon={<Bot size={24} />}
            title="IA financiera"
            text="Pregúntale sobre trabajo, ahorro o independencia."
          />

          <Feature
            icon={<ShieldCheck size={24} />}
            title="Tranquilidad"
            text="Una visión humana de tu situación financiera."
          />
        </div>
      </section>

      <section
        id="comparador"
        className="mx-auto max-w-7xl px-6 pb-20"
      >
        <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold text-green-300">
            Comparador de vida
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black md:text-5xl">
            No compares solo salarios. Compara ahorro, tiempo, estrés y calidad
            de vida.
          </h2>

          <p className="mt-5 max-w-2xl text-slate-300">
            NiTanMal te ayudará a saber si una oferta mejor pagada realmente te
            compensa cuando metes transporte, presencialidad y gastos reales.
          </p>
        </div>
      </section>

      <section
        id="transporte"
        className="mx-auto max-w-7xl px-6 pb-20"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold text-green-800">
              Transporte inteligente
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Tu coche no cuesta solo gasolina.
            </h2>

            <p className="mt-4 text-slate-600">
              La app tendrá en cuenta seguro, mantenimiento, desgaste, parking,
              kilómetros y días presenciales.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#eef8eb] p-8">
            <p className="text-sm font-bold text-green-800">
              Ejemplo futuro
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Remoto 3 días = +230€/mes
            </h3>

            <p className="mt-4 text-slate-700">
              Y varias horas recuperadas cada semana para descansar, entrenar o
              vivir mejor.
            </p>
          </div>
        </div>
      </section>

      <section
        id="beta"
        className="mx-auto max-w-7xl px-6 pb-24"
      >
        <div className="rounded-[2.5rem] bg-green-700 p-8 text-white md:p-12">
          <h2 className="text-3xl font-black md:text-5xl">
            Únete a la beta de NiTanMal.
          </h2>

          <p className="mt-5 max-w-2xl text-green-50">
            Estamos construyendo la primera versión. Si quieres probarla cuando
            esté lista, puedes registrarte y entrar en la lista inicial.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-green-800 transition hover:bg-green-50"
          >
            Quiero probarla <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function MiniInsight({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-white p-4">
      <div className="text-green-700">{icon}</div>

      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        {icon}
      </div>

      <h3 className="text-lg font-black">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

export default Landing;