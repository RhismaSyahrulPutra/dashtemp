import Radio from "./Radio";

export default function RadioGroup({
  legend,
  name,
  options = [],
  color = "neutral",
  size = "md",
  className = "",
}) {
  return (
    <fieldset
      className={`fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4 ${className}`}
    >
      {legend && <legend className="fieldset-legend">{legend}</legend>}
      {options.map((opt, idx) => (
        <label key={idx} className="label gap-2">
          <Radio
            name={name}
            value={opt.value}
            defaultChecked={opt.checked}
            disabled={opt.disabled}
            color={opt.color || color}
            size={opt.size || size}
          />
          {opt.label}
        </label>
      ))}
    </fieldset>
  );
}
