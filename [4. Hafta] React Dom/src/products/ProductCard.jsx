import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const productUrl = `/products/product/${item.id}`;
  return (
    <>
      <div className="col-sm mb-3">
        <div className="card">
          <Link to={productUrl}>
            <img src={item.image} className="card-img-top" alt={item.title} />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description.substring(0, 45)}...</p>
            <p className="lead">{item.price}</p>
            <a href="#" className="btn btn-primary">
              Sepete Ekle
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
