import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";
import Header from "./Composant/Header/Header";
import Bloc1 from "./Composant/Bloc-1/Bloc-1";
import Bloc2 from "./Composant/Bloc-2/Bloc-2";
import Bloc3 from "./Composant/Bloc-3/Bloc-3";
import Bloc4 from "./Composant/Bloc-4/Bloc-4";
import Footer from "./Composant/Footer/Footer";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MG Digital - Développeur Web</title>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de MG Digital, expert en développement web React et TypeScript."
        />
        <meta
          name="keywords"
          content="développement web, React, TypeScript, portfolio, MG Digital"
        />
        <meta name="author" content="MG Digital" />
        
        {/* Open Graph pour Facebook, LinkedIn */}
        <meta property="og:title" content="MG Digital - Développeur Web" />
        <meta 
          property="og:description" 
          content="Découvrez mon portfolio MG Digital, spécialisé en React, TypeScript et UI moderne."
        />
        <meta property="og:image" content="/logo-mg-digital-apple.png" />
        <meta property="og:url" content="https://mgdigital-test.netlify.app/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="w-full h-full bg-color overflow-x-hidden">
        <Header />
        <Bloc1 />
        <Bloc2 />
        <Bloc3 />
        <Bloc4 />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;