import { FORMATION_STATS } from "@/components/dashboard/formations/FormationsContent/formationsMockData";

import { FormationStatCard } from "./FormationStatCard";

export function FormationsStatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 touch-pan-x gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
      {FORMATION_STATS.map((stat) => (
        <FormationStatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
