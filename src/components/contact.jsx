import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container text-center">
          <div className="section-title">
            <h2>Hire At Centralized Placement Cell DAVV</h2>
            <p>
              If you are interested in hiring students from our university, please write to us at <a href="mailto:contact.cpc@dauniv.ac.in">contact.cpc@dauniv.ac.in</a> or <a href="mailto:gmaheshwari@ietdavv.edu.in">gmaheshwari@ietdavv.edu.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* Beautiful Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>{props.data ? props.data.address : "DAVV, Indore - MP, India"}</p>
              <p>{props.data ? props.data.phone : "+91 XXXXXXXXXX"}</p>
              <p>{props.data ? props.data.email : "placement@davv.ac.in"}</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Gallery</a></li>
                <li><a href="#testimonials">Core Committee</a></li>
                <li><a href="/Documents\CPC Report.pdf">Placement Brochure 2025-26</a></li>
                <li><a href="/Documents/CPC_Guidelines.pdf">Placement Guidelines</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href={props.data ? props.data.linkedin : "/"}><i className="fa fa-linkedin"></i></a>
                <a href={props.data ? props.data.youtube : "/"}><i className="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Centralized Placement Cell, DAVV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
