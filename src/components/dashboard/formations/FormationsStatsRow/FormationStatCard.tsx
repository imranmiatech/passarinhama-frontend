import { CheckCircle2, Circle, Eye, FolderOpen, Laptop } from "lucide-react";

import type { FormationStat } from "@/components/dashboard/formations/FormationsContent/formationsTypes";
import { cn } from "@/lib/utils";

const accentRing: Record<FormationStat["accent"], string> = {
  blue: "bg-blue-50 text-blue-600 ring-blue-100",
  green: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  orange: "bg-orange-50 text-orange-600 ring-orange-100",
  purple: "bg-violet-50 text-violet-600 ring-violet-100",
};

function StatIcon({ icon }: { icon: FormationStat["icon"] }) {
  const c = "size-5 shrink-0";
  switch (icon) {
    case "laptop":
      return <Laptop className={c} strokeWidth={2} />;
    case "check":
      return <CheckCircle2 className={c} strokeWidth={2} />;
    case "circle":
      return <Circle className={c} strokeWidth={2} />;
    case "folder":
      return <FolderOpen className={c} strokeWidth={2} />;
    case "eye":
      return <Eye className={c} strokeWidth={2} />;
    default:
      return null;
  }
}

type FormationStatCardProps = {
  stat: FormationStat;
};

export function FormationStatCard({ stat }: FormationStatCardProps) {
  return (
    <div className="flex w-full min-w-[140px] flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm sm:min-w-0">
      <div
        className={cn(
          "flex size-11 items-center justify-center rounded-xl ring-1 ring-inset",
          accentRing[stat.accent]
        )}
      >
        <StatIcon icon={stat.icon} />
      </div>
      <div>
        <p className="text-2xl font-bold tracking-tight text-[#111827] sm:text-[26px]">{stat.value}</p>
        <p className="mt-1 text-[13px] font-medium leading-snug text-[#6B7280]">{stat.label}</p>
      </div>
    </div>
  );
}
