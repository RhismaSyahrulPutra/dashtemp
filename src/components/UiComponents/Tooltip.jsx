import React from "react";

export default function Tooltip({
  children,
  placement = "top",
  color = "neutral",
  open = false,
  className = "",
}) {
  const placementClass = ["top", "bottom", "left", "right"].includes(placement)
    ? `tooltip-${placement}`
    : "tooltip-top";

  const colorClass = [
    "neutral",
    "primary",
    "secondary",
    "accent",
    "info",
    "success",
    "warning",
    "error",
  ].includes(color)
    ? `tooltip-${color}`
    : "tooltip-neutral";

  const openClass = open ? "tooltip-open" : "";

  return (
    <div
      className={`tooltip ${placementClass} ${colorClass} ${openClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function TooltipContent({ children, className = "" }) {
  return <div className={`tooltip-content ${className}`}>{children}</div>;
}
