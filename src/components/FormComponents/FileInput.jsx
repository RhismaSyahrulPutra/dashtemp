const COLOR_CLASSES = {
  primary: "file-input-primary",
  secondary: "file-input-secondary",
  accent: "file-input-accent",
  neutral: "file-input-neutral",
  info: "file-input-info",
  success: "file-input-success",
  warning: "file-input-warning",
  error: "file-input-error",
};

const SIZE_CLASSES = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: "file-input-md",
  lg: "file-input-lg",
  xl: "file-input-xl",
};

export default function FileInput({
  ghost = false,
  color = "neutral", // cukup tulis 'primary', 'warning', dll
  size = "md", // cukup tulis 'sm', 'lg', dll
  disabled = false,
  className = "",
  ...props
}) {
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.neutral;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <input
      type="file"
      className={`file-input ${ghost ? "file-input-ghost" : ""} ${colorClass} ${sizeClass} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
}
