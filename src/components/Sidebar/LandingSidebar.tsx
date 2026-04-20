import { useState } from "react";
import {
    MessageSquare,
    GraduationCap,
    Calendar,
    FileText,
    Folder,
    Users,
    Settings2,
    ChevronDown,
    ChevronUp,
    ShieldCheck,
    Menu,
} from "lucide-react";

// ─── DATA CONFIG — easy to change ────────────────────────────────────────────

const FORUM_ITEMS = [
    "Défouloir",
    "Petites annonces",
    "Technicopro",
    "CA et bureau",
    "Commission admission",
    "Commission formation",
    "Entraide",
    "Comité des copropriétés",
];

const NAV_ITEMS = [
    { icon: GraduationCap, label: "Formations" },
    { icon: Calendar, label: "Agenda" },
    { icon: FileText, label: "Articles" },
    { icon: Folder, label: "Fichiers" },
    { icon: Users, label: "Annuaire des membres" },
    { icon: Settings2, label: "Commissions" },
];

const ADMIN_ITEMS = [
    "Gestion administration",
    "Gestion des fichiers",
];

const ONLINE_USERS = [
    { initials: "MC", name: "Marc Colin", color: "bg-[#4CAF82]" },
    { initials: "SR", name: "Sophie Renard", color: "bg-[#4CAF82]" },
    { initials: "AL", name: "Alain Lambert", color: "bg-[#5B8DEF]" },
    { initials: "EJ", name: "Emma Joly", color: "bg-[#E67E5A]" },
];

// ─────────────────────────────────────────────────────────────────────────────

export const LandingSidebar = () => {
    const [forumsOpen, setForumsOpen] = useState(true);
    const [activeNav, setActiveNav] = useState("Formations");

    return (
        <>
            {/* ── MOBILE: hidden ── */}
            {/* ── MD: icons only ── */}
            {/* ── LG: full sidebar ── */}

            {/* MD icon-only bar */}
            <aside className="hidden md:flex lg:hidden flex-col items-center bg-[#111111] h-screen w-[60px] py-5 gap-y-6 h-full left-0  z-40 border-r border-white/5">
                <MessageSquare size={20} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
                {NAV_ITEMS.map(({ icon: Icon, label }) => (
                    <button
                        key={label}
                        title={label}
                        onClick={() => setActiveNav(label)}
                        className={`cursor-pointer transition-colors ${activeNav === label ? "text-[#FEDA00]" : "text-white/60 hover:text-white"}`}
                    >
                        <Icon size={20} />
                    </button>
                ))}
                <div className="mt-auto flex flex-col gap-y-3 items-center">
                    <ShieldCheck size={18} className="text-[#4CAF82]" />
                    {ONLINE_USERS.map((u) => (
                        <div
                            key={u.name}
                            title={u.name}
                            className={`w-7 h-7 rounded-full ${u.color} flex items-center justify-center text-white text-[9px] font-bold cursor-pointer`}
                        >
                            {u.initials}
                        </div>
                    ))}
                </div>
            </aside>

            {/* LG full sidebar */}
          <aside className="hidden lg:flex flex-col bg-[#111111] h-full w-[260px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-r border-white/5">
                <div className="flex flex-col py-5 px-4 gap-y-1">

                    {/* ── Forums section ── */}
                    <button
                        onClick={() => setForumsOpen(!forumsOpen)}
                        className="flex items-center justify-between w-full text-white text-[13px] font-semibold py-2 px-2 rounded-md hover:bg-white/5 cursor-pointer transition-colors"
                    >
                        <span className="flex items-center text-[18px] gap-x-2">
                            <Menu size={18} />
                            Forums
                        </span>
                        {forumsOpen ? <ChevronUp size={14} className="text-white/40" /> : <ChevronDown size={14} className="text-white/40" />}
                    </button>

                    {forumsOpen && (
                        <div className="flex flex-col pl-6 gap-y-0.5 mb-2">
                            {FORUM_ITEMS.map((item) => (
                                <button
                                    key={item}
                                    className="text-left text-[16px] text-white/50 hover:text-white py-1 px-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                                >
                                    {item}
                                </button>
                            ))}
                            <button className="text-left text-[16px] text-[#FEDA00]/80 hover:text-[#FEDA00] py-1 px-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer">
                                + ajouter un forum
                            </button>
                        </div>
                    )}

                    {/* ── Divider ── */}
                    <div className="h-px bg-white/10 my-2" />

                    {/* ── Main nav ── */}
                    {NAV_ITEMS.map(({ icon: Icon, label }) => (
                        <button
                            key={label}
                            onClick={() => setActiveNav(label)}
                            className={`flex items-center gap-x-3 text-[18px] py-2 px-2 rounded-md transition-colors cursor-pointer w-full text-left
                                ${activeNav === label
                                    ? "text-white bg-white/10 font-semibold"
                                    : "text-white/60 hover:text-white hover:bg-white/5 font-normal"
                                }`}
                        >
                            <Icon size={16} />
                            {label}
                        </button>
                    ))}

                    {/* ── Divider ── */}
                    <div className="h-px bg-white/10 my-2" />

                    {/* ── Administration ── */}
                    <p className="text-[18px] font-bold text-[#4CAF82] uppercase tracking-widest px-2 mb-1">Administration</p>
                    {ADMIN_ITEMS.map((item) => (
                        <button
                            key={item}
                            className="text-left text-[16px] text-white/60 hover:text-white py-1.5 px-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}

                    {/* ── Divider ── */}
                    <div className="h-px bg-white/10 my-3" />

                    {/* ── Online users ── */}
                    {/* ── Online users ── */}
                    <p className="text-[13px] font-bold text-white/40 uppercase tracking-widest px-2 mb-4">
                        En ligne ({ONLINE_USERS.length})
                    </p>
                    <div className="flex flex-col gap-y-5">
                        {ONLINE_USERS.map((u) => (
                            <div key={u.name} className="flex items-center gap-x-4 px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer transition-colors">
                                {/* Avatar with online dot */}
                                <div className="relative shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-[#1A3D2E] flex items-center justify-center">
                                        <span className="text-[#00E38D] text-[13px] font-bold">{u.initials}</span>
                                    </div>
                                    {/* Online indicator dot */}
                                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#00E38D] border-2 border-[#111111]" />
                                </div>
                                {/* Name */}
                                <span className="text-[15px] font-semibold text-white">{u.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

