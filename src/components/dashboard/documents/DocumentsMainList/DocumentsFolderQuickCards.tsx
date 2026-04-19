import { Folder } from "lucide-react";

const CARDS = [
  { title: "Statuts & règlements", meta: "3 fichiers • Public" },
  { title: "Comptes-rendus AG", meta: "5 fichiers • Public" },
] as const;

export function DocumentsFolderQuickCards() {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
      {CARDS.map((card) => (
        <button
          key={card.title}
          type="button"
          className="flex w-full min-w-0 items-center gap-3 rounded-lg border border-[#E5E7EB] bg-white p-3 text-left shadow-sm transition-shadow hover:shadow-md sm:max-w-[280px] sm:shrink-0 md:w-64"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#F3F4F6] bg-[#FAFAFA]">
            <Folder className="size-5 text-[#9CA3AF]" fill="currentColor" fillOpacity={0.15} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-tight text-[#111827]">{card.title}</h3>
            <p className="mt-0.5 text-xs text-[#6B7280]">{card.meta}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
