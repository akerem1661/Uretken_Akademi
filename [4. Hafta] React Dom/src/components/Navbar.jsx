import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ user, handleLogout }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Kerem.py Shopping
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Ürünlerimiz
            </NavLink>
            <NavLink className="nav-link" to="/about">
              Hakkımızda
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              İletişim Formu
            </NavLink>
            {user ? (
              <button className="nav-link" onClick={handleLogout}>
                Çıkış yap {user.name}
              </button>
            ) : (
              <NavLink className="nav-link" to="/login">
                Oturum Aç
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
