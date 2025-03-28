import React from "react";
import { motion } from "framer-motion";

const Bloc1: React.FC = () => {
    return (
        <div className="relative w-full bg-color flex flex-col items-center justify-center">
            {/* ------------------------------------------- Image principale en arrière-plan ------------------------------------------- */}
            <img
                src="/Image-portfolio/bloc-1/grille.webp"
                alt="Image de fond"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* ------------------------------------------- Seconde image en haut à gauche ------------------------------------------- */}
            <img
                src="/Image-portfolio/bloc-1/lumiere-en-haut-gauche.webp"
                alt="Image en haut à gauche-1"
                className="absolute top-[-30px] left-0 w-60"
            />

            {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
            <div className="relative z-20 text-center max-w-2xl lg:max-w-none mt-4">
                <p className="text-xl md:text-3xl md:mt-6 lg:text-5xl font-medium text-white font-poppins">Création d'expériences numériques</p>
                <p className="text-xl md:text-3xl lg:text-5xl lg:mt-4 font-medium text-white font-poppins">Concepteur & Développeur</p>
                <p className="mt-2 text-xs md:text-lg lg:text-2xl xl:text-lg xl:px-44 2xl:text-2xl lg:mt-10 font-poppins text-[#b4b3b3] font-extralight px-8">
                    Je suis un concepteur et développeur d'applications et développeur web. J'apporte des solutions numériques pour renforcer la présence en ligne de votre marque.
                </p>
            </div>

            {/* ------------------------------------------- Images défilantes sous le texte ------------------------------------------- */}
            <div className="relative w-full overflow-hidden z-10 mt-10">
                <motion.div
                    className="flex w-[300%] md:w-[200%] lg:w-[250%] xl:w-[150%]"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <img src="/Image-portfolio/bloc-1/presentation-1.webp" alt="Image 1" className="w-1/3 h-auto" />
                    <img src="/Image-portfolio/bloc-1/presentation-1.webp" alt="Image 2" className="w-1/3 h-auto" />
                    <img src="/Image-portfolio/bloc-1/presentation-1.webp" alt="Image 3" className="w-1/3 h-auto" />
                    {/* ------------------------------------------- Répétition pour l'effet de boucle infinie ------------------------------------------- */}
                    <img src="/Image-portfolio/bloc-1/presentation-1.webp" alt="Image 1" className="w-1/3 h-auto" />
                    <img src="/Image-portfolio/bloc-1/presentation-1.webp" alt="Image 2" className="w-1/3 h-auto" />
                    <img src="/Image-portfolio/bloc-1/presentation-1.webp" alt="Image 3" className="w-1/3 h-auto" />
                </motion.div>
            </div>
        </div>
    );
};

export default Bloc1;