import React from "react";
import { Link } from "react-router-dom";
import {
  CallCallingSvg,
  Discover,
  FooterLogo,
  Master01,
  SmsTracking,
  Stripe,
  Visa01,
} from "../../imagepath";

const Footer2 = () => {
  return (
    <footer className="footer footer-two">
      <div className="footer-social">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6>Would you like to connect with us</h6>
            </div>
            <div className="col-md-6">
              <div className="social-icon">
                <ul>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-facebook-f"></i>{" "}
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
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="index.html">
                    <img src={FooterLogo} alt="logo" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
                <div className="update-form">
                  <form action="#">
                    <span>
                      <i className="feather-mail"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter You Email Here"
                    />
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
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
            <div className="col-lg-2 col-md-6">
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
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Top Cities</h2>
                <ul>
                  <li>
                    <Link to="javascript:void(0)">Manhatten</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Los Angeles</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Houston</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Chicago</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)">Alabama</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h2 className="footer-title">Communication</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <img src={CallCallingSvg} alt="Callus" />
                    <p>
                      <span>Call Us</span> <br /> +017 123 456 78{" "}
                    </p>
                  </div>
                  <div className="footer-address">
                    <img src={SmsTracking} alt="Callus" />
                    <p>
                      <span>Send Message</span> <br /> listee@example.com{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footercount">
            <div className="row">
              <div className="col-md-6">
                <div className="vistors-details">
                  <ul className="d-flex">
                    <li>
                      <Link to="javascript:void(0)">
                        <img className="img-fluid" src={Visa01} alt="visa" />
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">
                        <img
                          className="img-fluid"
                          src={Master01}
                          alt="paycard"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">
                        <img className="img-fluid" src={Discover} alt="spay" />
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">
                        <img className="img-fluid" src={Stripe} alt="spay" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="selection-list ">
                  <div className="lang-select">
                    <span className="select-icon">
                      <i className="feather-globe"></i>
                    </span>
                    <select className="select">
                      <option>India</option>
                      <option>UK</option>
                      <option>Japan</option>
                    </select>
                  </div>
                  <div className="currency-select">
                    <select className="select">
                      <option>USD</option>
                      <option>Euro</option>
                    </select>
                  </div>
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
                    All Copyrights Reserved &copy; 2023 - Listee.
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

export default Footer2;
