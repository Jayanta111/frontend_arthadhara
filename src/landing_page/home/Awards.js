import React from 'react';

function Awards() {
  return (
    <div className="container mt-3 p-5 mb-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Awards Image"
            className="img-fluid"
            style={{ maxWidth: '90%', height: 'auto' }}
          />
        </div>

        {/* Right Text Section */}
        <div className="col-md-6 col-12 mt-3">
          <h1 className="fw-bold mb-3 text-center text-md-start">
            India's Largest Stock Broker
          </h1>
          <p className="mb-5 text-center text-md-start">
            Arthadhara has been recognized as India's largest stock broker, trusted by millions of investors and traders. Our commitment to transparency, innovation, and customer-centric services has set new benchmarks in the financial industry.
          </p>

          {/* Features list */}
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Futures and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Bonds and Govt Securities</p></li>
              </ul>
            </div>
          </div>

          {/* Logos */}
          <div className="text-center mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: '90%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
