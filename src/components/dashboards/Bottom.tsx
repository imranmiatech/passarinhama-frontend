import {
    UserPlus,
    MessageCircle,
    Flag,
    Calendar,
    FileText,
    GraduationCap,
} from "lucide-react";
import { UserRound, CalendarDays, Paperclip, ShieldAlert } from "lucide-react";
const activities = [
    {
        id: 1,
        icon: UserPlus,
        text: "Thomas Renard a rejoint la plateforme",
        time: "il y a 23 min",
        tag: "Nouveau",
        type: "success",
    },
    {
        id: 2,
        icon: MessageCircle,
        text: "Sophie Martin a posté dans le forum Défouloir",
        time: "il y a 1h",
    },
    {
        id: 3,
        icon: Flag,
        text: "Un contenu a été signalé dans Petites annonces",
        time: "il y a 2h",
        tag: "Signalement",
        type: "danger",
    },
    {
        id: 4,
        icon: Calendar,
        text: "AG annuelle 2025 ajoutée à l'agenda",
        time: "il y a 3h",
    },
    {
        id: 5,
        icon: FileText,
        text: "Rapport annuel 2024.pdf uploadé",
        time: "il y a 5h",
    },
    {
        id: 6,
        icon: GraduationCap,
        text: "Formation Droit de la copropriété publiée",
        time: "hier, 16h40",
    },
];
const actions = [
    { id: 1, label: "Nouveau membre", icon: UserRound, emoji: null },
    { id: 2, label: "Ajouter événement", icon: CalendarDays, emoji: null },
    { id: 3, label: "Uploader doc", icon: Paperclip, emoji: null },
    { id: 4, label: "Modération", icon: ShieldAlert, emoji: null },
]
const roles = [
    { name: "Admin", count: 20, color: "bg-black", text: "text-black", bg: "bg-gray-200" },
    { name: "Bureau", count: 55, color: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-100" },
    { name: "Membre", count: 196, color: "bg-green-500", text: "text-green-600", bg: "bg-green-100" },
    { name: "Technicopro", count: 36, color: "bg-orange-500", text: "text-orange-600", bg: "bg-orange-100" },
    { name: "Modérateur", count: 45, color: "bg-purple-500", text: "text-purple-600", bg: "bg-purple-100" },
];
export const NEXT_EVENT_DATA = {
    daysUntil: 5,
    title: 'Assemblée Générale 2025',
    date: 'Mer. 9 avril',
    location: 'Paris 8ème',
    attendees: [
        { initials: 'ML', color: '#7c3aed' },
        { initials: 'TR', color: '#ec4899' },
        { initials: 'SM', color: '#06b6d4' },
    ],
    totalAttendees: 42,
};
export const Bottom = () => {
    const total = roles.reduce((sum, r) => sum + r.count, 0);
    const event = NEXT_EVENT_DATA;
    return (
        <div className="w-ful flex flex-col lg:flex-row gap-x-6 gap-y-6 bg-[#f4f5f7]">
            <div className="w-full h-screen bg-[#ffffff] rounded-[16px] p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-[18px] font-semibold text-[#0D0F14]">
                            Activité récente
                        </h2>
                        <p className="text-[13px] text-blue-500">
                            Dernières 24 heures
                        </p>
                    </div>

                    <button className="text-[13px] px-4 py-2 border border-[#E4E7EC] rounded-[10px] cursor-pointer">
                        Tout voir
                    </button>
                </div>

                {/* List */}
                <div className="space-y-5">
                    {activities.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.id} className="flex items-start justify-between">

                                {/* Left */}
                                <div className="flex items-start gap-4">

                                    {/* Icon */}
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-[#E4E7EC]">
                                        <Icon size={18} className="text-green-600" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-[14px]  leading-[18.2px]  font-[Poppins] text-[#0D0F14]">
                                            {item.text}
                                        </p>
                                        <p className="text-[12px] text-blue-500 mt-1">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Tag */}
                                {item.tag && (
                                    <span
                                        className={`text-[12px] px-3 py-1 rounded-full font-medium
                    ${item.type === "success"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-500"
                                            }`}
                                    >
                                        {item.tag}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* ---------------------right part------------------------- */}
            <div className="w-full lg:max-w-1/3">
                <div className="bg-[#F9FAFB] rounded-[20px] p-8">

                    {/* Title */}
                    <h2 className=" text-[14px] font-bold leading-[100%] tracking-[0] font-[Poppins] text-[#0D0F14] mb-8">
                        Répartition des rôles
                    </h2>

                    {/* List */}
                    <div className="space-y-6">
                        {roles.map((role, index) => {
                            const percentage = (role.count / total) * 100;

                            return (
                                <div key={index}>

                                    {/* Top row */}
                                    <div className="flex items-center justify-between mb-2">

                                        {/* Label */}
                                        <span
                                            className={`px-4 py-2 rounded-full text-[12px] font-semibold ${role.bg} ${role.text}`}
                                        >
                                            {role.name}
                                        </span>

                                        {/* Count */}
                                        <span className="text-[14px] text-[#4FACFE] font-medium">
                                            {role.count}
                                        </span>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${role.color} rounded-full`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* part two */}
                <div className="w-full flex flex-col gap-y-5 border border-[#E4E7EC] rounded-[14px] bg-[#FFFFFF] mt-6 p-6">
                    <p className="text-[#0D0F14] font-[Font1] font-bold text-[14px] leading-none align-middle">
                        Prochain événement
                    </p>
                    <div className="p-3.5 flex flex-col gap-y-3 rounded-[10px] bg-[#E8FF5A]">
                        <p className="text-[#5A5A00] font-[Font1] font-bold text-[11px] leading-none tracking-[0.88px] uppercase align-middle">
                            Dans 5 jours
                        </p>
                        <p className="text-[#0D0F14] font-[Font1] font-bold text-[15px] leading-none align-middle">
                            Assemblée Générale 2025
                        </p>
                        <p className="text-[#666666] font-[Font1] font-normal text-[12px] leading-none align-middle">
                            Mer. 9 avril — Paris 8ème
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                                {event.attendees.map((a, i) => (
                                    <div
                                        key={a.initials}
                                        className="w-[28px] h-[28px] rounded-full border-[2px] border-[#E8FF5A] flex items-center justify-center text-[10px] font-bold text-white -mr-2 last:mr-0"
                                        style={{
                                            backgroundColor: a.color,
                                            zIndex: event.attendees.length - i,
                                        }}
                                    >
                                        {a.initials}
                                    </div>
                                ))}
                            </div>
                            <span className="text-[13px] font-semibold text-[#0D0F14] ml-3">
                                +{event.totalAttendees} inscrits
                            </span>
                        </div>
                    </div>

                </div>
                {/* part 3 */}
                <div className="w-full border border-[#E4E7EC] rounded-[16px] bg-white p-6 mt-6">

                    {/* Title */}
                    <h2 className="text-[14px] font-bold leading-none text-[#0D0F14] mb-6">
                        Actions rapides
                    </h2>

                    {/* 2×2 Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {actions.map((action) => {
                            const Icon = action.icon;
                            return (
                                <button
                                    key={action.id}
                                    className="flex flex-col items-center justify-center gap-3 py-7 px-4
                         border border-[#E4E7EC] rounded-[14px] bg-white
                         hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                                >
                                    <Icon size={32} className="text-[#6B7280]" strokeWidth={1.5} />
                                    <span className="text-[13px] font-semibold text-[#0D0F14] leading-none">
                                        {action.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
