import React from "react";
import Input from "../common/Input";
import { IoMdClose } from "react-icons/io";

const MobileSideBar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 1. BACKGROUND  OVERLAY \ */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* 2. SİDEBAR PANEL  */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50 p-5 shadow-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* UP SİDE*/}
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">ZEKOWOOD</h2>
            <button
              onClick={onClose}
              className="text-2xl text-gray-600 hover:text-black p-1 cursor-pointer"
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Axtarış Hissəsi */}
          {/* <div className="my-4">
            <Input placeholder="Məhsul axtar..." />
          </div> */}

          {/* NAV LİNK*/}
          <nav className="mt-6">
            <ul className="flex flex-col gap-4 font-medium text-gray-700">
              <li>
                <a href="#" className="hover:text-[#83B735] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#83B735] transition-colors">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#83B735] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#83B735] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        
        <div className="pt-4 border-t border-gray-200 text-sm text-gray-500">
          <p>© 2026 ZEKOWOOD.</p>
        </div>
      </aside>
    </>
  );
};

export default MobileSideBar;