export default function Fieldset({ legend, children, className = "" }) {
  return (
    <fieldset
      className={`fieldset bg-base-200 border-base-300 rounded-box border p-4 ${className}`}
    >
      {legend && <legend className="fieldset-legend">{legend}</legend>}
      {children}
    </fieldset>
  );
}
