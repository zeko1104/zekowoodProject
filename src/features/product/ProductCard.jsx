import React from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        bg-white
        text-center
        p-4
        transition-all duration-300
        group
        hover:shadow-2xl
        hover:scale-[1.04]
        rounded-lg
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[260px] mb-4 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500
            group-hover:opacity-0
            cursor-pointer
          "
        />

        <img
          src={product.image2}
          alt={product.name}
          className="
            absolute inset-0 w-full h-full object-cover
            opacity-0
            transition-all duration-700 ease-out
            group-hover:opacity-100 group-hover:scale-105
            cursor-pointer
          "
        />
      </div>

      {/* BASIC INFO */}
      <h3 className="text-sm font-semibold tracking-wide">{product.name}</h3>
      <span className="text-xs uppercase text-gray-400">
        {product.category}
      </span>
      <p className="text-[#83B735] font-bold mt-1">${product.price}</p>

      {/* HOVER CONTENT */}
      <div
        className="
          overflow-hidden
          max-h-0
          opacity-0
          transition-all duration-500 ease-out
          group-hover:max-h-[220px]
          group-hover:opacity-100
        "
      >
        <p className="text-sm text-gray-500 mt-3 px-4 leading-relaxed">
          High quality wooden product made with premium materials.
        </p>

        {/* ACTIONS */}
        <div className="flex items-center justify-center gap-4 mt-5">
          {/* HEART */}
          <button
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-[50%]
              border
              text-gray-500
              hover:text-white hover:bg-[#83B735]
              transition
              cursor-pointer
            "
          >
            <FaRegHeart size={14} />
          </button>

          {/* BUTTON */}
          <Link to={`/product/${product.id}`}>
            <button
              className="
              px-6 py-2
              bg-[#83B735]
              text-white
              text-xs font-semibold
              rounded-full
              hover:bg-[#6fa02e]
              transition
              cursor-pointer
            "
            >
              SELECT OPTIONS
            </button>
          </Link>

          {/* SEARCH */}
          <button
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-[50%]
              border
              text-gray-500
              hover:text-white hover:bg-[#83B735]
              transition
              cursor-pointer
            "
          >
            <FaSearch size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
