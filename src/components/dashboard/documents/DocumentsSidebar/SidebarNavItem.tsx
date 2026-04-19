import { cn } from "@/lib/utils";

type SidebarNavItemProps = {
  icon: React.ReactNode;
  label: string;
  count?: number;
  active?: boolean;
  countVariant?: "default" | "warning";
};

export function SidebarNavItem({
  icon,
  label,
  count,
  active,
  countVariant = "default",
}: SidebarNavItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between rounded-lg py-2.5 pl-3 pr-2 text-left text-[13px] transition-colors",
        active
          ? "border-l-[3px] border-l-[#DCEF3A] bg-[#FAFAFA] font-semibold text-[#111827] pl-[9px]"
          : "border-l-[3px] border-l-transparent text-[#374151] hover:bg-[#F9FAFB]"
      )}
    >
      <span className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </span>
      {count !== undefined ? (
        <span
          className={cn(
            "flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold tabular-nums",
            active && "bg-[#E5E7EB] text-[#374151]",
            !active && countVariant === "warning" && "bg-[#FFF7ED] text-[#EA580C]",
            !active && countVariant === "default" && "bg-[#F3F4F6] text-[#6B7280]"
          )}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}
