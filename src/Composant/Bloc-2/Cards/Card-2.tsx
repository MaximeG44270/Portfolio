import React from "react";

const Card2: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden z-10 mt-2 px-4 md:px-8 lg:mt-10 lg:px-10">
            <img src="/Image-portfolio/bloc-2/cards/card-ui.png" alt="Image 1" className="mb-4 rounded-2xl md:rounded-3xl" />
            <div className="absolute top-0 left-0 h-full px-4 md:px-8 flex flex-col justify-center ml-6 mt-6 md:ml-14 md:mt-12 lg:mt-8">
                <p className="text-white md:text-3xl lg:text-xl text-lg mt-4 lg:mt-0 font-poppins font-bold">Conception</p>
                <p className="text-xs md:text-base mt-2 lg:pr-24 font-poppins text-[#b4b3b3] font-medium">Je me charge de la conception complète de vos solutions numériques, en prenant en compte chaque détail.</p>
            </div>
        </div>
    );
};

export default Card2;
