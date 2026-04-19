import { useState } from "react";

const TABS = [
  { label: "Tout", count: 15 },
  { label: "Forum", count: 7 },
  { label: "Docs", count: 3 },
  { label: "Événements", count: 2 },
  { label: "Messages", count: 4 },
  { label: "Formations", count: 2 },
];

interface FilterBarProps {
  active: string;
  onChange: (tab: string) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  const [priority, setPriority] = useState("Toutes priorités");
  const [author, setAuthor] = useState("Tous auteurs");

  return (
    <div className="bg-white border-b border-gray-100 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-1 overflow-x-auto scrollbar-hide py-2">
        {/* Tabs */}
        <div className="w-full md:w-fit grid grid-cols-3 md:grid-cols-6  items-center gap-3  overflow-x-auto pb-1">
          {TABS.map((t) => (
            <button
              key={t.label}
              onClick={() => onChange(t.label)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-sm transition-colors whitespace-nowrap ${
                active === t.label
                  ? "font-semibold text-gray-900 bg-gray-100"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.label}
              <span className={`text-xs ${active === t.label ? "text-gray-600" : "text-gray-400"}`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200 mx-2 shrink-0" />

        {/* Filters */}
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-3 items-center gap-2 shrink-0">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="text-xs  border border-gray-200 rounded px-2.5 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option>Toutes priorités</option>
            <option>URGENT</option>
            <option>HAUTE</option>
            <option>MOYENNE</option>
          </select>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="text-xs border border-gray-200 rounded px-2.5 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option>Tous auteurs</option>
            <option>Jean Blanchard</option>
            <option>Sophie Martin</option>
          </select>
          <button className="text-xs text-gray-500 border border-gray-200 rounded px-2.5 py-1.5 hover:bg-gray-50 flex items-center gap-1">
            ↓ Tri
          </button>
        </div>
      </div>
    </div>
  );
}
