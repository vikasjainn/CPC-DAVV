import React from "react";
import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed */}
            {/* dapibus leonec. */}
          </p>
        </div>

        {/* Default gallery items */}
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
        <br />
        <div className="section-title">
          <h2>Some Of Our Recruitment Partners
          </h2>
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed */}
            {/* dapibus leonec. */}
          </p>
        </div>

        {/* Two inline fixed-size images */}
        <div className="gallery-inline-images">
          <img src="/img/companies1.png" alt="Custom 1" />
          <img src="/img/companies2.png" alt="Custom 2" />

        </div>
      </div>
    </div>
  );
};
