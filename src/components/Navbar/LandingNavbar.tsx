import { useState } from "react";
import {
    LogOut, ExternalLink, Plus, X,
    MessageSquare, GraduationCap, Calendar,
    FileText, Folder, Users, Settings2,
    ChevronDown, ChevronUp, Menu, ShieldCheck
} from "lucide-react";
import NavLogo from "../../assets/landing/nav_image.jpg";

// ─── DATA CONFIG ──────────────────────────────────────────────────────────────

const FORUM_ITEMS = [
    "Défouloir", "Petites annonces", "Technicopro",
    "CA et bureau", "Commission admission", "Commission formation",
    "Entraide", "Comité des copropriétés",
];

const NAV_ITEMS = [
    { icon: GraduationCap, label: "Formations" },
    { icon: Calendar,      label: "Agenda"     },
    { icon: FileText,      label: "Articles"   },
    { icon: Folder,        label: "Fichiers"   },
    { icon: Users,         label: "Annuaire des membres" },
    { icon: Settings2,     label: "Commissions" },
];

const ADMIN_ITEMS = ["Gestion administration", "Gestion des fichiers"];

const ONLINE_USERS = [
    { initials: "MC", name: "Marc Colin",    color: "bg-[#1A3D2E]" },
    { initials: "SR", name: "Sophie Renard", color: "bg-[#1A3D2E]" },
    { initials: "AL", name: "Alain Lambert", color: "bg-[#1A3D2E]" },
    { initials: "EJ", name: "Emma Joly",     color: "bg-[#1A3D2E]" },
];

const USER = {
    initials: "KS",
    name: "Karine Scherrer",
    role: "Accès total administratrice",
};

// ─────────────────────────────────────────────────────────────────────────────

