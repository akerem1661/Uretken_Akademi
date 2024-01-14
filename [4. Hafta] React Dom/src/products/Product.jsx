import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="product-container">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-description">{product.description}</p>
    </div>
  );
}

export default Product;
