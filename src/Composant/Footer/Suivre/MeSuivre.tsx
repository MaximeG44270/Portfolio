import React from "react";
import Reseaux from "./Reseau";

const MeSuivre: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
            <p className="text-white font-poppins text-lg font-bold">Pour me suivre</p>
            <Reseaux />
            <p className="text-[#b4b3b3] text-xs font-poppins font-light mt-2">Mail: gilbert.maxime01@gmail.com</p>
        </div>
  );
};

export default MeSuivre;