import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="flex items-center z-50 relative">
      {/* ------------------------------------------- Overlay sombre ------------------------------------------- */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}

      {/* ------------------------------------------- Menu latéral ------------------------------------------- */}
      <div
        className={`fixed top-0 right-0 w-52 bg-white h-full text-black transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 z-10" : "translate-x-full z-0"
        }`}
      >
        {/* ------------------------------------------- Bouton de fermeture ------------------------------------------- */}
        {isMenuOpen && (
          <div
            className="absolute top-24 left-40 w-8 h-6 cursor-pointer z-30"
            onClick={toggleMenu}
          >
            <div className="absolute w-8 h-1 bg-black transition-transform duration-300 line1"></div>
            <div className="absolute w-8 h-1 bg-black transition-transform duration-300 line3"></div>
          </div>
        )}

        {/* ------------------------------------------- Liens de navigation ------------------------------------------- */}
        <div className="flex flex-col items-center mt-40 h-full space-y-6">
          {[
            { name: "Accueil", id: "accueil" },
            { name: "Services", id: "services" },
            { name: "Compétences", id: "competences" },
            { name: "Réalisations", id: "realisations" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }) => (
            <span
              key={id}
              className="text-lg font-poppins font-bold cursor-pointer"
              onClick={() => scrollToSection(id)}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ------------------------------------------- Bouton hamburger ------------------------------------------- */}
      {!isMenuOpen && (
        <div
          className="relative flex flex-col justify-between items-center w-8 h-6 cursor-pointer md:hidden z-20"
          onClick={toggleMenu}
        >
          <div className="flex flex-col space-y-2">
            <div className="w-8 h-1 bg-white transition-all duration-300"></div>
            <div className="w-4 h-1 bg-white transition-all duration-300 ml-auto"></div>
            <div className="w-8 h-1 bg-white transition-all duration-300"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
