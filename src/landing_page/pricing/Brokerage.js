import React from "react";

function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row p-5 mt-5  text-center ">
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <a href="" style={{textDecoration:"none"}}>
            {" "}
            <h3 className="fs-5">Brokerage Calculator </h3>
         
          </a>
          <ul style={{textAlign:"left" ,lineHeight:"2.5" ,fontSize:"12px"}}className="text-muted">
             <li >Calculate brokerage for equity delivery</li>
             <li>Calculate brokerage for intraday trades</li>
             <li>Calculate brokerage for F&O (Futures & Options)</li>
             <li>Calculate brokerage for currency trading</li>
             <li>Calculate brokerage for commodity trading</li>
         </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-8 p-4">
          <a href=""style={{textDecoration:"none"}}>
            <h3 className="fs-5">List of charges </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
