import { UploadCloud } from "lucide-react";

export function DocumentsUploadZone() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E5E7EB] bg-[#FAFAFA]/80 px-4 py-10 text-center">
      <div className="mb-3 flex size-12 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <UploadCloud className="size-6 text-[#9CA3AF]" />
      </div>
      <p className="text-sm font-medium text-[#374151]">Glisser-déposer des fichiers ici</p>
      <p className="mt-1 text-xs text-[#6B7280]">
        ou <span className="cursor-pointer font-medium text-[#2563EB] hover:underline">parcourir</span>{" "}
        · PDF, DOCX, XLSX, PPTX, images · max 50 Mo
      </p>
    </div>
  );
}
