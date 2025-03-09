import React from "react";

const Card4: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden z-10 mt-2 px-4">
            <img src="/Image-portfolio/bloc-2/cards/card-maintenance.png" alt="Image 1" className="mb-4 rounded-2xl" />
            <div className="absolute top-0 left-0 w-full h-full px-4 flex flex-col justify-center ml-6 mt-4">
                <p className="text-white text-lg mt-4 font-poppins font-bold">Maintenance</p>
                <p className="text-xs mt-2 font-poppins text-[#b4b3b3] font-bold">La maintenance assure le bon fonctionnement<br /> de vos solutions numériques, en veillant à leur<br /> mise à jour régulière.</p>
            </div>
        </div>
    );
};

export default Card4;