import React from "react";
import Card1 from "./Cards/Card-1";
import Card2 from "./Cards/Card-2";
import Card3 from "./Cards/Card-3";
import Card4 from "./Cards/Card-4";

const Bloc2: React.FC = () => {
    return (
        <div className="relative w-full bg-color flex items-center justify-center">
            {/* ------------------------------------------- Seconde image en haut à gauche ------------------------------------------- */}
            <img
                src="/public/Image-portfolio/bloc-2/lumiere.png"
                alt="Image en haut à gauche"
                className="absolute top-[-30px] right-0 w-40"
            />
            <div className="flex flex-col items-center">
                {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
                <div className="relative z-20 text-center max-w-2xl mt-12">
                    <p className="text-xl font-medium text-white font-poppins">Ce que je fais</p>
                    <p className="mt-2 text-xs font-poppins text-[#b4b3b3] font-extralight px-8">
                        J’allie créativité et stratégie pour concevoir des expériences numériques captivantes et performantes.
                    </p>
                </div>

                {/* ------------------------------------------- Cards ------------------------------------------- */}
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
        </div>
    );
};

export default Bloc2;