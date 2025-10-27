import React from "react";

function Stats() {
  return (
    <div className="container p-5 my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 col-12 text-secondary mb-4 mb-md-0">
          <h1 className="fs-4 mb-4 fw-semibold text-dark">
            Trust with confidence
          </h1>

          <div className="mb-4">
            <h2 className="fs-6 fw-semibold text-dark">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Arthadhara with ~ ₹2 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-6 fw-semibold text-dark">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-6 fw-semibold text-dark">The Arthadhara universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h2 className="fs-6 fw-semibold text-dark">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 col-12 ">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto" }}
          />
          <div className="text-center">
 <a href="" className="mx-5 " style={{textDecoration:"none"}}>
          Explore our products <i className="fa-solid fa-arrow-right"></i>
          </a>
  
 <a href="" style={{textDecoration:"none"}}>
         Try Kite demo <i className="fa-solid fa-arrow-right"></i>
          </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Stats;
