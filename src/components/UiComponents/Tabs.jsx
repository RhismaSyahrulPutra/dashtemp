import React, { useState, createContext, useContext } from "react";

const TabsContext = createContext();

export default function Tabs({ children, defaultActive = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabHeader({ children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const tabs = React.Children.toArray(children);

  return (
    <div role="tablist" className="tabs tabs-border">
      {tabs.map((tab, i) => {
        const isActive = i === activeIndex;
        return React.cloneElement(tab, {
          isActive,
          onClick: () => setActiveIndex(i),
          key: i,
        });
      })}
    </div>
  );
}

export function Tab({ label, isActive, onClick, disabled }) {
  return (
    <button
      role="tab"
      className={`tab ${isActive ? "tab-active" : ""} ${
        disabled ? "tab-disabled" : ""
      }`}
      onClick={disabled ? undefined : onClick}
      aria-selected={isActive}
      aria-disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
}

export function TabContent({ children }) {
  const { activeIndex } = useContext(TabsContext);
  const panels = React.Children.toArray(children);
  return (
    <div className="p-4 border border-t-0 border-base-300 bg-base-100 rounded-b-lg">
      {panels[activeIndex]}
    </div>
  );
}

export function TabPanel({ children }) {
  return <>{children}</>;
}
