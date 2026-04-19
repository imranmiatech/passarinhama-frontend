import { Download, Edit2, Move, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import type { FileRowData } from "./documentsTableTypes";

type DocumentsFileRowProps = {
  row: FileRowData;
};

export function DocumentsFileRow({ row }: DocumentsFileRowProps) {
  return (
    <tr
      className={cn(
        "group border-b border-[#E5E7EB] transition-colors last:border-b-0",
        row.selected && "bg-[#EFF6FF]",
        row.dim && "opacity-60"
      )}
    >
      <td
        className={cn(
          "relative px-4 py-3 align-middle",
          row.selected && "shadow-[inset_3px_0_0_0_#2563EB]"
        )}
      >
        <Checkbox checked={!!row.selected} className="border-[#D1D5DB]" aria-label={row.name} />
      </td>
      <td className="px-2 py-3 align-middle">
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded border text-[10px] font-bold",
            row.iconClassName
          )}
        >
          {row.icon}
        </div>
      </td>
      <td className="px-4 py-3 align-middle">
        <div className="text-[13px] font-semibold leading-tight text-[#111827]">{row.name}</div>
        <div className="mt-1 flex flex-wrap gap-1">
          {row.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="h-5 rounded px-1.5 text-[10px] font-medium text-[#6B7280] hover:bg-[#E5E7EB]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </td>
      <td className="px-4 py-3 align-middle text-xs font-medium text-[#9CA3AF]">{row.type}</td>
      <td className="px-4 py-3 align-middle text-[13px] font-medium text-[#6B7280]">{row.size}</td>
      <td className="px-4 py-3 align-middle">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
              row.author.color
            )}
          >
            {row.author.initial}
          </div>
          <span className="hidden max-w-[7rem] truncate font-medium text-[#374151] md:inline">
            {row.author.name}
          </span>
        </div>
      </td>
      <td className="px-4 py-3 align-middle text-[13px] font-medium text-[#6B7280]">{row.date}</td>
      <td className={cn("px-4 py-3 align-middle text-[13px] font-semibold", row.accessClassName)}>
        {row.access}
      </td>
      <td className="px-4 py-3 align-middle">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
            row.statusClassName
          )}
        >
          <span className={cn("size-1.5 shrink-0 rounded-full", row.statusDotClassName)} />
          {row.status}
        </span>
      </td>
      <td className="px-4 py-3 align-middle">
        <span className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-1.5 py-0.5 text-[10px] font-bold text-[#6B7280] shadow-sm">
          {row.version}
        </span>
      </td>
      <td className="px-4 py-3 text-right align-middle">
        {row.showActions ? (
          <div className="inline-flex items-center gap-1 opacity-100 lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100">
            <button
              type="button"
              className="rounded-md border border-[#E5E7EB] bg-white p-1.5 text-[#9CA3AF] shadow-sm hover:bg-[#F9FAFB] hover:text-[#374151]"
              aria-label="Télécharger"
            >
              <Download className="size-3.5" />
            </button>
            <button
              type="button"
              className="rounded-md border border-[#E5E7EB] bg-white p-1.5 text-[#9CA3AF] shadow-sm hover:bg-[#F9FAFB] hover:text-[#374151]"
              aria-label="Modifier"
            >
              <Edit2 className="size-3.5" />
            </button>
            <button
              type="button"
              className="rounded-md border border-[#E5E7EB] bg-white p-1.5 text-[#9CA3AF] shadow-sm hover:bg-[#F9FAFB] hover:text-[#374151]"
              aria-label="Déplacer"
            >
              <Move className="size-3.5" />
            </button>
            <button
              type="button"
              className="rounded-md border border-[#E5E7EB] bg-white p-1.5 text-[#9CA3AF] shadow-sm hover:bg-red-50 hover:text-red-600"
              aria-label="Supprimer"
            >
              <Trash2 className="size-3.5" />
            </button>
          </div>
        ) : null}
      </td>
    </tr>
  );
}
