const COLORS = [
  "neutral",
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "info",
  "error",
];

export default function Divider({
  children,
  color = "neutral",
  vertical = true,
  position = "center", // 'start', 'center', 'end'
  className = "",
  ...props
}) {
  const colorClass = COLORS.includes(color)
    ? `divider-${color}`
    : "divider-neutral";
  const directionClass = vertical ? "divider-vertical" : "divider-horizontal";

  let positionClass = "";
  if (position === "start") positionClass = "divider-start";
  else if (position === "end") positionClass = "divider-end";

  return (
    <div
      className={`divider ${colorClass} ${directionClass} ${positionClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
