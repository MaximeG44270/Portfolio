import React from "react";
import Realisation1 from "./Realisations/Realisation1";

const Bloc4: React.FC = () => {
  return (
    <div id="realisations" className="relative w-full bg-color flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
        <div className="relative z-20 text-center max-w-2xl mt-12">
          <p className="text-xl font-medium text-white font-poppins">Mes réalisations</p>
          <p className="mt-2 text-xs font-poppins text-[#b4b3b3] font-extralight px-4">
            Une sélection soigneusement choisie de projets où la créativité rencontre la stratégie.
          </p>
        </div>
        <Realisation1 />
      </div>
    </div>
  );
};

export default Bloc4;