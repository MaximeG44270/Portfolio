import React from 'react';
import './index.css';
import Header from './Composant/Header/Header';
import Bloc2 from './Composant/Bloc-2/Bloc-2';
import Bloc1 from './Composant/Bloc-1/Bloc-1';
import Bloc3 from './Composant/Bloc-3/Bloc-3';
import Bloc4 from './Composant/Bloc-4/Bloc-4';

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-color overflow-x-hidden">
      <Header />
      <Bloc1 />
      <Bloc2 />
      <Bloc3 />
      <Bloc4 />
    </div>
  );
};


export default App;