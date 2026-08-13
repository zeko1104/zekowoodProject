import Input from "../common/Input";
import Container from "./Container";
import MobileSideBar from "./MobileSidebar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingBag, FaUser, FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSidebarOpen]);

  return (
    <nav className="w-full border-b border-[#E8E8E8]">
      <Container>
        <div className="flex items-center justify-between py-6">
          
          {/* LEFT SECTION (MOBILE: HAMBURGER, DESKTOP: LOGO) */}
          <div className="flex items-center gap-4 md:flex-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-2xl text-gray-700 md:hidden cursor-pointer p-1"
              aria-label="Open Menu"
            >
              <RxHamburgerMenu />
            </button>

            {/* LOGO - DESKTOP LEFT */}
            <h1 className="hidden md:block  sm:text-3xl text-3xl font-extrabold tracking-wider text-[#1A1A1A]">
              ZEKOWOOD
            </h1>
          </div>

          {/* CENTER SECTION (MOBILE: CENTER LOGO, DESKTOP: SEARCH) */}
          <div className="flex justify-center md:flex-1">
            {/* LOGO MOBILE */}
            <h1 className="md:hidden  text-center text-3xl font-extrabold tracking-wider text-[#1A1A1A]">
              ZEKOWOOD
            </h1>

            {/* SEARCH - DESKTOP */}
            <div className="hidden md:flex w-full max-w-md justify-center">
              <Input />
              <button className="border border-[#D9D9D9] p-2 w-10 cursor-pointer text-center flex justify-center items-center">
                <FaMagnifyingGlass className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* RIGHT SECTION - ICONS */}
          <div className="flex items-center justify-end gap-4 sm:gap-6 md:flex-1">
            <div className="hidden md:flex items-center gap-6">
              <div className="relative cursor-pointer">
                <FaUser className="text-2xl text-gray-500 hover:opacity-50" />
              </div>

              <div className="relative cursor-pointer">
                <FaHeart className="text-2xl text-gray-500 hover:opacity-50" />
                <span className="absolute -top-2 -right-2 bg-[#83B735] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>

              <div className="relative cursor-pointer">
                <IoIosGitCompare className="text-2xl text-gray-500 hover:opacity-50" />
                <span className="absolute -top-2 -right-2 bg-[#83B735] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>

            {/* CART - MOBILE AND DESKTOP */}
            <div className="relative cursor-pointer">
              <FaShoppingBag className="text-xl sm:text-2xl text-gray-500 hover:opacity-50" />
              <span className="absolute -top-2 -right-2 bg-[#83B735] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>

        </div>
      </Container>

      {/* MOBİL SİDEBAR */}
      <MobileSideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </nav>
  );
};

export default Navbar;