import React from "react";
import { ArrowForward } from "@mui/icons-material";
function Hero() {
  return (
    <div className="container p-5 m-5 text-center">
      <div>
        <h1 className="fs-3 text-secondary  mt-5">Zerodha Products</h1>
        <p className="text-secondary " style={{ fontSize: "20px" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <ArrowForward />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
