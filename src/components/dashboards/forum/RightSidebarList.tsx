import React from "react";

// ─── Sujets Épinglés ──────────────────────────────────────────────────────────

type PinnedItem = {
  icon: string;
  title: string;
  meta: string;
  replies: number;
};

const pinnedItems: PinnedItem[] = [
  {
    icon: "🗂️",
    title: "Guide complet — Mener une AG de copropriété",
    meta: "Droit · par Admin · 18 mar.",
    replies: 42,
  },
  {
    icon: "⚡",
    title: "MaPrimeRénov' 2025 — nouveautés et barèmes",
    meta: "Rénovation · par Bureau · 5 jan.",
    replies: 87,
  },
  {
    icon: "📜",
    title: "Règlement intérieur ArchiCopro — v2.1",
    meta: "Vie asso · par Admin · 1 jan.",
    replies: 6,
  },
];

const SujetsEpingles: React.FC = () => (
  <div className="bg-white rounded-2xl w-full border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-5 pt-5 pb-4">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        📌 Sujets épinglés
      </h2>
    </div>
    <div className="border-t border-gray-100">
      {pinnedItems.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
              {item.title}
            </p>
            <p className="text-xs text-gray-400 mt-1">{item.meta}</p>
          </div>
          <div className="flex-shrink-0 mt-0.5">
            <span className="inline-flex items-center justify-center min-w-[32px] h-7 px-2 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">
              {item.replies}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Mes Sujets Suivis ────────────────────────────────────────────────────────

type FollowedItem = {
  title: string;
  sub: string;
  subColor?: string;
  replies: number;
  hasNew?: boolean;
};

const followedItems: FollowedItem[] = [
  {
    title: "Isolation toiture — comparatif 2025",
    sub: "3 nouvelles réponses",
    subColor: "text-blue-600",
    replies: 3,
    hasNew: true,
  },
  {
    title: "Recours contre syndic défaillant",
    sub: "Dernière réponse : hier",
    subColor: "text-gray-400",
    replies: 18,
    hasNew: false,
  },
  {
    title: "Convocation AG 2025 — infos pratiques",
    sub: "Aucune nouvelle réponse",
    subColor: "text-gray-400",
    replies: 12,
    hasNew: false,
  },
];

const MesSujetsSuivis: React.FC = () => (
  <div className="bg-white rounded-2xl border w-full border-gray-100 shadow-sm overflow-hidden">
    <div className="px-5 pt-5 pb-4">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        👁️ Mes sujets suivis
      </h2>
    </div>
    <div className="border-t border-gray-100">
      {followedItems.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-yellow-50 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
            🔔
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
              {item.title}
            </p>
            <p className={`text-xs mt-1 font-medium ${item.subColor}`}>
              {item.sub}
            </p>
          </div>
          <div className="flex-shrink-0 mt-0.5">
            {item.hasNew ? (
              <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-full bg-blue-600 text-white text-xs font-bold">
                {item.replies}
              </span>
            ) : (
              <span className="inline-flex items-center justify-center min-w-[32px] h-7 px-2 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">
                {item.replies}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── File de Modération ───────────────────────────────────────────────────────

type ModerationItem = {
  icon: string;
  title: string;
  sub: string;
  subColor: string;
};

const moderationItems: ModerationItem[] = [
  {
    icon: "⏳",
    title: "Problème charges impayées — urgence",
    sub: "En attente validation",
    subColor: "text-amber-500",
  },
  {
    icon: "🚩",
    title: "Message signalé — ton inapproprié",
    sub: "3 signalements",
    subColor: "text-red-500",
  },
  {
    icon: "🚩",
    title: "Publicité déguisée — prestataire non agréé",
    sub: "1 signalement",
    subColor: "text-red-500",
  },
];

const FileDeModeration: React.FC = () => (
  <div className="bg-white rounded-2xl border border-gray-100 w-full shadow-sm overflow-hidden">
    <div className="px-5 pt-5 pb-4 flex items-center justify-between">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        🛡️ File de modération
      </h2>
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-500 text-sm font-bold">
        7
      </span>
    </div>
    <div className="border-t border-gray-100">
      {moderationItems.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
              {item.title}
            </p>
            <p className={`text-xs mt-1 font-semibold ${item.subColor}`}>
              {item.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function RightSidebarList() {
  return (
    <div className="w-full">
      <div className="space-y-4">
        <SujetsEpingles />
        <MesSujetsSuivis />
        <FileDeModeration />
      </div>
    </div>
  );
}