import { Plus, RotateCw } from "lucide-react"
type StatCardProps = {
    title: string;
    value: number;
    change: string;
    positive: boolean;
};
const statsData = [
    {
        title: "MEMBRES ACTIFS",
        value: 248,
        change: "+12 ce mois",
        positive: true,
    },
    {
        title: "NOUVEAUX CE MOIS",
        value: 17,
        change: "+3 vs mois dernier",
        positive: true,
    },
    {
        title: "DISCUSSIONS ACTIVES",
        value: 34,
        change: "-2 vs hier",
        positive: false,
    },
    {
        title: "SIGNALEMENTS EN ATTENTE",
        value: 7,
        change: "À traiter",
        positive: false,
    },
];
const StatCard = ({ title, value, change, positive }: StatCardProps) => {
    return (
        <div className="bg-[#f4f5f7] rounded-[16px] p-6 flex flex-col gap-y-4 w-full shadow-sm">
            <p className="text-[12px] font-medium leading-[100%] tracking-[0.72px] text-[#5A6172] uppercase font-[Poppins]">
                {title}
            </p>

            <h2 className="text-[28px] font-bold leading-[100%] tracking-[-0.84px] text-[#0D0F14] font-[Poppins] min-w-[96px] max-w-[112px]">
                {value}
            </h2>

            <p
                className={` text-[13px] font-medium ${positive ? "text-green-600" : "text-red-500"
                    }`}
            >
                {positive ? "↑" : "↓"} {change}
            </p>
        </div>
    );
};
const Top = () => {

    return (
        <div className="w-full flex flex-col gap-y-6 justify-center">
            <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-y-2.5">
                    <h2 className="text-[22px] font-bold leading-[100%] tracking-[-0.44px] text-[#0D0F14] font-[Poppins]">
                        Bonjour Lahoucine 👋
                    </h2>
                    <p className="text-[13px] font-normal leading-[100%] tracking-[0] text-[#5A6172] font-[Poppins]">
                        Voici l'activité de la plateforme — Jeudi 3 avril 2025
                    </p>
                </div>
                <div className="flex gap-x-4 mt-5 md:mt-0">
                    <button className="flex justify-center items-center gap-x-4 text-center px-5 py-3 border border-[#E4E7EC] hover:bg-black text-[#0D0F14] hover:text-white  rounded-[10px] cursor-pointer transition-colors duration-200">
                        <RotateCw className="w-4 h-4" />
                        <p className="text-[13.5px] font-semibold leading-[100%] tracking-[0] font-[Poppins]">Actualiser</p>
                    </button>
                    <button className="flex justify-center items-center gap-x-4 text-center px-5 py-3 border border-[#E4E7EC] hover:bg-black text-[#0D0F14] hover:text-white  rounded-[10px] cursor-pointer transition-colors duration-200">
                        <Plus className="w-4 h-4" />
                        <p className="text-[13.5px] font-semibold leading-[100%] tracking-[0] font-[Poppins]">Ajouter un membre</p>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((item, index) => (
                    <StatCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Top