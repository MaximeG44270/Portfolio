import React from "react";
import Menu1 from "./Menu/Menu1";
import Menu2 from "./Menu/Menu2";
import MeSuivre from "./Suivre/MeSuivre";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0d0a1c] flex flex-col items-center justify-center">
        <img
            src="/public/Image-portfolio/Footer/lumiere-droite.png"
            alt="Image en haut à gauche"
            className="absolute top-[-5px] w-72 right-0"
        />
        <div className="flex flex-col">
            {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
            <div className="relative z-20 text-center max-w-2xl mt-12">
                <p className="text-5xl font-bold text-white font-poppins">MG Digital</p>
                <p className="mt-6 text-xs font-poppins text-[#b4b3b3] font-extralight px-4">
                    Création, conception et développement. Je vous accompagne afin de promouvoir votre identité.
                </p>
            </div>
            {/* ------------------------------------------- Contenue Double menu ------------------------------------------- */}
            <div className="flex justify-around mt-12">
                <Menu1 />
                <Menu2 />
            </div>
            {/* ------------------------------------------- Contenu me suivre ------------------------------------------- */}
            <MeSuivre />
        </div>
        <img
            src="/public/Image-portfolio/Footer/mg-digital.png"
            alt="Image en haut à gauche"
            className="w-full mt-4"
        />
        <p className="mt-4 text-xs font-poppins text-[#b4b3b3] font-extralight px-4">
            © 2025 MaxDigital. Tous droits réservés
        </p>
    </div>
  );
};

export default Footer;