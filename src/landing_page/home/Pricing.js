import React from "react";

function Pricing() {
  return (
    <div className="container py-5 my-5 mx-5 ">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-5 col-12 mb-4 mb-md-0 text-center text-md-start ">
          <h1 className="mb-3 fs-4 fw-semibold text-dark ">
            Unbeatable pricing
          </h1>
          <p className="text-muted mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none", color: "#0d6efd" }}
          >
            See Pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* Spacer Column (optional on large screens) */}
        <div className="col"></div>

        {/* Right Pricing Boxes */}
        <div className="col-md-6 col-12">
          <div className="row text-center g-3">
            <div className="col-12 col-md-6">
              <div className="border rounded-3 p-4 h-100">
                <h1 className="fw-bold text-dark">&#8377;0</h1>
                <p className="text-muted mb-0">Free account opening</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="border rounded-3 p-4 h-100">
                <h1 className="fw-bold text-dark">&#8377;20</h1>
                <p className="text-muted mb-0">
                  Intraday and F&O trades <br /> (flat per order)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
