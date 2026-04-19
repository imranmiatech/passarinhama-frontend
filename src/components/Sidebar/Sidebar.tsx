import { useState } from "react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
}

const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
const IconMembers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconForums = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconAgenda = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconDocuments = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const IconFormations = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const IconModeration = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[14px] h-[14px]">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const navItems: NavItem[] = [
  { icon: <IconDashboard />, label: "Tableau de bord", active: true },
  { icon: <IconMembers />, label: "Membres", badge: 248 ,},
  { icon: <IconForums />, label: "Forums", badge: 3 },
  { icon: <IconAgenda />, label: "Agenda" },
  { icon: <IconDocuments />, label: "Documents" },
  { icon: <IconFormations />, label: "Formations" },
  { icon: <IconModeration />, label: "Modération", badge: 18 },
  { icon: <IconSettings />, label: "Paramètres" },
];

function NavItemRow({
  item,
  iconOnly,
}: {
  item: NavItem;
  iconOnly: boolean;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const activeClass = item.active
    ? "bg-[#2d3a1a] text-[#CCFF33]"
    : "text-[#888] hover:bg-[#2a2a2a] hover:text-[#e5e5e5]";

  return (
    <div
      className={`relative flex items-center rounded-lg cursor-pointer transition-colors duration-150 ${activeClass} ${
        iconOnly ? "justify-center p-[10px]" : "gap-3 px-[10px] py-[9px]"
      }`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {item.icon}

      {!iconOnly && (
        <>
          <span className="text-[13px] font-medium flex-1 overflow-hidden whitespace-nowrap">
            {item.label}
          </span>
          {item.badge !== undefined && (
            <span
              className={`text-[10px] font-semibold px-[7px] py-[2px] rounded-full flex-shrink-0 ${
                item.active
                  ? "bg-[rgba(204,255,51,0.15)] text-[#CCFF33]"
                  : "bg-[#2e2e2e] text-[#aaa]"
              }`}
            >
              {item.badge}
            </span>
          )}
        </>
      )}

      {/* Tooltip — only in icon-only (tablet) mode */}
      {iconOnly && showTooltip && (
        <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 bg-[#333] text-white text-[12px] px-2 py-1 rounded-md whitespace-nowrap z-50 pointer-events-none">
          {item.label}
          {item.badge !== undefined && (
            <span className="ml-1 opacity-70">({item.badge})</span>
          )}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside
      className="
        hidden sm:flex flex-col
        bg-[#1a1a1a]
        border-r border-white/[0.08]
        flex-shrink-0
        min-w-[60px]
        lg:w-60
        h-full
        sticky top-0
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/[0.08] min-h-[64px] justify-center lg:justify-start">
        <div className="w-9 h-9 bg-[#CCFF33] rounded-lg flex items-center justify-center flex-shrink-0" />
        
        <div className="hidden lg:block overflow-hidden">
          <p className="text-[18px] font-semibold text-white">ARCHICOPRO</p>
          <p className="text-[13px] text-[#888]">EXTRANET</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-[10px] pt-5 overflow-y-auto">
        <p className="hidden lg:block text-[12px] text-[#888] px-[6px] mb-[6px]">
          PRINCIPAL
        </p>

        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavItemRow key={item.label} item={item} iconOnly={false} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-[10px] py-3 border-t border-white/[0.08]">
        <div className="flex items-center gap-[10px] rounded-lg px-[10px] py-[10px] hover:bg-[#2a2a2a]">
          <div className="w-9 h-9 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white">
            ML
          </div>

          <div className="hidden lg:block overflow-hidden">
            <p className="text-[13px] text-[#e5e5e5] truncate">Lahoucine</p>
            <p className="text-[11px] text-[#888] truncate">Administrateur</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

/*
  USAGE — wrap with your layout:

  import Sidebar from "./Sidebar";

  export default function App() {
    return (
      <div className="flex h-screen bg-[#141414]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          {/* your content * /}
        </main>
      </div>
    );
  }

  TAILWIND CONFIG — make sure tailwind.config.js scans this file:
  content: ["./src/**\/*.{ts,tsx}"]

  BREAKPOINTS USED:
  - Mobile  (<640px)  : sidebar hidden via `hidden`
  - Tablet  (≥640px)  : `sm:flex` — sidebar visible, icons only (w-16)
  - Desktop (≥1024px) : `lg:w-60` — full sidebar with labels
*/