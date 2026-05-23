import { ArrowRight, Leaf, LogOut } from "lucide-react";

export function Header({ session, onHome, onOpenAuth, onRegister, onLogout, onDashboard, onModule }) {
  return (
    <>
      <div className="bg-[#2f5f2f] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        Beta privada · Registro simulado · Panel comprador y operaciones · Comparador editable
      </div>

      <header className="sticky top-0 z-50 border-b border-[#c7d9b8] bg-[#f9fbf1]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button type="button" onClick={onHome} className="flex items-center gap-3 text-left">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#c7d9b8] bg-white shadow-sm">
              <Leaf className="h-5 w-5 text-[#2f6f35]" />
            </span>
            <span className="leading-tight">
              <span className="block text-2xl font-black tracking-tight text-[#213b22]">NiTanMal</span>
              <span className="block text-xs font-semibold text-[#66715e]">Decide mejor. Vive tranquilo.</span>
            </span>
          </button>

          <div className="hidden items-center gap-7 text-sm font-semibold text-[#66715e] md:flex">
            <NavButton onClick={onHome}>Inicio</NavButton>
            <NavButton onClick={() => onModule("vivienda")}>Vivienda</NavButton>
            <NavButton onClick={() => onModule("trabajo")}>Trabajo</NavButton>
            <NavButton onClick={() => onModule("transporte")}>Transporte</NavButton>
          </div>

          <div className="flex items-center gap-2">
            {session ? (
              <>
                <button
                  type="button"
                  onClick={onDashboard}
                  className="hidden rounded-full border border-[#c7d9b8] bg-white px-5 py-3 text-sm font-bold text-[#2f6f35] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
                >
                  Mi panel
                </button>
                <button
                  type="button"
                  onClick={onLogout}
                  className="inline-flex items-center gap-2 rounded-full bg-[#213b22] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#213b22]/20 transition hover:-translate-y-0.5"
                >
                  Salir <LogOut className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => onOpenAuth("login")}
                  className="hidden rounded-full border border-[#c7d9b8] bg-white px-5 py-3 text-sm font-bold text-[#2f6f35] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
                >
                  Entrar
                </button>
                <button
                  type="button"
                  onClick={onRegister}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2f6f35] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#2f6f35]/20 transition hover:-translate-y-0.5 hover:bg-[#244f29]"
                >
                  Registrarse <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

function NavButton({ children, onClick }) {
  return (
    <button type="button" onClick={onClick} className="transition hover:text-[#2f6f35]">
      {children}
    </button>
  );
}
