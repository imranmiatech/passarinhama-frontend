import { useState, useMemo } from "react";
 
// ── Types ──────────────────────────────────────────────────────────────────
type Status = "Actif 2025" | "Actif 2024" | "En attente 2025" | "Suspendu" | "Archivé";
type Role = "Administrateur" | "Bureau" | "Membre" | "Technicopro" | "Modérateur";
type Category = "Copropriétaire" | "Syndic" | "Architecte" | "Juriste";
 
interface Member {
  id: number;
  initials: string;
  color: string;
  name: string;
  email: string;
  role: Role;
  category: Category;
  status: Status;
  inscription: string;
  lastAccess: string;
  lastAccessDot: "green" | "amber" | "gray";
}
 
// ── Data ───────────────────────────────────────────────────────────────────
const MEMBERS: Member[] = [
  { id: 1, initials: "ML", color: "#6366f1", name: "Marie Lefebvre", email: "m.lefebvre@archi-copro.fr", role: "Administrateur", category: "Copropriétaire", status: "Actif 2025", inscription: "12 jan. 2023", lastAccess: "Aujourd'hui", lastAccessDot: "green" },
  { id: 2, initials: "TR", color: "#f59e0b", name: "Thomas Renard", email: "t.renard@exemple.fr", role: "Bureau", category: "Syndic", status: "Actif 2025", inscription: "8 avr. 2022", lastAccess: "Hier", lastAccessDot: "amber" },
  { id: 3, initials: "SM", color: "#10b981", name: "Sophie Martin", email: "s.martin@exemple.fr", role: "Membre", category: "Copropriétaire", status: "Actif 2025", inscription: "3 sep. 2021", lastAccess: "Il y a 3 j", lastAccessDot: "gray" },
  { id: 4, initials: "JM", color: "#3b82f6", name: "Julien Moreau", email: "j.moreau@exemple.fr", role: "Technicopro", category: "Architecte", status: "Actif 2024", inscription: "19 nov. 2020", lastAccess: "Il y a 1 sem", lastAccessDot: "gray" },
  { id: 5, initials: "CD", color: "#8b5cf6", name: "Claire Dupont", email: "c.dupont@exemple.fr", role: "Modérateur", category: "Juriste", status: "Actif 2025", inscription: "25 fév. 2023", lastAccess: "Il y a 2 h", lastAccessDot: "green" },
  { id: 6, initials: "AG", color: "#6b7280", name: "Antoine Girard", email: "a.girard@exemple.fr", role: "Membre", category: "Copropriétaire", status: "En attente 2025", inscription: "1 avr. 2025", lastAccess: "Jamais", lastAccessDot: "gray" },
  { id: 7, initials: "LB", color: "#6366f1", name: "Lucie Bernard", email: "l.bernard@exemple.fr", role: "Membre", category: "Syndic", status: "Actif 2025", inscription: "14 jan. 2024", lastAccess: "Il y a 4 j", lastAccessDot: "gray" },
  { id: 8, initials: "MP", color: "#ec4899", name: "Marc Petit", email: "m.petit@exemple.fr", role: "Technicopro", category: "Architecte", status: "Suspendu", inscription: "22 juin 2021", lastAccess: "Il y a 2 mois", lastAccessDot: "gray" },
  { id: 9, initials: "IR", color: "#14b8a6", name: "Isabelle Roux", email: "i.roux@exemple.fr", role: "Bureau", category: "Juriste", status: "Actif 2025", inscription: "7 mar. 2022", lastAccess: "Hier", lastAccessDot: "amber" },
  { id: 10, initials: "NS", color: "#22c55e", name: "Nicolas Simon", email: "n.simon@exemple.fr", role: "Membre", category: "Copropriétaire", status: "En attente 2025", inscription: "29 mar. 2025", lastAccess: "Jamais", lastAccessDot: "gray" },
  { id: 11, initials: "EF", color: "#f97316", name: "Élise Fontaine", email: "e.fontaine@exemple.fr", role: "Membre", category: "Syndic", status: "Actif 2024", inscription: "5 oct. 2019", lastAccess: "Il y a 5 j", lastAccessDot: "gray" },
  { id: 12, initials: "PL", color: "#a855f7", name: "Paul Laurent", email: "p.laurent@exemple.fr", role: "Technicopro", category: "Architecte", status: "Actif 2025", inscription: "18 avr. 2023", lastAccess: "Il y a 6 h", lastAccessDot: "green" },
];
 
// ── Badge helpers ──────────────────────────────────────────────────────────
const ROLE_STYLES: Record<Role, string> = {
  Administrateur: "bg-gray-900 text-white",
  Bureau: "bg-blue-100 text-blue-700 border border-blue-200",
  Membre: "bg-green-100 text-green-700 border border-green-200",
  Technicopro: "bg-orange-100 text-orange-700 border border-orange-200",
  Modérateur: "bg-purple-100 text-purple-700 border border-purple-200",
};
 
