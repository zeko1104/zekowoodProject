import React, { useState } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <input
        className="border border-[#D9D9D9] focus:outline-0 w-125 p-2 max-sm:w-62"
        placeholder="Search for products"
        type="text"
        onFocus={() => setIsOpen(true)} 
      />
      <SearchDropdown isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default SearchBar;