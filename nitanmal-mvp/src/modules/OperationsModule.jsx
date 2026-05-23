import { Users } from "lucide-react";
import { Panel } from "../components/common/Panel";
import { StatCard } from "../components/common/StatCard";
import { MockResult } from "../components/common/MockResult";
import { USER_ROLES } from "../data/demoData";
import { money } from "../utils/calculations";

export function OperationsModule({ users, currentAnalysis, housingAnalysis, jobAnalysis }) {
  const buyerCount = users.filter((user) => user.role === USER_ROLES.BUYER).length;
  const opsCount = users.filter((user) => user.role === USER_ROLES.OPERATIONS).length;

  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <Panel title="Panel operativo" eyebrow="Control interno simulado" icon={<Users className="h-5 w-5" />}>
        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard title="Compradores" value={buyerCount} text="Usuarios tipo comprador" />
          <StatCard title="Operaciones" value={opsCount} text="Usuarios internos" />
          <StatCard title="Análisis activos" value="3" text="Vivienda, trabajo y transporte" />
          <StatCard title="Conversión beta" value="Mock" text="Pendiente de backend real" />
        </div>
      </Panel>

      <div className="rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] p-6 shadow-[0_18px_50px_rgba(34,64,28,.10)]">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#2f6f35]">Últimos análisis</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-.035em] text-[#213b22]">Resumen operativo</h2>
        <div className="mt-6 space-y-4">
          <MockResult label="Disponible actual medio" value={money(currentAnalysis.available)} />
          <MockResult label="Vivienda alternativa" value={`${housingAnalysis.city} · ${money(housingAnalysis.available)}`} positive />
          <MockResult label="Trabajo alternativo" value={`${jobAnalysis.title} · ${money(jobAnalysis.available)}`} positive />
        </div>
      </div>
    </div>
  );
}
