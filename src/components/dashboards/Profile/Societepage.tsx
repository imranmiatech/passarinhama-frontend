import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SocieteData = {
  nomSociete: string;
  formeJuridique: string;
  siret: string;
  tva: string;
  siteWeb: string;
  emailPro: string;
  specialite: string;
  adresse: string;
  codePostal: string;
  ville: string;
};

// ─── Initial Data ─────────────────────────────────────────────────────────────

const INITIAL: SocieteData = {
  nomSociete: "Cabinet Lefebvre Architecture",
  formeJuridique: "EURL",
  siret: "123 456 789 00012",
  tva: "FR12345678900",
  siteWeb: "https://cabinet-lefebvre.fr",
  emailPro: "contact@cabinet-lefebvre.fr",
  specialite: "Architecture de copropriété — Diagnostic et rénovation",
  adresse: "12 avenue des Champs-Élysées",
  codePostal: "75008",
  ville: "Paris",
};

const FORMES_JURIDIQUES = [
  "EURL", "SARL", "SAS", "SASU", "SA", "SNC", "Auto-entrepreneur",
  "EI", "EIRL", "Association", "Autre",
];

// ─── Reusable Field Components ────────────────────────────────────────────────

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}> = ({ label, value, onChange, placeholder, type = "text", required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
      {label}
      {required && <span className="text-gray-400 ml-0.5">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white"
    />
  </div>
);

const SelectField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}> = ({ label, value, onChange, options }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white appearance-none pr-10"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

// ─── Section Card ─────────────────────────────────────────────────────────────

const SectionCard: React.FC<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100">
      <h2 className="font-bold text-gray-900 text-[15px]">{title}</h2>
      {subtitle && <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>}
    </div>
    <div className="px-6 py-5 space-y-4">{children}</div>
  </div>
);

// ─── Footer Actions ───────────────────────────────────────────────────────────

const FooterActions: React.FC<{
  onCancel: () => void;
  onSave: () => void;
  saved: boolean;
}> = ({ onCancel, onSave, saved }) => (
  <div className=" border-gray-100 px-6 py-3 flex items-center justify-end gap-3">
    <button
      onClick={onCancel}
      className="text-sm font-semibold text-gray-500 hover:text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
    >
      Annuler
    </button>
    <button
      onClick={onSave}
      className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm ${
        saved
          ? "bg-emerald-500 text-white"
          : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
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
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          Enregistrer
        </>
      )}
    </button>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SocietePage() {
  const [data, setData] = useState<SocieteData>(INITIAL);
  const [saved, setSaved] = useState(false);

  const set = (key: keyof SocieteData) => (value: string) => {
    setSaved(false);
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCancel = () => {
    setData(INITIAL);
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen w-full ml-0 md:ml-60 lg:ml-64 bg-[#f4f6fb] font-sans flex flex-col">
      <div className="flex-1  w-full mx-auto px-4 sm:px-6 py-8  space-y-5">

        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Société</h1>
          <p className="text-gray-400 text-sm mt-1">Informations relatives à votre cabinet ou entreprise</p>
        </div>

        {/* ── Section 1: Identité ── */}
        <SectionCard
          title="Identité de la société"
          subtitle="Ces informations apparaissent dans l'annuaire des membres"
        >
          {/* Nom */}
          <InputField
            label="Nom de la société"
            required
            value={data.nomSociete}
            onChange={set("nomSociete")}
          />

          {/* Forme juridique */}
          <SelectField
            label="Forme juridique"
            value={data.formeJuridique}
            onChange={set("formeJuridique")}
            options={FORMES_JURIDIQUES}
          />

          {/* SIRET + TVA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="SIRET"
              value={data.siret}
              onChange={set("siret")}
            />
            <InputField
              label="Numéro TVA intracommunautaire"
              value={data.tva}
              onChange={set("tva")}
            />
          </div>

          {/* Site web + Email pro */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Site web"
              type="url"
              value={data.siteWeb}
              onChange={set("siteWeb")}
            />
            <InputField
              label="Email professionnel"
              type="email"
              value={data.emailPro}
              onChange={set("emailPro")}
            />
          </div>

          {/* Spécialité */}
          <InputField
            label="Spécialité / Activité"
            value={data.specialite}
            onChange={set("specialite")}
          />
        </SectionCard>

        {/* ── Section 2: Adresse ── */}
        <SectionCard title="Adresse du siège social">
          {/* Adresse */}
          <InputField
            label="Adresse"
            value={data.adresse}
            onChange={set("adresse")}
          />

          {/* Code postal + Ville */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Code postal"
              value={data.codePostal}
              onChange={set("codePostal")}
            />
            <InputField
              label="Ville"
              value={data.ville}
              onChange={set("ville")}
            />
          </div>
        </SectionCard>
      </div>

      <FooterActions onCancel={handleCancel} onSave={handleSave} saved={saved} />
    </div>
  );
}