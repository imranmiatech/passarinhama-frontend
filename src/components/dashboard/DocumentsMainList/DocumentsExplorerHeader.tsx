import { ChevronRight, Download, FolderPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DocumentsExplorerHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-[#E5E7EB] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <nav className="flex items-center text-[13px]" aria-label="Fil d'Ariane">
        <span className="font-medium text-[#6B7280]">Documents</span>
        <ChevronRight className="mx-1 size-4 shrink-0 text-[#D1D5DB]" aria-hidden />
        <span className="font-semibold text-[#111827]">Gouvernance</span>
      </nav>

      <div className="flex flex-wrap items-center gap-3">
        <div className="hidden items-center gap-4 text-[11px] font-medium sm:flex">
          <span className="flex items-center gap-1.5 text-[#16A34A]">
            <span className="size-1.5 rounded-full bg-[#22C55E]" />
            Public
          </span>
          <span className="flex items-center gap-1.5 text-[#2563EB]">
            <span className="size-1.5 rounded-full bg-[#3B82F6]" />
            Bureau
          </span>
          <span className="flex items-center gap-1.5 text-[#EA580C]">
            <span className="size-1.5 rounded-full bg-[#F97316]" />
            Admin
          </span>
          <span className="flex items-center gap-1.5 text-[#DC2626]">
            <span className="size-1.5 rounded-full bg-[#EF4444]" />
            Privé
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <Button
            type="button"
            variant="outline"
            className="h-10 gap-2 border-[#E5E7EB] bg-white px-4 text-[13px] font-medium text-[#111827] shadow-sm"
          >
            <FolderPlus className="size-4" />
            Nouveau dossier
          </Button>
          <Button
            type="button"
            className="h-10 gap-2 border-0 bg-[#E2F33C] px-4 text-[13px] font-semibold text-[#111827] shadow-sm hover:bg-[#D4E82E]"
          >
            <Download className="size-4" />
            Importer
          </Button>
        </div>
      </div>
    </header>
  );
}
