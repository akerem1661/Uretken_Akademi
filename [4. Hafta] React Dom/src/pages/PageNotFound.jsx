import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found-container">
      <h1>404<br/>Aradığınız Sayfa Bulunamadı</h1>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        className="not-found-image"
      />
      <p>Üzgünüz, görünüşe göre aradığınız sayfa mevcut değil.</p>
      <Link to="/" className="btn btn-info">
        Ana Sayfaya Gitmek İçin Tıklayın
      </Link>
    </div>
  );
}

export default PageNotFound;
