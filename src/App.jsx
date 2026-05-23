import { ArrowRight, Car, BarChart3, Bot, Target, ShieldCheck } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-[#f7faf3] text-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-2xl font-black">🐸 NiTanMal</div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a>Cómo funciona</a>
          <a>Comparador</a>
          <a>Transporte</a>
          <a>Beta</a>
        </div>

        <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">
          Entrar
        </button>
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
            NiTanMal te ayuda a saber si puedes independizarte, cambiar de
            trabajo, comprarte un coche o ahorrar sin vivir agobiado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-bold text-white shadow-lg shadow-green-900/10">
              Unirme a la beta <ArrowRight size={18} />
            </button>

            <button className="rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800">
              Ver cómo funciona
            </button>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Sin bancos. Sin Excel. Sin juzgarte.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-slate-200">
          <div className="rounded-[2rem] bg-[#eef8eb] p-6">
            <p className="text-sm font-bold text-green-800">Ejemplo de análisis</p>

            <h2 className="mt-5 text-4xl font-black">
              Bueno... <br /> ni tan mal.
            </h2>

            <p className="mt-4 text-slate-700">
              Con remoto 3 días podrías ahorrar más de{" "}
              <strong className="text-green-800">230€/mes</strong> y recuperar{" "}
              <strong className="text-green-800">18h</strong> de vida.
            </p>

            <div className="mt-6 grid gap-3">
              <MiniInsight icon={<Car />} title="Transporte real" text="Tu coche cuesta más de lo que parece." />
              <MiniInsight icon={<BarChart3 />} title="Comparador de vida" text="No compares solo sueldo. Compara tiempo, estrés y ahorro." />
              <MiniInsight icon={<Target />} title="Objetivos" text="Independizarte, ahorrar o cambiar de coche con números claros." />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-4">
          <Feature icon={<BarChart3 />} title="Sueldo real" text="Calcula lo que realmente te queda cada mes." />
          <Feature icon={<Car />} title="Transporte" text="Gasolina, seguro, mantenimiento, parking y tiempo perdido." />
          <Feature icon={<Bot />} title="IA financiera" text="Pregúntale si te compensa cambiar de trabajo o independizarte." />
          <Feature icon={<ShieldCheck />} title="Tranquilidad" text="Una visión clara y humana de tu situación." />
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

export default App;