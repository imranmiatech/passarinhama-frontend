import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Channel = "email" | "plateforme" | "sms";

type NotifRow = {
    id: string;
    label: string;
    email: boolean;
    plateforme: boolean;
    sms: boolean;
};

// ─── Initial Data ─────────────────────────────────────────────────────────────

const INITIAL_ROWS: NotifRow[] = [
    { id: "msg_prive", label: "Nouveau message privé", email: true, plateforme: true, sms: false },
    { id: "forum", label: "Réponse dans un forum", email: true, plateforme: true, sms: false },
    { id: "evenement", label: "Événement à venir (rappel)", email: true, plateforme: false, sms: true },
    { id: "article", label: "Nouvel article de formation", email: true, plateforme: true, sms: false },
    { id: "moderation", label: "Signalement de modération", email: true, plateforme: true, sms: false },
    { id: "newsletter", label: "Newsletter mensuelle", email: true, plateforme: false, sms: false },
];

// ─── Toggle ───────────────────────────────────────────────────────────────────

const Toggle: React.FC<{ enabled: boolean; onChange: () => void }> = ({ enabled, onChange }) => (
    <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${enabled ? "bg-emerald-500" : "bg-gray-200"
            }`}
    >
        <span
            className={`inline-block w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 mt-0.5 ${enabled ? "translate-x-5" : "translate-x-0.5"
                }`}
        />
    </button>
);

// ─── Column Header ────────────────────────────────────────────────────────────

const ColHeader: React.FC<{ label: string }> = ({ label }) => (
    <th className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center py-3 px-6 w-36">
        {label}
    </th>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
    const [rows, setRows] = useState<NotifRow[]>(INITIAL_ROWS);
    const [saved, setSaved] = useState(false);

    const toggle = (id: string, channel: Channel) => {
        setSaved(false);
        setRows((prev) =>
            prev.map((r) => (r.id === id ? { ...r, [channel]: !r[channel] } : r))
        );
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    const handleCancel = () => {
        setRows(INITIAL_ROWS);
        setSaved(false);
    };

    return (
        <div className=" w-full ml-0 md:ml-60 lg:ml-64 bg-[#f4f6fb] font-sans flex flex-col">
            <div className="flex-1  w-full mx-auto px-4 sm:px-6 py-8  space-y-5">

                {/* Page Title */}
                <div>
                    <h1 className="text-2xl font-extrabold text-gray-900">Notifications</h1>
                    <p className="text-gray-400 text-sm mt-1">Choisissez comment et quand vous souhaitez être notifié</p>
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* Card Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="font-bold text-gray-900 text-[15px]">Préférences de notification</h2>
                    </div>

                    {/* Table — desktop */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-left py-3 px-6">
                                        Événement
                                    </th>
                                    <ColHeader label="Email" />
                                    <ColHeader label="Plateforme" />
                                    <ColHeader label="SMS" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {rows.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-800">
                                            {row.label}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex justify-center">
                                                <Toggle enabled={row.email} onChange={() => toggle(row.id, "email")} />
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex justify-center">
                                                <Toggle enabled={row.plateforme} onChange={() => toggle(row.id, "plateforme")} />
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex justify-center">
                                                <Toggle enabled={row.sms} onChange={() => toggle(row.id, "sms")} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile — stacked cards */}
                    <div className="sm:hidden divide-y divide-gray-100">
                        {rows.map((row) => (
                            <div key={row.id} className="px-5 py-4 space-y-3">
                                <p className="text-sm font-semibold text-gray-900">{row.label}</p>
                                <div className="flex items-center justify-between gap-4">
                                    {(["email", "plateforme", "sms"] as Channel[]).map((ch) => (
                                        <div key={ch} className="flex flex-col items-center gap-1.5">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                {ch === "plateforme" ? "Plate." : ch}
                                            </span>
                                            <Toggle enabled={row[ch]} onChange={() => toggle(row.id, ch)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className=" border-gray-100 px-6 py-3 flex items-center justify-end gap-3">
                <button
                    onClick={handleCancel}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                    Annuler
                </button>
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm ${saved ? "bg-emerald-500 text-white" : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                        }`}
                >
                    {saved ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Enregistré !
                        </>
                    ) : (
                        "Enregistrer"
                    )}
                </button>
            </div>
        </div>
    );
}