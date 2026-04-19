import DocumentDetailsPanel from "@/components/dashboard/DocumentDetailsPanel/DocumentDetailsPanel";
import DocumentsMainList from "@/components/dashboard/DocumentsMainList/DocumentsMainList";
import DocumentsSidebar from "@/components/dashboard/DocumentsSidebar/DocumentsSidebar";

export function DocumentsContent() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#F4F5F7]">
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <DocumentsSidebar />
        <DocumentsMainList />
        <DocumentDetailsPanel />
      </div>
    </div>
  );
}
