import React, { useState } from "react";


import type { Event } from "../../../types";
import { CATEGORY_CALENDAR_BG, CATEGORY_DOT, EVENTS } from "../../../data/events";

type CalendarProps = {
  onSelectEvent: (event: Event) => void;
  selectedId: string | null;
};

type ViewMode = "Mois" | "Semaine" | "Liste";

const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

const CalendarGrid: React.FC<CalendarProps> = ({ onSelectEvent, selectedId }) => {
  const [view, setView] = useState<ViewMode>("Mois");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // April 2025

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get days for calendar grid
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDow = (firstDay.getDay() + 6) % 7; // Monday-first
  const totalDays = lastDay.getDate();

  // Build cells: leading empty + days + trailing
  const cells: (number | null)[] = [
    ...Array(startDow).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const eventsThisMonth = EVENTS.filter((e) => {
    const d = new Date(e.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });

  const eventsOnDay = (day: number) =>
    eventsThisMonth.filter((e) => new Date(e.date).getDate() === day);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToday = () => setCurrentDate(new Date(2025, 3, 1));

  return (
    <div className="flex-1 flex flex-col bg-white min-w-0">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <button onClick={prevMonth} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
          ‹
        </button>
        <h2 className="font-bold text-gray-900 text-base min-w-[140px]">
          {MONTHS_FR[month]} {year}
        </h2>
        <button onClick={nextMonth} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-500">
          ›
        </button>
        <button
          onClick={goToday}
          className="ml-2 text-xs font-semibold px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
        >
          Aujourd'hui
        </button>
        <div className="ml-auto flex items-center border border-gray-200 rounded-lg overflow-hidden">
          {(["Mois", "Semaine", "Liste"] as ViewMode[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`text-xs font-semibold px-3 py-1.5 transition-colors ${
                view === v ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 border-b border-gray-100">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[11px] font-bold text-gray-400 py-2 uppercase tracking-wide">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar cells */}
      <div className="grid grid-cols-7 flex-1">
        {cells.map((day, idx) => {
          const events = day ? eventsOnDay(day) : [];
          const isToday = day === 9 && month === 3 && year === 2025;
          return (
            <div
              key={idx}
              className={`border-b border-r border-gray-100 p-1.5 min-h-[90px] ${
                !day ? "bg-gray-50/40" : "hover:bg-blue-50/20"
              }`}
            >
              {day && (
                <>
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full mb-1 ${
                      isToday ? "bg-blue-600 text-white" : "text-gray-700"
                    }`}
                  >
                    {day}
                  </span>
                  <div className="space-y-0.5">
                    {events.map((ev) => (
                      <button
                        key={ev.id}
                        onClick={() => onSelectEvent(ev)}
                        className={`w-full text-left text-[10px] font-medium px-1.5 py-0.5 rounded truncate transition-opacity ${
                          CATEGORY_CALENDAR_BG[ev.category]
                        } ${selectedId === ev.id ? "ring-1 ring-blue-400" : ""}`}
                      >
                        {ev.title}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 px-5 py-3 border-t border-gray-100 flex-wrap">
        {Object.entries(CATEGORY_DOT).map(([cat, dot]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dot}`} />
            <span className="text-xs text-gray-500">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;