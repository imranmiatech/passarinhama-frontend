import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FolderOpen } from "lucide-react";

import { cn } from "@/lib/utils";

type FolderTreeItemProps = {
  label: string;
  count: number;
  defaultOpen?: boolean;
  depth?: number;
  children?: React.ReactNode;
};

export function FolderTreeItem({
  label,
  count,
  defaultOpen = false,
  depth = 0,
  children,
}: FolderTreeItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = Boolean(children);

  return (
    <div className={cn("mb-0.5", depth > 0 && "ml-1")}>
      <button
        type="button"
        onClick={() => hasChildren && setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-[13px] transition-colors",
          open && hasChildren
            ? "bg-[#EFF6FF] font-semibold text-[#1D4ED8]"
            : "text-[#374151] hover:bg-[#F9FAFB]"
        )}
      >
        <span className="flex min-w-0 items-center gap-2">
          {hasChildren ? (
            open ? (
              <ChevronDown className="size-3.5 shrink-0 text-[#9CA3AF]" />
            ) : (
              <ChevronRight className="size-3.5 shrink-0 text-[#9CA3AF]" />
            )
          ) : (
            <span className="w-3.5 shrink-0" aria-hidden />
          )}
          {open && hasChildren ? (
            <FolderOpen className="size-4 shrink-0 text-[#2563EB]" strokeWidth={2} />
          ) : (
            <Folder className="size-4 shrink-0 text-[#F59E0B]" strokeWidth={2} />
          )}
          <span className="truncate">{label}</span>
        </span>
        <span
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold tabular-nums",
            open && hasChildren ? "bg-[#DBEAFE] text-[#1D40AF]" : "bg-[#F3F4F6] text-[#6B7280]"
          )}
        >
          {count}
        </span>
      </button>
      {open && children ? (
        <div className="relative ml-4 mt-1 space-y-0.5 border-l border-[#E5E7EB] pl-3">{children}</div>
      ) : null}
    </div>
  );
}
