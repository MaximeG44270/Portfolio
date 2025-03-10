import React from "react";

const Card1: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden z-10 mt-10 lg:mt-20 px-4 md:px-8 lg:px-10">
            <img src="/Image-portfolio/bloc-2/cards/card-ui.png" alt="Image 1" className="mb-4 rounded-2xl md:rounded-3xl" />
            <div className="absolute top-0 left-0 w-full h-full px-4 flex flex-col justify-center ml-6 mt-6 md:ml-14 md:mt-12 lg:ml-20 lg:mt-24">
                <p className="text-white md:text-3xl lg:text-5xl text-lg mt-4 font-poppins font-bold">UI/UX Design</p>
                <p className="text-xs md:text-base lg:text-2xl mt-2 lg:mt-8 font-poppins text-[#b4b3b3] font-medium">Des interfaces intuitives et haut de gamme<br /> qui subliment l’expérience utilisateur.</p>
            </div>
        </div>
    );
};

export default Card1;
