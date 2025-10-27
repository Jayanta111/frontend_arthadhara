import React, { useState } from "react";
import { Instagram, LanguageOutlined } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Team() {
  const [openBio, setOpenBio] = useState(null);

  const toggleBio = (memberIndex) => {
    setOpenBio(openBio === memberIndex ? null : memberIndex);
  };

  return (
    <>
      {/* ====== Team Intro Section ====== */}
      <section className="container py-5 my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center mb-5">
            <h1
              className="fw-semibold text-secondary"
              style={{ fontSize: "22px" }}
            >
              Team
            </h1>
          </div>

          <div className="col-12 col-md-5 d-flex flex-column align-items-center mb-4 mb-md-0">
            <img
              src="media/images/Profile.jpg"
              alt="Jayanta Chungkrang"
              className="shadow-sm bg-body-tertiary team-photo"
              style={{ width: "50%", borderRadius: "50%", objectFit: "cover" }}
            />
            <h5 className="mt-3 fw-semibold mb-1 text-dark">
              Jayanta Chungkrang
            </h5>
            <p className="text-secondary mb-2">Founder & CEO</p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="text-secondary lh-lg fs-6">
              Jayanta bootstrapped and founded <strong>Arthadhara</strong> in
              2025 to overcome the hurdles he faced during his decade-long stint
              as a trader. Today, Arthadhara has transformed the Indian broking
              industry with its transparent, technology-driven, and
              customer-first approach — empowering millions of investors across
              the country.
            </p>

            <div className="d-flex flex-column gap-2 mt-3">
              <a
                href="https://portfolio-black-seven-88.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-secondary d-flex align-items-center gap-2"
              >
                <span className="small">Connect with me</span>
                <LanguageOutlined style={{ color: "blue" }} fontSize="small" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-secondary d-flex align-items-center gap-2"
              >
                <span className="small">Follow on Instagram</span>
                <Instagram fontSize="small" style={{ color: "blue" }} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-secondary d-flex align-items-center gap-2"
              >
                <span className="small">Follow on</span>
                <XIcon fontSize="small" style={{ color: "blue" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== New Team Members Section ====== */}
      <section className="container py-5 border-top">
        <div className="row justify-content-center text-center">
          {/* Member 1 */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-5">
            <img
              src="media/images/Profile.jpg"
              alt="Co-founder 1"
              className="shadow-sm bg-body-tertiary team-photo"
              style={{ width: "50%", borderRadius: "50%", objectFit: "cover" }}
            />
            <h5 className="mt-3 fw-semibold mb-1 text-dark">
              Jayanta Chungkrang
            </h5>
            <p className="text-secondary mb-2">Co-founder & CFO</p>

            <p
              className="fw-semibold d-flex align-items-center gap-1"
              style={{ cursor: "pointer" }}
              onClick={() => toggleBio(1)}
            >
              Bio <ArrowDropDownIcon />
            </p>
            {openBio === 1 && (
              <p className="text-secondary text-center mx-5 fs-6">
                Jayanta manages the finance and strategy for Arthadhara,
                ensuring sustainable growth.
              </p>
            )}
          </div>

          {/* Member 2 */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-5">
            <img
              src="media/images/Profile.jpg"
              alt="Co-founder 2"
              className="shadow-sm bg-body-tertiary team-photo"
              style={{ width: "50%", borderRadius: "50%", objectFit: "cover" }}
            />
            <h5 className="mt-3 fw-semibold mb-1 text-dark">
              Jayanta Chungkrang
            </h5>
            <p className="text-secondary mb-2">Co-founder & CTO</p>

            <p
              className="fw-semibold d-flex align-items-center gap-1"
              style={{ cursor: "pointer" }}
              onClick={() => toggleBio(2)}
            >
              Bio <ArrowDropDownIcon />
            </p>
            {openBio === 2 && (
              <p className="text-secondary text-center mx-5 fs-6">
                Jayanta leads the tech team and drives innovation at Arthadhara.
              </p>
            )}
          </div>

          {/* Member 3 */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-5">
            <img
              src="media/images/Profile.jpg"
              alt="Co-founder 3"
              className="shadow-sm bg-body-tertiary team-photo"
              style={{ width: "50%", borderRadius: "50%", objectFit: "cover" }}
            />
            <h5 className="mt-3 fw-semibold mb-1 text-dark">
              Jayanta Chungkrang
            </h5>
            <p className="text-secondary mb-2">Co-founder & COO</p>

            <p
              className="fw-semibold d-flex align-items-center gap-1"
              style={{ cursor: "pointer" }}
              onClick={() => toggleBio(3)}
            >
              Bio <ArrowDropDownIcon />
            </p>
            {openBio === 3 && (
              <p className="text-secondary text-center mx-5 fs-6">
                Jayanta oversees operations and ensures smooth functioning
                across all departments.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
