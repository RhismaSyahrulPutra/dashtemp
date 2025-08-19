import React from "react";

function getTextColor(bgColor) {
  if (
    bgColor.includes("primary") ||
    bgColor.includes("secondary") ||
    bgColor.includes("accent") ||
    bgColor.includes("info") ||
    bgColor.includes("success") ||
    bgColor.includes("warning") ||
    bgColor.includes("error")
  ) {
    return "text-white";
  }
  // default
  return "text-base-content";
}

function Card({ children, className = "", bgColor = "bg-base-100" }) {
  const textColor = getTextColor(bgColor);
  return (
    <div
      className={`w-full ${bgColor} ${textColor} shadow rounded-lg ${className} mb-4`}
    >
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className = "",
  borderColor = "border-gray-200",
}) {
  return (
    <div className={`border-b ${borderColor} px-4 py-2 ${className}`}>
      {children}
    </div>
  );
}

function CardBody({ children, className = "" }) {
  return <div className={`p-4 w-full ${className}`}>{children}</div>;
}

function CardFooter({
  children,
  className = "",
  borderColor = "border-gray-200",
  textColor = "text-gray-500",
}) {
  return (
    <div
      className={`border-t ${borderColor} px-4 py-2 mb-2 text-sm ${textColor} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
export { CardHeader, CardBody, CardFooter };
