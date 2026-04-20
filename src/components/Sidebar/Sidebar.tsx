// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// interface NavItem {
//   icon: React.ReactNode;
//   label: string;
//   badge?: number;
//   /** When set, row is a link (react-router). */
//   to?: string;
//   /** Pass `true` for index routes so child paths do not stay “active”. */
//   end?: boolean;
// }

// const IconDashboard = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// );
// const IconMembers = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );
// const IconForums = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//   </svg>
// );
// const IconAgenda = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <rect x="3" y="4" width="18" height="18" rx="2" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//   </svg>
// );
// const IconDocuments = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//     <polyline points="14 2 14 8 20 8" />
//   </svg>
// );
// const IconFormations = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//   </svg>
// );
// const IconModeration = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//   </svg>
// );
// const IconSettings = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] flex-shrink-0">
//     <circle cx="12" cy="12" r="3" />
//     <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//   </svg>
// );
// const IconChevron = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[14px] h-[14px]">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// const navItems: NavItem[] = [
//   { icon: <IconDashboard />, label: "Tableau de bord", to: "/dashboard", end: true },
//   { icon: <IconMembers />, label: "Membres",to: "/dashboard/members", badge: 248 },
//   { icon: <IconForums />, label: "Forums", to:"/dashboard/forum", badge: 3 },
//   { icon: <IconAgenda />, label: "Agenda", to: "/dashboard/event" },
//   { icon: <IconDocuments />, label: "Documents", to: "/dashboard/documents", badge: 5 },
//   { icon: <IconFormations />, label: "Formations", to: "/dashboard/formations" },
//   { icon: <IconModeration />, label: "Modération", to: "/dashboard/mode", badge: 18 },
//   { icon: <IconSettings />, label: "Paramètres" , to: "/dashboard/profile"},
// ];

// function navItemClassName(isActive: boolean, iconOnly: boolean) {
//   const activeClass = isActive
//     ? "bg-[#2d3a1a] text-[#CCFF33]"
//     : "text-[#888] hover:bg-[#2a2a2a] hover:text-[#e5e5e5]";
//   return `relative flex items-center rounded-lg transition-colors duration-150 no-underline ${activeClass} ${
//     iconOnly ? "justify-center p-[10px]" : "gap-3 px-[10px] py-[9px]"
//   }`;
// }

// function NavItemRow({
//   item,
//   iconOnly,
// }: {
//   item: NavItem;
//   iconOnly: boolean;
// }) {
//   const [showTooltip, setShowTooltip] = useState(false);

//   const badge = (isActive: boolean) =>
//     !iconOnly && item.badge !== undefined ? (
//       <span
//         className={`flex-shrink-0 rounded-full px-[7px] py-[2px] text-[10px] font-semibold ${
//           isActive ? "bg-[rgba(204,255,51,0.15)] text-[#CCFF33]" : "bg-[#2e2e2e] text-[#aaa]"
//         }`}
//       >
//         {item.badge}
//       </span>
//     ) : null;

//   const rowWithBadge = (isActive: boolean) => (
//     <>
//       {item.icon}
//       {!iconOnly && (
//         <>
//           <span className="flex-1 overflow-hidden text-[13px] font-medium whitespace-nowrap">
//             {item.label}
//           </span>
//           {badge(isActive)}
//         </>
//       )}
//     </>
//   );

//   const tooltip =
//     iconOnly && showTooltip ? (
//       <div className="pointer-events-none absolute top-1/2 left-[calc(100%+8px)] z-50 -translate-y-1/2 rounded-md bg-[#333] px-2 py-1 text-[12px] whitespace-nowrap text-white">
//         {item.label}
//         {item.badge !== undefined && <span className="ml-1 opacity-70">({item.badge})</span>}
//       </div>
//     ) : null;

//   if (item.to) {
//     return (
//       <NavLink
//         to={item.to}
//         end={item.end}
//         onMouseEnter={() => setShowTooltip(true)}
//         onMouseLeave={() => setShowTooltip(false)}
//         className={({ isActive }) => `${navItemClassName(isActive, iconOnly)} cursor-pointer`}
//       >
//         {({ isActive }) => (
//           <>
//             {rowWithBadge(isActive)}
//             {tooltip}
//           </>
//         )}
//       </NavLink>
//     );
//   }