export const LandingNavbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [forumsOpen, setForumsOpen] = useState(true);
    const [activeNav, setActiveNav] = useState("Formations");

    return (
        <>
            {/* ═══════════════════════════════════════════════
                NAVBAR
            ═══════════════════════════════════════════════ */}
            <nav className="w-full bg-[#797979] flex items-center justify-between px-0  relative z-50">

                {/* LEFT — Logo block */}
                <div className="flex items-center bg-[#1A1A1A] h-full px-4 gap-x-3 min-w-[260px] py-5 lg:py-8 shrink-0 z-50">
                    <div className="w-12 h-12 rounded-[8px] overflow-hidden shrink-0">
                        <img src={NavLogo} alt="logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-white font-[Poppins] font-bold text-[15px] leading-tight">ARCHICOPRO</p>
                        <p className="text-white/50 font-[Poppins] text-[11px] leading-tight">BACK OFFICE</p>
                    </div>
                </div>

                {/* CENTER — User pill + Add forum (hidden on mobile) */}
                <div className="hidden md:flex items-center gap-x-4 ml-6">
                    {/* User pill */}
                    <div className="flex items-center gap-x-3 bg-[#1A1A1A] rounded-[10px] px-3 py-2 pr-4">
                        <div className="w-8 h-8 rounded-full bg-[#FEDA00] flex items-center justify-center shrink-0">
                            <span className="text-[#1A1A1A] text-[11px] font-bold">{USER.initials}</span>
                        </div>
                        <div className="flex flex-col py-2">
                            <span className="text-white text-[16px] font-semibold leading-tight">{USER.name}</span>
                            <span className="text-[#FEDA00] text-[14px] leading-tight">{USER.role}</span>
                        </div>
                        <button className="ml-2 text-white/50 hover:text-white transition-colors cursor-pointer">
                            <LogOut size={15} />
                        </button>
                    </div>

                    {/* Add forum button */}
                    <button className="flex items-center gap-x-2 bg-white hover:bg-gray-100 transition-colors text-[#1A1A1A] font-semibold text-[16px] px-5 py-2.5 rounded-[8px] cursor-pointer whitespace-nowrap">
                        <Plus size={15} />
                        Ajouter un forum
                    </button>
                </div>

                {/* RIGHT — Ancien extranet + mobile menu */}
                <div className="flex items-center gap-x-3 px-4 ml-auto">
                    {/* Ancien extranet (hidden on mobile) */}
                    <button className="text-base leading-[150%] text-[#212121] font-semibold bg-amber-400 py-2.5 px-6 rounded-[10px] cursor-pointer">Rechercher</button>
                    <button className="hidden md:flex items-center gap-x-2 bg-[#1A1A1A] hover:bg-[#2a2a2a] transition-colors text-white font-semibold text-[13px] px-5 py-3 rounded-[8px] cursor-pointer whitespace-nowrap">
                        Ancien extranet
                        <ExternalLink size={13} />
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-[8px] bg-[#1A1A1A] text-white cursor-pointer"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            {/* ═══════════════════════════════════════════════
                MOBILE DRAWER
            ═══════════════════════════════════════════════ */}
            {/* Backdrop */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-50 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Drawer panel */}
            <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#111111] z-[60] flex flex-col overflow-y-auto transition-transform duration-300 md:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>

                {/* Drawer header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                    <div className="flex items-center gap-x-3">
                        <div className="w-9 h-9 rounded-[6px] overflow-hidden">
                            <img src={NavLogo} alt="logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-[13px]">ARCHICOPRO</p>
                            <p className="text-white/40 text-[10px]">BACK OFFICE</p>
                        </div>
                    </div>
                    <button onClick={() => setMobileOpen(false)} className="text-white/50 hover:text-white cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                {/* User info */}
                <div className="flex items-center gap-x-3 px-4 py-4 border-b border-white/10">
                    <div className="w-9 h-9 rounded-full bg-[#FEDA00] flex items-center justify-center shrink-0">
                        <span className="text-[#1A1A1A] text-[11px] font-bold">{USER.initials}</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-[12px] font-semibold">{USER.name}</p>
                        <p className="text-[#FEDA00] text-[10px]">{USER.role}</p>
                    </div>
                    <button className="text-white/40 hover:text-white cursor-pointer">
                        <LogOut size={15} />
                    </button>
                </div>

                <div className="flex flex-col px-3 py-4 gap-y-1 flex-1">

                    {/* Forums */}
                    <button
                        onClick={() => setForumsOpen(!forumsOpen)}
                        className="flex items-center justify-between w-full text-white text-[13px] font-semibold py-2 px-2 rounded-md hover:bg-white/5 cursor-pointer transition-colors"
                    >
                        <span className="flex items-center gap-x-2">
                            <MessageSquare size={15} />
                            Forums
                        </span>
                        {forumsOpen ? <ChevronUp size={13} className="text-white/40" /> : <ChevronDown size={13} className="text-white/40" />}
                    </button>

                    {forumsOpen && (
                        <div className="flex flex-col pl-6 gap-y-0.5 mb-2">
                            {FORUM_ITEMS.map((item) => (
                                <button key={item} className="text-left text-[12px] text-white/50 hover:text-white py-1 px-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer">
                                    {item}
                                </button>
                            ))}
                            <button className="text-left text-[12px] text-[#FEDA00]/80 hover:text-[#FEDA00] py-1 px-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-x-1">
                                <Plus size={11} /> ajouter un forum
                            </button>
                        </div>
                    )}

                    <div className="h-px bg-white/10 my-1" />

                    {/* Nav items */}
                    {NAV_ITEMS.map(({ icon: Icon, label }) => (
                        <button
                            key={label}
                            onClick={() => { setActiveNav(label); setMobileOpen(false); }}
                            className={`flex items-center gap-x-3 text-[13px] py-2 px-2 rounded-md transition-colors cursor-pointer w-full text-left
                                ${activeNav === label ? "text-white bg-white/10 font-semibold" : "text-white/60 hover:text-white hover:bg-white/5"}`}
                        >
                            <Icon size={15} />
                            {label}
                        </button>
                    ))}

                    <div className="h-px bg-white/10 my-1" />

                    {/* Admin */}
                    <p className="text-[10px] font-bold text-[#4CAF82] uppercase tracking-widest px-2 mb-1 flex items-center gap-x-1">
                        <ShieldCheck size={11} /> Administration
                    </p>
                    {ADMIN_ITEMS.map((item) => (
                        <button key={item} className="text-left text-[12px] text-white/60 hover:text-white py-1.5 px-2 rounded-md hover:bg-white/5 transition-colors cursor-pointer">
                            {item}
                        </button>
                    ))}

                    <div className="h-px bg-white/10 my-2" />

                    {/* Online users */}
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest px-2 mb-2">
                        En ligne ({ONLINE_USERS.length})
                    </p>
                    <div className="flex flex-col gap-y-3">
                        {ONLINE_USERS.map((u) => (
                            <div key={u.name} className="flex items-center gap-x-3 px-2 py-1 rounded-md hover:bg-white/5 cursor-pointer transition-colors">
                                <div className="relative shrink-0">
                                    <div className={`w-9 h-9 rounded-full ${u.color} flex items-center justify-center`}>
                                        <span className="text-[#00E38D] text-[10px] font-bold">{u.initials}</span>
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00E38D] border-2 border-[#111111]" />
                                </div>
                                <span className="text-[12px] text-white font-medium">{u.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Ancien extranet */}
                    <div className="mt-4">
                        <button className="flex items-center gap-x-2 w-full justify-center bg-[#1A1A1A] hover:bg-[#2a2a2a] transition-colors text-white font-semibold text-[13px] px-5 py-2.5 rounded-[8px] cursor-pointer">
                            Ancien extranet <ExternalLink size={13} />
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};