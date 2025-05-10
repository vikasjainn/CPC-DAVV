import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Empowering Careers</h2>
          <p>The Strength of DAVV's Centralized Placement Cell</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <img
                    src={d.image} // expects a valid relative path or import
                    alt={d.name}
                    style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "15px" }}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
