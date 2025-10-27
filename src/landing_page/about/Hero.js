import React from "react";

function Hero() {
  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10 col-md-10 m-5">
          <h1
            className="fw-semibold text-secondary"
            style={{ lineHeight: "1.4" }}
          >
            <span className="d-block" style={{ fontSize: "25px" }}>
              We revolutionized discount broking in India.
            </span>
            <span className="d-block mt-2" style={{ fontSize: "25px" }}>
              Today, we're leading innovation with our cutting-edge technology.
            </span>
          </h1>
        </div>
      </div>

      {/* About / Mission Section */}
      <div className="row justify-content-center align-items-start px-3 px-md-5 mt-4 text-start">
        <div className="col-md-6 mb-4">
          <p className="text-secondary">
            We began our journey on <strong>August 15, 2025</strong>, determined
            to remove the barriers traders and investors face in India—whether
            it's cost, support, or technology.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <p className="text-secondary">
            The name <strong>Arthadhara</strong> combines “Arth” and “adhara,”
            the Sanskrit word for “barrier,” reflecting our mission to empower
            financial freedom for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
