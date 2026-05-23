import { Calculator, Car, CheckCircle2, Train } from "lucide-react";
import { NumberInput } from "../components/common/Input";
import { Panel } from "../components/common/Panel";
import { money } from "../utils/calculations";

export function TransportModule({ transportData, updateTransport, recommendation, notify }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <Panel title="Datos de transporte" eyebrow="Coche vs transporte público" icon={<Train className="h-5 w-5" />}>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberInput label="Coste coche/mes" value={transportData.carCost} onChange={(value) => updateTransport("carCost", value)} />
          <NumberInput label="Minutos coche/día" value={transportData.carMinutes} onChange={(value) => updateTransport("carMinutes", value)} />
          <NumberInput label="Coste transporte público/mes" value={transportData.publicCost} onChange={(value) => updateTransport("publicCost", value)} />
          <NumberInput label="Minutos transporte público/día" value={transportData.publicMinutes} onChange={(value) => updateTransport("publicMinutes", value)} />
        </div>
        <button type="button" onClick={() => notify("Transporte recalculado.")} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6f35] px-5 py-4 text-sm font-black text-white">
          Recalcular transporte <Calculator className="h-4 w-4" />
        </button>
      </Panel>

      <div className="rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] p-6 shadow-[0_18px_50px_rgba(34,64,28,.10)]">
        <div className="grid gap-4 sm:grid-cols-2">
          <TransportSummary icon={<Car />} title="Coche" cost={transportData.carCost} time={transportData.carMinutes} active />
          <TransportSummary icon={<Train />} title="Transporte público" cost={transportData.publicCost} time={transportData.publicMinutes} />
        </div>
        <div className="mt-5 rounded-3xl border border-[#eadc9b] bg-[#fff8d9] p-6">
          <p className="text-lg font-black text-[#213b22]">Recomendación</p>
          <p className="mt-3 leading-7 text-[#5f5c43]">
            El coche cuesta <strong>{money(recommendation.diff)} más al mes</strong> y ahorra aproximadamente <strong>{recommendation.minutesSaved} min/día</strong>.
            Recomendación: <strong>{recommendation.recommended}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

function TransportSummary({ icon, title, cost, time, active = false }) {
  return (
    <div className={`rounded-[26px] border p-6 ${active ? "border-[#2f6f35] bg-[#eef6df]" : "border-[#d9e6c7] bg-white"}`}>
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#2f6f35] shadow-sm">{icon}</span>
        {active && <CheckCircle2 className="h-5 w-5 text-[#2f6f35]" />}
      </div>
      <h3 className="text-2xl font-black text-[#213b22]">{title}</h3>
      <p className="mt-4 text-sm font-bold text-[#66715e]">Coste mensual</p>
      <strong className="text-3xl text-[#213b22]">{money(cost)}</strong>
      <p className="mt-4 text-sm font-bold text-[#66715e]">Tiempo estimado</p>
      <strong className="text-xl text-[#213b22]">{time} min/día</strong>
    </div>
  );
}
