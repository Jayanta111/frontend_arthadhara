import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Ticket({ title, supportSteps, index, links }) {
  const [open, setOpen] = useState(false);

  const toggleArrow = () => {
    setOpen(!open);
  };

  return (
    <div className="container mb-3">
      <div className="row align-items-start">
        {/* Left: Ticket box */}
        <div className="col-12 col-md-8 mb-2">
          <div
            className="border d-flex align-items-center justify-content-between p-2"
            onClick={toggleArrow}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
              <AddCircleRoundedIcon className="me-2" />
              <h5 className="mb-0">{title}</h5>
            </div>
            <KeyboardArrowDownIcon
              className={`ms-2 ${open ? "rotate-180" : ""}`}
              style={{ transition: "transform 0.3s" }}
            />
          </div>

          {/* Steps shown when open */}
          {open && supportSteps.length > 0 && (
            <div className="border border-top-0 p-3">
              <ol className="mb-0">
                {supportSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Right: Links */}
        {links && links.length > 0 && (
          <div className="col-12 col-md-4">
            <ul className="list-unstyled">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ticket;
