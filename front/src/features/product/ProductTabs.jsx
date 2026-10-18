import { useState } from "react";
import { products } from "../product/data/products";
import ProductCard from "./ProductCard";

const tabs = [
  { key: "best", label: "BEST SELLERS" },
  { key: "featured", label: "FEATURED" },
  { key: "sale", label: "SALES" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("best");

  const filteredProducts = products.filter((p) =>
    p.tags.includes(activeTab)
  );

  return (
    <section className="py-14">
      {/* TITLE */}
      <div className="text-center mb-8">
        <p className="text-sm tracking-widest text-gray-400">
          WOODEN ACCESSORIES
        </p>
        <h2 className="text-3xl font-bold mt-2">FEATURED PRODUCTS</h2>
        <p className="text-gray-500 mt-2">
          Visit our shop to see amazing creations from our designers.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-8 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              text-sm font-semibold tracking-wide
              pb-2 transition cursor-pointer
              ${
                activeTab === tab.key
                  ? "text-black border-b-2 border-[#83B735]"
                  : "text-gray-400 hover:text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductTabs;
