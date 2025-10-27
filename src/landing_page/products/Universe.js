import React, { useState } from "react";

function Universe() {
    const [hover, setHover] = useState(false);
  
  return (
    <div className="container mt-5 p-5 m-5 ">
        <div className="row mt-5 m-5 text-center ">
        <h1 className="fs-3 text-secondary"> The Arthadhara Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
          <div className="col-4  p-3 ">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
            />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4  p-3">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "50%" }}
            />
            <p className="text-small text-muted mt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4  p-3">
            <img src="media/images/tijori.svg" style={{ width: "40%" }} />
            <p className="text-small text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 col-md-4 p-3">
            <img src="media/images/streakLogo.png" style={{ width: "40%" }} />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 col-md-4 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "40%" }}
            />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 col-md-4 p-3">
            <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
 <div className="mt-4 d-flex justify-content-center">
            <button
            style={{
              width: "200px",
              cursor: "pointer",
              padding: "0.6rem 1.2rem",
              fontSize: "1.1rem",
              borderRadius: "0.4rem",
              border: "none",
              backgroundColor: hover ? "#0b0b0bff" : "#0d6efd", // lighter on hover
              color: "white",
              transition: "all 0.3s ease",
              boxShadow: hover ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
              transform: hover ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Sign up Now
          </button>
        </div>
        </div>
      </div>
  );
}

export default Universe;
