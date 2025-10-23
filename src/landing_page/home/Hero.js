import React, { useState } from "react";

function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <div className="container py-5 my-5 text-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-12">
          {/* Banner Image */}
          <img
            src="media/images/HomeBanner.png"
            alt="Home Banner"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%", height: "auto" }}
          />

          {/* Heading */}
          <h1 className="fw-bold mb-3">Invest in everything</h1>

          {/* Subtitle */}
          <p className="text-muted fs-5 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds and more.
          </p>

          {/* Zerodha-style button */}
          <button
            style={{
              width: "200px",
              cursor: "pointer",
              padding: "0.6rem 1.2rem",
              fontSize: "1.1rem",
              borderRadius: "0.4rem",
              border: "none",
              backgroundColor: hover ? "#2c7be5" : "#0d6efd", // lighter on hover
              color: "white",
              transition: "all 0.3s ease",
              boxShadow: hover ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
              transform: hover ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
