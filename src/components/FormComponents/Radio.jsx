const COLOR_CLASSES = {
  neutral: "radio-neutral",
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  success: "radio-success",
  warning: "radio-warning",
  info: "radio-info",
  error: "radio-error",
};

const SIZE_CLASSES = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg",
  xl: "radio-xl",
};

export default function Radio({
  name,
  value,
  defaultChecked = false,
  color,
  size = "md",
  disabled = false,
  label,
  className = "",
  ...props
}) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className={[
          "radio",
          color && COLOR_CLASSES[color],
          size && SIZE_CLASSES[size],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
