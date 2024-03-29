import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [last10Products, setlast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((res) => setlast10Products(res));
  });
  return (
    <>
      <br/>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last10Products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
