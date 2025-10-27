import React, { useState } from "react";
import { ArrowForward } from "@mui/icons-material";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnDemo,
  googlePlay,
  appStore,
}) {
  const [imageHover, setImageHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  return (
    <div className="container p-5 m-5 border-top">
      <div className="row">
        {/* Image Column */}
        <div className="col-12 col-md-6 p-3">
          <img
            src={imageUrl}
            alt={productName}
            style={{
              width: "80%",
              objectFit: "cover",
              cursor: "pointer",
              opacity: imageHover ? 0.8 : 1,
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          />
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6 p-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="d-flex flex-row gap-3 mb-1">
            {/* Try Demo Link with hover effect */}
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: linkHover ? "gray" : "blue",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={() => setLinkHover(true)}
              onMouseLeave={() => setLinkHover(false)}
            >
              Try demo <ArrowForward fontSize="small" />
            </a>

            {/* Learn More Link */}
            <a
              href={learnDemo}
              style={{ textDecoration: "none", cursor: "pointer", color: "blue" }}
            >
              Learn more <ArrowForward fontSize="small" />
            </a>
          </div>

          {/* App Store / Google Play badges */}
          <div className="d-flex flex-row gap-2 mt-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
