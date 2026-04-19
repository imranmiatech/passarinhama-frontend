import { Download, Edit2, Expand, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DocumentDetailInfoSections } from "./DocumentDetailInfoSections";

export default function DocumentDetailsPanel() {
  return (
    <aside
      className="flex h-full w-[min(100%,320px)] shrink-0 flex-col overflow-y-auto border-l border-[#E5E7EB] bg-white sm:w-[320px]"
      aria-label="Détails du fichier"
    >
      <div className="relative flex flex-col items-center border-b border-[#E5E7EB] px-6 pt-8 pb-5">
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-2 py-0.5 text-xs font-semibold text-[#15803D]">
            <span className="size-1.5 rounded-full bg-[#22C55E]" />
            Validé
          </span>
        </div>

        <div className="mb-4 flex h-24 w-20 items-center justify-center rounded-lg border border-red-100 bg-red-50">
          <span className="text-xl font-bold text-red-500">PDF</span>
        </div>

        <h2 className="mb-1 text-center text-lg font-bold leading-tight text-[#111827]">
          Rapport moral 2024.pdf
        </h2>

        <div className="mb-6 flex items-center justify-center gap-2 text-xs text-[#6B7280]">
          <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 font-medium tracking-wide text-[#15803D]">
            Public
          </span>
          <span aria-hidden>•</span>
          <span>1,2 Mo</span>
          <span aria-hidden>•</span>
          <span className="rounded border border-[#E5E7EB] bg-white px-1.5 py-0.5 text-[10px] font-bold shadow-sm">
            v3
          </span>
        </div>

        <div className="flex w-full gap-2">
          <Button className="h-10 flex-1 gap-2 bg-[#111827] font-medium text-white shadow-md hover:bg-[#000000]">
            <Download className="size-4" />
            Télécharger
          </Button>
          <Button variant="outline" className="h-10 flex-1 gap-2 border-[#E5E7EB] font-medium">
            <Edit2 className="size-4" />
            Modifier
          </Button>
          <Button variant="outline" size="icon" className="size-10 shrink-0 border-[#E5E7EB]">
            <Expand className="size-4 text-[#4B5563]" />
          </Button>
          <Button variant="outline" size="icon" className="size-10 shrink-0 border-[#E5E7EB]">
            <Trash2 className="size-4 text-[#4B5563]" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="informations" className="flex min-h-0 flex-1 flex-col">
        <TabsList
          variant="line"
          className="h-auto w-full min-w-0 justify-start gap-0 rounded-none border-b border-[#E5E7EB] bg-transparent p-0 px-1"
        >
          <TabsTrigger
            value="informations"
            className="rounded-none border-0 border-b-2 border-transparent px-3 py-3 text-[13px] shadow-none data-active:border-[#111827] data-active:bg-transparent data-active:text-[#111827]"
          >
            Informations
          </TabsTrigger>
          <TabsTrigger
            value="versions"
            className="rounded-none border-0 border-b-2 border-transparent px-3 py-3 text-[13px] font-medium text-[#6B7280] shadow-none data-active:border-[#111827] data-active:text-[#111827]"
          >
            Versions
            <span className="ml-1 rounded bg-[#F3F4F6] px-1.5 py-0.5 text-xs">2</span>
          </TabsTrigger>
          <TabsTrigger
            value="permissions"
            className="rounded-none border-0 border-b-2 border-transparent px-3 py-3 text-[13px] font-medium text-[#6B7280] shadow-none data-active:border-[#111827] data-active:text-[#111827]"
          >
            Permissions
          </TabsTrigger>
          <TabsTrigger
            value="activite"
            className="rounded-none border-0 border-b-2 border-transparent px-3 py-3 text-[13px] font-medium text-[#6B7280] shadow-none data-active:border-[#111827] data-active:text-[#111827]"
          >
            Activité
          </TabsTrigger>
        </TabsList>

        <TabsContent value="informations" className="m-0 min-h-0 flex-1 overflow-y-auto p-0">
          <DocumentDetailInfoSections />
        </TabsContent>
        <TabsContent value="versions" className="m-0 p-6 text-sm text-[#6B7280]">
          Historique des versions à venir.
        </TabsContent>
        <TabsContent value="permissions" className="m-0 p-6 text-sm text-[#6B7280]">
          Gestion des permissions à venir.
        </TabsContent>
        <TabsContent value="activite" className="m-0 p-6 text-sm text-[#6B7280]">
          Journal d&apos;activité à venir.
        </TabsContent>
      </Tabs>
    </aside>
  );
}
