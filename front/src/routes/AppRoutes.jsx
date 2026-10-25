import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { RegisterPage } from "../pages/auth/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/detail/:id" element={<ProductDetailPage />} />
      <Route path="/profile" element={<RegisterPage/>} />
    </Routes>
  );
};

export default AppRoutes;
