export function MockResult({ label, value, positive = false }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#d9e6c7] bg-white px-5 py-4 shadow-sm">
      <span className="text-sm font-bold text-[#66715e]">{label}</span>
      <strong className={`text-right ${positive ? "text-xl text-[#2f6f35]" : "text-[#213b22]"}`}>{value}</strong>
    </div>
  );
}
