import React, { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconEye = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
    {open ? (
      <>
        <path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path strokeLinecap="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path strokeLinecap="round" d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

// ─── Password Input ───────────────────────────────────────────────────────────

const PasswordInput: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}> = ({ label, value, onChange, placeholder, required }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
        {label}{required && <span className="text-gray-400 ml-0.5"> *</span>}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all bg-white"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <IconEye open={show} />
        </button>
      </div>
    </div>
  );
};

// ─── Criteria Item ────────────────────────────────────────────────────────────

const CriteriaItem: React.FC<{ label: string; met: boolean }> = ({ label, met }) => (
  <div className="flex items-center gap-2">
    <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
      met ? "bg-emerald-500" : "bg-gray-200"
    }`}>
      {met && (
        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>
    <span className={`text-xs transition-colors ${met ? "text-emerald-600 font-medium" : "text-gray-500"}`}>
      {label}
    </span>
  </div>
);

// ─── Toggle Switch ────────────────────────────────────────────────────────────

const Toggle: React.FC<{ enabled: boolean; onChange: (v: boolean) => void }> = ({ enabled, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${
      enabled ? "bg-gray-900" : "bg-gray-200"
    }`}
  >
    <span
      className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 mt-0.5 ${
        enabled ? "translate-x-5" : "translate-x-0.5"
      }`}
    />
  </button>
);

// ─── Section Card ─────────────────────────────────────────────────────────────

const SectionCard: React.FC<{
  title: string;
  subtitle: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, subtitle, badge, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-4">
      <div>
        <h2 className="font-bold text-gray-900 text-[15px]">{title}</h2>
        <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>
      </div>
      {badge}
    </div>
    <div className="px-6 py-5">{children}</div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SecuritePage() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [totpEnabled, setTotpEnabled] = useState(false);
  const [saved, setSaved] = useState(false);

  // Criteria
  const criteria = [
    { label: "8 caractères minimum", met: newPass.length >= 8 },
    { label: "Une majuscule", met: /[A-Z]/.test(newPass) },
    { label: "Un chiffre", met: /[0-9]/.test(newPass) },
    { label: "Un caractère spécial", met: /[^A-Za-z0-9]/.test(newPass) },
  ];

  const twoFaActive = smsEnabled || totpEnabled;

  const handleUpdate = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen w-full ml-0 md:ml-60 lg:ml-64 bg-[#f4f6fb] font-sans">
      <div className=" w-full mx-auto px-4 sm:px-6 py-8 space-y-5">

        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Sécurité</h1>
          <p className="text-gray-400 text-sm mt-1">Gérez votre mot de passe et la double authentification</p>
        </div>

        {/* ── Section 1: Password ── */}
        <SectionCard
          title="Changer le mot de passe"
          subtitle="Dernière modification : il y a 3 mois"
          badge={
            <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold whitespace-nowrap mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Sécurisé
            </span>
          }
        >
          <div className="space-y-4 max-w-md">
            <PasswordInput
              label="Mot de passe actuel"
              required
              value={current}
              onChange={setCurrent}
              placeholder="Votre mot de passe actuel"
            />
            <PasswordInput
              label="Nouveau mot de passe"
              required
              value={newPass}
              onChange={setNewPass}
              placeholder="Minimum 8 caractères"
            />
            <PasswordInput
              label="Confirmer le nouveau mot de passe"
              required
              value={confirm}
              onChange={setConfirm}
              placeholder="Répétez le nouveau mot de passe"
            />

            {/* Criteria box */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 space-y-2">
              <p className="text-xs font-bold text-gray-600 mb-2">Critères de sécurité :</p>
              {criteria.map((c) => (
                <CriteriaItem key={c.label} label={c.label} met={c.met} />
              ))}
            </div>

            {/* Submit */}
            <button
              onClick={handleUpdate}
              className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all ${
                saved
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              {saved ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Mis à jour !
                </>
              ) : (
                <>
                  <IconLock />
                  Mettre à jour le mot de passe
                </>
              )}
            </button>
          </div>
        </SectionCard>

        {/* ── Section 2: 2FA ── */}
        <SectionCard
          title="Double authentification (2FA)"
          subtitle="Ajoutez une couche de sécurité supplémentaire à votre compte"
          badge={
            <span className={`text-xs font-semibold whitespace-nowrap mt-0.5 ${
              twoFaActive ? "text-emerald-600" : "text-amber-500"
            }`}>
              {twoFaActive ? "● Activé" : "Non activé"}
            </span>
          }
        >
          <div className="space-y-0 divide-y divide-gray-100">
            {/* SMS */}
            <div className="flex items-center justify-between py-4 first:pt-0">
              <div>
                <p className="text-sm font-semibold text-gray-900">Authentification par SMS</p>
                <p className="text-xs text-gray-400 mt-0.5">Recevez un code de vérification par SMS à chaque connexion</p>
              </div>
              <Toggle enabled={smsEnabled} onChange={setSmsEnabled} />
            </div>

            {/* TOTP */}
            <div className="flex items-center justify-between py-4 last:pb-0">
              <div>
                <p className="text-sm font-semibold text-gray-900">Application d'authentification (TOTP)</p>
                <p className="text-xs text-gray-400 mt-0.5">Utilisez Google Authenticator ou Authy</p>
              </div>
              <Toggle enabled={totpEnabled} onChange={setTotpEnabled} />
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}