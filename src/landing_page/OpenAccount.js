import React from "react";
import { useState } from "react";
function OpenAccount() {
  const [hover, setHover] = useState(false);

  return (
    <div className="container py-1 my-5 text-center ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-12 mt-5">
          {/* Heading */}
          <h1 className="fw-semibold fs-4 mb-3">Open a Arthadhara account</h1>

          {/* Subtitle */}
          <p className="text-muted  mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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
              backgroundColor: hover ? "#0b0b0bff" : "#2c7be5",
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

export default OpenAccount;
