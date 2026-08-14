import React from "react";
import Input from "../common/Input";
import MobileCategory from "../../features/category/MobileCategory";
import { IoMdClose } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImOpt } from "react-icons/im";

const MobileSideBar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 1. BACKGROUND OVERLAY */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* 2. SIDEBAR PANEL */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50 p-5 shadow-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* UP SIDE: Search Input */}
          <div className="flex justify-between items-center gap-2 pb-4 border-b border-gray-200">
            {/* Search Input and Button Container */}
            <div className="flex w-full min-w-0">
              <div className="flex-1 min-w-0">
                <Input placeholder="Search Products..." />
              </div>
              <button className="border border-l-0 border-[#D9D9D9] p-2 w-10  text-center flex justify-center items-center shrink-0">
                <FaMagnifyingGlass className="text-gray-500 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* NAV LINK */}
          <div className="">
            <MobileCategory/>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 text-sm text-gray-500">
          <p>© 2026 ZEKOWOOD.</p>
        </div>
      </aside>
    </>
  );
};

export default MobileSideBar;