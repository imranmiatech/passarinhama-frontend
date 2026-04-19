import { Plus, Search } from "lucide-react";
import { useState } from "react";

import { FORMATION_ARTICLES, FORMATION_CATEGORIES } from "@/components/dashboard/formations/FormationsContent/formationsMockData";
import type { FormationCategory } from "@/components/dashboard/formations/FormationsContent/formationsTypes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormationsCategoriesSidebarProps = {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
};

function CategoryRow({
  cat,
  active,
  onClick,
}: {
  cat: FormationCategory;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors touch-manipulation",
        active ? "bg-[#F3F4F6] text-[#111827]" : "text-[#374151] hover:bg-[#F9FAFB]"
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <span className="size-2 shrink-0 rounded-full bg-[#E2F33C]" aria-hidden />
        <span className="truncate">{cat.name}</span>
      </span>
      <span className="shrink-0 tabular-nums text-[12px] text-[#9CA3AF]">{cat.count}</span>
    </button>
  );
}

export function FormationsCategoriesSidebar({ selectedId, onSelect }: FormationsCategoriesSidebarProps) {
  const [q, setQ] = useState("");
  const filtered = FORMATION_CATEGORIES.filter((c) => c.name.toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <aside className="flex h-full min-h-0 w-full flex-col border-[#E5E7EB] bg-white lg:w-[260px] lg:shrink-0 lg:border-r">
      <div className="border-b border-[#E5E7EB] px-4 py-4">
        <h2 className="text-[15px] font-bold text-[#111827]">Catégories</h2>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filtrer..."
            className="h-10 border-[#E5E7EB] bg-[#FAFAFA] pl-9 text-[13px] placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>

      <nav className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2 py-3" aria-label="Catégories">
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={cn(
            "flex w-full min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-colors touch-manipulation",
            selectedId === null ? "bg-[#F3F4F6] text-[#111827]" : "text-[#374151] hover:bg-[#F9FAFB]"
          )}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="size-2 shrink-0 rounded-full bg-[#9CA3AF]" aria-hidden />
            <span className="truncate">Toutes</span>
          </span>
          <span className="shrink-0 tabular-nums text-[12px] text-[#9CA3AF]">{FORMATION_ARTICLES.length}</span>
        </button>
        {filtered.map((cat) => (
          <CategoryRow key={cat.id} cat={cat} active={selectedId === cat.id} onClick={() => onSelect(cat.id)} />
        ))}
      </nav>

      <div className="border-t border-[#E5E7EB] p-3">
        <Button
          type="button"
          variant="ghost"
          className="h-11 w-full justify-center gap-2 text-[13px] font-semibold text-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#1D4ED8]"
        >
          <Plus className="size-4" />
          Nouvelle catégorie
        </Button>
      </div>
    </aside>
  );
}
