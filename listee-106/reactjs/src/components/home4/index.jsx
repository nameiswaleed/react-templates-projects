import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BannerImg4,
  Blog12,
  Blog13,
  Blog14,
  Blog15,
  CategoryIcon1,
  CategoryIcon13,
  CategoryIcon14,
  CategoryIcon15,
  CategoryIcon2,
  CategoryIcon3,
  Cowork1,
  Cowork2,
  Cowork3,
  ProfileAvatar02,
  ProfileAvatar03,
  ProfileAvatar04,
  ProfileAvatar05,
  ProfileAvatar10,
  ProfileAvatar12,
  ProfileAvatar13,
  ProfileAvatar14,
  SpaceImg,
  Work1,
  Work2,
  Work3,
  Work4,
  WorkCity1,
  WorkCity2,
  WorkCity3,
  WorkCity4,
  WorkCity5,
  WorkCity6,
} from "../imagepath";
import Footer4 from "./footer/Footer4";
import Header4 from "./header/Header4";
import InterestedIn from "./slider/InterestedIn";
import Testimonial4 from "./slider/Testimonial4";
import AOS from "aos";
import "aos/dist/aos.css";

const Home4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    const handleSwitchClick = () => {
      if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
      } else {
        $("body").addClass("light");
        $(".switch").addClass("switched");
      }
    };
    const handleScroll = () => {
      const e = document.querySelector(".progress-wrap path");
      const t = e.getTotalLength();
      const o = window.scrollY;
      const r = document.body.clientHeight - window.innerHeight;
      const i = t - o * t / r;
      e.style.strokeDashoffset = i;

      if ($(window).scrollTop() > 50) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    };

    $(".switch").on("click", handleSwitchClick);

    $(window).on("scroll", handleScroll);

    $(".progress-wrap").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });

    return () => {
      $(".switch").off("click", handleSwitchClick);
      $(window).off("scroll", handleScroll);
      $(".progress-wrap").off("click");
    };
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <Header4 />
        {/* Banner Section */}
        <section className="banner-section banner-four">
          <div className="container">
            <div className="home-banner">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="section-search aos" data-aos="fade-up">
                    <h6>Now</h6>
                    <h1>Find perfect working space near you!</h1>
                    <p>Affordable workspaces in the cities you love</p>
                    <div className="search-box">
                      <form
                        action="listing-grid-sidebar"
                        className="form-block d-flex"
                      >
                        <div className="search-input line">
                          <div className="form-group mb-0">
                            <label>Find</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Ex: Virutual Office"
                            />
                          </div>
                        </div>
                        <div className="search-input">
                          <div className="form-group mb-0">
                            <label>Where</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your City"
                            />
                          </div>
                        </div>
                        <div className="search-btn">
                          <button className="btn btn-primary" type="submit">
                            Search Now{" "}
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="banner-imgs aos" data-aos="fade-up">
                    <img
                      src={BannerImg4}
                      className="img-fluid"
                      alt="bannerimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section */}

        {/* Category Section */}
        <section className="category-four-section">
          <div className="container">
            <div className="category-sec">
              <div className="row">
                <div
                  className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="category-box flex-fill">
                    <span>
                      <img src={CategoryIcon1} className="img-fluid" alt="img" />
                    </span>
                    <div className="category-info">
                      <h6>Extraordinarily Easy</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="category-box flex-fill">
                    <span>
                      <img src={CategoryIcon2} className="img-fluid" alt="img" />
                    </span>
                    <div className="category-info">
                      <h6>Truly Transparent</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="category-box flex-fill">
                    <span>
                      <img src={CategoryIcon3} className="img-fluid" alt="img" />
                    </span>
                    <div className="category-info">
                      <h6>Fantastically Free</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 d-flex aos"
                  data-aos="fade-up"
                >
                  <div className="category-box flex-fill">
                    <span>
                      <img src={CategoryIcon2} className="img-fluid" alt="img" />
                    </span>
                    <div className="category-info">
                      <h6>Convenient Place</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Category Section */}

        {/* Cowork Section */}
        <section className="cowork-section">
          <div className="container">
            <div className="cowork-sec">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="section-heading heading-four aos"
                    data-aos="fade-up"
                  >
                    <h2>What Are You interested in?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </div>
                </div>
                <div className="col-md-4 text-md-end aos" data-aos="fade-up">
                  <div className="interset-btn">
                    <Link
                      to="/service-details"
                      className="btn btn-primary more-btn"
                    >
                      View More <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 aos" data-aos="fade-up">
                  <div className="cowork-box">
                    <Link to="/service-details">
                      <div className="cowork-img">
                        <img src={Cowork1} className="img-fluid" alt="img" />
                      </div>
                    </Link>
                    <div className="cowork-info">
                      <h5>
                        <Link to="/service-details">Coworking Space</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 aos" data-aos="fade-up">
                  <div className="cowork-box">
                    <Link to="/service-details">
                      <div className="cowork-img">
                        <img src={Cowork2} className="img-fluid" alt="img" />
                      </div>
                    </Link>
                    <div className="cowork-info">
                      <h5>
                        <Link to="/service-details">Meeting Room</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 aos" data-aos="fade-up">
                  <div className="cowork-box">
                    <Link to="/service-details">
                      <div className="cowork-img">
                        <img src={Cowork3} className="img-fluid" alt="img" />
                      </div>
                    </Link>
                    <div className="cowork-info">
                      <h5>
                        <Link to="/service-details">Virtual Office</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cowork Section */}

        {/* Interested In Section */}
        <InterestedIn />
        {/* Interested In Section */}

        {/* Space Section */}
        <section className="space-section">
          <div className="container">
            <div className="space-sec">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="section-heading heading-four aos"
                    data-aos="fade-up"
                  >
                    <h2>Newest Flexible Office Spaces</h2>
                    <p>Search for coworking spaces in our most popular cities</p>
                  </div>
                </div>
                <div className="col-md-4 text-md-end aos" data-aos="fade-up">
                  <div className="interset-btn">
                    <Link
                      to="/service-details"
                      className="btn btn-primary more-btn"
                    >
                      View More <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                  <div className="space-wrap">
                    <div className="space-img">
                      <Link to="/service-details">
                        <img src={Work1} className="img-fluid" alt="blog-img" />
                      </Link>
                      <div className="fav-item">
                        <span className="featured-text">Featured</span>
                      </div>
                    </div>
                    <div className="space-content">
                      <div className="space-cat">
                        <img
                          src={CategoryIcon13}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span>(10)</span>
                      </div>
                      <h5>
                        <Link to="/service-details">Y&M Hamburger Co.</Link>
                      </h5>
                      <ul>
                        <li className="addr">
                          <i className="feather-map-pin"></i> Clarkrange, US
                        </li>
                        <li>
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="price">
                        <img
                          src={ProfileAvatar02}
                          className="img-fluid"
                          alt="img"
                        />
                        <span>$12/m</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                  <div className="space-wrap">
                    <div className="space-img">
                      <Link to="/service-details">
                        <img src={Work2} className="img-fluid" alt="blog-img" />
                      </Link>
                      <div className="fav-item">
                        <span className="featured-text">Featured</span>
                      </div>
                    </div>
                    <div className="space-content">
                      <div className="space-cat">
                        <img
                          src={CategoryIcon14}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span>(10)</span>
                      </div>
                      <h5>
                        <Link to="/service-details">Mech Work Co.</Link>
                      </h5>
                      <ul>
                        <li className="addr">
                          <i className="feather-map-pin"></i> NSW, London
                        </li>
                        <li>
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="price">
                        <img
                          src={ProfileAvatar03}
                          className="img-fluid"
                          alt="img"
                        />
                        <span>$34/m</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                  <div className="space-wrap">
                    <div className="space-img">
                      <Link to="/service-details">
                        <img src={Work3} className="img-fluid" alt="blog-img" />
                      </Link>
                      <div className="fav-item">
                        <span className="featured-text">Featured</span>
                      </div>
                    </div>
                    <div className="space-content">
                      <div className="space-cat">
                        <img
                          src={CategoryIcon15}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span>(10)</span>
                      </div>
                      <h5>
                        <Link to="/service-details">Biconnect Shift</Link>
                      </h5>
                      <ul>
                        <li className="addr">
                          <i className="feather-map-pin"></i> Texas, Uk
                        </li>
                        <li>
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="price">
                        <img
                          src={ProfileAvatar04}
                          className="img-fluid"
                          alt="img"
                        />
                        <span>$45/m</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                  <div className="space-wrap">
                    <div className="space-img">
                      <Link to="/service-details">
                        <img src={Work4} className="img-fluid" alt="blog-img" />
                      </Link>
                      <div className="fav-item">
                        <span className="featured-text">Featured</span>
                      </div>
                    </div>
                    <div className="space-content">
                      <div className="space-cat">
                        <img
                          src={CategoryIcon13}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span>(10)</span>
                      </div>
                      <h5>
                        <Link to="/service-details">Worksion space</Link>
                      </h5>
                      <ul>
                        <li className="addr">
                          <i className="feather-map-pin"></i> New York, USA
                        </li>
                        <li>
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart"></i>
                          </Link>
                        </li>
                      </ul>
                      <div className="price">
                        <img
                          src={ProfileAvatar05}
                          className="img-fluid"
                          alt="img"
                        />
                        <span>$27/m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Space Section */}

        {/* City Section */}
        <section className="city-section">
          <div className="container">
            <div className="city-sec">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="section-heading heading-four aos"
                    data-aos="fade-up"
                  >
                    <h2>Top Coworking Cities</h2>
                    <p>Search for coworking spaces in our most popular cities</p>
                  </div>
                </div>
                <div className="col-md-4 text-md-end aos" data-aos="fade-up">
                  <div className="interset-btn">
                    <Link
                      to="/categories"
                      className="btn btn-primary more-btn"
                    >
                      View More <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-sm-6 aos" data-aos="fade-up">
                  <div className="city-wrap">
                    <div className="city-img">
                      <img src={WorkCity1} className="img-fluid" alt="blog-img" />
                      <Link to="/categories">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="city-content">
                      <h5>
                        <Link to="/categories">Chicago</Link>
                      </h5>
                      <p>
                        <span>65</span> Spaces
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 aos" data-aos="fade-up">
                  <div className="city-wrap">
                    <div className="city-img">
                      <img src={WorkCity2} className="img-fluid" alt="blog-img" />
                      <Link to="/categories">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="city-content">
                      <h5>
                        <Link to="/categories">Atlanta</Link>
                      </h5>
                      <p>
                        <span>25</span> Spaces
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 aos" data-aos="fade-up">
                  <div className="city-wrap">
                    <div className="city-img">
                      <img src={WorkCity3} className="img-fluid" alt="blog-img" />
                      <Link to="/categories">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="city-content">
                      <h5>
                        <Link to="/categories">Boston</Link>
                      </h5>
                      <p>
                        <span>45</span> Spaces
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 aos" data-aos="fade-up">
                  <div className="city-wrap">
                    <div className="city-img">
                      <img src={WorkCity4} className="img-fluid" alt="blog-img" />
                      <Link to="/categories">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="city-content">
                      <h5>
                        <Link to="/categories">Los Angeles</Link>
                      </h5>
                      <p>
                        <span>43</span> Spaces
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 aos" data-aos="fade-up">
                  <div className="city-wrap">
                    <div className="city-img">
                      <img src={WorkCity5} className="img-fluid" alt="blog-img" />
                      <Link to="/categories">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="city-content">
                      <h5>
                        <Link to="/categories">San Fancisco</Link>
                      </h5>
                      <p>
                        <span>87</span> Spaces
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 aos" data-aos="fade-up">
                  <div className="city-wrap">
                    <div className="city-img">
                      <img src={WorkCity6} className="img-fluid" alt="blog-img" />
                      <Link to="/categories">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="city-content">
                      <h5>
                        <Link to="/categories">New York</Link>
                      </h5>
                      <p>
                        <span>12</span> Spaces
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* City Section */}

        {/* Client Testimonial */}
        <section className="testimonial-section">
          <Testimonial4 />
          <div className="container">
            <div className="list-sec">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="listee-content aos" data-aos="fade-up">
                    <h3>List your space for free</h3>
                    <p>
                      It's easy to list, simple to manage and, best of all, free
                      to list!
                    </p>
                    <Link to="/add-listing" className="btn">
                      Add your space <i className="feather-plus"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="listee-img aos" data-aos="fade-up">
                    <img src={SpaceImg} className="img-fluid" alt="CTA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Client Testimonial */}

        {/* Pricing Plan Section */}
        <section className="pricing-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div
                  className="section-heading heading-four aos"
                  data-aos="fade-up"
                >
                  <h2>Our Pricing Plan</h2>
                  <p>Search for coworking spaces in our most popular cities</p>
                </div>
              </div>
              <div className="col-md-4 text-md-end aos" data-aos="fade-up">
                <div className="interset-btn">
                  <div className="status-toggle d-inline-flex align-items-center">
                    Monthly
                    <input type="checkbox" id="status_1" className="check" />
                    <label for="status_1" className="checktoggle">
                      checkbox
                    </label>
                    Yearly
                  </div>
                </div>
              </div>
            </div>
            <div className="price-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="price-card price-four flex-fill">
                    <div>
                      <div className="price-head">
                        <h4>
                          $10 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Starter</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>Unleash the power of automation.</p>
                        <ul>
                          <li className="active">Multi-step Zaps</li>
                          <li className="active">3 Premium Apps</li>
                          <li className="active">2 Users team</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Link to="/login" className="btn viewdetails-btn">
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="price-card price-four flex-fill">
                    <div>
                      <div className="price-head">
                        <h4>
                          $54 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Professional</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>Advanced tools to take your work to the next level.</p>
                        <ul>
                          <li className="active">Multi-step Zaps</li>
                          <li className="active">3 Premium Apps</li>
                          <li className="active">50 Users team</li>
                          <li className="active">Shared Workspace</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Link to="/login" className="btn viewdetails-btn">
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                  <div className="price-card price-four active">
                    <div>
                      <div className="price-head">
                        <div className="text-end">
                          <span className="feature">MOST POPULAR</span>
                        </div>
                        <h4>
                          $89 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Company</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>Automation plus enterprise-grade features.</p>
                        <ul>
                          <li className="active">Multi-step Zap</li>
                          <li className="active">Unlimited Premium Apps</li>
                          <li className="active">Unlimited Users Team</li>
                          <li className="active">Advanced Admin</li>
                          <li className="active">Custom Data Retention</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Link to="/login" className="btn viewdetails-btn">
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="price-card price-four flex-fill">
                    <div>
                      <div className="price-head">
                        <h4>
                          $54 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Professional</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>Advanced tools to take your work to the next level.</p>
                        <ul>
                          <li className="active">Multi-step Zaps</li>
                          <li className="active">3 Premium Apps</li>
                          <li className="active">50 Users team</li>
                          <li className="active">Shared Workspace</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Link to="/login" className="btn viewdetails-btn">
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Plan Section */}

        {/* Blog Section */}
        <section className="blog-section-four">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div
                  className="section-heading heading-four aos"
                  data-aos="fade-up"
                >
                  <h2>From Our Blog</h2>
                  <p>Search for coworking spaces in our most popular cities</p>
                </div>
              </div>
              <div className="col-md-4 text-md-end aos" data-aos="fade-up">
                <div className="interset-btn">
                  <Link to="/blog-grid" className="btn btn-primary more-btn">
                    View More <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog grid-blog blog-four flex-fill">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog12} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        The 8 Most Affordable Michelin Restaurants
                      </Link>
                    </h3>
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img src={ProfileAvatar14} alt="Post Author" />
                          </div>
                          <div>
                            <Link to="#">
                              {" "}
                              <span>Amara</span>
                            </Link>
                            <p>Jan 12, 2023</p>
                            <h6>PARIS FOOD</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog grid-blog blog-four flex-fill">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog13} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        The 9 Best Cheap Hotels in New York City
                      </Link>
                    </h3>
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img src={ProfileAvatar12} alt="Post Author" />
                          </div>
                          <div>
                            <Link to="#" className="mb-0">
                              <span> Darryl </span>
                            </Link>
                            <p>Feb 10, 2023</p>
                            <h6>NEW YORK Hotel</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog grid-blog blog-four">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog14} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        The 7 Best Restaurants to Try Kobe Beef in London
                      </Link>
                    </h3>
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img src={ProfileAvatar13} alt="Post Author" />
                          </div>
                          <div>
                            <Link to="#" className="mb-0">
                              {" "}
                              <span> Mary </span>
                            </Link>
                            <p>Jan 17, 2023</p>
                            <h6>City Hotel</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="blog grid-blog blog-four">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={Blog15} alt="Post Image" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        The 15 Best Cheap Hotels in San Fancisco City
                      </Link>
                    </h3>
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img src={ProfileAvatar10} alt="Post Author" />
                          </div>
                          <div>
                            <Link to="#">
                              {" "}
                              <span>Dasteen</span>
                            </Link>
                            <p>Mar 10, 2023</p>
                            <h6>Foood Corner</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section */}

        <Footer4 />
      </div>
      {/* scrollToTop start */}
      <div className="progress-wrap active-progress">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919px, 307.919px",
              strokeDashoffset: "228.265px"
            }}
          />
        </svg>
      </div>
      {/* scrollToTop end */}
    </>
  );
};

export default Home4;
