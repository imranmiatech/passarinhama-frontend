import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-4 text-[10px] font-bold tracking-[0.12em] text-[#9CA3AF] uppercase">
        {title}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-2">
      <div className="text-sm font-medium text-[#6B7280]">{label}</div>
      <div className="text-sm font-medium text-[#111827] sm:col-span-2">{value}</div>
    </div>
  );
}

export function DocumentDetailInfoSections() {
  return (
    <div className="space-y-8 p-4 sm:p-6">
      <DetailSection title="Fichier">
        <DetailRow label="Nom" value="Rapport moral 2024.pdf" />
        <DetailRow label="Type" value="Document PDF" />
        <DetailRow label="Taille" value="1 235 Ko (1,2 Mo)" />
        <DetailRow
          label="Version"
          value={
            <span className="flex items-center gap-2">
              <span className="rounded border border-[#E5E7EB] bg-white px-1.5 py-0.5 text-xs font-bold">
                v3
              </span>
              <span className="text-xs text-[#9CA3AF]">(dernière)</span>
            </span>
          }
        />
      </DetailSection>

      <Separator className="bg-[#E5E7EB]" />

      <DetailSection title="Localisation">
        <DetailRow label="Dossier" value="Documents / Gouvernance" />
        <DetailRow
          label="Chemin"
          value={
            <span className="rounded border border-[#E5E7EB] bg-[#F9FAFB] p-1 font-mono text-xs">
              /gouvernance/rapport-moral-2024.pdf
            </span>
          }
        />
      </DetailSection>

      <Separator className="bg-[#E5E7EB]" />

      <DetailSection title="Auteur & dates">
        <DetailRow
          label="Auteur"
          value={
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#9333EA] text-[9px] font-bold text-white">
                ML
              </span>
              <span>Marie Lefebvre</span>
            </div>
          }
        />
        <DetailRow label="Créé le" value="8 avr. 2025 à 08h14" />
        <DetailRow label="Modifié le" value="12 avr. 2025 à 16h32" />
        <DetailRow
          label="Validé le"
          value={<span className="font-medium text-[#16A34A]">13 avr. 2025</span>}
        />
        <DetailRow
          label="Validé par"
          value={
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#EC4899] text-[9px] font-bold text-white">
                TD
              </span>
              <span>Thomas Durand</span>
            </div>
          }
        />
      </DetailSection>

      <Separator className="bg-[#E5E7EB]" />

      <DetailSection title="Tags">
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="secondary" className="font-medium text-[#4B5563] hover:bg-[#E5E7EB]">
            AG 2024
          </Badge>
          <Badge variant="secondary" className="font-medium text-[#4B5563] hover:bg-[#E5E7EB]">
            Officiel
          </Badge>
          <Badge variant="secondary" className="font-medium text-[#4B5563] hover:bg-[#E5E7EB]">
            Rapport
          </Badge>
          <button
            type="button"
            className="rounded bg-[#EFF6FF] px-2 py-0.5 text-xs font-semibold text-[#2563EB] hover:bg-[#DBEAFE]"
          >
            + Tag
          </button>
        </div>
      </DetailSection>
    </div>
  );
}
