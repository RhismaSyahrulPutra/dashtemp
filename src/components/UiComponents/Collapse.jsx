import React, { useState, createContext, useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const CollapseContext = createContext();

export default function Collapse({ children, color = "base" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Map warna ke kelas bg dan text sesuai DaisyUI
  const bgClass = color === "base" ? "bg-base-100" : `bg-${color}`;
  const borderClass = color === "base" ? "border-base-300" : `border-${color}`;
  const textClass =
    color === "base" ? "text-base-content" : `text-${color}-content`;

  return (
    <CollapseContext.Provider
      value={{ openIndex, toggleIndex, bgClass, borderClass, textClass }}
    >
      <div className={`join join-vertical rounded-lg ${bgClass} w-full`}>
        {children}
      </div>
    </CollapseContext.Provider>
  );
}

export function CollapseItem({ index, header, children }) {
  const { openIndex, toggleIndex, borderClass, textClass } =
    useContext(CollapseContext);
  const isOpen = openIndex === index;

  return (
    <div
      className={`collapse join-item border ${borderClass} rounded-lg w-full ${isOpen ? "collapse-open" : ""}`}
    >
      <input
        type="radio"
        name="my-collapse"
        checked={isOpen}
        onChange={() => toggleIndex(index)}
        readOnly
      />
      <div
        className={`collapse-title font-semibold flex justify-between items-center cursor-pointer ${textClass} w-full`}
        onClick={() => toggleIndex(index)}
      >
        {header}
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <div className="collapse-content text-sm w-full">{children}</div>
    </div>
  );
}
