import { BriefcaseBusiness, Home, Train, Users } from "lucide-react";
import { money } from "../utils/calculations";
import { StatCard } from "../components/common/StatCard";
import { TabButton } from "../components/common/TabButton";
import { HousingModule } from "../modules/HousingModule";
import { JobModule } from "../modules/JobModule";
import { TransportModule } from "../modules/TransportModule";
import { OperationsModule } from "../modules/OperationsModule";

export function DashboardPage({
  session,
  users,
  activeModule,
  setActiveModule,
  currentData,
  housingData,
  jobData,
  transportData,
  currentAnalysis,
  housingAnalysis,
  jobAnalysis,
  activeSaving,
  activeAnnualSaving,
  transportRecommendation,
  updateCurrent,
  updateHousing,
  updateJob,
  updateTransport,
  notify,
}) {
  if (!session) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] p-8 text-center shadow-[0_24px_70px_rgba(34,64,28,.14)]">
          <h2 className="text-3xl font-black text-[#213b22]">Necesitas iniciar sesión.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 pb-20">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#2f6f35]">
            Panel {session.role === "operaciones" ? "operaciones" : "comprador"}
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-.045em] text-[#213b22]">
            Hola, {session.name}. Cambia datos y recalcula.
          </h1>
        </div>
        <div className="rounded-full bg-[#f9fbf1] px-5 py-3 text-sm font-black text-[#2f6f35] shadow-sm">
          {session.email}
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <StatCard title="Disponible actual" value={money(currentAnalysis.available)} text={`${currentAnalysis.city} · ${money(currentAnalysis.totalExpenses)} de gasto`} />
        <StatCard title="Mejora mensual" value={money(activeSaving)} text="Según módulo activo" positive={activeSaving > 0} />
        <StatCard title="Mejora anual" value={money(activeAnnualSaving)} text="Proyección a 12 meses" positive={activeAnnualSaving > 0} />
        <StatCard title="Usuarios demo" value={users.length} text="Incluye registrados en sesión" />
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto rounded-full bg-[#f9fbf1] p-2 shadow-sm">
        <TabButton active={activeModule === "vivienda"} onClick={() => setActiveModule("vivienda")} icon={<Home className="h-4 w-4" />}>Vivienda</TabButton>
        <TabButton active={activeModule === "trabajo"} onClick={() => setActiveModule("trabajo")} icon={<BriefcaseBusiness className="h-4 w-4" />}>Trabajo</TabButton>
        <TabButton active={activeModule === "transporte"} onClick={() => setActiveModule("transporte")} icon={<Train className="h-4 w-4" />}>Transporte</TabButton>
        <TabButton active={activeModule === "operaciones"} onClick={() => setActiveModule("operaciones")} icon={<Users className="h-4 w-4" />}>Operaciones</TabButton>
      </div>

      {activeModule === "vivienda" && (
        <HousingModule
          currentData={currentData}
          housingData={housingData}
          currentAnalysis={currentAnalysis}
          housingAnalysis={housingAnalysis}
          saving={housingAnalysis.available - currentAnalysis.available}
          updateCurrent={updateCurrent}
          updateHousing={updateHousing}
          notify={notify}
        />
      )}

      {activeModule === "trabajo" && (
        <JobModule
          currentData={currentData}
          jobData={jobData}
          currentAnalysis={currentAnalysis}
          jobAnalysis={jobAnalysis}
          saving={jobAnalysis.available - currentAnalysis.available}
          updateCurrent={updateCurrent}
          updateJob={updateJob}
          notify={notify}
        />
      )}

      {activeModule === "transporte" && (
        <TransportModule transportData={transportData} updateTransport={updateTransport} recommendation={transportRecommendation} notify={notify} />
      )}

      {activeModule === "operaciones" && (
        <OperationsModule users={users} currentAnalysis={currentAnalysis} housingAnalysis={housingAnalysis} jobAnalysis={jobAnalysis} />
      )}
    </section>
  );
}
