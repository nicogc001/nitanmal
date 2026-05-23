export function Panel({ title, eyebrow, icon, children }) {
  return (
    <div className="rounded-[34px] border border-[#c7d9b8] bg-[#f9fbf1] p-6 shadow-[0_18px_50px_rgba(34,64,28,.10)]">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eef6df] text-[#2f6f35]">{icon}</span>
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#2f6f35]">{eyebrow}</p>
          <h2 className="mt-1 text-2xl font-black text-[#213b22]">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
}
