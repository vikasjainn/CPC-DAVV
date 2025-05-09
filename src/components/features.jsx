import React from "react";
import CountUp from "react-countup";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <br /><br />
          <h2>Our Placements Statistics of 2024</h2>
        </div>

        {/* Counters */}
        <div className="row" style={{ marginTop: "70px", textAlign: "center" }}>
          <div className="col-sm-3">
            <h3>
              <CountUp end={200} duration={3} />+
            </h3>
            <p>Companies Visited</p>
          </div>
          
          <div className="col-sm-3">
            <h3>
              <CountUp end={1000} duration={3} />+
            </h3>
            <p>Students Placed</p>
          </div>
          
          <div className="col-sm-3">
            <h3>
              <CountUp end={5} duration={3} /> LPA
            </h3>
            <p>Average Package</p>
          </div>

          {/* New Counter */}
          <div className="col-sm-3">
            <h3>
              <CountUp end={1300} duration={3} />+
            </h3>
            <p>Total Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
