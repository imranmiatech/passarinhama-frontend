import { Plus} from "lucide-react"
type StatCardProps = {
    title: string;
    value: number;
    change: string;
    positive: boolean;
};
const statsData = [
    {
        title: "Discussions",
        value: 1284,
        change: "+18 cette semaine",
        positive: true,
    },
    {
        title: "Messages",
        value: 947,
        change: "+143 cette semaine",
        positive: true,
    },
    {
        title: "En attente modération",
        value: 7,
        change: "Signalements + validation",
        positive: false,
    },
    {
        title: "Membres actifs",
        value: 43,
        change: "Ces 30 derniers jours",
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
                className={` text-[13px] font-medium ${positive ? "text-green-600" : "text-[#5A6172]"
                    }`}
            >
                {positive ? "↑" : ""} {change}
            </p>
        </div>
    );
};
const Top = () => {

    return (
        <div className="w-full flex flex-col bg-[#f4f5f7] gap-y-6 justify-center">
            <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-y-2.5">
                    <h2 className="text-[22px] font-bold leading-[100%] tracking-[-0.44px] text-[#0D0F14] font-[Poppins]">
                        Forums de la communauté
                    </h2>
                    <p className="text-[13px] font-normal leading-[100%] tracking-[0] text-[#5A6172] font-[Poppins]">
                       Espace d'échange entre membres — copropriétaires, syndics, professionnels
                    </p>
                </div>
                <div className="flex gap-x-4 mt-5 md:mt-0">
                    <button className="flex justify-center items-center gap-x-4 text-center px-5 py-3 border border-[#E4E7EC] hover:bg-black text-[#0D0F14] hover:text-white  rounded-[10px] cursor-pointer transition-colors duration-200">
                        <Plus className="w-4 h-4" />
                        <p className="text-[13.5px] font-semibold leading-[100%] tracking-[0] font-[Poppins]">Nouveau sujet</p>
                    </button>
                    <button className="flex justify-center items-center gap-x-4 text-center px-5 py-3 border border-[#E4E7EC] hover:bg-black text-[#0D0F14] hover:text-white  rounded-[10px] cursor-pointer transition-colors duration-200">
                        <Plus className="w-4 h-4" />
                        <p className="text-[13.5px] font-semibold leading-[100%] tracking-[0] font-[Poppins]">Gérer les forums</p>
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