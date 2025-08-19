const COLOR_CLASSES = {
  neutral: "range-neutral",
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  success: "range-success",
  warning: "range-warning",
  info: "range-info",
  error: "range-error",
};

const SIZE_CLASSES = {
  xs: "range-xs",
  sm: "range-sm",
  md: "range-md",
  lg: "range-lg",
  xl: "range-xl",
};

export default function Range({
  min = 0,
  max = 100,
  step,
  value,
  defaultValue,
  color = "neutral", // "primary", "warning", dll
  size = "md", // "sm", "lg", dll
  className = "",
  showSteps = false, // true untuk menampilkan garis & label step
  stepLabels = [], // array label misalnya ["1", "2", "3"]
  ...props
}) {
  const colorClass = COLOR_CLASSES[color] || COLOR_CLASSES.neutral;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <div className="w-full max-w-xs">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue}
        className={`range ${colorClass} ${sizeClass} ${className}`}
        {...props}
      />

      {showSteps && (
        <>
          <div className="flex justify-between px-2.5 mt-2 text-xs">
            {Array.from({
              length: stepLabels.length || Math.floor(max / step) + 1,
            }).map((_, i) => (
              <span key={i}>|</span>
            ))}
          </div>

          {stepLabels.length > 0 && (
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              {stepLabels.map((label, i) => (
                <span key={i}>{label}</span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
