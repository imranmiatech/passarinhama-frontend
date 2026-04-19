import { Checkbox } from "@/components/ui/checkbox";

import { DOCUMENTS_FILE_ROWS } from "./documentsMockData";
import { DocumentsFileRow } from "./DocumentsFileRow";

export function DocumentsFilesTable() {
  return (
    <div>
      <div className="mb-2 flex items-end justify-between">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#9CA3AF]">
          Fichiers (8)
        </h2>
        <button
          type="button"
          className="text-xs font-semibold text-[#2563EB] hover:underline"
        >
          Tout sélectionner
        </button>
      </div>
      <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <div className="-mx-4 touch-pan-x overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[720px] text-left text-sm sm:min-w-[900px]">
            <thead className="border-b border-[#E5E7EB] bg-[#FAFAFA] text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
              <tr>
                <th className="w-10 px-4 py-3">
                  <Checkbox className="border-[#D1D5DB]" aria-label="Sélectionner tout" />
                </th>
                <th className="w-10 px-2 py-3" />
                <th className="px-4 py-3 font-medium text-[#6B7280]">Nom du document</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Taille</th>
                <th className="px-4 py-3 font-medium">Auteur</th>
                <th className="px-4 py-3 font-medium">Mis à jour</th>
                <th className="px-4 py-3 font-medium">Accès</th>
                <th className="px-4 py-3 font-medium">Statut</th>
                <th className="w-12 px-4 py-3 font-medium">V.</th>
                <th className="w-40 px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB] bg-white">
              {DOCUMENTS_FILE_ROWS.map((row) => (
                <DocumentsFileRow key={row.id} row={row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
