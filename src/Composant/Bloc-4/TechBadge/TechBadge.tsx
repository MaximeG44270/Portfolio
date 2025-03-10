import React from "react";

interface TechBadgeProps {
  techs: string[];
}

const TechBadge: React.FC<TechBadgeProps> = ({ techs }) => {
  return (
    <div className="flex gap-2 md:ml-6 md:mt-2 lg:mt-6 lg:ml-8">
      {techs.map((tech, index) => (
        <span key={index} className="px-3 lg:px-6 lg:py-3 py-1 text-xs md:text-lg lg:text-2xl font-semibold font-poppins text-white bg-[#131839] border-[#2f385d] border-2 lg:border-4 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechBadge;