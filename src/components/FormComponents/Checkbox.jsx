const COLOR_CLASSES = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  neutral: "checkbox-neutral",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
};

const SIZE_CLASSES = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg",
  xl: "checkbox-xl",
};

export default function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  color = "neutral", // cukup tulis 'primary', 'warning', dll
  size = "md", // cukup tulis 'sm', 'lg', dll
  className = "",
  ...props
}) {
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.neutral;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <input
      type="checkbox"
      className={`checkbox ${colorClass} ${sizeClass} ${className}`}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      {...props}
    />
  );
}
