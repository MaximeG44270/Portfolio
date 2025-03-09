import React from "react";

const Menu1: React.FC = () => {
  return (
    <div className="flex flex-col">
        <p className="text-white font-poppins text-lg font-bold">Navigations</p>
        <p className="text-[#b4b3b3] text-poppins text-xs text-light mt-4">accueil</p>
        <p className="text-[#b4b3b3] text-poppins text-xs text-light mt-2">Services</p>
        <p className="text-[#b4b3b3] text-poppins text-xs text-light mt-2">Compétences</p>
        <p className="text-[#b4b3b3] text-poppins text-xs text-light mt-2">Réalisations</p>
    </div>
  );
};

export default Menu1;