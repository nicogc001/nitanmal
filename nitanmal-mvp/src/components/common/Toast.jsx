export function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-[#182014] px-5 py-3 text-sm font-bold text-white shadow-2xl">
      {message}
    </div>
  );
}
