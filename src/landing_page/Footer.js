import React from "react";

function Footer() {
  return (
    <footer
      className="container py-5 mt-5 border-top"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="row gy-4">
        {/* Logo Section */}
        <div className="col-12 col-md-2 mb-4 mb-md-0 text-start text-md-start">
          <img
            src="media/images/Arthadhara Logo.png"
            alt="Arthadhara Logo"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
            }}
          />
          {/* Footer Bottom */}
          <p className="text-start mt-1  pt-3 text-muted small">
            © {new Date().getFullYear()} Arthadhara. All rights reserved.
          </p>
          <div className="col" style={{ justifyContent: "space-between" }}>
            <a href="" style={{ marginRight: "15px" }}>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="" style={{ marginRight: "15px" }}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" style={{ marginRight: "15px" }}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="" style={{ marginRight: "15px" }}>
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <div
              className="col border-top mt-2 py-2"
              style={{ marginTop: "10px" }}
            >
              <a href="" style={{ marginRight: "15px" }}>
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="" style={{ marginRight: "15px" }}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="col-6 col-md-2">
          <h6 className="fw-bold mb-3">Account</h6>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Open demat account
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Minor demat account
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                NRI demat account
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Commodity
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Dematerialisation
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Fund transfer
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                MTF
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Referral program
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="col-6 col-md-2">
          <h6 className="fw-bold mb-3">Support</h6>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Support portal
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                How to file a complaint?
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Status of your complaints
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Bulletin
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Circular
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Z-Connect blog
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Downloads
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="col-6 col-md-2">
          <h6 className="fw-bold mb-3">Company</h6>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#" className="text-decoration-none text-muted">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Philosophy
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Press & media
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Arthadhara Cares (CSR)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Arthadhara.tech
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Open source
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="col-6 col-md-2">
          <h6 className="fw-bold mb-3">Quick links</h6>
          <ul className="list-unstyled text-muted ">
            <li>
              <a href="#" className="text-decoration-none  text-muted">
                Upcoming IPOs
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Brokerage charges
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Market holidays
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Economic calendar
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Calculators
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Markets
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-muted">
                Sectors
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Disclaimer and Regulatory Info */}
      <div className="row mt-4">
        <div className="col-12">
          <p className="text-muted small mb-1">
            Arthadhara Broking Ltd.: Member of NSE, BSE &amp; MCX – SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through Arthadhara Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019. Commodity Trading through Arthadhara Commodities
            Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238.
          </p>
          <p className="text-muted small mb-1">
            Registered Address: Arthadhara Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. CIN: U67120KA2010PLC112234
          </p>
          <p className="text-muted small">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing. Brokerage will
            not exceed the SEBI prescribed limit. Please refer to the{" "}
            <a href="#" className="text-decoration-none text-muted">
              disclosure
            </a>{" "}
            document for more details.
          </p>
        </div>
        <div className="col mx-5   ">
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            NSE{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            BSE{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            MCX{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            Terms & conditions{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            Policies & procedures{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            Privacy policy{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            Disclosure{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            For investor's attention{" "}
          </a>
          <a
            href=""
            className="text-secondary"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            Investor charter{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
