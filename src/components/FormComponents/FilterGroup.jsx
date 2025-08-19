// components/FilterGroup.jsx
export default function FilterGroup({
  legend,
  name,
  options = [],
  defaultValue,
  className = "",
  onChange,
}) {
  return (
    <fieldset className={`fieldset ${className}`}>
      {legend && <legend className="fieldset-legend">{legend}</legend>}
      <div className="filter">
        {/* Filter reset */}
        <input
          className="btn filter-reset"
          type="radio"
          name={name}
          aria-label="All"
          value=""
          defaultChecked={defaultValue === "" || defaultValue === undefined}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {/* Other options */}
        {options.map((opt, idx) => (
          <input
            key={idx}
            className="btn"
            type="radio"
            name={name}
            aria-label={opt.label}
            value={opt.value}
            defaultChecked={defaultValue === opt.value}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        ))}
      </div>
    </fieldset>
  );
}
