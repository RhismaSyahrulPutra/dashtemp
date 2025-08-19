const VARIANT_CLASSES = {
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

export default function InputLabel({
  type = "text",
  placeholder = "",
  size = "md", // xs, sm, md, lg, xl
  color = "neutral", // ⬅️ sama seperti di Button
  variant = "input", // input, select, floating-label
  prefix,
  suffix,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  const sizeClass = `input-${size}`;
  const colorClass = VARIANT_CLASSES[color] || VARIANT_CLASSES.neutral;

  if (variant === "select") {
    return (
      <label className={`select ${sizeClass} ${colorClass} ${className}`}>
        <select
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          {...props}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (variant === "floating-label") {
    return (
      <div className={`form-control ${className}`}>
        <label className="relative w-full">
          {prefix && <span className="mr-2">{prefix}</span>}
          <input
            type={type}
            className={`peer input ${sizeClass} ${colorClass} w-full`}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disabled}
            placeholder=" "
            {...props}
          />
          <span
            className={`absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary`}
          >
            {placeholder}
          </span>
          {suffix && <span className="ml-2">{suffix}</span>}
        </label>
      </div>
    );
  }

  return (
    <label className={`input ${sizeClass} ${colorClass} ${className}`}>
      {prefix && <span className="label">{prefix}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`${sizeClass} ${colorClass}`}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {suffix && <span className="label">{suffix}</span>}
    </label>
  );
}
