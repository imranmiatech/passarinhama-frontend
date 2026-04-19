import { Archive, CheckCircle2, Clock, File, Folder, Home } from "lucide-react";

import { Progress } from "@/components/ui/progress";

import { FolderTreeItem } from "./FolderTreeItem";
import { SidebarNavItem } from "./SidebarNavItem";

export default function DocumentsSidebar() {
  return (
    <aside
      className="flex h-full w-[260px] shrink-0 flex-col border-r border-[#E5E7EB] bg-white"
      aria-label="Arborescence des documents"
    >
      <div className="px-4 pt-5 pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9CA3AF]">
          Arborescence
        </p>
      </div>

      <div className="mx-3 mb-5 flex gap-0.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-0.5">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white py-2 text-xs font-medium text-[#374151] shadow-sm"
        >
          <Folder className="size-4 text-[#6B7280]" strokeWidth={2} />
          Dossier
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-xs font-medium text-[#6B7280] transition-colors hover:bg-white/80 hover:text-[#374151]"
        >
          <File className="size-4" strokeWidth={2} />
          Fichier
        </button>
      </div>

      <nav className="space-y-0.5 px-2 pb-4" aria-label="Vues rapides">
        <SidebarNavItem
          icon={<Home className="size-4 text-[#2563EB]" strokeWidth={2} />}
          label="Tous les documents"
          count={47}
          active
        />
        <SidebarNavItem
          icon={<Clock className="size-4 text-[#9CA3AF]" strokeWidth={2} />}
          label="Récents"
        />
        <SidebarNavItem
          icon={<CheckCircle2 className="size-4 text-[#F59E0B]" strokeWidth={2} />}
          label="À valider"
          count={5}
          countVariant="warning"
        />
        <SidebarNavItem
          icon={<Archive className="size-4 text-[#9CA3AF]" strokeWidth={2} />}
          label="Archives"
          count={12}
        />
      </nav>

      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
        <FolderTreeItem label="Gouvernance" count={8} defaultOpen>
          <FolderTreeItem label="Statuts & règlements" count={3} depth={1} />
          <FolderTreeItem label="Comptes-rendus AG" count={5} depth={1} />
        </FolderTreeItem>
        <FolderTreeItem label="Finances" count={11} />
        <FolderTreeItem label="Communication" count={9} />
        <FolderTreeItem label="Formations" count={8} />
        <FolderTreeItem label="RH / Bénévolat" count={13} />
      </div>

      <div className="mt-auto border-t border-[#E5E7EB] px-4 py-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-[#6B7280]">
          <span>Stockage utilisé</span>
          <span>1,2 Go / 5 Go</span>
        </div>
        <Progress value={24} className="h-1 bg-[#F3F4F6]" />
      </div>
    </aside>
  );
}
