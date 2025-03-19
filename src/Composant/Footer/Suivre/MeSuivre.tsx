import React from "react";
import Reseaux from "./Reseau";

const MeSuivre: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 md:mt-16">
            <p className="text-white font-poppins text-lg md:text-3xl lg:text-5xl font-bold">Pour me suivre</p>
            <Reseaux />
            <p className="text-[#b4b3b3] text-xs font-poppins font-light mt-2 md:text-lg lg:text-2xl md:mt-6">Mail: mgdigital.dev@gmail.com</p>
        </div>
  );
};

export default MeSuivre;