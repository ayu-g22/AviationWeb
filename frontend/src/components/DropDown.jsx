import React, { useState } from 'react';
import '../index.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <button
          className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20 px-3 py-2 rounded-md text-md font-semibold"
        >
          Process
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-black text-golden rounded-md shadow-lg z-10 w-80">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#option1" className="block px-4 py-2 text-sm text-golden">Commercial Pilot</a>
            <a href="#option2" className="block px-4 py-2 text-sm text-golden">Cabin Crew</a>
            <a href="#option3" className="block px-4 py-2 text-sm text-golden">Cadet Pilot Program</a>
            <a href="#option4" className="block px-4 py-2 text-sm text-golden">Drone Flying</a>
            <a href="#option5" className="block px-4 py-2 text-sm text-golden">Airport Operations</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
