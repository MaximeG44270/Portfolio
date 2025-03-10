import React from "react";

const Menu1: React.FC = () => {
  // Fonction de scroll fluide
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tableau des liens de navigation
  const links = [
    { name: "Accueil", id: "accueil" },
    { name: "Services", id: "services" },
    { name: "Compétences", id: "competences" },
    { name: "Réalisations", id: "realisations" },
  ];

  return (
    <div className="flex flex-col">
      <p className="text-white font-poppins text-lg font-bold mb-2">Navigations</p>
      {links.map(({ name, id }) => (
        <p
          key={id}
          className="text-[#b4b3b3] font-poppins text-xs font-light mt-2 cursor-pointer hover:text-white transition-colors"
          onClick={() => scrollToSection(id)}
        >
          {name}
        </p>
      ))}
    </div>
  );
};

export default Menu1;