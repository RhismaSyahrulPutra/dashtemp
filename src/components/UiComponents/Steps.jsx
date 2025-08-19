const COLOR_CLASSES = {
  neutral: "step-neutral",
  primary: "step-primary",
  secondary: "step-secondary",
  accent: "step-accent",
  info: "step-info",
  success: "step-success",
  warning: "step-warning",
  error: "step-error",
};

export default function Steps({
  steps = [],
  activeStep = 0,
  vertical = false,
  color = "primary",
  className = "",
}) {
  return (
    <ul
      className={`steps ${
        vertical ? "steps-vertical" : "lg:steps-horizontal"
      } ${className}`}
    >
      {steps.map((label, i) => {
        const isActive = i <= activeStep;
        const stepColorClass = isActive
          ? COLOR_CLASSES[color]
          : COLOR_CLASSES.base;

        return (
          <li key={i} className={`step ${stepColorClass}`}>
            {label}
          </li>
        );
      })}
    </ul>
  );
}
