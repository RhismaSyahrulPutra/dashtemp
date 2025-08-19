// components/DateInput.jsx
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Input from "./Input";

export default function DateInput({
  value,
  onChange,
  placeholder = "Pilih tanggal",
  formatDate = (date) =>
    date
      ? date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      : "",
  color,
  size = "md",
  disabled = false,
  className = "",
  fieldset = false,
  legend,
  helperText,
}) {
  const [selected, setSelected] = useState(value || new Date());
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(formatDate(value || new Date()));

  useEffect(() => {
    if (value) {
      setSelected(value);
      setInputValue(formatDate(value));
    }
  }, [value, formatDate]);

  const handleSelect = (date) => {
    if (date) {
      setSelected(date);
      setInputValue(formatDate(date));
      onChange?.(date);
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);

    // Parsing manual dd/MM/yyyy
    const parts = val.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts.map((p) => parseInt(p, 10));
      if (
        !isNaN(day) &&
        !isNaN(month) &&
        !isNaN(year) &&
        day >= 1 &&
        day <= 31 &&
        month >= 1 &&
        month <= 12
      ) {
        const parsedDate = new Date(year, month - 1, day);
        if (!isNaN(parsedDate)) {
          setSelected(parsedDate);
          onChange?.(parsedDate);
        }
      }
    }
  };

  return (
    <div className="relative inline-block">
      <Input
        value={inputValue}
        placeholder={placeholder}
        color={color}
        size={size}
        disabled={disabled}
        className={className}
        fieldset={fieldset}
        legend={legend}
        helperText={helperText}
        onClick={() => setOpen(!open)}
        onChange={handleInputChange} // ✅ biar bisa diketik manual
      />

      {open && (
        <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg p-2">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
}