//   return (
//     <div
//       role="presentation"
//       className={`${navItemClassName(false, iconOnly)} cursor-default`}
//       onMouseEnter={() => setShowTooltip(true)}
//       onMouseLeave={() => setShowTooltip(false)}
//     >
//       {rowWithBadge(false)}
//       {tooltip}
//     </div>
//   );
// }

// export default function Sidebar() {
//   return (
//     <aside
//       className="
//         hidden sm:flex flex-col
//         bg-[#1a1a1a]
//         border-r border-white/[0.08]
//         flex-shrink-0
//         min-w-[60px]
//         lg:w-60
//         h-full
//         sticky top-0
//       "
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-3 px-4 py-5 border-b border-white/[0.08] min-h-[64px] justify-center lg:justify-start">
//         <div className="w-9 h-9 bg-[#CCFF33] rounded-lg flex items-center justify-center flex-shrink-0" />
        
//         <div className="hidden lg:block overflow-hidden">
//           <p className="text-[18px] font-semibold text-white">ARCHICOPRO</p>
//           <p className="text-[13px] text-[#888]">EXTRANET</p>
//         </div>
//       </div>

//       {/* Nav */}
//       <nav className="flex-1 px-[10px] pt-5 overflow-y-auto">
//         <p className="hidden lg:block text-[12px] text-[#888] px-[6px] mb-[6px]">
//           PRINCIPAL
//         </p>

//         <div className="flex flex-col gap-1">
//           {navItems.map((item) => (
//             <NavItemRow key={item.label} item={item} iconOnly={false} />
//           ))}
//         </div>
//       </nav>

//       {/* Footer */}
//       <div className="px-[10px] py-3 border-t border-white/[0.08]">
//         <div className="flex items-center gap-[10px] rounded-lg px-[10px] py-[10px] hover:bg-[#2a2a2a]">
//           <div className="w-9 h-9 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white">
//             ML
//           </div>

//           <div className="hidden lg:block overflow-hidden">
//             <p className="text-[13px] text-[#e5e5e5] truncate">Lahoucine</p>
//             <p className="text-[11px] text-[#888] truncate">Administrateur</p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// /*
//   USAGE — wrap with your layout:

//   import Sidebar from "./Sidebar";

//   export default function App() {
//     return (
//       <div className="flex h-screen bg-[#141414]">
//         <Sidebar />
//         <main className="flex-1 overflow-y-auto p-8">
//           {/* your content * /}
//         </main>
//       </div>
//     );
//   }

//   TAILWIND CONFIG — make sure tailwind.config.js scans this file:
//   content: ["./src/**\/*.{ts,tsx}"]

//   BREAKPOINTS USED:
//   - Mobile  (<640px)  : sidebar hidden via `hidden`
//   - Tablet  (≥640px)  : `sm:flex` — sidebar visible, icons only (w-16)
//   - Desktop (≥1024px) : `lg:w-60` — full sidebar with labels
// */

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  CalendarDays,
  FileText,
  BookOpen,
  Shield,
  Settings,
  X,
 
} from "lucide-react";
import logo from "../../assets/logo.png"
interface NavItem {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  to?: string;
  end?: boolean;
}

