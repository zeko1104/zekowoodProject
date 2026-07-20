import CategorySidebar from "../features/category/CategorySidebar";
import HeroSlider from "../features/home/HeroSlider";
import CategoryWrapper from "../features/category/CategoryWrapper";
import ProductTabs from "../features/product/ProductTabs";
import AdSlider from "../features/ads/AdSlider";

const Home = () => {
  return (
    <section className="">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <CategorySidebar />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <HeroSlider />
        </div>
      </div>
      <div className="">
        {/* Additional home page content can go here */}
        <div className="text-center p-8">
          <p className="text-gray-400">ZEKOWOOD COLLECTIONS</p>
          <h1 className="font-bold text-2xl p-4">FEATURED CATEGORIES</h1>
        </div>
        <div className="">
          {/* Featured categories component can be added here */}
          <div className="">
            {/* Example placeholder for featured categories */}
            <CategoryWrapper />
          </div>
        </div>
        <div className="">
          {/* Additional home page content can go here */}
          <div className="text-center p-8">
            <ProductTabs/>
          </div>
        </div>
      </div>
      <div>
        {/* Additional home page content can go here */}
        <AdSlider />
      </div>
    </section>
  );
};

export default Home;
