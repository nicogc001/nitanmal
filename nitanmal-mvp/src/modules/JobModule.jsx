import { BriefcaseBusiness, Calculator, Wallet } from "lucide-react";
import { Input, NumberInput } from "../components/common/Input";
import { Panel } from "../components/common/Panel";
import { ResultPanel } from "../components/common/ResultPanel";
import { money } from "../utils/calculations";

export function JobModule({ currentData, jobData, currentAnalysis, jobAnalysis, saving, updateCurrent, updateJob, notify }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <Panel title="Situación actual" eyebrow="Trabajo actual" icon={<Wallet className="h-5 w-5" />}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Ciudad actual" value={currentData.city} onChange={(value) => updateCurrent("city", value)} />
          <NumberInput label="Salario neto actual" value={currentData.salary} onChange={(value) => updateCurrent("salary", value)} />
          <NumberInput label="Alquiler actual" value={currentData.rent} onChange={(value) => updateCurrent("rent", value)} />
          <NumberInput label="Transporte actual" value={currentData.transport} onChange={(value) => updateCurrent("transport", value)} />
        </div>
      </Panel>

      <Panel title="Comparador de trabajo" eyebrow="Si cambias de empleo" icon={<BriefcaseBusiness className="h-5 w-5" />}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Nombre de la opción" value={jobData.title} onChange={(value) => updateJob("title", value)} />
          <Input label="Ciudad del trabajo" value={jobData.city} onChange={(value) => updateJob("city", value)} />
          <NumberInput label="Nuevo salario neto" value={jobData.salary} onChange={(value) => updateJob("salary", value)} />
          <NumberInput label="Alquiler si aceptas" value={jobData.rent} onChange={(value) => updateJob("rent", value)} />
          <NumberInput label="Transporte" value={jobData.transport} onChange={(value) => updateJob("transport", value)} />
          <NumberInput label="Días remoto/semana" value={jobData.remoteDays} onChange={(value) => updateJob("remoteDays", value)} />
          <NumberInput label="Comida" value={jobData.food} onChange={(value) => updateJob("food", value)} />
          <NumberInput label="Ocio" value={jobData.lifestyle} onChange={(value) => updateJob("lifestyle", value)} />
          <NumberInput label="Otros gastos" value={jobData.other} onChange={(value) => updateJob("other", value)} />
          <NumberInput label="Minutos ida/vuelta" value={jobData.commuteMinutes} onChange={(value) => updateJob("commuteMinutes", value)} />
        </div>
        <button type="button" onClick={() => notify("Análisis de trabajo actualizado.")} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6f35] px-5 py-4 text-sm font-black text-white">
          Recalcular trabajo <Calculator className="h-4 w-4" />
        </button>
      </Panel>

      <ResultPanel
        title="Resultado trabajo"
        currentLabel="Trabajo actual"
        alternativeLabel={jobAnalysis.title}
        currentAvailable={currentAnalysis.available}
        alternativeAvailable={jobAnalysis.available}
        saving={saving}
        conclusion={
          saving > 0
            ? `Aceptar ${jobAnalysis.title} mejora tu disponible mensual en ${money(saving)}.`
            : `Con estos datos, ${jobAnalysis.title} no compensa económicamente frente a tu situación actual.`
        }
      />
    </div>
  );
}
