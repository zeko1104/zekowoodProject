const CategoryItem = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="relative group">
      {/* MAIN CATEGORY */}
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 border-b border-[#E8E8E8]">
        
        {/* ICON + NAME */}
        <div className="flex items-center gap-3">
          {Icon && (
            <Icon className="text-xl text-gray-600 group-hover:text-[#83B735]" />
          )}
          <span className="font-medium">{category.name}</span>
        </div>

        {category.children && (
          <span className="text-gray-400">›</span>
        )}
      </div>

      {/* SUB CATEGORY */}
      {category.children && (
        <div className="absolute top-0 left-full hidden group-hover:block bg-white shadow-lg min-w-55 border border-[#E8E8E8] z-50">
          {category.children.map((child, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
