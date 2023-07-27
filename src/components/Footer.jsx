import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <ul className="list-unstyled social-icons">
              <li className="mr-3">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="mr-3">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
