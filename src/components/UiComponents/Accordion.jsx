import React, { useState, createContext, useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AccordionContext = createContext();

export default function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleIndex }}>
      <div className="join join-vertical bg-base-100 rounded-lg">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ index, header, children }) {
  const { openIndex, toggleIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div
      className={`collapse join-item border border-base-300 ${
        isOpen ? "collapse-open" : ""
      }`}
    >
      <input
        type="radio"
        name="my-accordion"
        checked={isOpen}
        onChange={() => toggleIndex(index)}
        readOnly
      />
      <div
        className="collapse-title font-semibold flex justify-between items-center cursor-pointer"
        onClick={() => toggleIndex(index)}
      >
        {header}
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className="collapse-content text-sm">{children}</div>
    </div>
  );
}
