const COLOR_CLASSES = {
  ghost: "input-ghost",
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const SIZE_CLASSES = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

export default function Input({
  placeholder = "",
  color,
  size = "md",
  disabled = false,
  className = "",
  fieldset = false,
  legend,
  helperText,
  ...props
}) {
  const inputElement = (
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      className={[
        "input",
        color && COLOR_CLASSES[color],
        size && SIZE_CLASSES[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );

  if (fieldset) {
    return (
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        {inputElement}
        {helperText && <p className="label">{helperText}</p>}
      </fieldset>
    );
  }

  return inputElement;
}
