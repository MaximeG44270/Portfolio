import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header id="accueil" className="w-full bg-color text-white pr-6 md:pr-8 lg:pr-14 box-border top-0 left-0">
      <div className="mt-14 flex justify-between items-center">
        {/* <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-poppins">MG Digital</h1> */}
        <img src="/logo-transparent.webp" alt="Image 1" className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-56" />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;