const navItems: NavItem[] = [
  { icon: <LayoutDashboard size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Tableau de bord", to: "/dashboard", end: true },
  { icon: <Users size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Membres", to: "/dashboard/members", badge: 248 },
  { icon: <MessageSquare size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Forums", to: "/dashboard/forum", badge: 3 },
  { icon: <CalendarDays size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Agenda", to: "/dashboard/event" },
  { icon: <FileText size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Documents", to: "/dashboard/documents", badge: 5 },
  { icon: <BookOpen size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Formations", to: "/dashboard/formations" },
  { icon: <Shield size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Modération", to: "/dashboard/mode", badge: 18 },
  { icon: <Settings size={18} strokeWidth={1.8} className="flex-shrink-0" />, label: "Paramètres", to: "/dashboard/profile" },
];

function navItemClassName(isActive: boolean, iconOnly: boolean) {
  const activeClass = isActive
    ? "bg-[#2d3a1a] text-[#CCFF33]"
    : "text-[#888] hover:bg-[#2a2a2a] hover:text-[#e5e5e5]";
  return `relative flex items-center rounded-lg transition-colors duration-150 no-underline ${activeClass} ${
    iconOnly ? "justify-center p-[10px]" : "gap-3 px-[10px] py-[9px]"
  }`;
}

function NavItemRow({
  item,
  iconOnly,
  onNavigate,
}: {
  item: NavItem;
  iconOnly: boolean;
  onNavigate?: () => void;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const badge = (isActive: boolean) =>
    !iconOnly && item.badge !== undefined ? (
      <span
        className={`flex-shrink-0 rounded-full px-[7px] py-[2px] text-[10px] font-semibold ${
          isActive ? "bg-[rgba(204,255,51,0.15)] text-[#CCFF33]" : "bg-[#2e2e2e] text-[#aaa]"
        }`}
      >
        {item.badge}
      </span>
    ) : null;

  const rowWithBadge = (isActive: boolean) => (
    <>
      {item.icon}
      {!iconOnly && (
        <>
          <span className="flex-1 overflow-hidden text-[13px] font-medium whitespace-nowrap">
            {item.label}
          </span>
          {badge(isActive)}
        </>
      )}
    </>
  );

  const tooltip =
    iconOnly && showTooltip ? (
      <div className="pointer-events-none absolute top-1/2 left-[calc(100%+8px)] z-50 -translate-y-1/2 rounded-md bg-[#333] px-2 py-1 text-[12px] whitespace-nowrap text-white">
        {item.label}
        {item.badge !== undefined && <span className="ml-1 opacity-70">({item.badge})</span>}
      </div>
    ) : null;

  if (item.to) {
    return (
      <NavLink
        to={item.to}
        end={item.end}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={onNavigate}
        className={({ isActive }) => `${navItemClassName(isActive, iconOnly)} cursor-pointer`}
      >
        {({ isActive }) => (
          <>
            {rowWithBadge(isActive)}
            {tooltip}
          </>
        )}
      </NavLink>
    );
  }

  return (
    <div
      role="presentation"
      className={`${navItemClassName(false, iconOnly)} cursor-default`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {rowWithBadge(false)}
      {tooltip}
    </div>
  );
}

// ── Shared sidebar content ──────────────────────────────────────────────────
function SidebarContent({
  iconOnly,
  onNavigate,
}: {
  iconOnly: boolean;
  onNavigate?: () => void;
}) {
  return (
    <>
      {/* Logo */}
      <div
        className={`flex items-center gap-3 px-4 py-5 border-b border-white/[0.08] min-h-[64px] ${
          iconOnly ? "justify-center" : "justify-start"
        }`}
      >
        <Link to='/' className="w-9 h-9  rounded-lg flex items-center justify-center flex-shrink-0" > <img src={logo} alt="" /> </Link>
        {!iconOnly && (
          <div className="overflow-hidden">
            <p className="text-[18px] font-semibold text-white">ARCHICOPRO</p>
            <p className="text-[13px] text-[#888]">EXTRANET</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-[10px] pt-5 overflow-y-auto">
        {!iconOnly && (
          <p className="text-[12px] text-[#888] px-[6px] mb-[6px]">PRINCIPAL</p>
        )}
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavItemRow
              key={item.label}
              item={item}
              iconOnly={iconOnly}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-[10px] py-3 border-t border-white/[0.08]">
        <div
          className={`flex items-center rounded-lg px-[10px] py-[10px] hover:bg-[#2a2a2a] ${
            iconOnly ? "justify-center" : "gap-[10px]"
          }`}
        >
          <div className="w-9 h-9 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white flex-shrink-0">
            ML
          </div>
          {!iconOnly && (
            <div className="overflow-hidden">
              <p className="text-[13px] text-[#e5e5e5] truncate">Lahoucine</p>
              <p className="text-[11px] text-[#888] truncate">Administrateur</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
// ── Main export ─────────────────────────────────────────────────────────────
interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex sm:hidden"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60" />
          <aside
            className="relative flex flex-col w-60 h-full bg-[#1a1a1a] border-r border-white/[0.08]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#888] hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <SidebarContent iconOnly={false} onNavigate={onClose} />
          </aside>
        </div>
      )}

      {/* ── Tablet: icons only (sm → lg) ── */}
      <aside className="hidden sm:flex lg:hidden flex-col bg-[#1a1a1a] border-r border-white/[0.08] flex-shrink-0 w-[60px] h-full sticky top-0">
        <SidebarContent iconOnly={true} />
      </aside>

      {/* ── Desktop: full (lg+) ── */}
      <aside className="hidden lg:flex flex-col bg-[#1a1a1a] border-r border-white/[0.08] flex-shrink-0 w-60 h-full sticky top-0">
        <SidebarContent iconOnly={false} />
      </aside>
    </>
  );
}