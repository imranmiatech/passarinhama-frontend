export function Formation() {
  const events = [
    {
      date: "19 mai 2026",
      subtitle: "Nom de la formation Amiante en Copropriété",
     
    },
    {
      date: "24 juin 2026",
      subtitle: "intuition créatrice et méthodes constructives innovantes",
     
    },
    {
      date: "10 sept 2026",
      subtitle: "Nom de la formation",
     
    },
    {
      date: "15 nov 2026",
      subtitle: "Nom de la formation",
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      
      {/* Title */}
      <h2 className=" text-center font-bold font-[Poppins] text-[clamp(32px,5vw,50px)] leading-[120%] tracking-[-1%]">
       <span className="text-[#FEDA00]">Formation mensuelles</span>  
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

            <p className="font-bold text-[12px] uppercase text-black font-[Poppins]">
              {event.subtitle}
            </p>

            
          </div>
        ))}
      </div>

    </div>
  );
}

