import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20 px-3 py-2 rounded-md text-md font-semibold"
        >
          Process
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-black text-golden rounded-md shadow-lg z-10 w-64"> {/* Added w-64 */}
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#option1" className="block px-4 py-2 text-sm">Commercial Pilot Training</a>
            <a href="#option2" className="block px-4 py-2 text-sm">Cabin Crew Training</a>
            <a href="#option3" className="block px-4 py-2 text-sm">Cadet Pilot Program Preparation</a>
            <a href="#option4" className="block px-4 py-2 text-sm">Drone Flying Training</a>
            <a href="#option5" className="block px-4 py-2 text-sm">Airport Operations</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
