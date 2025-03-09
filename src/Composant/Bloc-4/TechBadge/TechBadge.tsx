import React from "react";

interface TechBadgeProps {
  techs: string[];
}

const TechBadge: React.FC<TechBadgeProps> = ({ techs }) => {
  return (
    <div className="flex gap-2">
      {techs.map((tech, index) => (
        <span key={index} className="px-3 py-1 text-xs font-semibold font-poppins text-white bg-[#131839] border-[#2f385d] border-2 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechBadge;