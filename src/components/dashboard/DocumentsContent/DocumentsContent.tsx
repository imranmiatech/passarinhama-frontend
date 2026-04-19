import { useState } from "react";

import DocumentDetailsPanel from "@/components/dashboard/DocumentDetailsPanel/DocumentDetailsPanel";
import DocumentsMainList from "@/components/dashboard/DocumentsMainList/DocumentsMainList";
import DocumentsSidebar from "@/components/dashboard/DocumentsSidebar/DocumentsSidebar";
import { cn } from "@/lib/utils";

import type { DocumentsMobilePanel } from "./documentsMobilePanel";
import { DocumentsMobilePanelTabs } from "./DocumentsMobilePanelTabs";

export function DocumentsContent() {
  const [mobilePanel, setMobilePanel] = useState<DocumentsMobilePanel>("list");

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[#F4F5F7]">
      <DocumentsMobilePanelTabs value={mobilePanel} onChange={setMobilePanel} />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
        <section
          id="documents-panel-tree"
          role="tabpanel"
          aria-labelledby="documents-tab-tree"
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:w-[260px] lg:max-w-[260px] lg:flex-none lg:shrink-0 lg:border-r lg:border-[#E5E7EB]",
            mobilePanel !== "tree" && "hidden lg:flex"
          )}
        >
          <DocumentsSidebar />
        </section>

        <section
          id="documents-panel-list"
          role="tabpanel"
          aria-labelledby="documents-tab-list"
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:min-w-0 lg:flex-1",
            mobilePanel !== "list" && "hidden lg:flex"
          )}
        >
          <DocumentsMainList />
        </section>

        <section
          id="documents-panel-detail"
          role="tabpanel"
          aria-labelledby="documents-tab-detail"
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:w-[320px] lg:max-w-[320px] lg:flex-none lg:shrink-0 lg:border-l lg:border-[#E5E7EB]",
            mobilePanel !== "detail" && "hidden lg:flex"
          )}
        >
          <DocumentDetailsPanel />
        </section>
      </div>
    </div>
  );
}
