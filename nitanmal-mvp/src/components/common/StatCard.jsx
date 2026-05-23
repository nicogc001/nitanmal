export function StatCard({ title, value, text, positive = false }) {
  return (
    <article className="rounded-[26px] border border-[#c7d9b8] bg-[#f9fbf1] p-5 shadow-[0_14px_38px_rgba(34,64,28,.08)]">
      <p className="text-sm font-black text-[#66715e]">{title}</p>
      <strong className={`mt-2 block text-3xl font-black ${positive ? "text-[#2f6f35]" : "text-[#213b22]"}`}>
        {value}
      </strong>
      <p className="mt-2 text-sm leading-6 text-[#66715e]">{text}</p>
    </article>
  );
}
