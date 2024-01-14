import React from "react";
import { Products } from "../products";
import "./Home.css";

function Home() {
  return (
    <>
      <header>
        <h1 className="banner-text">En Güzel Ürünler Sizi Bekliyor</h1>
        <h2 className="banner-text">Hemen Alışveriş Yapın!</h2>
      </header>
      <div className="products-container">
        <Products />
      </div>
      <footer>
        <p style={{color: 'white'}}>Made by <a style={{color: 'white', textDecoration: 'underline'}} href="https://www.linkedin.com/in/ahmet-kerem-begi%C3%A7-16653b214" target="_blank" rel="noopener noreferrer">Ahmet Kerem Begiç</a> | Üretken Akademi</p>
      </footer>
    </>
  );
}

export default Home;
