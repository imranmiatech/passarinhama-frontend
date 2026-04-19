import {
  BarChart3,
  Building2,
  Droplets,
  Flame,
  Home,
  TriangleAlert,
} from "lucide-react";

import type { FormationArticle, FormationLevel, FormationStatus } from "@/components/dashboard/formations/FormationsContent/formationsTypes";
import { cn } from "@/lib/utils";

function LeadIcon({ icon, className }: { icon: FormationArticle["icon"]; className: string }) {
  const c = cn("size-6 shrink-0", className);
  switch (icon) {
    case "warning":
      return <TriangleAlert className={c} strokeWidth={2} />;
    case "chart":
      return <BarChart3 className={c} strokeWidth={2} />;
    case "home":
      return <Home className={c} strokeWidth={2} />;
    case "droplets":
      return <Droplets className={c} strokeWidth={2} />;
    case "flame":
      return <Flame className={c} strokeWidth={2} />;
    case "building":
      return <Building2 className={c} strokeWidth={2} />;
    default:
      return null;
  }
}

const levelPill: Record<FormationLevel, string> = {
  Débutant: "bg-neutral-100 text-neutral-800",
  Intermédiaire: "bg-[#1F2937] text-white",
  Avancé: "bg-[#1F2937] text-white",
  Expert: "bg-[#B91C1C] text-white",
};

function StatusChip({ status }: { status: FormationStatus }) {
  if (status === "published") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-[#15803D] ring-1 ring-[#E5E7EB]">
        <span className="size-1.5 shrink-0 rounded-full bg-[#22C55E]" />
        Publié
      </span>
    );
  }
  if (status === "draft") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-[#C2410C] ring-1 ring-[#E5E7EB]">
        <span className="size-1.5 shrink-0 rounded-full bg-[#F97316]" />
        Brouillon
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-[#6B7280] ring-1 ring-[#E5E7EB]">
      <span className="size-1.5 shrink-0 rounded-full bg-[#D1D5DB]" />
      Archivé
    </span>
  );
}

type FormationCardProps = {
  article: FormationArticle;
};

export function FormationCard({ article }: FormationCardProps) {
  return (
    <article className="flex gap-3 rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
      <div
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-xl sm:size-14",
          article.iconWrapClass
        )}
      >
        <LeadIcon icon={article.icon} className={article.iconClass} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-[#374151] ring-1 ring-[#E5E7EB]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#DCEF3A]" aria-hidden />
            {article.categoryName}
          </span>
          <StatusChip status={article.status} />
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-semibold",
              levelPill[article.level]
            )}
          >
            {article.level}
          </span>
        </div>
        <h3 className="mt-2 text-[15px] font-bold leading-snug text-[#111827] sm:text-base">{article.title}</h3>
      </div>
    </article>
  );
}
