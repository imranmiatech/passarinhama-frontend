import Agenda from "./agendaAdmin/Agenda";
import Derniers from "./agendaAdmin/Derniers";
import DerniersPosts from "./agendaAdmin/DerniersPosts";
import { Footer } from "./agendaAdmin/Footer";
import { Formation } from "./agendaAdmin/Formation";
import Tous from "./agendaAdmin/Tous";


const CommissionAgendaAdmin = () => {
    const buttons = [
        "Gestion Articles",
        "Gestion Fichiers",
        "Gestion Membres",
        "Commissions",
    ];
    return (
        <div>
            <div className="bg-black py-12 px-10">
                <h2
                    className="text-white text-center font-bold mb-8"
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "50px",
                        lineHeight: "120%",
                        letterSpacing: "-1%",
                    }}
                >
                    Gérer mes modules
                </h2>
                <div className="flex flex-col md:flex-row gap-y-5 gap-8">
                    {buttons.map((label) => (
                        <button
                            key={label}
                            className="bg-white hover:bg-[#b1aeae] text-black font-bold px-6 py-4 rounded-2xl flex-1 cursor-pointer transition-colors duration-200"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "20px",
                                lineHeight: "120%",
                                letterSpacing: "-1%",
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <Agenda />
            <Formation />
            <Derniers />
            <DerniersPosts />
            <Tous />
            <Footer />
        </div>
    )
}

export default CommissionAgendaAdmin