import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header id="accueil" className="w-full bg-color text-white p-4 md:p-8 lg:p-14 box-border top-0 left-0">
      <div className="mt-14 flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-poppins">MG Digital</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;