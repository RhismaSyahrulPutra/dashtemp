import React from "react";

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

export default function Pagination({
  totalPages = 4,
  currentPage = 1,
  onChange = () => {},
  variant = "neutral",
}) {
  const activeClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const inactiveClass = "btn-base"; // bisa juga pakai "btn-neutral" atau "btn-outline"

  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;
        const btnClass = isActive ? activeClass : inactiveClass;

        return (
          <input
            key={page}
            type="radio"
            name="pagination"
            className={`join-item btn btn-square ${btnClass}`}
            aria-label={page.toString()}
            checked={isActive}
            onChange={() => onChange(page)}
          />
        );
      })}
    </div>
  );
}
