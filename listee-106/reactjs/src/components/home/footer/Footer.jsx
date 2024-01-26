import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Amexpay,
  Applepay,
  CallCallingSvg,
  FooterLogo,
  Gpay,
  Master,
  Phone,
  SmsTracking,
  Visa,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="stay-tuned">
          <h3>Stay Tuned With Us</h3>
          <p>
            Subcribe to our newletter and never miss our latest news and
            promotions. Our newsletter is sent once a week, every thursday.
          </p>
          <form>
            <div className="form-group">
              <div className="group-img">
                <i className="feather-mail"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              {" "}
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="#">
                    <img src={FooterLogo} alt="logo" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt et magna aliqua.{" "}
                  </p>
                </div>
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
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">About us</h2>
                <ul>
                  <li>
                    <Link to="/about">Our product</Link>
                  </li>
                  <li>
                    <Link to="#">Documentation</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Our Services</Link>
                  </li>
                  <li>
                    <Link to="#">Get Started Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Quick links</h2>
                <ul>
                  <li>
                    <Link to="#">Market Place</Link>
                  </li>
                  <li>
                    <Link to="#">Documentation</Link>
                  </li>
                  <li>
                    <Link to="#">Customers</Link>
                  </li>
                  <li>
                    <Link to="#">Carriers</Link>
                  </li>
                  <li>
                    <Link to="/blog-list">Our Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Top Cities</h2>
                <ul>
                  <li>
                    <Link to="#">Manhatten</Link>
                  </li>
                  <li>
                    <Link to="#">Los Angeles</Link>
                  </li>
                  <li>
                    <Link to="#">Houston</Link>
                  </li>
                  <li>
                    <Link to="#">Chicago</Link>
                  </li>
                  <li>
                    <Link to="#">Alabama</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
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
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>Our Unique Visitor</p>
                  <p className="visitors-value">25,329,532</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>Our Unique Visitor</p>
                  <p className="visitors-value">25,329,53264546</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>Our Unique Visitor</p>
                  <p className="visitors-value">25,329,53264546</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="vistors-details">
                  <p>We Accept</p>
                  <ul className="d-flex">
                    <li>
                      <Link to="#">
                        <img className="img-fluid" src={Amexpay} alt="amex" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img className="img-fluid" src={Applepay} alt="pay" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img className="img-fluid" src={Gpay} alt="gpay" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img className="img-fluid" src={Master} alt="paycard" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img className="img-fluid" src={Phone} alt="spay" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img className="img-fluid" src={Visa} alt="visa" />
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
              <div className="col-md-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    All Copyrights Reserved &copy; 2023 - Listee.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <Link to="/privacy-policy">Privacy </Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq </Link>
                    </li>
                    <li>
                      <Link to="/terms-condition">Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
