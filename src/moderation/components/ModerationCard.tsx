import type { ModerationItem } from "./types";
import { Avatar, TypeBadge, PriorityBadge, ActionBtn } from "./Badges";

// ── Type icon mapping ─────────────────────────────────────────────────────
const TYPE_ICONS: Record<string, string> = {
  Forum: "💬",
  Document: "📄",
  Événement: "📅",
  Signalement: "⚠️",
  Formation: "⭐",
  Message: "✉️",
};

interface CardProps {
  item: ModerationItem;
  selected: boolean;
  active: boolean;
  onSelect: () => void;
  onClick: () => void;
  onAction: (action: string, id: number) => void;
}

export function ModerationCard({ item, selected, active, onSelect, onClick, onAction }: CardProps) {
  const isSignalement = item.type === "Signalement";
  const isApproved = item.status === "approuvé";

  return (
    <div
      className={`relative rounded-xl border transition-all cursor-pointer ${
        active
          ? "border-blue-400 ring-1 ring-blue-300 bg-white shadow-sm"
          : isSignalement
          ? "border-red-200 bg-red-50/40 hover:border-red-300"
          : isApproved
          ? "border-green-200 bg-green-50/30"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
      onClick={onClick}
    >
      {/* Approved banner */}
      {isApproved && (
        <div className="px-4 pt-3 pb-1 flex items-center gap-2">
          <span className="text-green-600 text-xs font-semibold">✓ Approuvé · {item.approvedAt}</span>
        </div>
      )}

      <div className="px-4 py-3">
        {/* Header row */}
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => { e.stopPropagation(); onSelect(); }}
            onClick={(e) => e.stopPropagation()}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 shrink-0 cursor-pointer"
          />

          {/* Icon */}
          <span className="text-base leading-none mt-0.5 shrink-0">{TYPE_ICONS[item.type]}</span>

          {/* Title + badges */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className={`text-sm font-semibold leading-snug ${isApproved ? "text-gray-500" : "text-gray-900"}`}>
                {item.title}
              </h3>
              <div className="flex items-center gap-1.5 shrink-0">
                <TypeBadge type={item.type} />
                <PriorityBadge priority={item.priority} />
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{item.excerpt}</p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Avatar initials={item.author.initials} color={item.author.color} />
                <span className="text-gray-600">{item.author.name}</span>
              </span>
              <span>⏱ {item.time}</span>
              {item.signals && (
                <span className="text-orange-500 font-medium">△ {item.signals} signalements</span>
              )}
              {item.meta && <span>📎 {item.meta}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Action footer */}
      {!isApproved && (
        <div
          className={`px-4 py-2.5 border-t flex items-center justify-between gap-2 ${
            isSignalement ? "border-red-100" : "border-gray-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-wrap gap-1.5">
            {isSignalement ? (
              <>
                <ActionBtn label="✕ Supprimer" variant="delete" onClick={() => onAction("delete", item.id)} />
                <ActionBtn label="✓ Ignorer signal." variant="ignore" onClick={() => onAction("ignore", item.id)} />
                <ActionBtn label="↑ Escalader" variant="escalate" onClick={() => onAction("escalate", item.id)} />
              </>
            ) : (
              <>
                <ActionBtn label="✓ Approuver" variant="approve" onClick={() => onAction("approve", item.id)} />
                <ActionBtn label="✕ Rejeter" variant="reject" onClick={() => onAction("reject", item.id)} />
                <ActionBtn label="✎ Correction" variant="correct" onClick={() => onAction("correct", item.id)} />
                {item.type === "Forum" && (
                  <ActionBtn label="⇄ Transférer" variant="transfer" onClick={() => onAction("transfer", item.id)} />
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <button className="p-1 hover:text-gray-500 transition-colors" title="Commenter">💬</button>
            <button className="p-1 hover:text-gray-500 transition-colors" title="Archiver">🗂</button>
          </div>
        </div>
      )}

      {isApproved && (
        <div className="px-4 py-2.5 border-t border-green-100 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
          <span className="text-xs text-green-600 font-medium">✓ Approuvé · {item.approvedAt}</span>
          <button className="text-xs text-gray-400 hover:text-gray-600">Annuler</button>
        </div>
      )}
    </div>
  );
}
