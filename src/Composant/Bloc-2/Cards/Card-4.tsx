import React from "react";

const Card4: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden z-10 mt-2 px-4 md:px-8 lg:mt-10 lg:px-10">
            <img src="/Image-portfolio/bloc-2/cards/card-maintenance.png" alt="Image 1" className="mb-4 rounded-2xl md:rounded-3x" />
            <div className="absolute top-0 left-0 w-full h-full px-4 flex flex-col justify-center ml-6 mt-4 md:ml-14 md:mt-12 lg:mt-4">
                <p className="text-white text-start md:text-3xl lg:text-2xl text-lg mt-4 lg:mt-8 font-poppins font-bold">Maintenance</p>
                <p className="text-xs mt-2 md:text-base font-poppins text-[#b4b3b3] font-medium">La maintenance assure le bon fonctionnement<br /> de vos solutions numériques, en veillant à leur<br /> mise à jour régulière.</p>
            </div>
        </div>
    );
};

export default Card4;