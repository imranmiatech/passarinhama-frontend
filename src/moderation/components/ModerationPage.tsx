import { useState } from "react";

import { ITEMS } from "./data";
import type { ModerationItem } from "./types";
import { Topbar } from "./Topbar";
import { StatsBar } from "./StatsBar";
import { FilterBar } from "./FilterBar";
import { ModerationCard } from "./ModerationCard";
import { DetailPanel } from "./DetailPanel";

// ── Date group label ───────────────────────────────────────────────────────
function DateLabel({ label }: { label: string }) {
  return (
    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide py-1">
      {label}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function ModerationPage() {
  const [activeTab, setActiveTab] = useState("Tout");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [activeItem, setActiveItem] = useState<ModerationItem>(ITEMS[0]);
  const [panelOpen, setPanelOpen] = useState(false); // for mobile overlay

  function toggleSelect(id: number) {
    const next = new Set(selectedIds);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelectedIds(next);
  }

  function handleAction(action: string, id: number) {
    console.log(action, id);
    // In a real app: dispatch to state/server
  }

  function handleCardClick(item: ModerationItem) {
    setActiveItem(item);
    setPanelOpen(true);
  }

  const todayItems = ITEMS.filter((i) => i.date === "today");
  const yesterdayItems = ITEMS.filter((i) => i.date === "yesterday");

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Topbar />
      <StatsBar />
     
        <FilterBar active={activeTab} onChange={setActiveTab} />
    

      {/* ── Body ── */}
      <div className="w-full flex flex-1 overflow-hidden relative">

        {/* ── Left: List ── */}
        <div
          className={`flex flex-col flex-1 overflow-y-auto transition-all duration-200 ${panelOpen ? "hidden lg:flex lg:w-auto" : "flex"
            } lg:flex lg:max-w-none`}
        >
          <div className="p-3 sm:p-4 space-y-2  mx-auto w-full">
            {/* Today */}
            <DateLabel label="Aujourd'hui · 15 Avril 2025" />
            {todayItems.map((item) => (
              <ModerationCard
                key={item.id}
                item={item}
                selected={selectedIds.has(item.id)}
                active={activeItem?.id === item.id}
                onSelect={() => toggleSelect(item.id)}
                onClick={() => handleCardClick(item)}
                onAction={handleAction}
              />
            ))}

            {/* Yesterday */}
            <DateLabel label="Hier · 14 Avril 2025" />
            {yesterdayItems.map((item) => (
              <ModerationCard
                key={item.id}
                item={item}
                selected={selectedIds.has(item.id)}
                active={activeItem?.id === item.id}
                onSelect={() => toggleSelect(item.id)}
                onClick={() => handleCardClick(item)}
                onAction={handleAction}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Detail panel (desktop always visible, mobile overlay) ── */}
        {/* Desktop */}
        <div className="hidden lg:flex flex-col w-80 xl:w-96 shrink-0 border-l border-gray-200 overflow-hidden">
          <DetailPanel item={activeItem} />
        </div>

        {/* Mobile/tablet slide-over */}
        {panelOpen && (
          <div className="lg:hidden absolute inset-0 z-20 flex flex-col bg-white">
            <DetailPanel item={activeItem} onClose={() => setPanelOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
