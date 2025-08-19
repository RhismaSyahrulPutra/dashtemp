const COLOR_CLASSES = {
  ghost: "textarea-ghost",
  neutral: "textarea-neutral",
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
};

const SIZE_CLASSES = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg",
  xl: "textarea-xl",
};

export default function Textarea({
  placeholder = "",
  color,
  size = "md",
  disabled = false,
  className = "",
  fieldset = false,
  legend,
  helperText,
  ...props
}) {
  const textareaElement = (
    <textarea
      placeholder={placeholder}
      disabled={disabled}
      className={[
        "textarea",
        color && COLOR_CLASSES[color],
        size && SIZE_CLASSES[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );

  if (fieldset) {
    return (
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        {textareaElement}
        {helperText && <p className="label">{helperText}</p>}
      </fieldset>
    );
  }

  return textareaElement;
}
