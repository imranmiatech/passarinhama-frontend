import React, { useState } from "react";
import { NavLink } from "react-router-dom";

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
  path: string;
};

type NavSection = {
  section: string;
  items: NavItem[];
};

// ─── Icons ─────────────────────────────────────

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <circle cx="12" cy="8" r="4" />
    <path strokeLinecap="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path strokeLinecap="round" d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path strokeLinecap="round" d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <path strokeLinecap="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path strokeLinecap="round" d="M8 21h8M12 17v4" />
  </svg>
);

// ─── Data ─────────────────────────────────────

const NAV_SECTIONS: NavSection[] = [
  {
    section: "MON COMPTE",
    items: [
      { id: "profil", label: "Mon profil", path: "/dashboard/profile/profil", icon: <IconUser /> },
      { id: "societe", label: "Société", path: "/dashboard/profile/societe", icon: <IconBriefcase /> },
      { id: "securite", label: "Sécurité", path: "/dashboard/profile/securite", icon: <IconLock /> },
      { id: "notifications", label: "Notifications", path: "/dashboard/profile/notifications", icon: <IconBell /> },
      { id: "sessions", label: "Sessions", path: "/dashboard/profile/sessions", icon: <IconMonitor /> },
    ],
  },
];

// ─── Main LeftNav ──────────────────────────────

type LeftNavProps = {
  active?: string;
  onChange?: (id: string) => void;
};

const LeftNav: React.FC<LeftNavProps> = ({
  active: controlledActive,
  onChange,
}) => {
  const [internalActive, setInternalActive] = useState("profil");
  const active = controlledActive ?? internalActive;

  const handleSelect = (id: string) => {
    setInternalActive(id);
    onChange?.(id);
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="fixed hidden md:flex flex-col w-60 lg:w-64 bg-white border-r border-gray-100 h-full py-6 px-3 flex-shrink-0">
        <NavContent active={active} onSelect={handleSelect} />
      </aside>

      {/* Mobile */}
      <div className="md:hidden flex flex-wrap items-center gap-2 overflow-x-auto px-4 py-3 bg-white border-b border-gray-100 scrollbar-hide">
        {NAV_SECTIONS.flatMap((s) =>
          s.items.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => handleSelect(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-colors border ${
                active === item.id
                  ? "bg-yellow-200 text-gray-900 border-yellow-300"
                  : "text-gray-500 border-gray-100 bg-white"
              }`}
            >
              <span className="w-3.5 h-3.5">{item.icon}</span>
              {item.label}
            </NavLink>
          ))
        )}
      </div>
    </>
  );
};

// ─── Nav Content ───────────────────────────────

const NavContent: React.FC<{
  active: string;
  onSelect: (id: string) => void;
}> = ({ active, onSelect }) => (
  <div className="space-y-6">
    {NAV_SECTIONS.map((section) => (
      <div key={section.section}>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
          {section.section}
        </p>

        <div className="space-y-0.5">
          {section.items.map((item) => {
            const isActive = active === item.id;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group ${
                  item.danger
                    ? isActive
                      ? "bg-red-50 text-red-500"
                      : "text-red-400 hover:bg-red-50 hover:text-red-500"
                    : isActive
                    ? "bg-yellow-200/60 text-gray-900"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0 transition-colors ${
                    item.danger
                      ? isActive
                        ? "bg-red-100 text-red-500"
                        : "bg-gray-100 text-red-400 group-hover:bg-red-100"
                      : isActive
                      ? "bg-yellow-300 text-gray-800"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  }`}
                >
                  {item.icon}
                </span>

                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

export { LeftNav, NavContent };
export default LeftNav;