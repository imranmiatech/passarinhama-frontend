import React from "react";
import type { EventCategory, EventStatus } from "../../../types";
import { CATEGORY_COLORS, STATUS_COLORS } from "../../../data/events";


type CategoryBadgeProps = { category: EventCategory; small?: boolean };
export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, small }) => {
  const icons: Record<string, string> = {
    AG: "🏛️", Formation: "📚", Réunion: "🤝", Conférence: "🎤", Social: "🎉", Autre: "📌",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 border rounded-full font-semibold ${
        small ? "text-[10px] px-1.5 py-0.5" : "text-[11px] px-2 py-0.5"
      } ${CATEGORY_COLORS[category]}`}
    >
      <span>{icons[category]}</span>
      {category}
    </span>
  );
};

type StatusBadgeProps = { status: EventStatus };
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const dots: Record<string, string> = {
    Publié: "bg-emerald-500", Brouillon: "bg-amber-400", Terminé: "bg-gray-400", Complet: "bg-red-500",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-full text-[11px] px-2 py-0.5 font-semibold ${STATUS_COLORS[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status]}`} />
      {status}
    </span>
  );
};