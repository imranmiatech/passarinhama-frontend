import { useState } from "react";

import { Avatar, ActionBtn } from "./Badges";
import type { ModerationItem } from "./types";

interface DetailPanelProps {
  item: ModerationItem;
  onClose?: () => void;
}

const TABS = ["Aperçu", "Signalements 3", "Historique 5", "Similaires"];

export function DetailPanel({ item, onClose }: DetailPanelProps) {
  const [activeTab, setActiveTab] = useState("Aperçu");
  const [comment, setComment] = useState("");

  return (
    <div className="flex flex-col h-full bg-[#ffffff] border-l border-gray-200">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-blue-600">Forum</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 text-red-700 border border-red-200">URGENT</span>
            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700">
              <span>●</span> En attente
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            {onClose && (
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors md:hidden">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <h2 className="text-sm font-bold text-gray-900 leading-snug">{item.title}</h2>
      </div>

      {/* Author */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-start gap-2">
          <Avatar initials={item.author.initials} color={item.author.color} size="md" />
          <div>
            <p className="text-sm font-semibold text-gray-900">{item.author.name}</p>
            <p className="text-xs text-gray-400">Membre · Inscrit depuis janv. 2023</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-gray-400">Soumis il y a 12 min</p>
            <p className="text-xs text-gray-400">Forum général</p>
          </div>
        </div>
      </div>

      {/* Signals + antecedents */}
      <div className="px-4 py-3 border-b border-gray-100 grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Signalements</p>
          <p className="text-sm font-medium text-orange-500">△ 3 signalements</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Antécédents</p>
          <p className="text-sm font-medium text-amber-600">⊙ 2 rejets passés</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Fil de discussion</p>
          <p className="text-sm text-gray-700">Forum général</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Vues</p>
          <p className="text-sm text-gray-700">42 vues · 8 réponses</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex flex-wrap gap-2 mb-2">
          <ActionBtn label="Approuver" variant="approve" />
          <ActionBtn label="Rejeter" variant="reject" />
          <ActionBtn label="Corriger" variant="correct" />
          <ActionBtn label="Transférer" variant="transfer" />
        </div>
        <div className="flex gap-2">
          <ActionBtn label="△ Signaler" variant="signal" />
          <ActionBtn label="🗂 Archiver" variant="archive" />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 border-b border-gray-100">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`shrink-0 px-2 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === t
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#efeded] px-4 py-4 space-y-4">
        {activeTab === "Aperçu" && (
          <>
            {/* Full content */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Contenu soumis</p>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  Je constate de nombreuses erreurs dans les montants prélevés ce mois-ci. Plusieurs membres m'ont signalé des{" "}
                  <strong className="font-semibold">doubles prélèvements</strong> sans aucune réponse du bureau depuis 3 semaines.
                </p>
                <p>
                  Cette situation est inacceptable et risque de nuire gravement à la réputation de notre association. Je demande une réponse officielle sous 48h et le remboursement immédiat des sommes prélevées en trop.
                </p>
                <p>
                  Si aucune action n'est prise, je me verrai contraint de saisir les autorités compétentes et de partager cette situation sur les réseaux sociaux.
                </p>
              </div>
            </div>

            {/* Author context */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Contexte auteur</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-3">
                  <Avatar initials={item.author.initials} color={item.author.color} size="md" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.author.name}</p>
                    <p className="text-xs text-gray-400">Membre depuis janv. 2023 · 47 publications</p>
                  </div>
                  <span className="ml-auto text-xs font-semibold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                    ● 2 rejets
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { value: 47, label: "Publications" },
                    { value: 2, label: "Rejets" },
                    { value: 3, label: "Signalé" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white rounded p-2 border border-gray-100">
                      <p className="text-base font-bold text-gray-900">{value}</p>
                      <p className="text-xs text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab !== "Aperçu" && (
          <div className="text-sm text-gray-400 text-center py-8">
            Aucun contenu à afficher pour cet onglet.
          </div>
        )}
      </div>

      {/* Comment input */}
      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-3 py-2">
          <input
            type="text"
            placeholder="Ajouter un commentaire interne ou une note de décision..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 text-xs text-gray-600 bg-transparent focus:outline-none placeholder-gray-400"
          />
          <button className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 hover:bg-gray-700 transition-colors">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
