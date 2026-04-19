// import React, { useState } from "react";
// import LeftSidebar from "../../components/dashboards/sidebar/LeftSidebar";
// import CalendarGrid from "../../components/dashboards/calendar/CalendarGrid";
// import EventDetail from "../../components/dashboards/detail/EventDetail";
// import { EVENTS } from "../../data/events";
// import type { Event  } from "../../types";



// const EventsPage: React.FC = () => {
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(EVENTS[0]);

//   const handleSelect = (event: Event) => {
//     setSelectedEvent(event);
//   };

//   const handleClose = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="h-screen flex flex-col lg:flex-row bg-[#f4f6fb] font-sans overflow-hidden">

//     {/* Sidebar */}
//     <LeftSidebar
//       className="hidden lg:block"
//       selectedId={selectedEvent?.id ?? null}
//       onSelect={handleSelect}
//     />

//     {/* Calendar */}
//     <div className="flex-1 w-full min-h-0 overflow-auto">
//       <CalendarGrid
//         onSelectEvent={handleSelect}
//         selectedId={selectedEvent?.id ?? null}
//       />
//     </div>

//     {/* Detail */}
//     {selectedEvent && (
//       <div className="fixed inset-0 z-50 flex lg:static">
//         <div
//           className="absolute inset-0 bg-black/40 lg:hidden"
//           onClick={handleClose}
//         />

//         <div className="
//           absolute bottom-0 left-0 right-0
//           lg:static lg:w-[400px]
//           bg-white
//           rounded-t-2xl lg:rounded-none
//           max-h-[85vh] lg:max-h-full
//           overflow-y-auto
//           shadow-xl
//         ">
//           <EventDetail event={selectedEvent} onClose={handleClose} />
//         </div>
//       </div>
//     )}

//   </div>
//   );
// };

// export default EventsPage;
import { useState, useEffect, type JSX } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type EventCategory = "AG" | "Formation" | "Réunion" | "Conférence" | "Social" | "Autre";
type EventStatus = "Publié" | "Brouillon" | "Terminé" | "Complet";
type MobileTab = "list" | "calendar" | "detail";

