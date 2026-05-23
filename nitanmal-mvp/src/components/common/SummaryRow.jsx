export function SummaryRow({ icon, label, value, highlighted = false }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-2xl ${highlighted ? "bg-[#eef6df] text-[#2f6f35]" : "bg-[#f4f0df] text-[#66715e]"}`}>
          {icon}
        </span>
        <span className="text-sm font-bold text-[#66715e]">{label}</span>
      </div>
      <strong className={highlighted ? "text-xl text-[#2f6f35]" : "text-[#182014]"}>{value}</strong>
    </div>
  );
}
