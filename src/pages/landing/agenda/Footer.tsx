import { Plus } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full py-10">

      {/* Title */}
      <h2 className="font-bold font-[Poppins] text-[clamp(32px,5vw,50px)] leading-[120%] tracking-[-1%]">
        L’annuaire des <span className="text-[#FEDA00]">Membres</span>
      </h2>

      {/* Button */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button className="flex gap-3 justify-center items-center border border-[#999999] hover:bg-[#fafafa] cursor-pointer rounded-[10px] px-6 py-4">
          <Plus className="w-4 h-4" />
          <p className="font-[Poppins] font-semibold text-[16px] leading-[150%] text-center">
            Ajouter un forum
          </p>
        </button>
      </div>

      {/* Search Box */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-[700px] p-5 lg:p-10">
          <div className="flex items-center gap-4">

            {/* Input */}
            <div className="flex items-center gap-3 border border-[#E7E7E7] rounded-full px-4 py-3 flex-1">
              <svg
                className="w-5 h-5 text-[#999999] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>

              <input
                type="text"
                placeholder="Entrez un nom ou une fonction"
                className="flex-1 outline-none bg-transparent text-[#999999] font-[Poppins] text-[14px] leading-[150%]"
              />
            </div>

            {/* Button */}
            <button className="bg-black text-white rounded-full px-6 py-3 font-[Poppins] font-bold text-[14px] leading-[120%] tracking-[-0.01em] whitespace-nowrap cursor-pointer">
              Recherchez
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};
