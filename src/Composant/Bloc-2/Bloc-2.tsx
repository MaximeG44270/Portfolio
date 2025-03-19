import React from "react";
import Card1 from "./Cards/Card-1";
import Card2 from "./Cards/Card-2";
import Card3 from "./Cards/Card-3";
import Card4 from "./Cards/Card-4";

const Bloc2: React.FC = () => {
    return (
        <div id="services" className="relative w-full bg-color flex items-center justify-center">
            {/* ------------------------------------------- Seconde image en haut à gauche ------------------------------------------- */}
            <img
                src="/Image-portfolio/bloc-2/lumiere.webp"
                alt="Image en haut à gauche"
                className="absolute top-[-30px] right-0 w-40"
            />
            <div className="flex flex-col items-center">
                {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
                <div className="relative z-20 text-center max-w-2xl lg:max-w-none lg:px-5 mt-12">
                    <p className="text-xl md:text-3xl md:mt-6 lg:text-5xl lg:mt-12 font-medium text-white font-poppins">Ce que je fais</p>
                    <p className="mt-2 text-xs md:text-lg lg:text-2xl lg:mt-10 xl:text-lg xl:px-44 2xl:text-2xl font-poppins text-[#b4b3b3] font-extralight px-8">
                        J’allie créativité et stratégie pour concevoir des expériences numériques captivantes et performantes.
                    </p>
                </div>

                {/* ------------------------------------------- Cards ------------------------------------------- */}
                <div className="lg:flex lg:flex-col">
                    <div className="lg:flex lg:flex-row">
                        <Card1 />
                        <Card2 />
                    </div>
                    <div className="lg:flex lg:flex-row">
                        <Card3 />
                        <Card4 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bloc2;