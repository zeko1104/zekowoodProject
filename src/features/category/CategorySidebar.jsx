import CategoryItem from "./CategoryItem";
import { categories } from "./categoryData";
import { GiHamburgerMenu } from "react-icons/gi";

const CategorySidebar = () => {
  return (
    <aside className="w-65 bg-white border border-[#E8E8E8] z-50">
      
      {/* HEADER */}
      <div className="bg-[#83B735] text-white px-4 py-3 font-semibold">
        <GiHamburgerMenu className="inline mr-2" />
        BROWSE CATEGORIES
      </div>

      {/* LIST */}
      <div>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>

    </aside>
  );
};

export default CategorySidebar;
