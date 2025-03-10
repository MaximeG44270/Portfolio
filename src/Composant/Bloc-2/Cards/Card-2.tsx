import React from "react";

const Card2: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden z-10 mt-2 px-4 md:px-8 lg:px-10">
            <img src="/Image-portfolio/bloc-2/cards/card-conception.png" alt="Image 1" className="mb-4 rounded-2xl md:rounded-3x" />
            <div className="absolute top-0 left-0 w-full h-full px-4 flex flex-col justify-center ml-6 mt-6 md:ml-14 md:mt-12 lg:ml-20 lg:mt-24">
                <p className="text-white md:text-3xl lg:text-5xl text-lg mt-4 font-poppins font-bold">Conception</p>
                <p className="text-xs md:text-base lg:text-2xl mt-2 lg:mt-8 font-poppins text-[#b4b3b3] font-medium">Je me charge de la conception complète de solutions<br /> numériques, en prenant en compte chaque détail.</p>
            </div>
        </div>
    );
};

export default Card2;