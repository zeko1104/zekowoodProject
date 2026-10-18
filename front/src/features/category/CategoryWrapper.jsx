import ModernChair from "../../assets/images/modern-chair-white.jpg";
import WoodClock from "../../assets/images/wood-clock-circle.jpg";
import WhiteDesk from "../../assets/images/white-desk.jpg";
import LLight from "../../assets/images/l-light.jpg";
import CarToy from "../../assets/images/car-toy.jpg";

const categories = [
  { name: "Furniture", img: ModernChair, count: 33 },
  { name: "Clocks", img: WoodClock, count: 12 },
  { name: "Accessories", img: WhiteDesk, count: 21 },
  { name: "Lighting", img: LLight, count: 15 },
  { name: "Toys", img: CarToy, count: 8 },
];

const CategoryWrapper = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`
            group
            relative
            bg-white
            rounded-[14px]
            overflow-hidden
            border
            cursor-pointer
            ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
          `}
        >
          {/* IMAGE */}
          <div className="overflow-hidden h-full">
            <img
              src={cat.img}
              alt={cat.name}
              className={`
                w-full
                object-cover
                transition-all
                duration-500
                group-hover:scale-110
                ${index === 0 ? "h-full" : "h-[260px]"}
              `}
            />
          </div>

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-black/40
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {/* TEXT */}
          <div className="absolute bottom-4 left-4 z-10 text-gray-900">
            <h2 className="text-lg font-semibold uppercase tracking-wide">
              {cat.name}
            </h2>
            <span className="text-sm opacity-90">
              {cat.count} products
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};



export default CategoryWrapper;
