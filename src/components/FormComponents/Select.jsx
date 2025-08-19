const COLOR_CLASSES = {
  ghost: "select-ghost",
  neutral: "select-neutral",
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};

const SIZE_CLASSES = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
  xl: "select-xl",
};

export default function Select({
  options = [],
  defaultValue,
  color,
  size = "md",
  disabled = false,
  className = "",
  fieldset = false,
  legend,
  helperText,
  ...props
}) {
  const selectElement = (
    <select
      defaultValue={defaultValue}
      disabled={disabled}
      className={[
        "select",
        color && COLOR_CLASSES[color],
        size && SIZE_CLASSES[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {options.map((opt, idx) => (
        <option key={idx} disabled={opt.disabled}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  );

  if (fieldset) {
    return (
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        {selectElement}
        {helperText && <p className="label">{helperText}</p>}
      </fieldset>
    );
  }

  return selectElement;
}
