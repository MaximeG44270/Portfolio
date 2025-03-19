import React from "react";

const Reseaux: React.FC = () => {
  return (
    <div className="flex flex-row gap-8 md:gap-24 md:mt-8 mt-4">
      {[
        { name: "Facebook", url: "https://www.facebook.com/maxime.gilbert.75" },
        { name: "Github", url: "https://github.com/MaximeG44270" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/maxime-gilbert-6b21b8215" },
        { name: "Instagram", url: "https://www.instagram.com/mgdigital.dev" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b4b3b3] text-xs md:text-base lg:text-2xl font-poppins font-light hover:text-white transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Reseaux;