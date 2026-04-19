import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Session = {
  id: string;
  browser: string;
  os: string;
  location: string;
  ip?: string;
  connectedAt: string;
  current?: boolean;
  deviceType: "desktop" | "mobile";
};

type HistoryEntry = {
  id: string;
  browser: string;
  os: string;
  location: string;
  date: string;
  status: "success" | "new_location";
  deviceType: "desktop" | "mobile";
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const INITIAL_SESSIONS: Session[] = [
  {
    id: "1",
    browser: "Chrome 123",
    os: "macOS Sonoma",
    location: "Paris, France",
    ip: "192.168.1.42",
    connectedAt: "il y a 2 min",
    current: true,
    deviceType: "desktop",
  },
  {
    id: "2",
    browser: "Safari",
    os: "iPhone 15 Pro",
    location: "Paris, France",
    connectedAt: "il y a 3h",
    deviceType: "mobile",
  },
  {
    id: "3",
    browser: "Firefox 124",
    os: "Windows 11",
    location: "Lyon, France",
    connectedAt: "il y a 2 jours",
    deviceType: "desktop",
  },
];

const HISTORY: HistoryEntry[] = [
  {
    id: "h1",
    browser: "Chrome",
    os: "macOS",
    location: "Paris",
    date: "3 avr. 2025, 09h14",
    status: "success",
    deviceType: "desktop",
  },
  {
    id: "h2",
    browser: "Safari",
    os: "iPhone",
    location: "Paris",
    date: "2 avr. 2025, 18h32",
    status: "success",
    deviceType: "mobile",
  },
  {
    id: "h3",
    browser: "Firefox",
    os: "Windows",
    location: "Adresse inconnue",
    date: "1 avr. 2025, 14h00",
    status: "new_location",
    deviceType: "desktop",
  },
];

// ─── Device Icons ─────────────────────────────────────────────────────────────

const DesktopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-blue-400">
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <path strokeLinecap="round" d="M8 21h8M12 16v5" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-blue-400">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const DeviceIcon = ({ type }: { type: "desktop" | "mobile" }) => (
  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
    {type === "desktop" ? <DesktopIcon /> : <MobileIcon />}
  </div>
);

// ─── Section Card ─────────────────────────────────────────────────────────────

const SectionCard: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between gap-4">
      {header}
    </div>
    <div className="divide-y divide-gray-100">{children}</div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>(INITIAL_SESSIONS);

  const disconnect = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  const disconnectAll = () => {
    setSessions((prev) => prev.filter((s) => s.current));
  };

  return (
    <div className="min-h-screen w-full ml-0 md:ml-60 lg:ml-64 bg-[#f4f6fb] font-sans">
      <div className="w-full mx-auto px-4 sm:px-6 py-8 space-y-5">

        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Sessions actives</h1>
          <p className="text-gray-400 text-sm mt-1">Appareils actuellement connectés à votre compte</p>
        </div>

        {/* ── Active Sessions ── */}
        <SectionCard
          header={
            <>
              <span className="font-bold text-gray-900 text-[15px]">
                {sessions.length} session{sessions.length !== 1 ? "s" : ""} active{sessions.length !== 1 ? "s" : ""}
              </span>
              {sessions.filter((s) => !s.current).length > 0 && (
                <button
                  onClick={disconnectAll}
                  className="flex items-center gap-1.5 text-xs font-semibold text-red-500 border border-red-200 bg-white hover:bg-red-50 px-3 py-2 rounded-xl transition-colors whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Déconnecter toutes les autres sessions
                </button>
              )}
            </>
          }
        >
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <DeviceIcon type={session.deviceType} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-gray-900">
                    {session.browser} — {session.os}
                  </span>
                  {session.current && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Session actuelle
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  {session.location}
                  {session.ip && ` · ${session.ip}`}
                  {" · "}Connecté {session.connectedAt}
                </p>
              </div>

              {!session.current && (
                <button
                  onClick={() => disconnect(session.id)}
                  className="text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-xl hover:bg-gray-100 hover:text-red-500 hover:border-red-200 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  Déconnecter
                </button>
              )}
            </div>
          ))}

          {sessions.length === 0 && (
            <div className="px-6 py-8 text-center text-gray-400 text-sm">
              Aucune session active.
            </div>
          )}
        </SectionCard>

        {/* ── History ── */}
        <SectionCard
          header={
            <span className="font-bold text-gray-900 text-[15px]">Historique des connexions</span>
          }
        >
          {HISTORY.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <DeviceIcon type={entry.deviceType} />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  {entry.browser} — {entry.os}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {entry.location} · {entry.date}
                </p>
              </div>

              {entry.status === "success" ? (
                <span className="text-xs font-semibold text-emerald-500 flex-shrink-0">
                  Succès
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-semibold text-amber-500 flex-shrink-0">
                  ⚠ Nouveau lieu
                </span>
              )}
            </div>
          ))}
        </SectionCard>
      </div>
    </div>
  );
}