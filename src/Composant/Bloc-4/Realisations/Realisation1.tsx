import React from "react";
import TechBadge from "../TechBadge/TechBadge";

const Realisation1: React.FC = () => {
  return (
    <div>
        <img src="/Image-portfolio/bloc-4/Projet-1.png" alt="Image 1" className="mt-8 px-4" />

        {/* ------------------------------------------- Utilisation du composant TechBadge ------------------------------------------- */}
        <div className="flex self-start ml-4 mt-4 items-center">
            <TechBadge techs={["TypeScript", "HTML", "CSS"]} />
            <a 
              href="https://medlogiq.netlify.app/auth/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" ml-10 text-sm font-medium font-poppins text-white text-center"
            >
              Visite du site
            </a>
        </div>
        <div className="flex self-start ml-4 mt-2 mb-12 items-center">
            <TechBadge techs={["React", "Tailwind",]}/>
        </div>
    </div>
  );
};

export default Realisation1;