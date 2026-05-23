import { ArrowRight, Mail } from "lucide-react";
import { DemoBox } from "../components/common/DemoBox";
import { ErrorBox } from "../components/common/ErrorBox";
import { Input } from "../components/common/Input";
import { USER_ROLES } from "../data/demoData";

export function AuthPage({
  mode,
  setMode,
  loginForm,
  setLoginForm,
  registerForm,
  setRegisterForm,
  error,
  onLogin,
  onRegister,
  onBuyerDemo,
  onOpsDemo,
}) {
  const isLogin = mode === "login";

  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <div className="grid overflow-hidden rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] shadow-[0_24px_70px_rgba(34,64,28,.14)] lg:grid-cols-[.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-[#2f6f35] to-[#213b22] p-8 text-white sm:p-10">
          <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white">
            Acceso simulado
          </span>
          <h2 className="text-4xl font-black tracking-[-.045em]">Entra y ve el panel de comparación.</h2>
          <p className="mt-5 leading-8 text-white/80">
            Puedes registrarte como comprador o como operaciones. El comprador analiza vivienda, trabajo y transporte.
            Operaciones ve un panel de control simulado.
          </p>

          <div className="mt-8 grid gap-3">
            <button type="button" onClick={onBuyerDemo} className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#2f6f35]">
              Entrar demo comprador
            </button>
            <button type="button" onClick={onOpsDemo} className="rounded-full border border-white/30 px-5 py-3 text-sm font-black text-white">
              Entrar demo operaciones
            </button>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-full bg-[#eef6df] p-1">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-full px-4 py-3 text-sm font-black ${isLogin ? "bg-white text-[#2f6f35] shadow-sm" : "text-[#66715e]"}`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`rounded-full px-4 py-3 text-sm font-black ${!isLogin ? "bg-white text-[#2f6f35] shadow-sm" : "text-[#66715e]"}`}
            >
              Registro
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={onLogin} className="space-y-4">
              <Input label="Email" type="email" value={loginForm.email} onChange={(value) => setLoginForm((prev) => ({ ...prev, email: value }))} icon={<Mail className="h-4 w-4" />} />
              <Input label="Contraseña" type="password" value={loginForm.password} onChange={(value) => setLoginForm((prev) => ({ ...prev, password: value }))} />
              <DemoBox />
              {error && <ErrorBox>{error}</ErrorBox>}
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6f35] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#2f6f35]/25">
                Entrar al panel <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={onRegister} className="space-y-4">
              <Input label="Nombre" value={registerForm.name} onChange={(value) => setRegisterForm((prev) => ({ ...prev, name: value }))} />
              <Input label="Email" type="email" value={registerForm.email} onChange={(value) => setRegisterForm((prev) => ({ ...prev, email: value }))} icon={<Mail className="h-4 w-4" />} />
              <Input label="Contraseña" type="password" value={registerForm.password} onChange={(value) => setRegisterForm((prev) => ({ ...prev, password: value }))} />
              <label className="block">
                <span className="mb-2 block text-sm font-black text-[#66715e]">Tipo de usuario</span>
                <select
                  value={registerForm.role}
                  onChange={(event) => setRegisterForm((prev) => ({ ...prev, role: event.target.value }))}
                  className="w-full rounded-full border border-[#c7d9b8] bg-white px-5 py-4 text-sm font-semibold text-[#182014] outline-none focus:border-[#2f6f35] focus:ring-4 focus:ring-[#2f6f35]/10"
                >
                  <option value={USER_ROLES.BUYER}>Comprador</option>
                  <option value={USER_ROLES.OPERATIONS}>Operaciones</option>
                </select>
              </label>
              {error && <ErrorBox>{error}</ErrorBox>}
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6f35] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#2f6f35]/25">
                Crear cuenta y entrar <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
