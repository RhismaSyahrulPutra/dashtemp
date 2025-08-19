const VARIANT_CLASSES = {
  neutral: "badge-neutral",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
};

export default function Badge({
  children,
  variant = "primary",
  styleType = "default",
  className = "",
  ...props
}) {
  let styleClass = "";
  if (styleType === "soft") styleClass = "badge-soft";
  else if (styleType === "outline") styleClass = "badge-outline";
  else if (styleType === "dash") styleClass = "badge-dash";

  const classNames = ["badge", styleClass, VARIANT_CLASSES[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
