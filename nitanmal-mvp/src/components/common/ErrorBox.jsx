export function ErrorBox({ children }) {
  return (
    <p className="rounded-2xl border border-[#f0b4a5] bg-[#fff2ed] px-4 py-3 text-sm font-bold text-[#a43b25]">
      {children}
    </p>
  );
}
