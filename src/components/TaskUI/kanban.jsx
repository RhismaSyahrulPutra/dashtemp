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
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Bars3Icon } from "@heroicons/react/24/solid";

const SectionRegistryContext = React.createContext(null);

export function KanbanCard({ id, children }) {
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
      className="p-4 bg-base-200 rounded-lg shadow flex items-center gap-3"
    >
      <Bars3Icon
        {...listeners}
        className="w-5 h-5 cursor-grab text-gray-500 flex-shrink-0"
      />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function KanbanSection({ id, items, setItems, children }) {
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
      <div ref={setNodeRef} className="p-2 flex flex-col flex-1 w-full">
        {children}
      </div>
    </SortableContext>
  );
}

export function KanbanHeader({ children }) {
  return (
    <div className="flex justify-between items-center p-2 border-b font-semibold">
      {children}
    </div>
  );
}

export function KanbanBody({ children }) {
  return <div className="flex flex-col gap-2 p-4">{children}</div>;
}

export default function Kanban({ children, onChange }) {
  const sensors = useSensors(useSensor(PointerSensor));
  const registryRef = React.useRef(new Map());

  const registerSection = React.useCallback((id, api) => {
    registryRef.current.set(id, api);
    return () => registryRef.current.delete(id);
  }, []);

  const getSectionIds = () => Array.from(registryRef.current.keys());
  const hasSection = (id) => registryRef.current.has(id);
  const getItems = (sectionId) =>
    registryRef.current.get(sectionId)?.getItems() ?? [];
  const setItems = (sectionId, newItems) =>
    registryRef.current.get(sectionId)?.setItems(newItems);

  const findSectionByItemId = (itemId) => {
    for (const [sid, api] of registryRef.current.entries()) {
      const items = api.getItems();
      if (items?.some((i) => i.id === itemId)) return sid;
    }
    return null;
  };

  const snapshotAll = () => {
    const snap = {};
    for (const sid of getSectionIds()) snap[sid] = getItems(sid);
    return snap;
  };

  const handleDragOver = ({ active, over }) => {
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const fromSection = findSectionByItemId(activeId);
    const toSection = hasSection(overId) ? overId : findSectionByItemId(overId);

    if (!fromSection || !toSection || fromSection === toSection) return;

    const fromList = getItems(fromSection);
    const toList = getItems(toSection);

    const moving = fromList.find((i) => i.id === activeId);
    if (!moving) return;

    const newFrom = fromList.filter((i) => i.id !== activeId);
    const insertIndex = hasSection(overId)
      ? toList.length
      : Math.max(
          0,
          toList.findIndex((i) => i.id === overId)
        );

    const newTo = [...toList];
    if (insertIndex >= 0 && insertIndex <= newTo.length)
      newTo.splice(insertIndex, 0, moving);
    else newTo.push(moving);

    setItems(fromSection, newFrom);
    setItems(toSection, newTo);
  };

  const handleDragEnd = () => {
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
        <div className="flex gap-4 overflow-x-auto">{children}</div>
      </DndContext>
    </SectionRegistryContext.Provider>
  );
}
