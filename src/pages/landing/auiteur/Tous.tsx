import { Plus } from "lucide-react";

function Tous() {
    const events = [
        {
            date: "Défouloir",
            text: "on peut dire ce que l'on veut",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Petites annonces",
            text: "lieu d'échange avec les partenaires de la compagnie",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Défouloir",
            text: "lieu d'échange avec les partenaires de la compagnie",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Petites annonces",
            text: "le forum dédié aux échanges du conseil d'Administration et du Bureau",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Défouloir",
            text: "on peut dire ce que l'on veut",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Petites annonces",
            text: "lieu d'échange avec les partenaires de la compagnie",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Défouloir",
            text: "lieu d'échange avec les partenaires de la compagnie",
            sujets: "128 sujets",
            type: "Consulter",
        },
        {
            date: "Petites annonces",
            text: "le forum dédié aux échanges du conseil d'Administration et du Bureau",
            sujets: "128 sujets",
            type: "Consulter",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-10">

            {/* Title */}
            <h2 className=" text-center font-bold font-[Poppins] text-[clamp(32px,5vw,50px)] leading-[120%] tracking-[-1%]">
                <span className="text-[#FEDA00]">Tous les</span>  Forums
            </h2>

      
            

            {/* Cards */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 justify-items-center">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="w-full flex flex-col gap-4 border border-[#E7E7E7] rounded-[20px] p-7"
                    >
                        <p className="font-bold text-[20px] text-[#8A8C91] font-[Poppins]">
                            {event.date}
                        </p>



                        <p className="font-normal text-[12px] text-[#999999] font-[Poppins]">
                            {event.text}
                        </p>
                        <div className="mt-auto">
                            <div className="w-full flex justify-between">
                                <p className="text-[#999999] font-[Poppins] font-bold text-[12px] leading-[150%] tracking-[-0.02em] uppercase"> {event.sujets}</p>
                                <p className="text-[#000000] font-[Poppins] font-bold text-[12px] leading-[150%] tracking-[-0.02em] uppercase"> {event.sujets}</p>
                            </div>
                            <button className="flex gap-3 mt-5 w-full justify-center items-center border border-[#999999] hover:bg-[#fafafa] rounded-[10px] px-3 py-4 cursor-pointer">
                                <Plus className="w-4 h-4" />
                                <p className="font-[Poppins] font-semibold text-[16px] leading-[150%] text-center">
                                    Ajouter un post
                                </p>
                            </button>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Tous;