interface CalendarEvent {
    id: number;
    title: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    location: string;
    category: EventCategory;
    status: EventStatus;
    enrolled: number;
    capacity: number;
    organizer?: string;
    organizerRole?: string;
    visibility?: string;
    description?: string;
    note?: string;
    programme?: { time: string; label: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const EVENTS: CalendarEvent[] = [
    {
        id: 1,
        title: "Assemblée Générale 2025",
        date: "2025-04-09",
        timeStart: "14h00",
        timeEnd: "17h00",
        location: "Paris 8ème",
        category: "AG",
        status: "Publié",
        enrolled: 40,
        capacity: 50,
        organizer: "Marie Lefebvre",
        organizerRole: "Admin",
        visibility: "Tous les membres",
        description:
            "L'Assemblée Générale annuelle 2025 réunit l'ensemble des membres actifs de la Compagnie pour dresser le bilan de l'exercice 2024, voter le budget 2025 et élire les nouveaux membres du bureau.",
        note: "Un quorum de 30% est requis pour la validité des votes. Pensez à vérifier votre présence.",
        programme: [
            { time: "14h00", label: "Accueil et émargement" },
            { time: "14h30", label: "Rapport moral du président" },
            { time: "15h15", label: "Présentation des comptes 2024 et vote" },
            { time: "16h00", label: "Élection du nouveau bureau" },
            { time: "16h45", label: "Questions diverses & clôture" },
        ],
    },
    {
        id: 2,
        title: "Formation Droit copropriété — Module 2",
        date: "2025-04-15",
        timeStart: "09h00",
        timeEnd: "12h30",
        location: "Visioconférence",
        category: "Formation",
        status: "Publié",
        enrolled: 18,
        capacity: 30,
    },
    {
        id: 3,
        title: "Réunion bureau — Bilan T1",
        date: "2025-04-22",
        timeStart: "10h00",
        timeEnd: "11h30",
        location: "Siège association",
        category: "Réunion",
        status: "Brouillon",
        enrolled: 5,
        capacity: 8,
    },
    {
        id: 4,
        title: "Conférence nationale Archicopro 2025",
        date: "2025-05-08",
        timeStart: "09h00",
        timeEnd: "18h00",
        location: "Palais des Congrès, Paris",
        category: "Conférence",
        status: "Publié",
        enrolled: 102,
        capacity: 300,
    },
    {
        id: 5,
        title: "Soirée annuelle des membres",
        date: "2025-05-23",
        timeStart: "19h30",
        timeEnd: "23h00",
        location: "Rooftop Montparnasse",
        category: "Social",
        status: "Brouillon",
        enrolled: 0,
        capacity: 80,
    },
    {
        id: 6,
        title: "Formation Gestion technique — Module 3",
        date: "2025-05-29",
        timeStart: "14h00",
        timeEnd: "17h00",
        location: "Lyon",
        category: "Formation",
        status: "Complet",
        enrolled: 20,
        capacity: 20,
    },
    {
        id: 7,
        title: "Formation Droit copropriété — Module 1",
        date: "2025-03-12",
        timeStart: "09h00",
        timeEnd: "12h30",
        location: "Visioconférence",
        category: "Formation",
        status: "Terminé",
        enrolled: 20,
        capacity: 30,
    },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<EventCategory, { dot: string; tag: string; text: string; bar: string; border: string }> = {
    AG: { dot: "bg-orange-400", tag: "bg-orange-50 text-orange-700 border border-orange-200", text: "text-orange-700", bar: "bg-orange-400", border: "border-orange-400" },
    Formation: { dot: "bg-blue-500", tag: "bg-blue-50 text-blue-700 border border-blue-200", text: "text-blue-700", bar: "bg-blue-500", border: "border-blue-500" },
    Réunion: { dot: "bg-green-500", tag: "bg-green-50 text-green-700 border border-green-200", text: "text-green-700", bar: "bg-green-500", border: "border-green-500" },
    Conférence: { dot: "bg-purple-500", tag: "bg-purple-50 text-purple-700 border border-purple-200", text: "text-purple-700", bar: "bg-purple-500", border: "border-purple-500" },
    Social: { dot: "bg-pink-500", tag: "bg-pink-50 text-pink-700 border border-pink-200", text: "text-pink-700", bar: "bg-pink-500", border: "border-pink-500" },
    Autre: { dot: "bg-gray-400", tag: "bg-gray-100 text-gray-600 border border-gray-200", text: "text-gray-600", bar: "bg-gray-400", border: "border-gray-400" },
};

const STATUS_COLORS: Record<EventStatus, string> = {
    Publié: "bg-green-100 text-green-700 border border-green-200",
    Brouillon: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Terminé: "bg-gray-100 text-gray-500 border border-gray-200",
    Complet: "bg-gray-100 text-gray-600 border border-gray-200",
};

const CAT_ICONS: Record<EventCategory, string> = {
    AG: "🏛️", Formation: "🎓", Réunion: "📋", Conférence: "✏️", Social: "🎉", Autre: "📌",
};

const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DAYS_FR = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
const ALL_CATS: (EventCategory | "Tous")[] = ["Tous", "AG", "Formation", "Réunion", "Conférence", "Social", "Autre"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseDate(iso: string) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
}
function fmtDay(iso: string) { return parseDate(iso).getDate().toString().padStart(2, "0"); }
function fmtMonth(iso: string) {
    return parseDate(iso).toLocaleDateString("fr-FR", { month: "short" }).toUpperCase().replace(".", "");
}
function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDayOfMonth(y: number, m: number) { return (new Date(y, m, 1).getDay() + 6) % 7; }
function getMonthGroupLabel(ev: CalendarEvent) {
    const d = parseDate(ev.date);
    const now = new Date(2025, 3, 9);
    const label = `${MONTHS_FR[d.getMonth()].toUpperCase()} ${d.getFullYear()}`;
    if (d < now && ev.status === "Terminé") return label + " — PASSÉ";
    return label;
}

// ─── Shared atoms ─────────────────────────────────────────────────────────────

function CategoryTag({ cat }: { cat: EventCategory }) {
    const c = CATEGORY_COLORS[cat];
    return (
        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${c.tag}`}>
            <span>{CAT_ICONS[cat]}</span> {cat}
        </span>
    );
}

function StatusTag({ status }: { status: EventStatus }) {
    return (
        <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[status]}`}>
            {status === "Publié" && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1" />}
            {status}
        </span>
    );
}

function ProgressBar({ enrolled, capacity, category }: { enrolled: number; capacity: number; category: EventCategory }) {
    const pct = capacity > 0 ? Math.round((enrolled / capacity) * 100) : 0;
    return (
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${CATEGORY_COLORS[category].bar}`} style={{ width: `${pct}%` }} />
        </div>
    );
}

// ─── Event List Item ──────────────────────────────────────────────────────────

function EventListItem({
    event, selected, onSelect,
}: { event: CalendarEvent; selected: boolean; onSelect: () => void }) {
    const c = CATEGORY_COLORS[event.category];
    const isPast = event.status === "Terminé";
    return (
        <button
            onClick={onSelect}
            className={`w-full text-left flex flex-col md:flex-row gap-3 p-3 rounded-xl border transition-all active:scale-[0.99] ${selected ? "bg-blue-50/60 border-blue-200" : "bg-white border-transparent hover:border-gray-100 hover:bg-gray-50/80"
                } ${isPast ? "opacity-60" : ""}`}
        >
            <div className={`flex flex-col items-center justify-center w-12 h-14 rounded-xl border-2 shrink-0 ${isPast ? "border-gray-200" : c.border}`}>
                <span className={`text-xl font-bold leading-none ${isPast ? "text-gray-400" : "text-gray-800"}`}>{fmtDay(event.date)}</span>
                <span className={`text-[9px] font-semibold uppercase tracking-wider mt-0.5 ${isPast ? "text-gray-400" : c.text}`}>{fmtMonth(event.date)}</span>
            </div>
            <div className="flex-1 min-w-0 space-y-1.5">
                <p className={`text-sm font-semibold truncate leading-tight ${isPast ? "text-gray-400" : "text-gray-900"}`}>{event.title}</p>
                <p className="text-xs text-gray-400 truncate">{event.timeStart} → {event.timeEnd} · {event.location}</p>
                <div className="flex items-center flex-wrap gap-1">
                    <CategoryTag cat={event.category} />
                    <StatusTag status={event.status} />
                </div>
                <div className="space-y-0.5">
                    <ProgressBar enrolled={event.enrolled} capacity={event.capacity} category={event.category} />
                    <p className="text-[10px] text-gray-400">
                        {event.enrolled} / {event.capacity} inscrits{event.status === "Complet" ? " · Complet" : ""}
                    </p>
                </div>
            </div>
            {selected && <div className="w-1 bg-blue-500 rounded-full self-stretch -mr-3 ml-1" />}
        </button>
    );
}

// ─── Event List Panel ─────────────────────────────────────────────────────────

function EventListPanel({
    events, selectedEvent, onSelect,
}: { events: CalendarEvent[]; selectedEvent: CalendarEvent | null; onSelect: (e: CalendarEvent) => void }) {
    const [filterCat, setFilterCat] = useState<EventCategory | "Tous">("Tous");
    const [search, setSearch] = useState("");

    const filtered = events.filter((e) => {
        if (filterCat !== "Tous" && e.category !== filterCat) return false;
        if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    const groupedFinal: Record<string, CalendarEvent[]> = {};
    for (const ev of filtered) {
        const key = getMonthGroupLabel(ev);
        if (!groupedFinal[key]) groupedFinal[key] = [];
        groupedFinal[key].push(ev);
    }
    const finalKeys = Object.keys(groupedFinal).sort((a, b) => {
        if (a.includes("PASSÉ") && !b.includes("PASSÉ")) return 1;
        if (!a.includes("PASSÉ") && b.includes("PASSÉ")) return -1;
        const months = ["JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE"];
        return months.findIndex(m => a.startsWith(m)) - months.findIndex(m => b.startsWith(m));
    });

    return (
        <div className="flex flex-col h-full overflow-hidden bg-white">
            <div className="p-4 border-b border-gray-100 space-y-3">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-gray-900 text-base">Tous les événements</h1>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{events.length} événements</span>
                </div>
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Filtrer..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 bg-gray-50"
                    />
                </div>
                <div className="flex flex-wrap-reverse gap-1.5 overflow-x-hidden pb-1" style={{ scrollbarWidth: "none" }}>
                    {ALL_CATS.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilterCat(cat)}
                            className={`flex  items-center gap-1 text-xs px-2.5 py-1 rounded-full border font-medium whitespace-nowrap transition-all ${filterCat === cat
                                    ? "bg-gray-900 text-white border-gray-900"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            {cat !== "Tous" && <span>{CAT_ICONS[cat as EventCategory]}</span>}
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col overflow-y-auto p-3 space-y-4 overflow-x-hidden">
                {finalKeys.map((key) => (
                    <div key={key}>
                        <p className={`text-[10px] font-bold tracking-widest mb-2 px-1 ${key.includes("PASSÉ") ? "text-gray-300" : "text-gray-400"}`}>{key}</p>
                        <div className="space-y-1">
                            {groupedFinal[key].map((ev) => (
                                <EventListItem key={ev.id} event={ev} selected={selectedEvent?.id === ev.id} onSelect={() => onSelect(ev)} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Calendar Panel ───────────────────────────────────────────────────────────

function CalendarPanel({ events, onSelectEvent }: { events: CalendarEvent[]; onSelectEvent: (e: CalendarEvent) => void }) {
    const [year, setYear] = useState(2025);
    const [month, setMonth] = useState(3);

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const prevDays = getDaysInMonth(year, month === 0 ? 11 : month - 1);

    const cells: { day: number; cur: boolean }[] = [];
    for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevDays - i, cur: false });
    for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, cur: true });
    while (cells.length % 7 !== 0) cells.push({ day: cells.length - daysInMonth - firstDay + 1, cur: false });

    const eventsForDay = (d: number) =>
        events.filter(e => {
            const dt = parseDate(e.date);
            return dt.getFullYear() === year && dt.getMonth() === month && dt.getDate() === d;
        });

    const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
    const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-gray-100 flex-wrap gap-y-2">
                <button onClick={prevMonth} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <h3 className="font-semibold text-gray-800 text-sm">{MONTHS_FR[month]} {year}</h3>
                <button onClick={nextMonth} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <button className="ml-auto text-xs px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Aujourd'hui</button>
                <div className="flex gap-1 text-xs">
                    {["Mois", "Semaine", "Liste"].map(v => (
                        <button key={v} className={`px-2 sm:px-2.5 py-1.5 rounded-lg border transition-colors ${v === "Mois" ? "bg-gray-900 text-white border-gray-900" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>{v}</button>
                    ))}
                </div>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 border-b border-gray-100">
                {DAYS_FR.map(d => (
                    <div key={d} className="py-2 text-center text-[9px] sm:text-[10px] font-semibold text-gray-400 tracking-wider">{d}</div>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 flex-1 overflow-hidden">
                {cells.map((cell, i) => {
                    const dayEvs = cell.cur ? eventsForDay(cell.day) : [];
                    return (
                        <div key={i} className={`border-r border-b border-gray-100 p-0.5 sm:p-1 overflow-hidden ${!cell.cur ? "bg-gray-50/50" : ""}`} style={{ minHeight: 64 }}>
                            <span className={`text-[10px] sm:text-xs font-medium block mb-0.5 ${cell.cur ? "text-gray-700" : "text-gray-300"}`}>{cell.day}</span>
                            <div className="space-y-0.5">
                                {dayEvs.map(ev => {
                                    const c = CATEGORY_COLORS[ev.category];
                                    return (
                                        <button key={ev.id} onClick={() => onSelectEvent(ev)}
                                            className={`w-full text-left text-[8px] sm:text-[9px] px-1 py-0.5 rounded border-l-2 ${c.border} bg-white hover:bg-gray-50 truncate text-gray-700 shadow-sm transition-colors`}>
                                            {ev.title}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border-t border-gray-100 flex-wrap">
                {(Object.entries(CATEGORY_COLORS) as [EventCategory, typeof CATEGORY_COLORS[EventCategory]][]).map(([cat, c]) => (
                    <div key={cat} className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-gray-500">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} /> {cat}
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Event Detail Panel ───────────────────────────────────────────────────────

function EventDetailPanel({
    event, onClose, showBackButton,
}: { event: CalendarEvent; onClose: () => void; showBackButton?: boolean }) {
    const c = CATEGORY_COLORS[event.category];
    const pct = event.capacity > 0 ? Math.round((event.enrolled / event.capacity) * 100) : 0;
    const remaining = event.capacity - event.enrolled;

    return (
        <div className="flex flex-col h-full p-5 lg:p-10 bg-white overflow-hidden">
            <div className={`h-1 ${c.bar} w-full shrink-0`} />
            <div className="flex-1 overflow-y-auto">
                <div className="p-4 sm:p-6 space-y-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                            {showBackButton && (
                                <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">{event.title}</h2>
                        </div>
                        {!showBackButton && (
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 mt-0.5 shrink-0 p-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                        <CategoryTag cat={event.category} />
                        <StatusTag status={event.status} />
                        {pct >= 80 && (
                            <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                                {pct}% complet
                            </span>
                        )}
                    </div>

                    {/* Tabs */}
                    <div className="grid grid-cols-2 gap-4 border-b border-gray-200 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                        {["Description", "Participants", "Inscriptions", "Documents"].map((t, i) => (
                            <button key={t} className={`pb-2 px-3 text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-400 hover:text-gray-600"}`}>
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Date & Heure */}
                    <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-base">📅</div>
                        <div>
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Date &amp; Heure</p>
                            <p className="text-sm text-gray-800 font-medium">
                                {parseDate(event.date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}, {event.timeStart} → {event.timeEnd}
                            </p>
                        </div>
                    </div>

                    {/* Lieu */}
                    <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-base">📍</div>
                        <div>
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Lieu</p>
                            <p className="text-sm text-gray-800 font-medium">
                                {event.id === 1 ? "Salle Haussmann — 12 av. des Champs-Élysées, Paris 8ème" : event.location}
                            </p>
                        </div>
                    </div>

                    {/* Organisateur */}
                    {event.organizer && (
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-base">👤</div>
                            <div>
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Organisateur</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white text-[10px] font-bold">ML</div>
                                    <span className="text-sm font-medium text-gray-800">{event.organizer}</span>
                                    <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded-full">Admin</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Visibilité */}
                    {event.visibility && (
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-base">🌐</div>
                            <div>
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Visibilité</p>
                                <p className="text-sm text-gray-800 font-medium">{event.visibility}</p>
                            </div>
                        </div>
                    )}

                    {/* Capacity */}
                    <div className="rounded-xl border border-gray-100 p-4 space-y-3 bg-gray-50/50">
                        <div className="flex items-baseline gap-1 flex-wrap">
                            <span className="text-3xl font-bold text-gray-900">{event.enrolled}</span>
                            <span className="text-sm text-gray-400">/ {event.capacity}</span>
                            <span className="ml-auto text-sm font-medium text-orange-500">{remaining} places restantes</span>
                        </div>
                        <p className="text-xs text-gray-400">inscrits sur la capacité maximale</p>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`absolute left-0 top-0 h-full rounded-full ${pct >= 80 ? "bg-orange-400" : c.bar}`} style={{ width: `${pct}%` }} />
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-400">
                            <span>0 place</span>
                            <span className={`font-semibold ${pct >= 80 ? "text-orange-500" : c.text}`}>{pct}% — {pct >= 80 ? "Bientôt complet" : "En cours"}</span>
                            <span>{event.capacity} max.</span>
                        </div>
                    </div>

                    {/* Description */}
                    {event.description && (
                        <div>
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
                        </div>
                    )}

                    {/* Note */}
                    {event.note && (
                        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-700">
                            <span className="font-semibold">⚠️ Note aux membres : </span>{event.note}
                        </div>
                    )}

                    {/* Programme */}
                    {event.programme && (
                        <div>
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Programme</p>
                            <div className="space-y-2">
                                {event.programme.map((p) => (
                                    <div key={p.time} className="flex gap-4 text-sm">
                                        <span className="text-gray-400 font-mono w-12 shrink-0">{p.time}</span>
                                        <span className="text-gray-700">{p.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4 flex gap-3 shrink-0 bg-white">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    ✏️ Modifier
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                    🚀 Publier
                </button>
            </div>
        </div>
    );
}

// ─── Bottom Nav (mobile only) ─────────────────────────────────────────────────

function BottomNav({ tab, setTab, hasDetail }: { tab: MobileTab; setTab: (t: MobileTab) => void; hasDetail: boolean }) {
    const items: { id: MobileTab; label: string; icon: JSX.Element }[] = [
        {
            id: "list",
            label: "Événements",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            ),
        },
        {
            id: "calendar",
            label: "Calendrier",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            id: "detail",
            label: "Détail",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100">
            <div className="flex">
                {items.map(item => {
                    const disabled = item.id === "detail" && !hasDetail;
                    const active = tab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => !disabled && setTab(item.id)}
                            disabled={disabled}
                            className={`relative flex-1 flex flex-col items-center gap-1 pt-2 pb-3 text-[10px] font-medium transition-colors ${active ? "text-gray-900" : disabled ? "text-gray-200" : "text-gray-400"
                                }`}
                        >
                            {active && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-900 rounded-b-full" />
                            )}
                            {item.icon}
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(EVENTS[0]);
    const [mobileTab, setMobileTab] = useState<MobileTab>("list");
    const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setScreenSize(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const handleSelectEvent = (ev: CalendarEvent) => {
        setSelectedEvent(ev);
        if (screenSize === "mobile") setMobileTab("detail");
    };

    // ── MOBILE: single panel + bottom nav ──────────────────────────────────────
    if (screenSize === "mobile") {
        return (
            <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-hidden" style={{ paddingBottom: 64 }}>
                    {mobileTab === "list" && (
                        <EventListPanel events={EVENTS} selectedEvent={selectedEvent} onSelect={handleSelectEvent} />
                    )}
                    {mobileTab === "calendar" && (
                        <CalendarPanel events={EVENTS} onSelectEvent={handleSelectEvent} />
                    )}
                    {mobileTab === "detail" && selectedEvent && (
                        <EventDetailPanel event={selectedEvent} showBackButton onClose={() => setMobileTab("list")} />
                    )}
                    {mobileTab === "detail" && !selectedEvent && (
                        <div className="h-full flex items-center justify-center text-gray-300 text-sm">
                            Sélectionnez un événement
                        </div>
                    )}
                </div>
                <BottomNav tab={mobileTab} setTab={setMobileTab} hasDetail={!!selectedEvent} />
            </div>
        );
    }

    // ── TABLET: top tab switches left panel between list/calendar; right shows detail ──
    if (screenSize === "tablet") {
        const tabView = mobileTab === "calendar" ? "calendar" : "list";
        return (
            <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
                {/* Top tab bar */}
                <div className="bg-white border-b border-gray-100 flex shrink-0">
                    {(["list", "calendar"] as const).map(t => (
                        <button
                            key={t}
                            onClick={() => setMobileTab(t)}
                            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${tabView === t ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {t === "list" ? (
                                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> Événements</>
                            ) : (
                                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> Calendrier</>
                            )}
                        </button>
                    ))}
                </div>
                {/* Two-column */}
                <div className="flex flex-1 overflow-hidden">
                    <div className="w-72 shrink-0 border-r border-gray-100 overflow-hidden">
                        {tabView === "list" ? (
                            <EventListPanel events={EVENTS} selectedEvent={selectedEvent} onSelect={handleSelectEvent} />
                        ) : (
                            <CalendarPanel events={EVENTS} onSelectEvent={handleSelectEvent} />
                        )}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        {selectedEvent ? (
                            <EventDetailPanel event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-300 text-sm">
                                Sélectionnez un événement
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // ── DESKTOP: 3 columns ─────────────────────────────────────────────────────
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="w-72 shrink-0 border-r border-gray-100 overflow-hidden">
                <EventListPanel events={EVENTS} selectedEvent={selectedEvent} onSelect={handleSelectEvent} />
            </div>
            <div className="flex-1 border-r border-gray-100 overflow-hidden">
                <CalendarPanel events={EVENTS} onSelectEvent={handleSelectEvent} />
            </div>
            <div className="w-80 shrink-0 border-l border-gray-100 overflow-hidden">
                {selectedEvent ? (
                    <EventDetailPanel event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-300 text-sm">
                        Sélectionnez un événement
                    </div>
                )}
            </div>
        </div>
    );
}