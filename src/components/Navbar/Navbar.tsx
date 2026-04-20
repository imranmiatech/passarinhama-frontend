// import { useLocation } from "react-router-dom";

// const ROUTE_TITLES: Record<string, string> = {
//   dashboard: "Tableau de bord",
//   documents: "Documents",
//   formations: "Formations",
//   f: "F",
// };

// function getPageTitle(pathname: string): string {
//   const segments = pathname.split("/").filter(Boolean);
//   const last = segments[segments.length - 1] ?? "dashboard";
//   if (ROUTE_TITLES[last]) return ROUTE_TITLES[last];
//   return last.charAt(0).toUpperCase() + last.slice(1).replace(/-/g, " ");
// }

// export const Navbar = () => {
//   const location = useLocation();
//   const title = getPageTitle(location.pathname);

//   return (
//     <header className="flex w-full min-w-0 shrink-0 items-center border-b border-[#E5E7EB] bg-white px-4 py-3 sm:px-6 sm:py-4">
//       <h1 className="min-w-0 truncate text-lg font-semibold tracking-tight text-[#111827] sm:text-[22px]">
//         {title}
//       </h1>
//     </header>
//   );
// };
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const ROUTE_TITLES: Record<string, string> = {
    dashboard: "Tableau de bord",
    documents: "Documents",
    formations: "Formations",
  };

  function getPageTitle(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean);
    const last = segments[segments.length - 1] ?? "dashboard";
    if (ROUTE_TITLES[last]) return ROUTE_TITLES[last];
    return last.charAt(0).toUpperCase() + last.slice(1).replace(/-/g, " ");
  }

  const title = getPageTitle(location.pathname);

  return (
    <>
      {/* NAVBAR */}
      <header className="flex items-center justify-between border-b bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          {/* ✅ Mobile menu */}
          <button
            onClick={() => setMobileOpen(true)}
            className="sm:hidden"
          >
            <Menu size={22} />
          </button>

          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
      </header>

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#1a1a1a] z-50 transform transition-transform duration-300 sm:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* menu items (reuse your navItems) */}
        <div className="p-4 flex flex-col gap-3">
          <a href="/dashboard" className="text-white">Tableau de bord</a>
          <a href="/dashboard/members" className="text-white">Membres</a>
          <a href="/dashboard/forum" className="text-white">Forums</a>
          <a href="/dashboard/event" className="text-white">Agenda</a>
          <a href="/dashboard/documents" className="text-white">Documents</a>
          <a href="/dashboard/formations" className="text-white">Formations</a>
          <a href="/dashboard/mode" className="text-white">Modération</a>
          <a href="/dashboard/profile" className="text-white">Paramètres</a>
        </div>
      </div>
    </>
  );
};