import React from "react";
import { motion } from "framer-motion";

const Bloc1: React.FC = () => {
    return (
        <div className="relative w-full bg-color flex items-center justify-center">
            {/* ------------------------------------------- Image principale en arrière-plan ------------------------------------------- */}
            <img
                src="/public/Image-portfolio/bloc-1/grille.png"
                alt="Image de fond"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* ------------------------------------------- Seconde image en haut à gauche ------------------------------------------- */}
            <img
                src="/public/Image-portfolio/bloc-1/lumiere-en-haut-gauche.png"
                alt="Image en haut à gauche"
                className="absolute top-[-30px] left-0 w-40"
            />

            {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
            <div className="relative z-20 text-center max-w-2xl mt-4">
                <p className="text-xl font-medium text-white font-poppins">Création d'expériences numériques</p>
                <p className="text-xl font-medium text-white font-poppins">Concepteur & Développeur</p>
                <p className="mt-2 text-xs font-poppins text-[#b4b3b3] font-extralight px-8">
                    Je suis un concepteur et développeur d'applications et développeur web. J'apporte des solutions numériques pour renforcer la présence en ligne de votre marque.
                </p>

                {/* ------------------------------------------- Images défilantes sous le texte ------------------------------------------- */}
                <div className="relative w-full overflow-hidden  z-10 mt-10">
                    <motion.div
                        className="flex w-[300%]"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        <img src="/public/Image-portfolio/bloc-1/Untitled-1.png" alt="Image 1" className="w-1/3" />
                        <img src="/public/Image-portfolio/bloc-1/Untitled-1.png" alt="Image 2" className="w-1/3" />
                        <img src="/public/Image-portfolio/bloc-1/Untitled-1.png" alt="Image 3" className="w-1/3" />
                        {/* ------------------------------------------- Répétition pour l'effet de boucle infinie ------------------------------------------- */}
                        <img src="/public/Image-portfolio/bloc-1/Untitled-1.png" alt="Image 1" className="w-1/3" />
                        <img src="/public/Image-portfolio/bloc-1/Untitled-1.png" alt="Image 2" className="w-1/3" />
                        <img src="/public/Image-portfolio/bloc-1/Untitled-1.png" alt="Image 3" className="w-1/3" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Bloc1;
