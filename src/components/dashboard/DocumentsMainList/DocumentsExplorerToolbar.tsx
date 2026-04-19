import { ChevronDown, FileText, Grid, List } from "lucide-react";

export function DocumentsExplorerToolbar() {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-md border border-[#E5E7EB] bg-white p-0.5 shadow-sm">
          <button
            type="button"
            className="rounded bg-[#F3F4F6] p-1.5 text-[#374151]"
            aria-label="Vue liste"
          >
            <List className="size-4" />
          </button>
          <button
            type="button"
            className="p-1.5 text-[#9CA3AF] hover:text-[#6B7280]"
            aria-label="Vue grille"
          >
            <Grid className="size-4" />
          </button>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm font-medium text-[#374151] shadow-sm"
        >
          <FileText className="size-4 text-[#9CA3AF]" />
          Tous types
          <ChevronDown className="size-4 text-[#9CA3AF]" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm font-medium text-[#374151] shadow-sm"
        >
          Tous statuts
          <ChevronDown className="size-4 text-[#9CA3AF]" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm text-[#6B7280] shadow-sm hover:text-[#111827]"
        >
          Date - récent
          <ChevronDown className="size-4 text-[#9CA3AF]" />
        </button>
        <span className="text-sm text-[#6B7280]">8 fichiers</span>
      </div>
    </div>
  );
}
