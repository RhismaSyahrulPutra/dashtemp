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
  shape = "none", // default ubah jadi "none"
  as = "button", // default button, bisa "a"
  href,
  target,
  ...props
}) {
  const baseClass = "btn";

  // style type
  let styleClass = "";
  if (styleType === "soft") styleClass = "btn-soft";
  else if (styleType === "outline") styleClass = "btn-outline";
  else if (styleType === "dash") styleClass = "btn-dash";
  else if (styleType === "ghost") styleClass = "btn-ghost";
  else if (styleType === "link") styleClass = "btn-link";

  // size
  const sizeClass = size ? `btn-${size}` : "";

  // shape
  let shapeClass = "";
  if (shape === "circle") shapeClass = "btn-circle";
  else if (shape === "square") shapeClass = "btn-square";
  // kalau "none", biarin kosong → biar button ikut panjang teks

  // modifiers
  const modifiers = [
    block && "btn-block",
    active && "btn-active",
    disabled && "btn-disabled",
  ].filter(Boolean);

  // final className
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
