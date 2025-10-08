import React from "react";

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[#FFF8E7] rounded-lg shadow-2xl p-6 m-4 w-full max-w-lg relative transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: `'Dancing Script', cursive` }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close letter"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl text-pink-500 mb-4 text-center font-semibold">A Special Letter For You</h2>

        {/* IMAGE: place your downloaded image as `public/image.png` (recommended).
            Alternative: import letterImg from '../assets/image.png' and use src={letterImg}
        */}
        <div className="flex justify-center mb-4">
          <img
            src="/image.jpg"
            // src={letterImg} // <-- use this if you import at top instead of using public/
            alt="special"
            className="w-28 h-28 object-cover rounded-xl p-2 bg-white shadow-lg border-4 border-pink-200"
            style={{ boxShadow: "0 8px 24px rgba(255, 150, 200, 0.18)" }}
          />
        </div>

        {/* Scrollable content area */}
        <div className="text-gray-700 text-base leading-relaxed">
          <div className="overflow-auto max-h-[52vh] pr-4">
            <p className="italic mb-3">My Dearest,</p>

            <p className="mb-4">
              Just like a garden full of countless flowers, the world is full of so many people. But in that vast garden,
              you are the most unique, most beautiful, and most cherished bloom. You bring color, fragrance, and joy into
              my life in a way nothing else can.
            </p>

            <p className="mb-4">
              Like these beautiful flowers that bloom with time and care, our connection grows more beautiful each day.
              You bring color to my world just like these vibrant petals bring life to the garden.
            </p>

            <p className="mb-4">
              Every moment with you is like watching a flower bloom magical, precious, and filled with wonder. Thank you
              for being the sunshine in my life.
            </p>

            <p className="mb-6 text-right text-xl text-pink-600">With all my love,</p>
            <p className="text-right text-xl text-pink-600">Your Secret Admirer 💕</p>

            {/* Add extra filler text to test scrolling if needed */}
            {/* <p className="mt-6">(extra paragraphs...)</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
