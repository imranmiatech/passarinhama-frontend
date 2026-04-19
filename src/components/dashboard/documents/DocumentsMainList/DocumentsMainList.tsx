import { DocumentsExplorerHeader } from "./DocumentsExplorerHeader";
import { DocumentsExplorerToolbar } from "./DocumentsExplorerToolbar";
import { DocumentsFilesTable } from "./DocumentsFilesTable";
import { DocumentsFolderQuickCards } from "./DocumentsFolderQuickCards";
import { DocumentsUploadZone } from "./DocumentsUploadZone";

export default function DocumentsMainList() {
  return (
    <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col bg-[#F4F5F7] lg:border-r lg:border-[#E5E7EB]">
      <DocumentsExplorerHeader />
      <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5 md:p-6">
        <DocumentsExplorerToolbar />
        <DocumentsFolderQuickCards />
        <DocumentsFilesTable />
        <DocumentsUploadZone />
      </div>
    </div>
  );
}
