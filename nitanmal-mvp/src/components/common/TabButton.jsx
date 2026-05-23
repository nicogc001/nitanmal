export function TabButton({ active, onClick, icon, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${
        active
          ? "bg-[#2f6f35] text-white shadow-lg shadow-[#2f6f35]/20"
          : "text-[#66715e] hover:bg-[#eef6df] hover:text-[#2f6f35]"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
