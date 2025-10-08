
import React from 'react';

interface ParticlesProps {
  count: number;
}

const Particles: React.FC<ParticlesProps> = ({ count }) => {
  const particles = Array.from({ length: count }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50 + 50}%`, // Start from bottom half
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${Math.random() * 6 + 4}s`,
    };
    return (
      <div
        key={i}
        className="absolute rounded-full bg-yellow-200/70 animate-[float_ease-in-out_infinite]"
        style={style}
      />
    );
  });

  return <div className="absolute inset-0 pointer-events-none z-10">{particles}</div>;
};

export default Particles;
