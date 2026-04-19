import { cn } from "@/lib/utils";

import type { DocumentsMobilePanel } from "./documentsMobilePanel";

const TABS: { id: DocumentsMobilePanel; label: string }[] = [
  { id: "list", label: "Fichiers" },
  { id: "tree", label: "Arborescence" },
  { id: "detail", label: "Détails" },
];

type DocumentsMobilePanelTabsProps = {
  value: DocumentsMobilePanel;
  onChange: (panel: DocumentsMobilePanel) => void;
};

export function DocumentsMobilePanelTabs({ value, onChange }: DocumentsMobilePanelTabsProps) {
  return (
    <div
      className="sticky top-0 z-10 flex shrink-0 gap-1.5 border-b border-[#E5E7EB] bg-[#F4F5F7] p-2 lg:hidden"
      role="tablist"
      aria-label="Sections de la page Documents"
    >
      {TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={value === t.id}
          id={`documents-tab-${t.id}`}
          aria-controls={`documents-panel-${t.id}`}
          onClick={() => onChange(t.id)}
          className={cn(
            "min-h-11 flex-1 touch-manipulation rounded-lg px-1.5 text-center text-[12px] font-semibold leading-tight transition-colors sm:text-[13px]",
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
