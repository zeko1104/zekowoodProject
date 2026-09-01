import React from "react";

const SearchDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose} 
      />

      {/* SearchDropdown */}
      <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-md z-50 p-4 mt-1">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Categories</h3>
        <p className="text-sm text-gray-700 hover:bg-gray-100 p-1 rounded cursor-pointer">Clocks</p>
        
        <h3 className="text-sm font-semibold text-gray-500 mt-4 mb-2">Products</h3>
        <div className="text-sm text-gray-800 hover:bg-gray-100 p-1 rounded cursor-pointer">
          Wall clock mint
        </div>
      </div>
    </>
  );
};

export default SearchDropdown;