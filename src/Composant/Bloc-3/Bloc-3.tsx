import React from "react";
import Carousel1 from "./Carousel-1/Carousel-1";
import Carousel2 from "./Carousel-2/Carousel-2";

const Bloc3: React.FC = () => {
    return (
        <div className="relative w-full bg-color flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                {/* ------------------------------------------- Contenu texte ------------------------------------------- */}
                <div className="relative z-20 text-center max-w-2xl mt-12">
                    <p className="text-xl font-medium text-white font-poppins">Toutes mes compétences</p>
                </div>
            </div>
            <Carousel1 />
            <Carousel2 />
        </div>
    );
};

export default Bloc3;