import { ChevronDown, Grid, List } from "lucide-react";

import type {
  FormationArticle,
  FormationListTab,
} from "@/components/dashboard/formations/FormationsContent/formationsTypes";
import { cn } from "@/lib/utils";

import { FormationCard } from "./FormationCard";

const TABS: { id: FormationListTab; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "published", label: "Publiés" },
  { id: "draft", label: "Brouillons" },
  { id: "archived", label: "Archivés" },
];

type FormationsMainPanelProps = {
  articles: FormationArticle[];
  listTab: FormationListTab;
  onListTabChange: (tab: FormationListTab) => void;
};

export function FormationsMainPanel({
  articles,
  listTab,
  onListTabChange,
}: FormationsMainPanelProps) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[#F4F5F7]">
      <header className="flex flex-col gap-3 border-b border-[#E5E7EB] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <h2 className="text-[17px] font-bold text-[#111827] sm:text-lg">
            Toutes les formations
          </h2>
          <p className="mt-0.5 text-[13px] text-[#6B7280]">
            {articles.length} articles
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
          <div className="flex rounded-lg border border-[#E5E7EB] bg-white p-0.5 shadow-sm">
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-md bg-[#F3F4F6] text-[#111827] touch-manipulation"
              aria-label="Vue liste"
            >
              <List className="size-4" />
            </button>
            <button
              type="button"
              className="flex size-10 items-center justify-center text-[#9CA3AF] touch-manipulation hover:text-[#6B7280]"
              aria-label="Vue grille"
            >
              <Grid className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="border-b border-[#E5E7EB] bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => onListTabChange(t.id)}
                className={cn(
                  "min-h-9 shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-colors touch-manipulation sm:text-[13px]",
                  listTab === t.id
                    ? "bg-[#111827] text-white"
                    : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB] hover:text-[#374151]",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex min-h-9 items-center gap-1.5 self-start rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#374151] shadow-sm touch-manipulation sm:self-auto sm:text-[13px]"
          >
            Plus récents
            <ChevronDown className="size-4 shrink-0 text-[#9CA3AF]" />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="mx-auto flex w-full flex-col gap-3 sm:gap-4">
          {articles.length === 0 ? (
            <p className="rounded-xl border border-dashed border-[#E5E7EB] bg-white py-12 text-center text-sm text-[#6B7280]">
              Aucun article pour ces filtres.
            </p>
          ) : (
            articles.map((a) => <FormationCard key={a.id} article={a} />)
          )}
        </div>
      </div>
    </div>
  );
}
