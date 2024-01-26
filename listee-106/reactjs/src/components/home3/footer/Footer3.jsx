import React from "react";
import SelectCommon from "../../common/SelectCommon";
import {
  Discover,
  GalleryImg1,
  GalleryImg10,
  GalleryImg2,
  GalleryImg9,
  Master01,
  Stripe,
  Visa01,
} from "../../imagepath";
import { Link } from "react-router-dom";
import FancyIndex3 from "./myComponent1";

const Footer3 = () => {
  const countryOptions = [
    { label: "India", value: "India" },
    { label: "UK", value: "Uk" },
    { label: "Japan", value: "Japan" },
  ];
  const currencyOptions = [
    { label: "USD", value: "USD" },
    { label: "Euro", value: "Euro" },
  ];
  return (
    <footer className="section-blk footer-blk footer-three">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="top-foo-widget">
              <div className="help-info">
                <p>Toll Free Customer Care +(1) 123 456 7890</p>
                <p>Need live support? listee@example.com</p>
              </div>
              <div className="social-info">
                <ul className="d-flex">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="middle-foo-widget">
              <div className="row sm-row-gap-23">
                <div className="col-md-7">
                  <div className="links-blk">
                    <div className="row sm-row-gap-23">
                      <div className="col-auto col-md-3">
                        <div className="col-style">
                          <h5>About us</h5>
                          <ul>
                            <li>
                              <Link to="/about">Our product</Link>
                            </li>
                            <li>
                              <Link to="#">Documentation</Link>
                            </li>
                            <li>
                              <Link to="/service-details">
                                Our Services
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                Get Started Us
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-auto col-md-3">
                        <div className="col-style">
                          <h5>Quick links</h5>
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
                      <div className="col-auto col-md-3">
                        <div className="col-style">
                          <h5>Services</h5>
                          <ul>
                            <li>
                              <Link to="/service-details">Hotel</Link>
                            </li>
                            <li>
                              <Link to="/service-details">
                                Activity Finder
                              </Link>
                            </li>
                            <li>
                              <Link to="/service-details">
                                Flight finder
                              </Link>
                            </li>
                            <li>
                              <Link to="/service-details">
                                Holiday Rental
                              </Link>
                            </li>
                            <li>
                              <Link to="/service-details">
                                Travel Agents
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-auto col-md-3">
                        <div className="col-style">
                          <h5>Destinations</h5>
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
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="drop-blk">
                    <h5>Gallery</h5>
                    <FancyIndex3/>
                    <ul className="navbar-nav selection-list mt-4">
                      <li className="nav-item dropdown">
                        <div className="lang-select">
                          <span className="select-icon">
                            <i className="feather-globe"></i>
                          </span>
                          <div className="countryoptions">
                          <SelectCommon options={countryOptions} />
                          </div>
                          
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <div className="lang-select">
                          <span className="select-icon">
                            <i className="fa-solid fa-coins"></i>
                          </span>
                          <div className="countryoptions">
                          <SelectCommon options={currencyOptions} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="btm-foo-widget">
              <div className="copy-info">
                <p>Copyright © 2023 Listee. All rights are reserved.</p>
              </div>
              <div className="payment-info">
                <ul className="d-flex">
                  <li>
                    <img className="img-fluid" src={Visa01} alt="visa" />
                  </li>
                  <li>
                    <img className="img-fluid" src={Master01} alt="paycard" />
                  </li>
                  <li>
                    <img className="img-fluid" src={Discover} alt="spay" />
                  </li>
                  <li>
                    <img className="img-fluid" src={Stripe} alt="spay" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
