import React from "react";
import { Link } from "react-router-dom";
import { LogoPng } from "../../imagepath";

const Footer4 = () => {
  return (
    <footer className="footer footer-four">
      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="#">
                    <img src={LogoPng} alt="logo" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>Discover amazing things to do everywhere you go.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">About us</h2>
                <ul>
                  <li>
                    <Link to="about.html">Our product</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Documentation</Link>
                  </li>
                  <li>
                    <Link to="service-details.html">Our Services</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Get Started Us</Link>
                  </li>
                  <li>
                    <Link to="contact.html">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Quick links</h2>
                <ul>
                  <li>
                    <Link to="javascript:void(0)">Market Place</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Documentation</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Customers</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Carriers</Link>
                  </li>
                  <li>
                    <Link to="blog-list.html">Our Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2 className="footer-title">Communication</h2>
                <div className="footer-contact-info">
                  <ul>
                    <li>Email: listee@example.com</li>
                    <li>Phone: 1 (00) 832 2342</li>
                  </ul>
                </div>

                <div className="social-icon">
                  <ul>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-twitter"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text text-center">
                  <p className="mb-0">
                    2023 &copy; Listee. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
