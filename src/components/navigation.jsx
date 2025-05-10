import React from "react";

export const Navigation = (props) => {
  const handleButtonClick = () => {
    // Replace this URL with the actual link to your form
    window.open("https://app.youform.com/forms/gsxq9o1y", "Hring Form");
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/logo.png"
              alt="Logo"
              style={{
                height: "50px",
                marginTop: "-15px",
                objectFit: "contain",
              }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Companies
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Committee
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>

            {/* Responsive Button with Link Opening in New Tab */}
            <li className="nav-button-wrapper">
              <button 
                className="btn btn-custom btn-lg page-scroll"
                onClick={handleButtonClick}
              >
                Start Hiring At DAVV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
