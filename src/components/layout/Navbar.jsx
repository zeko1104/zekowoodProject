import Input from "../common/Input";
import Container from "./Container";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingBag, FaUser, FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#E8E8E8]">
      <Container>
        <div className="flex items-center py-6">
          {/* LEFT - LOGO */}
          <div className="flex-1 max-sm:text-center">
            <h1 className="text-3xl font-bold">ZEKOWOOD</h1>
          </div>

          {/* CENTER - SEARCH */}
          <div className="flex-1 flex justify-center max-sm:hidden">
            <Input />
            <button className="border border-[#D9D9D9] p-2 w-10 cursor-pointer text-center flex justify-center items-center ">
              <FaMagnifyingGlass className="text-gray-500" />
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-end gap-6 ">
            {/* USER */}
            <div className="relative cursor-pointer max-sm:hidden">
              <FaUser className="text-2xl text-gray-500 hover:opacity-50" />
            </div>

            {/* WISHLIST */}
            <div className="relative cursor-pointer max-sm:hidden">
              <FaHeart className="text-2xl text-gray-500 hover:opacity-50" />
              <span className="absolute -top-2 -right-2 bg-[#83B735] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

            {/* COMPARE */}
            <div className="relative cursor-pointer max-sm:hidden">
              <IoIosGitCompare className="text-2xl text-gray-500 hover:opacity-50" />
              <span className="absolute -top-2 -right-2 bg-[#83B735] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

            {/* CART */}
            <div className="relative cursor-pointer">
              <FaShoppingBag className="text-2xl text-gray-500 hover:opacity-50" />
              <span className="absolute -top-2 -right-2 bg-[#83B735] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