const STATUS_STYLES: Record<Status, { dot: string; text: string; label: string }> = {
  "Actif 2025": { dot: "bg-green-500", text: "text-green-700", label: "Actif 2025" },
  "Actif 2024": { dot: "bg-green-400", text: "text-green-600", label: "Actif 2024" },
  "En attente 2025": { dot: "bg-amber-400", text: "text-amber-600", label: "En attente 2025" },
  Suspendu: { dot: "bg-red-500", text: "text-red-600", label: "Suspendu" },
  Archivé: { dot: "bg-gray-400", text: "text-gray-500", label: "Archivé" },
};
 
const DOT_COLORS = { green: "bg-green-500", amber: "bg-amber-400", gray: "bg-gray-300" };
 
// ── Subcomponents ──────────────────────────────────────────────────────────
function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
 
function RoleBadge({ role }: { role: Role }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium ${ROLE_STYLES[role]}`}>
      {role}
    </span>
  );
}
 
function StatusBadge({ status }: { status: Status }) {
  const s = STATUS_STYLES[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
 
function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        active
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
      }`}
    >
      {label}
      {count !== undefined && (
        <span className={`text-xs ${active ? "text-gray-300" : "text-gray-400"}`}>{count}</span>
      )}
    </button>
  );
}
 
// ── Main Component ─────────────────────────────────────────────────────────
export default function MembersPage() {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [statusFilter, setStatusFilter] = useState<string>("Tous");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("Tous les rôles");
  const [yearFilter, setYearFilter] = useState("Toutes les années");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;
 
  const statusCounts = useMemo(() => ({
    Tous: MEMBERS.length,
    Actifs: MEMBERS.filter((m) => m.status.startsWith("Actif")).length,
    "En attente": MEMBERS.filter((m) => m.status.startsWith("En attente")).length,
    Suspendus: MEMBERS.filter((m) => m.status === "Suspendu").length,
    Archivés: 28,
  }), []);
 
  const filtered = useMemo(() => {
    return MEMBERS.filter((m) => {
      const matchStatus =
        statusFilter === "Tous" ||
        (statusFilter === "Actifs" && m.status.startsWith("Actif")) ||
        (statusFilter === "En attente" && m.status.startsWith("En attente")) ||
        (statusFilter === "Suspendus" && m.status === "Suspendu") ||
        (statusFilter === "Archivés" && m.status === "Archivé");
      const matchCat = !categoryFilter || m.category === categoryFilter;
      const matchSearch =
        !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === "Tous les rôles" || m.role === roleFilter;
      return matchStatus && matchCat && matchSearch && matchRole;
    });
  }, [statusFilter, categoryFilter, search, roleFilter]);
 
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageData = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
 
  const allSelected = pageData.length > 0 && pageData.every((m) => selected.has(m.id));
  const someSelected = pageData.some((m) => selected.has(m.id));
 
  function toggleAll() {
    if (allSelected) {
      const next = new Set(selected);
      pageData.forEach((m) => next.delete(m.id));
      setSelected(next);
    } else {
      const next = new Set(selected);
      pageData.forEach((m) => next.add(m.id));
      setSelected(next);
    }
  }
 
  function toggleOne(id: number) {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  }
 
  function clearSelected() {
    setSelected(new Set());
  }
 
  const selectedCount = selected.size;
 
  return (
    <div className="min-h-screen p-5 lg:p-10 bg-gray-50 font-sans">
      {/* ── Top bar ── */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3">
        {/* Search + filters row */}
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Nom, email, ville..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50"
            />
          </div>
 
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            {/* Role filter */}
            <select
              value={roleFilter}
              onChange={(e) => { setRoleFilter(e.target.value); setPage(1); }}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option>Tous les rôles</option>
              {(["Administrateur","Bureau","Membre","Technicopro","Modérateur"] as Role[]).map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
 
            {/* Year filter */}
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option>Toutes les années</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
 
            {/* View toggle desktop */}
            <div className="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("list")}
                className={`px-2.5 py-2 ${viewMode === "list" ? "bg-gray-900 text-white" : "bg-white text-gray-500 hover:bg-gray-50"}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-2.5 py-2 ${viewMode === "grid" ? "bg-gray-900 text-white" : "bg-white text-gray-500 hover:bg-gray-50"}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth={2} />
                  <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth={2} />
                  <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth={2} />
                  <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth={2} />
                </svg>
              </button>
            </div>
          </div>
        </div>
 
        {/* Status + category filters */}
        <div className="flex flex-wrap gap-2 mt-3 items-center">
          <span className="text-sm text-gray-500 mr-1">Statut :</span>
          {(["Tous", "Actifs", "En attente", "Suspendus", "Archivés"] as const).map((s) => (
            <FilterChip
              key={s}
              label={s}
              count={statusCounts[s]}
              active={statusFilter === s}
              onClick={() => { setStatusFilter(s); setPage(1); }}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2 mr-1">Catégorie :</span>
          {(["Technicopro", "Copropriétaire", "Syndic"] as const).map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={categoryFilter === c}
              onClick={() => { setCategoryFilter(categoryFilter === c ? "" : c); setPage(1); }}
            />
          ))}
        </div>
      </div>
 
      {/* ── Bulk action bar ── */}
      {selectedCount > 0 && (
        <div className="bg-gray-900 text-white px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {selectedCount} membre{selectedCount > 1 ? "s" : ""} sélectionné{selectedCount > 1 ? "s" : ""}
          </div>
          <div className="flex flex-wrap gap-2 sm:ml-auto">
            {[
              { icon: "✉", label: "Inviter" },
              { icon: "◎", label: "Attribuer un rôle" },
              { icon: "↓", label: "Exporter" },
              { icon: "⊘", label: "Suspendre", danger: true },
            ].map(({ icon, label, danger }) => (
              <button
                key={label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border transition-colors ${
                  danger
                    ? "border-red-400 text-red-300 hover:bg-red-900"
                    : "border-gray-600 text-gray-200 hover:bg-gray-800"
                }`}
              >
                <span>{icon}</span> {label}
              </button>
            ))}
            <button
              onClick={clearSelected}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
            >
              ✕ Désélectionner
            </button>
          </div>
        </div>
      )}
 
      {/* ── Content ── */}
      <div className="px-4 sm:px-6 py-4">
        {/* Grid view (mobile default / optional desktop) */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageData.map((m) => (
              <div
                key={m.id}
                onClick={() => toggleOne(m.id)}
                className={`bg-white rounded-xl border p-4 cursor-pointer transition-all ${
                  selected.has(m.id) ? "border-gray-900 ring-1 ring-gray-900" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar initials={m.initials} color={m.color} />
                    {selected.has(m.id) && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">{m.name}</p>
                    <p className="text-xs text-gray-500 truncate">{m.email}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <RoleBadge role={m.role} />
                  <span className="inline-block px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">{m.category}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <StatusBadge status={m.status} />
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[m.lastAccessDot]}`} />
                    {m.lastAccess}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── Table view ── */
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="w-10 px-4 py-3">
                      <input
                        type="checkbox"
                        checked={allSelected}
                        ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }}
                        onChange={toggleAll}
                        className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                      />
                    </th>
                    {["Membre", "Rôle", "Catégorie", "Statut adhésion", "Inscription", "Dernier accès", "Actions"].map((h) => (
                      <th key={h} className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                        {h !== "Actions" ? (
                          <span className="inline-flex items-center gap-1">
                            {h}
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                          </span>
                        ) : h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {pageData.map((m) => (
                    <tr
                      key={m.id}
                      className={`transition-colors ${selected.has(m.id) ? "bg-blue-50" : "hover:bg-gray-50"}`}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selected.has(m.id)}
                          onChange={() => toggleOne(m.id)}
                          className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                        />
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar initials={m.initials} color={m.color} />
                          <div>
                            <p className="font-medium text-gray-900 whitespace-nowrap">{m.name}</p>
                            <p className="text-xs text-gray-400">{m.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3"><RoleBadge role={m.role} /></td>
                      <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{m.category}</td>
                      <td className="px-3 py-3"><StatusBadge status={m.status} /></td>
                      <td className="px-3 py-3 text-gray-500 whitespace-nowrap">{m.inscription}</td>
                      <td className="px-3 py-3">
                        <span className="flex items-center gap-1.5 text-gray-500 whitespace-nowrap">
                          <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[m.lastAccessDot]}`} />
                          {m.lastAccess}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
 
            {/* Mobile list (card-style rows) */}
            <div className="md:hidden divide-y divide-gray-100">
              {/* Mobile select all */}
              <div className="px-4 py-3 flex items-center gap-3 bg-gray-50">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900"
                />
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Tout sélectionner</span>
              </div>
              {pageData.map((m) => (
                <div
                  key={m.id}
                  className={`px-4 py-3 flex items-start gap-3 transition-colors ${selected.has(m.id) ? "bg-blue-50" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(m.id)}
                    onChange={() => toggleOne(m.id)}
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-gray-900"
                  />
                  <Avatar initials={m.initials} color={m.color} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{m.name}</p>
                        <p className="text-xs text-gray-400 truncate">{m.email}</p>
                      </div>
                      <button className="shrink-0 p-1 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                      <RoleBadge role={m.role} />
                      <span className="text-xs text-gray-500">{m.category}</span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-3">
                      <StatusBadge status={m.status} />
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[m.lastAccessDot]}`} />
                        {m.lastAccess}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
            {/* Pagination */}
            <div className="border-t border-gray-100 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-500 order-2 sm:order-1">
                Affichage de {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} sur {filtered.length} membres
              </p>
              <div className="flex items-center gap-1 order-1 sm:order-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 disabled:opacity-30 hover:bg-gray-50 transition-colors"
                >
                  ‹
                </button>
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                      page === p
                        ? "bg-gray-900 text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                {totalPages > 5 && <span className="text-gray-400 text-sm px-1">…</span>}
                {totalPages > 5 && (
                  <button
                    onClick={() => setPage(totalPages)}
                    className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    {totalPages}
                  </button>
                )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 disabled:opacity-30 hover:bg-gray-50 transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}