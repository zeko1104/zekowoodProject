import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white text-center cursor-pointer p-4 hover:shadow-lg transition group">
      
      {/* IMAGE WRAPPER */}
      <div className="relative w-full h-[260px] mb-4 overflow-hidden">
        
        {/* IMAGE 1 */}
        <img
          src={product.image}
          alt={product.name}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-opacity duration-500
            group-hover:opacity-0
          "
        />

        {/* IMAGE 2 */}
        <img
          src={product.image2}
          alt={product.name}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-0
            transition-all duration-1000
            group-hover:opacity-100 group-hover:scale-105
          "
        />
      </div>

      <h3 className="text-sm font-medium">{product.name}</h3>
      <span className="text-sm font-medium text-gray-500">
        {product.category}
      </span>
      <p className="text-[#83B735] font-semibold mt-1">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;
