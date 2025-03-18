import React from "react";

const Card1: React.FC = () => {
    return (
        <div className="relative w-full xl:w-1/2 overflow-hidden z-10 mt-10 px-4 md:px-8 lg:mt-10 lg:px-10">
            <img src="/Image-portfolio/bloc-2/cards/card-ui.png" alt="Image 1" className="mb-4 rounded-2xl md:rounded-3xl" />
            <div className="absolute top-0 left-0 h-full px-4 md:px-8 flex flex-col justify-center ml-6 mt-6 md:ml-14 md:mt-12 lg:mt-8">
                <p className="text-white md:text-3xl lg:text-xl text-lg 2xl:text-4xl mt-4 lg:mt-0 font-poppins font-bold">UI/UX Design</p>
                <p className="text-xs md:text-base mt-2 2xl:text-2xl font-poppins text-[#b4b3b3] font-medium">Des interfaces intuitives et haut de gamme<br /> qui subliment l’expérience utilisateur.</p>
            </div>
        </div>
    );
};

export default Card1;
