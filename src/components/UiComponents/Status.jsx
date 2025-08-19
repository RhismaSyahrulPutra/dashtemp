const VARIANT_CLASSES = {
  primary: "status-primary",
  secondary: "status-secondary",
  accent: "status-accent",
  neutral: "status-neutral",
  info: "status-info",
  success: "status-success",
  warning: "status-warning",
  error: "status-error",
};

export default function Status({
  variant = "primary",
  animation = "",
  label = "status",
  className = "",
  ...props
}) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;

  if (animation === "ping") {
    return (
      <div
        className={`inline-grid *:[grid-area:1/1] relative ${className}`}
        aria-label={label}
        {...props}
      >
        <div
          className={`status ${variantClass} animate-ping *:[grid-area:1/1] absolute top-0 left-0`}
        />
        <div className={`status ${variantClass} *:[grid-area:1/1] relative`} />
      </div>
    );
  }
  const animateClass = animation === "bounce" ? "animate-bounce" : "";

  return (
    <div
      aria-label={label}
      className={`status ${variantClass} ${animateClass} ${className}`.trim()}
      {...props}
    />
  );
}
