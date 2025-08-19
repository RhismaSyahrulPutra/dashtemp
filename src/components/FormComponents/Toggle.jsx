const COLOR_CLASSES = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  neutral: "toggle-neutral",
  success: "toggle-success",
  warning: "toggle-warning",
  info: "toggle-info",
  error: "toggle-error",
};

const SIZE_CLASSES = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
  xl: "toggle-xl",
};

export default function Toggle({
  label,
  color = "neutral", // "primary", "warning", dll
  size = "md", // "sm", "lg", dll
  defaultChecked = false,
  className = "",
  fieldsetLegend,
  fieldsetClassName = "",
  ...props
}) {
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.neutral;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  const toggleElement = (
    <label className="label gap-2">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className={`toggle ${colorClass} ${sizeClass} ${className}`}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );

  // Kalau pakai fieldset
  if (fieldsetLegend) {
    return (
      <fieldset
        className={`fieldset bg-base-100 border-base-300 rounded-box border p-4 ${fieldsetClassName}`}
      >
        <legend className="fieldset-legend">{fieldsetLegend}</legend>
        {toggleElement}
      </fieldset>
    );
  }

  return toggleElement;
}
