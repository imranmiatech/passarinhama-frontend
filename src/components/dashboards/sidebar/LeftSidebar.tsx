import React, { useState } from "react";
import type { EventCategory } from "../../../types";
import { EVENTS } from "../../../data/events";
import EventListItem from "./EventListItem";

type LeftSidebarProps = {
  selectedId: string | null;
  onSelect: (event: Event) => void;
};

const FILTERS: { label: string; value: "Tous" | EventCategory }[] = [
  { label: "Tous", value: "Tous" },
  { label: "AG", value: "AG" },
  { label: "Formation", value: "Formation" },
  { label: "Réunion", value: "Réunion" },
  { label: "Conférence", value: "Conférence" },
];

const LeftSidebar: React.FC<LeftSidebarProps> = ({ selectedId, onSelect }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"Tous" | EventCategory>("Tous");

  const now = new Date("2025-04-09");

  const filtered = EVENTS.filter((e) => {
    const matchesFilter = filter === "Tous" || e.category === filter;
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const upcoming = filtered.filter((e) => new Date(e.date) >= now);
  const past = filtered.filter((e) => new Date(e.date) < now);

  // Group upcoming by month
  const grouped: Record<string, Event[]> = {};
  upcoming.forEach((e: any) => {
    const key = new Date(e.date)
      .toLocaleString("fr-FR", { month: "long", year: "numeric" })
      .toUpperCase();
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(e);
  });

  return (
    <div className="w-72 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-5 pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 text-[15px]">Tous les événements</h2>
          <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
            {EVENTS.length} événements
          </span>
        </div>
        {/* Search */}
        <div className="relative mb-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtrer..."
            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50"
          />
        </div>
        {/* Category filters */}
        <div className="flex gap-1.5 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                filter === f.value
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        {Object.entries(grouped).map(([month, events]) => (
          <div key={month}>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1 py-2">
              {month}
            </p>
            <div className="space-y-1">
              {events.map((ev : any) => (
                <EventListItem
                  key={ev.id}
                  event={ev}
                  selected={selectedId === ev.id}
                  onClick={() => onSelect(ev)}
                />
              ))}
            </div>
          </div>
        ))}

        {past.length > 0 && (
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1 py-2">
              Mars 2025 — Passé
            </p>
            <div className="space-y-1">
              {past.map((ev: any) => (
                <EventListItem
                  key={ev.id}
                  event={ev}
                  selected={selectedId === ev.id}
                  onClick={() => onSelect(ev)}
                  past
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
