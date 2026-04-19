import { cn } from "@/lib/utils";

import type { FormationsMobilePanel } from "./formationsTypes";

const TABS: { id: FormationsMobilePanel; label: string }[] = [
  { id: "list", label: "Formations" },
  { id: "categories", label: "Catégories" },
];

type FormationsMobilePanelTabsProps = {
  value: FormationsMobilePanel;
  onChange: (panel: FormationsMobilePanel) => void;
};

export function FormationsMobilePanelTabs({ value, onChange }: FormationsMobilePanelTabsProps) {
  return (
    <div
      className="sticky top-0 z-10 flex gap-1.5 border-b border-[#E5E7EB] bg-[#F4F5F7] p-2 lg:hidden"
      role="tablist"
      aria-label="Sections Formations"
    >
      {TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={value === t.id}
          id={`formations-tab-${t.id}`}
          aria-controls={`formations-panel-${t.id}`}
          onClick={() => onChange(t.id)}
          className={cn(
            "min-h-11 flex-1 touch-manipulation rounded-lg px-2 text-center text-[12px] font-semibold leading-tight sm:text-[13px]",
            value === t.id
              ? "bg-white text-[#111827] shadow-sm ring-1 ring-[#E5E7EB]"
              : "bg-white/50 text-[#6B7280] active:bg-white/90"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
