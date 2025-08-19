const COLOR_CLASSES = [
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

export default function ProgressBar({
  value = 0,
  max = 100,
  color = "primary",
  width = "w-56",
  ...props
}) {
  const colorClass = COLOR_CLASSES.includes(color)
    ? `progress-${color}`
    : "progress-primary";

  return (
    <progress
      className={`progress ${colorClass} ${width}`}
      value={value}
      max={max}
      {...props}
    />
  );
}
