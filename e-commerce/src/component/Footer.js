import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="section footer">
        <div className="container-main">
          <div className="footer-container">
            <div className="footer-center">
              <h3>EXTRAS</h3>
              <Link to="#"> Brands</Link>
              <Link to="#"> Gift Certificates</Link>
              <Link to="#"> Affiliate</Link>
              <Link to="#"> Specials</Link>
              <Link to="#"> Site Map</Link>
            </div>
            <div className="footer-center">
              <h3>INFORMATION</h3>
              <Link to="#"> About Us</Link>
              <Link to="#"> Privacy Policy</Link>
              <Link to="#"> Terms & Conditions</Link>
              <Link to="#"> Contact Us</Link>
              <Link to="#"> Site Map</Link>
            </div>
            <div className="footer-center">
              <h3>MY ACCOUNT</h3>
              <Link to="#"> My Account</Link>
              <Link to="#"> Order History</Link>
              <Link to="#"> Wish List</Link>
              <Link to="#"> blogletter</Link>
              <Link to="#"> Returns</Link>
            </div>
            <div className="footer-center">
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                village Asgarpur, Bijnor
              </div>
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                nitin@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                456-456-4512
              </div>
              <div>
                <span>
                  <i className="far fa-paper-plane"></i>
                </span>
                created by nitin rajput
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
