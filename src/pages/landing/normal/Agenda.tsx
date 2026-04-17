import { Plus } from "lucide-react";

function Agenda() {
  const events = [
    {
      date: "19 mai 2026",
      subtitle: "CONFÉRENCES, COLLOQUES",
      text: "9EMES RENCONTRES TECHNIQUES ET PATRIMONIALES DE LA COPROPRIETE",
    },
    {
      date: "24 juin 2026",
      subtitle: "ASSEMBLÉES GÉNÉRALES",
      text: "RÉUNION ANNUELLE DES SYNDICS ET GESTIONNAIRES IMMOBILIERS",
    },
    {
      date: "10 sept 2026",
      subtitle: "ATELIERS PRATIQUES",
      text: "FORMATION SUR LA GESTION DES CHARGES ET BUDGETS PRÉVISIONNELS",
    },
    {
      date: "15 nov 2026",
      subtitle: "SÉMINAIRES EXPERTS",
      text: "ACTUALITÉS JURIDIQUES ET FISCALES EN COPROPRIÉTÉ 2026",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      
      {/* Title */}
      <h2 className=" text-center font-bold font-[Poppins] text-[clamp(32px,5vw,50px)] leading-[120%] tracking-[-1%]">
       <span className="text-[#FEDA00]">Agenda</span>  de la Compagnie
      </h2>

      {/* Buttons */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
        
        

        <button className="flex gap-3 justify-center items-center border border-[#999999] hover:bg-[#fafafa]  cursor-pointer rounded-[10px] px-6 py-4">
        
          <p className="font-[Poppins] font-semibold text-[16px] leading-[150%] text-center">
            Voir tout l’agenda
          </p>
        </button>

      </div>

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

            <p className="font-bold text-[12px] uppercase text-black font-[Poppins]">
              {event.subtitle}
            </p>

            <p className="font-normal text-[12px] text-[#999999] font-[Poppins]">
              {event.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Agenda;