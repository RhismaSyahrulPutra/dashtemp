const VARIANT_CLASSES = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
};

export default function Button({
  children,
  variant = "primary",
  styleType = "default",
  size,
  block = false,
  active = false,
  disabled = false,
  shape = "square",
  as = "button", // default button, bisa "a"
  href,
  target,
  ...props
}) {
  const baseClass = "btn";

  let styleClass = "";
  if (styleType === "soft") styleClass = "btn-soft";
  else if (styleType === "outline") styleClass = "btn-outline";
  else if (styleType === "dash") styleClass = "btn-dash";
  else if (styleType === "ghost") styleClass = "btn-ghost";
  else if (styleType === "link") styleClass = "btn-link";

  const sizeClass = size ? `btn-${size}` : "";
  const shapeClass = shape === "circle" ? "btn-circle" : "btn-square";
  const modifiers = [
    block && "btn-block",
    active && "btn-active",
    disabled && "btn-disabled",
  ].filter(Boolean);

  const className = [
    baseClass,
    styleClass,
    VARIANT_CLASSES[variant],
    sizeClass,
    shapeClass,
    ...modifiers,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    return (
      <a className={className} href={href} target={target} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
