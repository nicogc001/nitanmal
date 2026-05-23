import { toNumber } from "../../utils/calculations";

export function Input({ label, type = "text", value, onChange, icon, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-[#66715e]">{label}</span>
      <span className="flex items-center gap-3 rounded-full border border-[#c7d9b8] bg-white px-5 py-4 text-[#66715e] transition focus-within:border-[#2f6f35] focus-within:ring-4 focus-within:ring-[#2f6f35]/10">
        {icon}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent text-sm font-semibold text-[#182014] outline-none placeholder:text-[#a0a991]"
        />
      </span>
    </label>
  );
}

export function NumberInput({ label, value, onChange }) {
  return <Input label={label} type="number" value={value} onChange={(nextValue) => onChange(toNumber(nextValue))} />;
}
