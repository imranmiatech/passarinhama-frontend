import React, { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProfileData = {
  initials: string;
  displayName: string;
  email: string;
  role: string;
  status: string;
  adhesion: string;
  stats: { label: string; value: number }[];
  firstName: string;
  lastName: string;
  phone: string;
  mobile: string;
  address1: string;
  address2: string;
  postalCode: string;
  city: string;
  department: string;
  country: string;
};

// ─── Initial Data ─────────────────────────────────────────────────────────────

const INITIAL: ProfileData = {
  initials: "ML",
  displayName: "Lahoucine",
  email: "lahoucine@archicopro.fr",
  role: "Admin",
  status: "Actif",
  adhesion: "Adhésion active 2025",
  stats: [
    { label: "MEMBRES", value: 248 },
    { label: "ARTICLES", value: 34 },
    { label: "ANNÉES", value: 3 },
  ],
  firstName: "Marie",
  lastName: "Lefebvre",
  phone: "06 12 34 56 78",
  mobile: "07 00 00 00 00",
  address1: "12 avenue des Champs-Élysées",
  address2: "",
  postalCode: "75008",
  city: "Paris",
  department: "Île-de-France",
  country: "France",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProfileHero: React.FC<{ data: ProfileData }> = ({ data }) => (
  <div className="bg-gray-900 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
    {/* Avatar */}
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
      {data.initials}
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <h1 className="text-white font-bold text-lg leading-tight">{data.displayName}</h1>
      <p className="text-gray-400 text-sm">{data.email}</p>
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <span className="text-[11px] font-semibold text-gray-300 bg-gray-700 px-2.5 py-0.5 rounded-full">
          ⚙ {data.role}
        </span>
        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-900/50 border border-emerald-700 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          {data.status}
        </span>
        <span className="text-[11px] font-semibold text-yellow-300 bg-yellow-900/30 border border-yellow-700 px-2.5 py-0.5 rounded-full">
          {data.adhesion}
        </span>
      </div>
    </div>

    {/* Stats */}
    <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0 mt-1 sm:mt-0">
      {data.stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-white font-extrabold text-xl leading-none">{s.value}</div>
          <div className="text-gray-500 text-[10px] font-semibold tracking-widest mt-1 uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const SectionCard: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100">
      <h2 className="font-bold text-gray-900 text-[15px]">{title}</h2>
      <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>
    </div>
    <div className="px-6 py-5">{children}</div>
  </div>
);

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  badge?: React.ReactNode;
}> = ({ label, value, onChange, placeholder, type = "text", required, badge }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
      {label}
      {required && <span className="text-gray-400 ml-0.5">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white"
      />
      {badge && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">{badge}</div>
      )}
    </div>
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
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white appearance-none"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

// ─── Photo Section ────────────────────────────────────────────────────────────

const PhotoSection: React.FC<{ data: ProfileData }> = ({ data }) => (
  <SectionCard title="Photo de profil" subtitle="Visible par tous les membres de la plateforme">
    <div className="flex items-center gap-5">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
        {data.initials}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 text-sm">{data.displayName}</p>
        <p className="text-gray-400 text-xs mt-0.5">JPG, PNG ou WebP — max 2 Mo</p>
        <p className="text-gray-400 text-xs">Taille recommandée : 200 × 200 px minimum</p>
        <button className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0L8 8m4-4l4 4" />
          </svg>
          Changer la photo
        </button>
      </div>
    </div>
  </SectionCard>
);

// ─── Personal Info Section ────────────────────────────────────────────────────

const PersonalSection: React.FC<{
  data: ProfileData;
  onChange: (key: keyof ProfileData, value: string) => void;
}> = ({ data, onChange }) => (
  <SectionCard
    title="Informations personnelles"
    subtitle="Vos coordonnées visibles dans l'annuaire"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InputField
        label="Prénom"
        required
        value={data.firstName}
        onChange={(v) => onChange("firstName", v)}
      />
      <InputField
        label="Nom"
        required
        value={data.lastName}
        onChange={(v) => onChange("lastName", v)}
      />
      <div className="sm:col-span-2">
        <InputField
          label="Adresse email"
          required
          type="email"
          value={data.email}
          onChange={(v) => onChange("email", v)}
          badge={
            <span className="text-emerald-600 text-[11px] font-semibold flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Vérifié
            </span>
          }
        />
      </div>
      <InputField
        label="Téléphone"
        value={data.phone}
        onChange={(v) => onChange("phone", v)}
      />
      <InputField
        label="Mobile"
        value={data.mobile}
        onChange={(v) => onChange("mobile", v)}
      />
    </div>
  </SectionCard>
);

// ─── Address Section ──────────────────────────────────────────────────────────

const AddressSection: React.FC<{
  data: ProfileData;
  onChange: (key: keyof ProfileData, value: string) => void;
}> = ({ data, onChange }) => (
  <SectionCard
    title="Adresse"
    subtitle="Votre adresse professionnelle ou personnelle"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2">
        <InputField
          label="Adresse (Ligne 1)"
          value={data.address1}
          onChange={(v) => onChange("address1", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <InputField
          label="Adresse (Ligne 2)"
          placeholder="Bâtiment, appartement, étage..."
          value={data.address2}
          onChange={(v) => onChange("address2", v)}
        />
      </div>
      <InputField
        label="Code postal"
        required
        value={data.postalCode}
        onChange={(v) => onChange("postalCode", v)}
      />
      <InputField
        label="Ville"
        required
        value={data.city}
        onChange={(v) => onChange("city", v)}
      />
      <InputField
        label="Département"
        value={data.department}
        onChange={(v) => onChange("department", v)}
      />
      <SelectField
        label="Pays"
        value={data.country}
        onChange={(v) => onChange("country", v)}
        options={["France", "Belgique", "Suisse", "Luxembourg", "Canada", "Autre"]}
      />
    </div>
  </SectionCard>
);

// ─── Sticky Footer Actions ────────────────────────────────────────────────────

const FooterActions: React.FC<{
  onCancel: () => void;
  onSave: () => void;
  saved: boolean;
}> = ({ onCancel, onSave, saved }) => (
  <div className=" z-10   px-6 py-3 flex items-center justify-end gap-3">
    <button
      onClick={onCancel}
      className="text-sm font-semibold text-gray-500 hover:text-gray-800 px-4 py-2 rounded-xl bg-white border border-gray-400 hover:bg-gray-100 transition-colors"
    >
      Annuler les modifications
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
          Enregistrer le profil
        </>
      )}
    </button>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const [data, setData] = useState<ProfileData>(INITIAL);
  const [saved, setSaved] = useState(false);

  const handleChange = (key: keyof ProfileData, value: string) => {
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
    <div className="w-full ml-0 md:ml-60 lg:ml-64 bg-[#f4f6fb] font-sans flex flex-col">
      <div className="flex-1  w-full mx-auto px-4 sm:px-6 py-6 space-y-4 ">
        <ProfileHero data={data} />
        <PhotoSection data={data} />
        <PersonalSection data={data} onChange={handleChange} />
        <AddressSection data={data} onChange={handleChange} />
      </div>
      <FooterActions onCancel={handleCancel} onSave={handleSave} saved={saved} />
    </div>
  );
}