
import React from 'react';

const Sun: React.FC = () => {
  return (
    <div className="absolute top-10 right-10 md:top-16 md:right-24 w-28 h-28 md:w-32 md:h-32 pointer-events-none">
      <div 
        className="w-full h-full bg-yellow-400 rounded-full animate-[sun-glow_4s_ease-in-out_infinite]"
      />
    </div>
  );
};

export default Sun;
