import React from "react";

const Card3: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden z-10 mt-2 px-4 md:px-8 lg:px-10">
            <img src="/Image-portfolio/bloc-2/cards/card-WD.png" alt="Image 1" className="mb-4 rounded-2xl md:rounded-3x" />
            <div className="absolute top-0 left-0 w-full h-full px-4 flex flex-col justify-center ml-6 mt-6 md:ml-14 md:mt-12 lg:ml-20 lg:mt-24">
                <p className="text-white md:text-3xl lg:text-5xl text-lg mt-4 font-poppins font-bold">Développement web</p>
                <p className="text-xs mt-2 md:text-base lg:text-2xl font-poppins text-[#b4b3b3] font-medium">Je crée des sites web rapidement, évolutifs et modernes<br /> pour des expériences utilisateur fluides.</p>
            </div>
        </div>
    );
};

export default Card3;