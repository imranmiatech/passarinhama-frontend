import React from "react";
import { CategoryBadge, StatusBadge } from "./Badge";
import type { Event } from "../../../types";
import { CATEGORY_LEFT_BORDER } from "../../../data/events";

type EventListItemProps = {
  event: Event;
  selected: boolean;
  onClick: () => void;
  past?: boolean;
};

const EventListItem: React.FC<EventListItemProps> = ({ event, selected, onClick, past }) => {
  const day = new Date(event.date).getDate();
  const month = new Date(event.date)
    .toLocaleString("fr-FR", { month: "short" })
    .toUpperCase()
    .replace(".", "");

  const pct = Math.round((event.registered / event.capacity) * 100);

  const progressColor =
    pct >= 100 ? "bg-red-500" : pct >= 80 ? "bg-amber-400" : "bg-blue-500";

  return (
    <div
      onClick={onClick}
      className={`flex gap-3 px-3 py-3 cursor-pointer rounded-xl border-l-4 transition-all ${
        CATEGORY_LEFT_BORDER[event.category]
      } ${
        selected
          ? "bg-blue-50 shadow-sm"
          : "hover:bg-gray-50"
      } ${past ? "opacity-50" : ""}`}
    >
      {/* Date block */}
      <div className="flex flex-col items-center justify-start w-9 flex-shrink-0 pt-0.5">
        <span className={`text-xl font-extrabold leading-none ${past ? "text-gray-400" : "text-gray-800"}`}>
          {day}
        </span>
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{month}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-snug truncate ${past ? "text-gray-400" : "text-gray-900"}`}>
          {event.title}
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5 truncate">
          {event.timeStart} → {event.timeEnd} · {event.location}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          <CategoryBadge category={event.category} small />
          <StatusBadge status={event.status} />
        </div>
        {!past && event.status !== "Terminé" && (
          <div className="mt-2">
            <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${progressColor}`}
                style={{ width: `${Math.min(pct, 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">
              {event.registered} / {event.capacity} inscrits
              {pct >= 100 ? " · Complet" : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListItem;