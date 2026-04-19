import { ChevronDown, FileText, Grid, List } from "lucide-react";

export function DocumentsExplorerToolbar() {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="flex shrink-0 rounded-md border border-[#E5E7EB] bg-white p-0.5 shadow-sm">
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded bg-[#F3F4F6] text-[#374151] touch-manipulation"
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
        <button
          type="button"
          className="flex min-h-10 min-w-0 flex-1 items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-2 py-2 text-xs font-medium text-[#374151] shadow-sm sm:flex-initial sm:px-3 sm:py-1.5 sm:text-sm"
        >
          <FileText className="size-4 shrink-0 text-[#9CA3AF]" />
          <span className="truncate">Tous types</span>
          <ChevronDown className="size-4 shrink-0 text-[#9CA3AF]" />
        </button>
        <button
          type="button"
          className="flex min-h-10 min-w-0 flex-1 items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-2 py-2 text-xs font-medium text-[#374151] shadow-sm sm:flex-initial sm:px-3 sm:py-1.5 sm:text-sm"
        >
          <span className="truncate">Tous statuts</span>
          <ChevronDown className="size-4 shrink-0 text-[#9CA3AF]" />
        </button>
      </div>
      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:gap-3 md:justify-end">
        <button
          type="button"
          className="flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 py-2 text-xs text-[#6B7280] shadow-sm hover:text-[#111827] sm:flex-initial sm:py-1.5 sm:text-sm"
        >
          Date - récent
          <ChevronDown className="size-4 shrink-0 text-[#9CA3AF]" />
        </button>
        <span className="w-full text-center text-xs text-[#6B7280] sm:w-auto sm:text-left sm:text-sm">
          8 fichiers
        </span>
      </div>
    </div>
  );
}
