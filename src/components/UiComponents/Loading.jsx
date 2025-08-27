const TYPE_CLASSES = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};

const SIZE_CLASSES = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "loading-xl",
};

const VARIANT_CLASSES = {
  neutral: "text-neutral",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

export default function Loading({
  type = "spinner",
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) {
  const typeClass = TYPE_CLASSES[type] || TYPE_CLASSES.spinner;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;

  const finalClassName = [
    "loading",
    typeClass,
    sizeClass,
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={finalClassName} {...props}></span>;
}
