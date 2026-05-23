import { Calculator, Home, MapPin } from "lucide-react";
import { NumberInput, Input } from "../components/common/Input";
import { Panel } from "../components/common/Panel";
import { ResultPanel } from "../components/common/ResultPanel";
import { money } from "../utils/calculations";

export function HousingModule({ currentData, housingData, currentAnalysis, housingAnalysis, saving, updateCurrent, updateHousing, notify }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <Panel title="Datos actuales" eyebrow="Base de comparación" icon={<MapPin className="h-5 w-5" />}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Ciudad actual" value={currentData.city} onChange={(value) => updateCurrent("city", value)} />
          <NumberInput label="Salario neto" value={currentData.salary} onChange={(value) => updateCurrent("salary", value)} />
          <NumberInput label="Alquiler actual" value={currentData.rent} onChange={(value) => updateCurrent("rent", value)} />
          <NumberInput label="Transporte actual" value={currentData.transport} onChange={(value) => updateCurrent("transport", value)} />
          <NumberInput label="Comida" value={currentData.food} onChange={(value) => updateCurrent("food", value)} />
          <NumberInput label="Ocio" value={currentData.lifestyle} onChange={(value) => updateCurrent("lifestyle", value)} />
          <NumberInput label="Otros gastos" value={currentData.other} onChange={(value) => updateCurrent("other", value)} />
          <NumberInput label="Minutos ida/vuelta" value={currentData.commuteMinutes} onChange={(value) => updateCurrent("commuteMinutes", value)} />
        </div>
      </Panel>

      <Panel title="Comparador de vivienda" eyebrow="Si cambias de zona o ciudad" icon={<Home className="h-5 w-5" />}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Ciudad alternativa" value={housingData.city} onChange={(value) => updateHousing("city", value)} />
          <NumberInput label="Nuevo alquiler" value={housingData.rent} onChange={(value) => updateHousing("rent", value)} />
          <NumberInput label="Nuevo transporte" value={housingData.transport} onChange={(value) => updateHousing("transport", value)} />
          <NumberInput label="Comida estimada" value={housingData.food} onChange={(value) => updateHousing("food", value)} />
          <NumberInput label="Ocio estimado" value={housingData.lifestyle} onChange={(value) => updateHousing("lifestyle", value)} />
          <NumberInput label="Otros gastos" value={housingData.other} onChange={(value) => updateHousing("other", value)} />
          <NumberInput label="Minutos ida/vuelta" value={housingData.commuteMinutes} onChange={(value) => updateHousing("commuteMinutes", value)} />
        </div>
        <button type="button" onClick={() => notify("Análisis de vivienda actualizado.")} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6f35] px-5 py-4 text-sm font-black text-white">
          Recalcular vivienda <Calculator className="h-4 w-4" />
        </button>
      </Panel>

      <ResultPanel
        title="Resultado vivienda"
        currentLabel={currentAnalysis.city}
        alternativeLabel={housingAnalysis.city}
        currentAvailable={currentAnalysis.available}
        alternativeAvailable={housingAnalysis.available}
        saving={saving}
        conclusion={
          saving > 0
            ? `Mudarte a ${housingAnalysis.city} mejora tu disponible mensual en ${money(saving)}.`
            : `Con estos datos, ${housingAnalysis.city} no mejora tu situación financiera mensual.`
        }
      />
    </div>
  );
}
