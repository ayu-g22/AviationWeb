import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const SearchBar = () => {
  return (
    <>
    <div className="flex items-center  rounded-lg p-2">
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 outline-none bg-black text-golden placeholder-darkerGold p-1 rounded-lg border-none "
      />
      <FaSearch className="text-darkerGold" /> {/* Search icon */}
    </div>
      </>
  );
};

export default SearchBar;