import React, { useState } from "react";

// ─── Confirm Modal ────────────────────────────────────────────────────────────

const ConfirmModal: React.FC<{
  title: string;
  message: string;
  confirmLabel: string;
  confirmClass: string;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ title, message, confirmLabel, confirmClass, onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md p-6 space-y-4">
      <h3 className="font-bold text-gray-900 text-base">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{message}</p>
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          onClick={onCancel}
          className="text-sm font-semibold text-gray-500 hover:text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Annuler
        </button>
        <button
          onClick={onConfirm}
          className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all ${confirmClass}`}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SupprimerPage() {
  const [modal, setModal] = useState<"deactivate" | "delete" | null>(null);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  };

  const handleDeactivate = () => {
    setModal(null);
    // handle deactivation logic
  };

  const handleDelete = () => {
    setModal(null);
    // handle deletion logic
  };

  return (
    <div className="min-h-screen w-full ml-0 md:ml-60 lg:ml-64 bg-[#f4f6fb] font-sans">
      <div className=" w-full mx-auto px-4 sm:px-6 py-8 space-y-5">

        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-extrabold text-red-500">Supprimer le compte</h1>
          <p className="text-gray-400 text-sm mt-1">Ces actions sont irréversibles. Lisez attentivement avant de procéder.</p>
        </div>

        {/* ── Warning Banner ── */}
        <div className="bg-red-50 border border-red-100 rounded-2xl px-6 py-4 flex items-start gap-4">
          <span className="text-xl flex-shrink-0 mt-0.5">⚠️</span>
          <div>
            <p className="text-sm font-bold text-red-600 mb-1">Attention — actions irréversibles</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              La suppression de votre compte entraîne la{" "}
              <span className="font-bold text-gray-800">perte définitive</span>{" "}
              de toutes vos données : profil, messages, publications, inscriptions aux événements et historique d'activité. Cette action ne peut pas être annulée.
            </p>
          </div>
        </div>

        {/* ── Danger Zone Card ── */}
        <div className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-red-100 flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5 text-red-500 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <p className="text-sm font-bold text-red-500">Zone de danger</p>
              <p className="text-xs text-gray-400">Actions à manipuler avec précaution</p>
            </div>
          </div>

          {/* Row 1 — Export */}
          <div className="flex items-start justify-between gap-6 px-6 py-5 border-b border-gray-100">
            <div className="max-w-sm">
              <p className="text-sm font-bold text-gray-900">Exporter mes données</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Téléchargez une copie de toutes vos données personnelles avant de supprimer votre compte (profil, messages, activité).
              </p>
            </div>
            <button
              onClick={handleExport}
              className={`flex items-center gap-2 text-sm font-semibold border px-4 py-2 rounded-xl transition-all whitespace-nowrap flex-shrink-0 mt-0.5 ${
                exported
                  ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {exported ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Téléchargé !
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Exporter (ZIP)
                </>
              )}
            </button>
          </div>

          {/* Row 2 — Deactivate */}
          <div className="flex items-start justify-between gap-6 px-6 py-5 border-b border-gray-100">
            <div className="max-w-sm">
              <p className="text-sm font-bold text-gray-900">Désactiver temporairement mon compte</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Votre profil sera masqué et vous ne recevrez plus de notifications. Votre compte pourra être réactivé sur simple demande.
              </p>
            </div>
            <button
              onClick={() => setModal("deactivate")}
              className="flex items-center gap-2 text-sm font-semibold text-red-500 border border-red-300 bg-white hover:bg-red-50 px-4 py-2 rounded-xl transition-all whitespace-nowrap flex-shrink-0 mt-0.5"
            >
              Désactiver
            </button>
          </div>

          {/* Row 3 — Delete */}
          <div className="flex items-start justify-between gap-6 px-6 py-5">
            <div className="max-w-sm">
              <p className="text-sm font-bold text-red-500">Supprimer définitivement mon compte</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Toutes vos données seront supprimées de manière irréversible dans les 30 jours. Vous recevrez un email de confirmation.
              </p>
            </div>
            <button
              onClick={() => setModal("delete")}
              className="flex items-center gap-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex-shrink-0 mt-0.5 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                <path strokeLinecap="round" d="M10 11v6M14 11v6" />
              </svg>
              Supprimer le compte
            </button>
          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      {modal === "deactivate" && (
        <ConfirmModal
          title="Désactiver votre compte ?"
          message="Votre profil sera masqué et vous ne recevrez plus de notifications. Vous pourrez réactiver votre compte à tout moment."
          confirmLabel="Oui, désactiver"
          confirmClass="bg-gray-900 text-white hover:bg-gray-700"
          onConfirm={handleDeactivate}
          onCancel={() => setModal(null)}
        />
      )}

      {modal === "delete" && (
        <ConfirmModal
          title="Supprimer définitivement votre compte ?"
          message="Cette action est irréversible. Toutes vos données seront supprimées dans les 30 jours. Un email de confirmation vous sera envoyé."
          confirmLabel="Oui, supprimer définitivement"
          confirmClass="bg-red-500 text-white hover:bg-red-600"
          onConfirm={handleDelete}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  );
}