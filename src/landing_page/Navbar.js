import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{ backgroundColor: "#fff", zIndex: 1000 }}
    >
      <div className="container-fluid px-4 px-md-5 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/Arthadhara Logo.png"
            alt="Arthadhara Logo"
            style={{
              width: "130px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Mobile toggle (hamburger) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fs-4 text-dark"></i>
        </button>

        {/* Menu items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" to="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
