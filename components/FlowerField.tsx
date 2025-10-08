import React from "react";

const FlowerField: React.FC = () => {
  // positions roughly at each flower center; dx = horizontal drift (px), delay = start delay (s)
  const particles: { x: number; y: number; dx: number; delay?: number }[] = [
    { x: 170, y: 300, dx: -18, delay: 0 },
    { x: 170, y: 300, dx: 12, delay: 0.9 },
    { x: 230, y: 320, dx: 8, delay: 0.4 },
    { x: 230, y: 320, dx: -10, delay: 1.4 },
    { x: 380, y: 300, dx: 14, delay: 0.2 },
    { x: 380, y: 300, dx: -18, delay: 1.1 },
    { x: 420, y: 320, dx: 6, delay: 0.5 },
    { x: 560, y: 240, dx: 0, delay: 0.7 },
    { x: 560, y: 240, dx: 10, delay: 1.9 },
    { x: 660, y: 300, dx: -8, delay: 0.3 },
    { x: 720, y: 320, dx: 12, delay: 0.9 },
    { x: 920, y: 320, dx: -12, delay: 0.8 },
    { x: 980, y: 320, dx: 14, delay: 1.4 },
    { x: 500, y: 340, dx: 6, delay: 0.6 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50">
      {/* Sun */}
      <div className="absolute top-8 right-8 w-28 h-28 rounded-full shadow-[0_0_80px_18px_rgba(255,204,0,0.45)] bg-yellow-400 z-10" />

      {/* Flower field SVG at bottom
          CHANGES:
            - on mobile push SVG upwards with negative translate so blossoms reach above the button
            - increase mobile svg height slightly
            - added floating yellow particles (pollen) + animation styles (minimal)
      */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-10 pointer-events-none transform -translate-y-20 md:translate-y-0">
        <svg
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMax meet"
          className="w-full max-w-6xl h-[78vh] md:h-[70vh]"
        >
          <defs>
            <radialGradient id="pinkGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFF0F5" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#FFB6C1" />
              <stop offset="100%" stopColor="#FF8FAB" />
            </radialGradient>

            <radialGradient id="redGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFE4E1" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#D9534F" />
            </radialGradient>

            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67B26F" />
              <stop offset="100%" stopColor="#2E8B57" />
            </linearGradient>

            <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8AB05A" />
              <stop offset="100%" stopColor="#556B2F" />
            </linearGradient>

            {/* single petal template (no fill here) */}
            <g id="petal">
              <ellipse cx="0" cy="-34" rx="18" ry="40" />
            </g>

            {/* grass fade */}
            <linearGradient id="grassFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#bfeec5" stopOpacity="0.12" />
              <stop offset="1" stopColor="#bfeec5" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* subtle mist at bottom */}
          <rect x="0" y="600" width="1200" height="100" fill="url(#grassFade)" />

          {/* Particle + petal animation styles (scoped inside svg) */}
          <style>{`
            /* whole-field sway (already used via class) kept as-is */
            @keyframes floatUp {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              20% { opacity: 0.95; }
              100% { transform: translate(var(--dx, 0px), -220px) scale(0.85); opacity: 0; }
            }

            .particle {
              animation-name: floatUp;
              animation-timing-function: ease-out;
              animation-iteration-count: infinite;
              animation-fill-mode: forwards;
            }
          `}</style>

          {/* stems + blossoms group */}
          <g className="animate-[sway_10s_ease-in-out_infinite]" style={{ transformOrigin: "600px 700px" }}>
            {/* stems (taller so flowers sit higher) */}
            <path d="M140 700 C 140 560, 150 420, 170 300" stroke="url(#stemGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M220 700 C 200 560, 210 430, 230 320" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M340 700 C 350 560, 360 420, 380 300" stroke="url(#stemGrad)" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M420 700 C 400 560, 390 440, 410 320" stroke="url(#stemGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M560 700 C 560 520, 560 360, 560 240" stroke="url(#stemGrad)" strokeWidth="11" fill="none" strokeLinecap="round" />
            <path d="M640 700 C 640 540, 650 420, 660 300" stroke="url(#stemGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M780 700 C 760 560, 740 430, 720 320" stroke="url(#stemGrad)" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M860 700 C 880 560, 900 420, 920 320" stroke="url(#stemGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M980 700 C 980 560, 980 430, 980 320" stroke="url(#stemGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M1100 700 C 1060 560, 1040 430, 1020 330" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />

            {/* leaves */}
            <g fill="url(#leafGrad)" stroke="#1f6b1f" strokeWidth="0.4">
              <path transform="translate(320 460) rotate(-30) scale(1.6)" d="M0,0 C10,-20 28,-20 36,0 C28,20 10,20 0,0 Z" />
              <path transform="translate(460 520) rotate(15) scale(1.4)" d="M0,0 C10,-20 28,-20 36,0 C28,20 10,20 0,0 Z" />
              <path transform="translate(700 520) rotate(-20) scale(1.7)" d="M0,0 C15,-30 40,-30 55,0 C40,30 15,30 0,0 Z" />
              <path transform="translate(880 480) rotate(30) scale(1.3)" d="M0,0 C10,-20 28,-20 36,0 C28,20 10,20 0,0 Z" />
              <path transform="translate(520 420) rotate(0) scale(1.5)" d="M0,0 C12,-25 32,-25 45,0 C32,25 12,25 0,0 Z" />
            </g>

            {/* --------- Blossoms (now perfect circular flowers) --------- */}
            <g transform="translate(170 300) scale(1.06)">
              <use href="#petal" transform="rotate(0)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(30)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(60)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(90)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(120)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(150)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(180)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(210)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(240)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(270)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(300)" fill="url(#pinkGrad)" />
              <use href="#petal" transform="rotate(330)" fill="url(#pinkGrad)" />
              <circle cx="0" cy="0" r="12" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            {/* rest of the flowers (kept same) */}
            <g transform="translate(230 320) scale(1.02)">
              <use href="#petal" transform="rotate(0)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(30)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(60)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(90)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(120)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(150)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(180)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(210)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(240)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(270)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(300)" fill="url(#redGrad)" />
              <use href="#petal" transform="rotate(330)" fill="url(#redGrad)" />
              <circle cx="0" cy="0" r="12" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(380 300) scale(1.25)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#pinkGrad)" />
              ))}
              <circle cx="0" cy="0" r="14" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(420 320) scale(1.02) rotate(12)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#pinkGrad)" />
              ))}
              <circle cx="0" cy="0" r="11" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(560 240) scale(1.45)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#redGrad)" />
              ))}
              <circle cx="0" cy="0" r="15" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(660 300) scale(1.08) rotate(-6)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#pinkGrad)" />
              ))}
              <circle cx="0" cy="0" r="12" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(720 320) scale(1.05) rotate(8)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#redGrad)" />
              ))}
              <circle cx="0" cy="0" r="12" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(920 320) scale(1) rotate(-14)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#pinkGrad)" />
              ))}
              <circle cx="0" cy="0" r="11" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(980 320) scale(1.06) rotate(6)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#pinkGrad)" />
              ))}
              <circle cx="0" cy="0" r="12" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            <g transform="translate(500 340) scale(0.95) rotate(20)">
              {Array.from({ length: 12 }).map((_, i) => (
                <use key={i} href="#petal" transform={`rotate(${i * 30})`} fill="url(#pinkGrad)" />
              ))}
              <circle cx="0" cy="0" r="10" fill="#FFF2C2" stroke="#F1D28A" strokeWidth="1" />
            </g>

            {/* grass strokes */}
            <g stroke="#6fb86f" strokeWidth="2.4" fill="none" opacity="0.85">
              <path d="M60 700 C 80 560, 110 560, 120 700" />
              <path d="M140 700 C 170 560, 210 560, 230 700" />
              <path d="M320 700 C 340 560, 380 560, 400 700" />
              <path d="M520 700 C 545 560, 585 560, 615 700" />
              <path d="M760 700 C 780 560, 820 560, 840 700" />
              <path d="M980 700 C 1000 560, 1040 560, 1060 700" />
            </g>
          </g>

          {/* Floating yellow particles (pollen) rendered on top */}
          <g>
            {particles.map((p, idx) => {
              // vary duration a bit for natural feel
              const dur = 3.5 + (idx % 3) * 0.9;
              const delay = (p.delay ?? 0).toFixed(2);
              const style: React.CSSProperties = {
                ["--dx" as any]: `${p.dx}px`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              };
              return (
                <circle
                  key={idx}
                  className="particle"
                  cx={p.x}
                  cy={p.y}
                  r={3.5}
                  fill="#FFD54A"
                  style={style}
                />
              );
            })}
          </g>
        </svg>
      </div>

      

      {/* sway animation */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(1.6deg); }
          50% { transform: rotate(-1.6deg); }
        }
      `}</style>
    </div>
  );
};

export default FlowerField;
