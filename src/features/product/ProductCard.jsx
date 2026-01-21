import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[260px] object-cover mb-4"
      />

      <h3 className="text-sm font-medium">{product.name}</h3>
      <p className="text-[#83B735] font-semibold mt-1">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;
