import { useLocation } from "react-router-dom";

const ROUTE_TITLES: Record<string, string> = {
  dashboard: "Tableau de bord",
  documents: "Documents",
  f: "F",
};

function getPageTitle(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const last = segments[segments.length - 1] ?? "dashboard";
  if (ROUTE_TITLES[last]) return ROUTE_TITLES[last];
  return last.charAt(0).toUpperCase() + last.slice(1).replace(/-/g, " ");
}

export const Navbar = () => {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return (
    <header className="flex w-full shrink-0 items-center border-b border-[#E5E7EB] bg-white px-6 py-4">
      <h1 className="text-[22px] font-semibold tracking-tight text-[#111827]">{title}</h1>
    </header>
  );
};
