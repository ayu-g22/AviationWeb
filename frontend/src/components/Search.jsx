import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center border-2 border-golden rounded-xl p-2 m-5" style={{ width: '250px' }}> {/* Adjusted width */}
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 outline-none bg-black text-golden placeholder-darkerGold p-1 rounded-lg border-none w-full" // Ensures input takes full available width
      />
    </div>
  );
};

export default SearchBar;
