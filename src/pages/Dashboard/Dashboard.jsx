import { Link } from "react-router-dom";
import {
  BarChart3,
  Car,
  Clock,
  Home,
  LogOut,
  Target,
  Wallet,
} from "lucide-react";
import { dashboardData } from "../../mock/dashboardData";

function Dashboard() {
  const storedUser = JSON.parse(localStorage.getItem("nitanmalUser"));

  const user = storedUser || {
    name: "Alex",
    city: "Madrid",
    salary: 30000,
    situation: "Quiero independizarme",
  };

  return (
    <main className="min-h-screen bg-[#f7faf3] text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[260px_1fr]">
        <aside className="hidden rounded-[2rem] bg-white p-5 shadow-sm lg:block">
          <Link to="/" className="text-2xl font-black">
            🐸 NiTanMal
          </Link>

          <nav className="mt-10 space-y-2">
            <SidebarItem active icon={<BarChart3 size={18} />} text="Resumen" />
            <SidebarItem icon={<Wallet size={18} />} text="Gastos" />
            <SidebarItem icon={<Car size={18} />} text="Transporte" />
            <SidebarItem icon={<Target size={18} />} text="Objetivos" />
          </nav>

          <Link
            to="/"
            className="mt-10 flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600"
          >
            <LogOut size={17} />
            Salir
          </Link>
        </aside>

        <section>
          <header className="mb-6 flex items-center justify-between rounded-[2rem] bg-white p-5 shadow-sm">
            <div>
              <p className="text-sm text-slate-500">Hola, {user.name} 👋</p>
              <h1 className="text-2xl font-black">Tu vida financiera real</h1>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
              {user.city}
            </span>
          </header>

          <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                Análisis mock
              </div>

              <h2 className="mt-6 text-5xl font-black leading-tight">
                Bueno...
                <br />
                ni tan mal.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Con tus datos iniciales, estimamos que podrías ahorrar{" "}
                <strong className="text-green-700">
                  {dashboardData.ahorro}€/mes
                </strong>{" "}
                sin vivir agobiado.
              </p>

              <div className="mt-8 rounded-[2rem] bg-[#eef8eb] p-6">
                <p className="font-bold">Tu tranquilidad financiera</p>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-6xl font-black text-green-700">
                    {dashboardData.tranquilidad}
                  </span>
                  <span className="mb-2 text-xl font-bold text-slate-500">
                    /100
                  </span>
                </div>

                <div className="mt-5 h-3 rounded-full bg-white">
                  <div
                    className="h-3 rounded-full bg-green-700"
                    style={{ width: `${dashboardData.tranquilidad}%` }}
                  />
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Vas bastante estable, aunque el transporte y la vivienda
                  pueden marcar mucho tu margen real.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-bold text-green-300">Tu perfil</p>

              <div className="mt-6 space-y-5">
                <ProfileRow label="Sueldo bruto" value={`${user.salary}€`} />
                <ProfileRow label="Ciudad" value={user.city} />
                <ProfileRow label="Objetivo" value={user.situation} />
                <ProfileRow label="Modo" value="Beta mock" />
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-5 md:grid-cols-3">
            <InsightCard
              icon={<Car />}
              title="Tu coche"
              value={`${dashboardData.coche}€/mes`}
              text="Coste real estimado entre gasolina, seguro y desgaste."
            />

            <InsightCard
              icon={<Home />}
              title="Tu casa"
              value={`${dashboardData.alquilerPorcentaje}%`}
              text="Porcentaje aproximado del sueldo destinado a vivienda."
            />

            <InsightCard
              icon={<Clock />}
              title="Tiempo perdido"
              value={`${dashboardData.tiempoPerdido}h/mes`}
              text="Tiempo estimado en desplazamientos."
            />
          </section>

          <section className="mt-6 rounded-[2.5rem] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">¿Y si cambiaras algo?</h3>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Scenario title="Remoto 3 días" value="+230€/mes" />
              <Scenario title="Transporte público" value="+140€/mes" />
              <Scenario title="Compartir piso" value="+320€/mes" />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${
        active
          ? "bg-green-100 text-green-800"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}

function InsightCard({ icon, title, value, text }) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        {icon}
      </div>

      <p className="font-bold">{title}</p>
      <p className="mt-2 text-3xl font-black text-green-700">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

function Scenario({ title, value }) {
  return (
    <div className="rounded-2xl bg-[#eef8eb] p-5">
      <p className="font-bold">{title}</p>
      <p className="mt-2 text-2xl font-black text-green-700">{value}</p>
    </div>
  );
}

export default Dashboard;