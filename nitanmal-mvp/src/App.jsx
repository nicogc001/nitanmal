import { useMemo, useState } from "react";
import { Header } from "./components/layout/Header";
import { Toast } from "./components/common/Toast";
import { DEMO_USERS, initialCurrent, initialHousing, initialJob, initialTransport, USER_ROLES } from "./data/demoData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useToast } from "./hooks/useToast";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";
import {
  getAvailable,
  getHousingScenario,
  getJobScenario,
  getTotalExpenses,
  getTransportRecommendation,
} from "./utils/calculations";

export default function App() {
  const [users, setUsers] = useLocalStorage("nitanmal_users", DEMO_USERS);
  const [session, setSession] = useLocalStorage("nitanmal_session", null);
  const [currentData, setCurrentData] = useLocalStorage("nitanmal_current", initialCurrent);
  const [housingData, setHousingData] = useLocalStorage("nitanmal_housing", initialHousing);
  const [jobData, setJobData] = useLocalStorage("nitanmal_job", initialJob);
  const [transportData, setTransportData] = useLocalStorage("nitanmal_transport", initialTransport);

  const [view, setView] = useState(session ? "dashboard" : "landing");
  const [authMode, setAuthMode] = useState("login");
  const [activeModule, setActiveModule] = useState(session?.role === USER_ROLES.OPERATIONS ? "operaciones" : "vivienda");
  const [authError, setAuthError] = useState("");
  const [loginForm, setLoginForm] = useState({ email: "comprador@demo.com", password: "1234" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", role: USER_ROLES.BUYER });
  const { toast, notify } = useToast();

  const currentAnalysis = useMemo(() => {
    return {
      ...currentData,
      totalExpenses: getTotalExpenses(currentData),
      available: getAvailable(currentData),
    };
  }, [currentData]);

  const housingAnalysis = useMemo(() => getHousingScenario(currentData, housingData), [currentData, housingData]);
  const jobAnalysis = useMemo(() => getJobScenario(jobData), [jobData]);
  const activeComparison = activeModule === "trabajo" ? jobAnalysis : housingAnalysis;
  const activeSaving = activeComparison.available - currentAnalysis.available;
  const activeAnnualSaving = activeSaving * 12;
  const transportRecommendation = useMemo(() => getTransportRecommendation(transportData), [transportData]);

  function openAuth(mode = "login") {
    setAuthMode(mode);
    setAuthError("");
    setView("auth");
  }

  function enterDemo(role = USER_ROLES.BUYER) {
    const demo = users.find((user) => user.role === role) || DEMO_USERS[0];
    setSession(demo);
    setView("dashboard");
    setActiveModule(role === USER_ROLES.OPERATIONS ? "operaciones" : "vivienda");
    notify(role === USER_ROLES.OPERATIONS ? "Has entrado como Operaciones." : "Has entrado como Comprador.");
  }

  function handleLogin(event) {
    event.preventDefault();
    const cleanEmail = loginForm.email.trim().toLowerCase();
    const found = users.find((user) => user.email.toLowerCase() === cleanEmail && user.password === loginForm.password);

    if (!found) {
      setAuthError("Email o contraseña incorrectos. Puedes usar comprador@demo.com / 1234.");
      return;
    }

    setAuthError("");
    setSession(found);
    setView("dashboard");
    setActiveModule(found.role === USER_ROLES.OPERATIONS ? "operaciones" : "vivienda");
    notify(`Bienvenido/a, ${found.name}.`);
  }

  function handleRegister(event) {
    event.preventDefault();
    const cleanEmail = registerForm.email.trim().toLowerCase();

    if (!registerForm.name.trim()) {
      setAuthError("Introduce tu nombre.");
      return;
    }

    if (!cleanEmail.includes("@")) {
      setAuthError("Introduce un email válido.");
      return;
    }

    if (registerForm.password.length < 4) {
      setAuthError("La contraseña debe tener al menos 4 caracteres.");
      return;
    }

    if (users.some((user) => user.email.toLowerCase() === cleanEmail)) {
      setAuthError("Ya existe un usuario con ese email.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: registerForm.name.trim(),
      email: cleanEmail,
      password: registerForm.password,
      role: registerForm.role,
    };

    setUsers((prev) => [...prev, newUser]);
    setSession(newUser);
    setView("dashboard");
    setActiveModule(newUser.role === USER_ROLES.OPERATIONS ? "operaciones" : "vivienda");
    setRegisterForm({ name: "", email: "", password: "", role: USER_ROLES.BUYER });
    setAuthError("");
    notify("Registro creado. Ya estás dentro del panel.");
  }

  function logout() {
    setSession(null);
    setView("landing");
    setAuthMode("login");
    notify("Sesión cerrada.");
  }

  function openDashboardModule(moduleName) {
    if (!session) {
      openAuth("login");
      notify("Inicia sesión para usar el comparador.");
      return;
    }

    setView("dashboard");
    setActiveModule(moduleName);
  }

  function updateCurrent(field, value) {
    setCurrentData((prev) => ({ ...prev, [field]: value }));
  }

  function updateHousing(field, value) {
    setHousingData((prev) => ({ ...prev, [field]: value }));
  }

  function updateJob(field, value) {
    setJobData((prev) => ({ ...prev, [field]: value }));
  }

  function updateTransport(field, value) {
    setTransportData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <main className="min-h-screen bg-[#dbe9c8] text-[#182014]">
      <Header
        session={session}
        onHome={() => setView("landing")}
        onOpenAuth={openAuth}
        onRegister={() => openAuth("register")}
        onLogout={logout}
        onDashboard={() => setView("dashboard")}
        onModule={openDashboardModule}
      />

      {view === "landing" && (
        <LandingPage
          currentAnalysis={currentAnalysis}
          housingAnalysis={housingAnalysis}
          activeSaving={housingAnalysis.available - currentAnalysis.available}
          onLogin={() => openAuth("login")}
          onRegister={() => openAuth("register")}
          onBuyerDemo={() => enterDemo(USER_ROLES.BUYER)}
          onOpsDemo={() => enterDemo(USER_ROLES.OPERATIONS)}
        />
      )}

      {view === "auth" && (
        <AuthPage
          mode={authMode}
          setMode={setAuthMode}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
          error={authError}
          onLogin={handleLogin}
          onRegister={handleRegister}
          onBuyerDemo={() => enterDemo(USER_ROLES.BUYER)}
          onOpsDemo={() => enterDemo(USER_ROLES.OPERATIONS)}
        />
      )}

      {view === "dashboard" && (
        <DashboardPage
          session={session}
          users={users}
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          currentData={currentData}
          housingData={housingData}
          jobData={jobData}
          transportData={transportData}
          currentAnalysis={currentAnalysis}
          housingAnalysis={housingAnalysis}
          jobAnalysis={jobAnalysis}
          activeSaving={activeSaving}
          activeAnnualSaving={activeAnnualSaving}
          transportRecommendation={transportRecommendation}
          updateCurrent={updateCurrent}
          updateHousing={updateHousing}
          updateJob={updateJob}
          updateTransport={updateTransport}
          notify={notify}
        />
      )}

      <Toast message={toast} />
    </main>
  );
}
