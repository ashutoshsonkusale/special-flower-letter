import React, { useState } from 'react';
import Sun from './components/Sun';
import FlowerField from './components/FlowerField';
import Particles from './components/Particles';
import LetterModal from './components/LetterModal';

const App: React.FC = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#87CEEB] to-[#B0E0E6] flex flex-col items-center justify-center">
      <Sun />
      <Particles count={30} />

      <header className="absolute top-[20%] text-center text-white z-10 w-full px-4">
        <h1 
          className="text-4xl md:text-5xl font-semibold"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          So many flowers but my favourite one is you
        </h1>
        <p 
          className="mt-2 text-2xl"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          hehe 😋
        </p>
      </header>
      
      <main className="absolute inset-0 flex items-center justify-center">
        <FlowerField />
      </main>

      <div className="absolute top-[55%] z-20">
         <button
          onClick={() => setIsLetterOpen(true)}
          className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-full shadow-lg border-2 border-white/80 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300"
          style={{ boxShadow: '0 0 20px 5px rgba(236, 72, 153, 0.5)' }}
        >
          Open Special Letter 💌
        </button>
      </div>
      
      <LetterModal isOpen={isLetterOpen} onClose={() => setIsLetterOpen(false)} />
    </div>
  );
};

export default App;