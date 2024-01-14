import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import PageNotFound from "./src/pages/PageNotFound";
import { Category, Product, ProductLayout, Products } from "./src/products";
import Login from "./src/pages/Login";

function SiteRoutes({ handleLogin }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index={true} element={<Products />} />
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="product/:productId" element={<Product />} />
      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
