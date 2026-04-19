import type { ContentType, Priority } from "../types";

// ── Avatar ────────────────────────────────────────────────────────────────
interface AvatarProps {
  initials: string;
  color: string;
  size?: "sm" | "md";
}
export function Avatar({ initials, color, size = "sm" }: AvatarProps) {
  const dim = size === "md" ? "w-9 h-9 text-sm" : "w-7 h-7 text-xs";
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center text-white font-semibold shrink-0`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

// ── Type badge ────────────────────────────────────────────────────────────
const TYPE_COLORS: Record<ContentType, string> = {
  Forum: "text-blue-600",
  Document: "text-purple-600",
  Événement: "text-orange-500",
  Signalement: "text-gray-700",
  Formation: "text-teal-600",
  Message: "text-green-600",
};

export function TypeBadge({ type }: { type: ContentType }) {
  return (
    <span className={`text-xs font-semibold ${TYPE_COLORS[type]}`}>{type}</span>
  );
}

// ── Priority badge ────────────────────────────────────────────────────────
const PRIORITY_STYLES: Record<Priority, string> = {
  URGENT: "bg-red-100 text-red-700 border border-red-200",
  HAUTE: "bg-orange-100 text-orange-700 border border-orange-200",
  MOYENNE: "bg-amber-100 text-amber-700 border border-amber-200",
  BASSE: "bg-gray-100 text-gray-600 border border-gray-200",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded ${PRIORITY_STYLES[priority]}`}>
      {priority}
    </span>
  );
}

// ── Status tag ────────────────────────────────────────────────────────────
export function StatusTag({ label, dot, color }: { label: string; dot?: string; color: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${color}`}>
      {dot && <span className="text-base leading-none">{dot}</span>}
      {label}
    </span>
  );
}

// ── Action Button ─────────────────────────────────────────────────────────
interface ActionBtnProps {
  label: string;
  icon?: string;
  variant: "approve" | "reject" | "correct" | "transfer" | "delete" | "ignore" | "escalate" | "signal" | "archive" | "cancel";
  onClick?: () => void;
}

const BTN_STYLES: Record<string, string> = {
  approve: "border border-green-300 text-green-700 hover:bg-green-50",
  reject: "border border-red-300 text-red-600 hover:bg-red-50",
  correct: "border border-orange-300 text-orange-600 hover:bg-orange-50",
  transfer: "border border-orange-300 text-orange-600 hover:bg-orange-50",
  delete: "border border-red-300 text-red-600 hover:bg-red-50",
  ignore: "border border-gray-300 text-gray-600 hover:bg-gray-50",
  escalate: "border border-orange-300 text-orange-600 hover:bg-orange-50",
  signal: "border border-gray-300 text-gray-600 hover:bg-gray-50",
  archive: "border border-gray-300 text-gray-600 hover:bg-gray-50",
  cancel: "text-gray-500 hover:text-gray-700 underline-offset-2 hover:underline",
};

export function ActionBtn({ label, variant, onClick }: ActionBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${BTN_STYLES[variant]}`}
    >
      {label}
    </button>
  );
}
