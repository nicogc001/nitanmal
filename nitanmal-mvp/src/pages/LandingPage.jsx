import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  Home,
  MapPin,
  PiggyBank,
  ShieldCheck,
  Train,
  UserPlus,
  Wallet,
} from "lucide-react";
import { money } from "../utils/calculations";
import { SummaryRow } from "../components/common/SummaryRow";

export function LandingPage({ currentAnalysis, housingAnalysis, activeSaving, onLogin, onRegister, onBuyerDemo, onOpsDemo }) {
  return (
    <section className="relative overflow-hidden px-5 py-10 sm:py-14">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-[#9fc07c]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#f3e8a8]/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.03fr_.97fr]">
        <div className="rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1]/90 p-7 shadow-[0_24px_70px_rgba(34,64,28,.14)] sm:p-10 lg:p-14">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c7d9b8] bg-white px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[#2f6f35]">
            <ShieldCheck className="h-4 w-4" /> MVP financiero personal
          </span>

          <h1 className="max-w-3xl text-5xl font-black leading-[.92] tracking-[-.055em] text-[#213b22] sm:text-6xl lg:text-7xl">
            Compara vivienda, trabajo y transporte antes de cambiar de vida.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#66715e] sm:text-lg">
            Regístrate como comprador, entra al panel y cambia los datos tú mismo: sueldo, alquiler,
            ciudad, transporte, oferta de trabajo y ahorro estimado. Todo simulado, pero con flujo real.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={onRegister}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f6f35] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#2f6f35]/25 transition hover:-translate-y-0.5 hover:bg-[#244f29]"
            >
              Crear usuario <UserPlus className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onLogin}
              className="inline-flex items-center justify-center rounded-full border border-[#c7d9b8] bg-white px-6 py-4 text-sm font-black text-[#2f6f35] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={onBuyerDemo}
              className="inline-flex items-center justify-center rounded-full border border-[#c7d9b8] bg-[#eef6df] px-6 py-4 text-sm font-black text-[#2f6f35] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Demo comprador
            </button>
            <button
              type="button"
              onClick={onOpsDemo}
              className="inline-flex items-center justify-center rounded-full border border-[#c7d9b8] bg-white px-6 py-4 text-sm font-black text-[#213b22] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Demo operaciones
            </button>
          </div>
        </div>

        <div className="relative rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] p-5 shadow-[0_24px_70px_rgba(34,64,28,.14)] sm:p-7">
          <div className="absolute right-6 top-6 rounded-2xl bg-[#2f6f35] px-4 py-3 text-sm font-black text-white shadow-xl shadow-[#2f6f35]/25">
            Mejora estimada
            <strong className="block text-2xl">+{money(activeSaving)}/mes</strong>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-[#eef6df] to-[#fffdf4] p-6">
            <div className="mb-7 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sm">
                <Wallet className="h-5 w-5 text-[#2f6f35]" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#66715e]">Vista rápida</p>
                <h2 className="text-2xl font-black text-[#213b22]">Análisis editable</h2>
              </div>
            </div>

            <div className="space-y-3">
              <SummaryRow icon={<MapPin />} label="Situación actual" value={currentAnalysis.city} />
              <SummaryRow icon={<Home />} label="Gasto actual" value={money(currentAnalysis.totalExpenses)} />
              <SummaryRow icon={<Building2 />} label="Alternativa vivienda" value={housingAnalysis.city} />
              <SummaryRow icon={<PiggyBank />} label="Disponible alternativo" value={money(housingAnalysis.available)} highlighted />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <MiniAction icon={<Home />} title="Vivienda" text="Ciudad, alquiler y coste" />
            <MiniAction icon={<BriefcaseBusiness />} title="Trabajo" text="Sueldo y condiciones" />
            <MiniAction icon={<Train />} title="Transporte" text="Coche o público" />
            <MiniAction icon={<Bot />} title="IA mock" text="Recomendación" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniAction({ icon, title, text }) {
  return (
    <article className="rounded-[24px] border border-[#d9e6c7] bg-white p-5 text-left shadow-sm">
      <span className="mb-4 flex items-center justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eef6df] text-[#2f6f35]">{icon}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2f6f35] text-white">
          <ArrowRight className="h-4 w-4" />
        </span>
      </span>
      <span className="block font-black text-[#213b22]">{title}</span>
      <span className="mt-1 block text-xs font-semibold leading-5 text-[#66715e]">{text}</span>
    </article>
  );
}
