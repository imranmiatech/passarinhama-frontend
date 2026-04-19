import { useMemo, useState } from "react";

import { FormationsCategoriesSidebar } from "@/components/dashboard/formations/FormationsCategoriesSidebar/FormationsCategoriesSidebar";
import { FormationsMainPanel } from "@/components/dashboard/formations/FormationsMainPanel/FormationsMainPanel";
import { FormationsStatsRow } from "@/components/dashboard/formations/FormationsStatsRow/FormationsStatsRow";
import { cn } from "@/lib/utils";

import { FORMATION_ARTICLES } from "./formationsMockData";
import type { FormationListTab, FormationStatus, FormationsMobilePanel } from "./formationsTypes";
import { FormationsMobilePanelTabs } from "./FormationsMobilePanelTabs";

function matchesListTab(status: FormationStatus, tab: FormationListTab) {
  if (tab === "all") return true;
  if (tab === "published") return status === "published";
  if (tab === "draft") return status === "draft";
  return status === "archived";
}

export function FormationsContent() {
  const [mobilePanel, setMobilePanel] = useState<FormationsMobilePanel>("list");
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [listTab, setListTab] = useState<FormationListTab>("all");

  const filteredArticles = useMemo(() => {
    return FORMATION_ARTICLES.filter((a) => {
      if (categoryId !== null && a.categoryId !== categoryId) return false;
      return matchesListTab(a.status, listTab);
    });
  }, [categoryId, listTab]);

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[#F4F5F7]">
      <div className="shrink-0 border-b border-[#E5E7EB] bg-[#F4F5F7] px-4 py-4 sm:px-6">
        <FormationsStatsRow />
      </div>

      <FormationsMobilePanelTabs value={mobilePanel} onChange={setMobilePanel} />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
        <section
          id="formations-panel-categories"
          role="tabpanel"
          aria-labelledby="formations-tab-categories"
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:w-[260px] lg:max-w-[260px] lg:flex-none lg:shrink-0",
            mobilePanel !== "categories" && "hidden lg:flex"
          )}
        >
          <FormationsCategoriesSidebar selectedId={categoryId} onSelect={setCategoryId} />
        </section>

        <section
          id="formations-panel-list"
          role="tabpanel"
          aria-labelledby="formations-tab-list"
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:min-w-0 lg:flex-1",
            mobilePanel !== "list" && "hidden lg:flex"
          )}
        >
          <FormationsMainPanel articles={filteredArticles} listTab={listTab} onListTabChange={setListTab} />
        </section>
      </div>
    </div>
  );
}
