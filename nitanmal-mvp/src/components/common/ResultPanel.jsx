import { money } from "../../utils/calculations";
import { MockResult } from "./MockResult";

export function ResultPanel({ title, currentLabel, alternativeLabel, currentAvailable, alternativeAvailable, saving, conclusion }) {
  return (
    <div className="rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] p-6 shadow-[0_18px_50px_rgba(34,64,28,.10)] lg:col-span-2">
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#2f6f35]">Análisis recalculado</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-.035em] text-[#213b22]">{title}</h2>
        </div>
        <span className={`rounded-full px-4 py-2 text-sm font-black ${saving > 0 ? "bg-[#eef6df] text-[#2f6f35]" : "bg-[#fff2ed] text-[#a43b25]"}`}>
          {saving > 0 ? "+" : ""}{money(saving)}/mes
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MockResult label={currentLabel} value={money(currentAvailable)} />
        <MockResult label={alternativeLabel} value={money(alternativeAvailable)} positive={alternativeAvailable > currentAvailable} />
        <MockResult label="Impacto anual" value={`${saving > 0 ? "+" : ""}${money(saving * 12)}`} positive={saving > 0} />
      </div>

      <div className="mt-5 rounded-3xl bg-gradient-to-br from-[#2f6f35] to-[#244f29] p-6 text-white">
        <p className="text-lg font-black">Conclusión NiTanMal</p>
        <p className="mt-2 text-sm leading-7 text-white/85">{conclusion}</p>
      </div>
    </div>
  );
}
