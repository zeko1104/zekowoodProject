import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { ProductDetailPage } from "../pages/ProductDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/detail/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
