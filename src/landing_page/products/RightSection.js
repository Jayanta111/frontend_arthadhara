import React, { useState } from "react";
import { ArrowForward } from "@mui/icons-material";

function RightSection({ imageUrl, productName, productDescription, learnDemo }) {
  const [imageHover, setImageHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  return (
    <div className="container p-5 m-5 border-top">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-12 col-md-5 p-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="d-flex gap-3 mb-1">
            <a
              href={learnDemo}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: linkHover ? "gray" : "blue",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={() => setLinkHover(true)}
              onMouseLeave={() => setLinkHover(false)}
            >
              Learn more <ArrowForward fontSize="small" />
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src={imageUrl}
            alt={productName}
            style={{
              width: "90%",
              objectFit: "cover",
              cursor: "pointer",
              opacity: imageHover ? 0.8 : 1,
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
