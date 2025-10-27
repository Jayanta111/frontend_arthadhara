import React from "react";

function Eduction() {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education image"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 col-12 text-center text-md-start">
          <h1 className="mb-3 fs-4 fw-semibold text-dark">
            Free and open market education
          </h1>

          <p className="text-muted mb-3">
            <strong>Varsity</strong>, the largest online stock market education
            book in the world covering everything from the basics to advanced
            trading.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#0d6efd" }}>
            Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <p className="text-muted mt-4 mb-3">
            <strong>TradingQ&amp;A</strong>, the most active trading and
            investment community in India for all your market-related queries.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#0d6efd" }}>
            TradingQ&amp;A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Eduction;
