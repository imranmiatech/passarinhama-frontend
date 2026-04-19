import React from "react";

import { CategoryBadge, StatusBadge } from "../sidebar/Badge";
import type { Event } from "../../../types";

type EventDetailProps = {
  event: Event;
  onClose: () => void;
};

const EventDetail: React.FC<EventDetailProps> = ({ event, onClose }) => {
  const pct = Math.round((event.registered / event.capacity) * 100);
  const remaining = event.capacity - event.registered;

  const progressColor =
    pct >= 100 ? "bg-red-500" : pct >= 80 ? "bg-amber-400" : "bg-emerald-500";

  const progressLabel =
    pct >= 100 ? "Complet" : pct >= 80 ? `80% — Bientôt complet` : `${pct}%`;

  const progressLabelColor =
    pct >= 100 ? "text-red-500" : pct >= 80 ? "text-amber-500" : "text-emerald-600";

  const tabs = ["Description", "Participants", "Inscriptions", "Documents"];
  const [activeTab, setActiveTab] = React.useState("Description");

  return (
    <div className="w-80 flex-shrink-0 bg-white border-l border-gray-100 flex flex-col h-full">
      {/* Orange top bar */}
      <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-300 flex-shrink-0" />

      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-bold text-gray-900 text-[15px] leading-snug flex-1">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none flex-shrink-0"
          >
            ×
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <CategoryBadge category={event.category} />
          <StatusBadge status={event.status} />
          {pct >= 80 && pct < 100 && (
            <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
              {pct}% complet
            </span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 flex-shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[12px] font-semibold px-3 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
        {/* Date & Heure */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
            Date &amp; Heure
          </p>
          <div className="flex items-start gap-2">
            <span className="text-base mt-0.5">🗓️</span>
            <p className="text-sm text-gray-800 font-medium leading-snug">
              {new Date(event.date).toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {event.timeStart} → {event.timeEnd}
            </p>
          </div>
        </div>

        {/* Lieu */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
            Lieu
          </p>
          <div className="flex items-start gap-2">
            <span className="text-base mt-0.5">📍</span>
            <p className="text-sm text-gray-800 font-medium leading-snug">
              {event.location}
            </p>
          </div>
        </div>

        {/* Organisateur */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
            Organisateur
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {event.organizerInitials}
            </div>
            <span className="text-sm font-semibold text-gray-800">{event.organizer}</span>
            {event.organizerRole && (
              <span className="text-[11px] font-semibold bg-gray-900 text-white px-2 py-0.5 rounded-full">
                {event.organizerRole}
              </span>
            )}
          </div>
        </div>

        {/* Visibilité */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
            Visibilité
          </p>
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span className="text-sm text-gray-800 font-medium">{event.visibility}</span>
          </div>
        </div>

        {/* Inscriptions */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-end justify-between mb-2">
            <div>
              <span className="text-2xl font-extrabold text-gray-900">{event.registered}</span>
              <span className="text-sm text-gray-400 font-medium"> / {event.capacity}</span>
            </div>
            {remaining > 0 && (
              <span className={`text-xs font-semibold ${progressLabelColor}`}>
                {remaining} places restantes
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 mb-2">inscrits sur la capacité maximale</p>
          <div className="relative h-2 rounded-full bg-gray-200 overflow-hidden mb-2">
            <div
              className={`h-full rounded-full transition-all ${progressColor}`}
              style={{ width: `${Math.min(pct, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400">
            <span>0 place</span>
            <span className={`font-semibold ${progressLabelColor}`}>{progressLabel}</span>
            <span>{event.capacity} max.</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
            Description
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
        </div>

        {/* Note */}
        {event.note && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
            <p className="text-xs text-amber-700 leading-relaxed">
              <span className="font-bold">⚠️ Note aux membres : </span>
              {event.note}
            </p>
          </div>
        )}

        {/* Programme */}
        {event.program && event.program.length > 0 && (
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              Programme
            </p>
            <div className="space-y-2">
              {event.program.map((item: any, i) => (
                <div key={i} className="flex gap-3 items-baseline">
                  <span className="text-xs font-bold text-gray-500 w-10 flex-shrink-0">
                    {item.time}
                  </span>
                  <span className="text-sm text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex gap-2 px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          ✏️ Modifier
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
          📤 Publier
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
