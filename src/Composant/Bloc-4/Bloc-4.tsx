import React from "react";
import Realisation1 from "./Realisations/Realisation1";
import Realisation2 from "./Realisations/Realisation2";

const Bloc4: React.FC = () => {
  return (
    <div id="realisations" className="relative w-full bg-color flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
        <div className="relative z-20 text-center max-w-2xl lg:max-w-none mt-12">
          <p className="text-xl md:text-3xl lg:text-5xl md:mt-6 font-medium text-white font-poppins">Mes réalisations</p>
          <p className="mt-2 lg:mt-6 text-xs md:text-lg lg:text-2xl xl:text-lg 2xl:text-2xl font-poppins text-[#b4b3b3] font-extralight px-4">
            Une sélection soigneusement choisie de projets où la créativité rencontre la stratégie.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Realisation1 />
          <Realisation2 />
        </div>
      </div>
    </div>
  );
};

export default Bloc4;