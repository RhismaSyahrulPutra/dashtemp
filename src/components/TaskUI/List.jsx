import React from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Bars3Icon } from "@heroicons/react/24/solid";

const SectionRegistryContext = React.createContext(null);

export function ListContent({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="p-4 mb-2 bg-base-200 border-base-500 rounded-lg drop-shadow flex items-center gap-3"
    >
      <Bars3Icon
        {...listeners}
        className="w-5 h-5 cursor-grab text-gray-500 flex-shrink-0"
      />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function ListHeader({ children }) {
  return (
    <div className="flex justify-between items-center p-4 border-b font-semibold">
      {children}
    </div>
  );
}

export function ListBody({ children }) {
  return <div className="flex flex-col gap-2 p-4">{children}</div>;
}

export function SectionList({ id, items, setItems, children }) {
  const ctx = React.useContext(SectionRegistryContext);
  const { setNodeRef } = useDroppable({ id });

  React.useEffect(() => {
    if (!ctx) return;
    const unregister = ctx.registerSection(id, {
      getItems: () => items,
      setItems,
    });
    return unregister;
  }, [ctx, id, items, setItems]);

  return (
    <SortableContext
      items={items.map((t) => t.id)}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef}>{children}</div>
    </SortableContext>
  );
}

function getIndexById(list, id) {
  return list.findIndex((i) => i.id === id);
}

export default function List({ children, onChange }) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );
  const registryRef = React.useRef(new Map());
  const lastOverRef = React.useRef(new Map());

  const registerSection = React.useCallback((id, api) => {
    registryRef.current.set(id, api);
    return () => registryRef.current.delete(id);
  }, []);

  const hasSection = (id) => registryRef.current.has(id);
  const getItems = (sid) => registryRef.current.get(sid)?.getItems() ?? [];
  const setItems = (sid, updater) =>
    registryRef.current.get(sid)?.setItems(updater);

  const findSectionByItemId = (itemId) => {
    for (const [sid, api] of registryRef.current.entries()) {
      const items = api.getItems();
      if (items?.some((i) => i.id === itemId)) return sid;
    }
    return null;
  };

  const snapshotAll = () => {
    const snap = {};
    for (const [sid, api] of registryRef.current.entries()) {
      snap[sid] = api.getItems();
    }
    return snap;
  };

  const handleDragOver = ({ active, over }) => {
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;

    const fromSection = findSectionByItemId(activeId);
    const toSection = hasSection(overId) ? overId : findSectionByItemId(overId);
    if (!fromSection || !toSection) return;

    const toList = getItems(toSection);
    const toIdxRaw = hasSection(overId)
      ? toList.length
      : getIndexById(toList, overId);
    const insertIndex = toIdxRaw < 0 ? toList.length : toIdxRaw;

    const posKey = `${toSection}:${insertIndex}`;
    const lastKey = lastOverRef.current.get(activeId);
    if (lastKey === posKey) return;
    lastOverRef.current.set(activeId, posKey);

    const currFrom = getItems(fromSection);
    const currTo = getItems(toSection);

    let moving = currFrom.find((i) => i.id === activeId);
    if (!moving) moving = currTo.find((i) => i.id === activeId);
    if (!moving) return;

    if (fromSection === toSection) {
      const oldIndex = getIndexById(currTo, activeId);
      if (oldIndex === -1 || oldIndex === insertIndex) return;
      setItems(toSection, (prev) => arrayMove(prev, oldIndex, insertIndex));
      return;
    }

    setItems(fromSection, (prev) => prev.filter((i) => i.id !== activeId));
    setItems(toSection, (prev) => {
      const base = prev.filter((i) => i.id !== activeId);
      const idx = Math.max(0, Math.min(insertIndex, base.length));
      return [...base.slice(0, idx), moving, ...base.slice(idx)];
    });
  };

  const handleDragEnd = () => {
    lastOverRef.current.clear();
    if (onChange) onChange(snapshotAll());
  };

  return (
    <SectionRegistryContext.Provider value={{ registerSection }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {children}
      </DndContext>
    </SectionRegistryContext.Provider>
  );
}
