import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-secondary mt-3 fs-5 text-muted">
          List of all charges and taxes
        </h3>
      </div>
      <div className="row p-5 mt-5  text-center">
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <img src="media/images/pricingEquity.svg" style={{ width: "60%" }} />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-secondary text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <img src="media/images/intradayTrades.svg" style={{ width: "60%" }} />
             <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-secondary text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <img src="media/images/pricingMF.svg" style={{ width: "60%" }} />
            <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted text-secondary">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
