import { DocumentsExplorerHeader } from "./DocumentsExplorerHeader";
import { DocumentsExplorerToolbar } from "./DocumentsExplorerToolbar";
import { DocumentsFilesTable } from "./DocumentsFilesTable";
import { DocumentsFolderQuickCards } from "./DocumentsFolderQuickCards";
import { DocumentsUploadZone } from "./DocumentsUploadZone";

export default function DocumentsMainList() {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col border-r border-[#E5E7EB] bg-[#F4F5F7]">
      <DocumentsExplorerHeader />
      <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
        <DocumentsExplorerToolbar />
        <DocumentsFolderQuickCards />
        <DocumentsFilesTable />
        <DocumentsUploadZone />
      </div>
    </div>
  );
}
