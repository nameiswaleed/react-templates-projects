import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Blog16,
  Blog17,
  Blog18,
  Blog19,
  Category18Svg,
  Category19Svg,
  Category20Svg,
  Category21Svg,
  Category22Svg,
  Category23Svg,
  Category24Svg,
  Category25Svg,
  Category26Svg,
  Category27Svg,
  Category28Svg,
  City1,
  City2,
  City3,
  City4,
  FeaturePng,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
} from "../imagepath";
import Footer5 from "./footer/Footer5";
import Header5 from "./header/Header5";
import Select5 from "./select5/Select5";
import LatestAds from "./slider/LatestAds";
import Testimonial5 from "./slider/Testimonial5";
import Trending5 from "./slider/Trending5";
import AOS from "aos";
import "aos/dist/aos.css";
const Home5 = () => {
  const [value, setValue] = useState(null);
  const cateogoryOptions = [
    { label: "Computer", value: "Computer" },
    { label: "Automobile", value: "Automobile" },
    { label: "Car Wash", value: "Car Wash" },
    { label: "Cleaning", value: "Cleaning" },
    { label: "Electrical", value: "Electrical" },
    { label: "Construction", value: "Construction" },
  ];
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
      <Header5 />

      {/* Banner */}
      <section className="banner-section banner-five">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto">
                <div className="section-search aos" data-aos="fade-up">
                  <h1>Discover your amazing city</h1>
                  <p>20 cities, 10 categories, 5662 listings.</p>
                  <div className="search-box">
                    <form
                      action="/listing-grid-sidebar"
                      className="form-block d-flex"
                    >
                      <div className="search-input line">
                        <div className="form-group mb-0">
                          <div className="discover">
                          <Select5 options={cateogoryOptions} />
                          </div>
                          
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="form-group mb-0">
                          <div className="group-img">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Choose Location"
                            />
                            <i className="feather-map-pin"></i>
                          </div>
                        </div>
                      </div>
                      <div className="search-btn">
                        <button className="btn btn-primary" type="submit">
                          <i
                            className="fa fa-search m-0"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}

      {/* Category */}
      <section className="category-five-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading heading-five aos"
                data-aos="fade-up"
              >
                <h2>Our Categories</h2>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="category-items text-center">
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category18Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Restaurant</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category19Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Beauty & Care</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category20Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Fitness</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category21Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Night Life</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category22Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Shopping</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category23Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Cinema</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="category-items cate-row2">
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category24Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Lodging</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category25Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Outdoors</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category26Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Automotive</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category27Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Marketing</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="categories-box">
                    <div className="categories-info">
                      <span>
                        <img
                          src={Category28Svg}
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <h6>Child Care</h6>
                      <p>09 Ads</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Category */}

      {/* Business */}
      <Trending5 />
      {/* Business */}

      {/* Cities */}
      <section className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-heading heading-five aos"
                data-aos="fade-up"
              >
                <h2>Featured Cities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="city-box aos" data-aos="fade-up">
                <div className="citi-img">
                  <Link to="#">
                    <img src={City1} className="img-fluid" alt="img" />
                  </Link>
                </div>
                <div className="city-overlay">
                  <div className="city-name">
                    <h5>New York</h5>
                    <ul>
                      <li>
                        <i className="feather-map-pin"></i> 10 Cities
                      </li>
                      <li>
                        <i className="feather-map"></i> 30+ Listing
                      </li>
                    </ul>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="city-box aos" data-aos="fade-up">
                <div className="citi-img">
                  <Link to="#">
                    <img src={City2} className="img-fluid" alt="img" />
                  </Link>
                </div>
                <div className="city-overlay">
                  <div className="city-name">
                    <h5>London</h5>
                    <ul>
                      <li>
                        <i className="feather-map-pin"></i> 15 Cities
                      </li>
                      <li>
                        <i className="feather-map"></i> 23+ Listing
                      </li>
                    </ul>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="city-box aos" data-aos="fade-up">
                <div className="citi-img">
                  <Link to="#">
                    <img src={City3} className="img-fluid" alt="img" />
                  </Link>
                </div>
                <div className="city-overlay">
                  <div className="city-name">
                    <h5>Korea</h5>
                    <ul>
                      <li>
                        <i className="feather-map-pin"></i> 12 Cities
                      </li>
                      <li>
                        <i className="feather-map"></i> 32+ Listing
                      </li>
                    </ul>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="city-box aos" data-aos="fade-up">
                <div className="citi-img">
                  <Link to="#">
                    <img src={City4} className="img-fluid" alt="img" />
                  </Link>
                </div>
                <div className="city-overlay">
                  <div className="city-name">
                    <h5>Malaysia</h5>
                    <ul>
                      <li>
                        <i className="feather-map-pin"></i> 18 Cities
                      </li>
                      <li>
                        <i className="feather-map"></i> 24+ Listing
                      </li>
                    </ul>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cities */}

      {/* Space */}
      <section className="adventure-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-0 aos" data-aos="fade-up">
              <div className="featuring-img">
                <img src={FeaturePng} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="adventure-info">
                <div
                  className="section-heading heading-five aos"
                  data-aos="fade-up"
                >
                  <h6>Why Choose Us</h6>
                  <h2>
                    Its Time For New Adventures Escapes thrills & experiences
                  </h2>
                </div>
                <div className="advent-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
                <Link to="/service-details" className="btn btn-grey">
                  Get Started <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Space */}

      {/* Best place */}
      <section className="gallery-section-five">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-heading heading-five aos"
                data-aos="fade-up"
              >
                <h2>Best Place on Earth</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 aos" data-aos="fade-up">
              <div className="gal-wrap">
                <img src={Gallery1} className="img-fluid" alt="img" />
                <div className="city-overlay city-five-overlay">
                  <div className="city-name">
                    <h5>Oceania / Africa / US </h5>
                    <p>The collection of the Department of Africa.</p>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 aos" data-aos="fade-up">
              <div className="gal-wrap">
                <img src={Gallery2} className="img-fluid" alt="img" />
                <div className="city-overlay city-five-overlay">
                  <div className="city-name">
                    <h5>Oceania</h5>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="gal-wrap">
                <img src={Gallery3} className="img-fluid" alt="img" />
                <div className="city-overlay city-five-overlay">
                  <div className="city-name">
                    <h5>Africa </h5>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 aos" data-aos="fade-up">
              <div className="gal-wrap">
                <img src={Gallery4} className="img-fluid" alt="img" />
                <div className="city-overlay city-five-overlay">
                  <div className="city-name">
                    <h5>Oceania </h5>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="gal-wrap">
                <img src={Gallery5} className="img-fluid" alt="img" />
                <div className="city-overlay city-five-overlay">
                  <div className="city-name">
                    <h5>Africa / US </h5>
                  </div>
                  <div className="rating d-flex">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best place */}

      {/* Latest Ads */}
      <LatestAds />
      {/* Latest Ads */}

      {/* Pricing Plan */}
      <section className="pricing-plan">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading heading-five price-head-five aos"
                data-aos="fade-up"
              >
                <h2>Our Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three price-five flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Intro</h6>
                  </div>
                </div>
                <div className="price-body">
                  <ul>
                    <li className="active">
                      Upload Video up to 720p Resolution
                    </li>
                    <li className="inactive">Attachment & Post Scheduling</li>
                    <li className="inactive">Set your rates</li>
                    <li className="inactive">Exclusive Deals</li>
                    <li className="inactive">Advanced Statistics</li>
                  </ul>
                  <h4>
                    $123 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose Plan <i className="feather-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three price-five flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Basic</h6>
                  </div>
                </div>
                <div className="price-body">
                  <ul>
                    <li className="active">
                      Upload Video up to 720p Resolution
                    </li>
                    <li className="active">Attachment & Post Scheduling</li>
                    <li className="active">Set your rates</li>
                    <li className="inactive">Exclusive Deals</li>
                    <li className="inactive">Advanced Statistics</li>
                  </ul>
                  <h4>
                    $123 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose Plan <i className="feather-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three price-five flex-fill active">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Popular</h6>
                    <span>Save $40</span>
                  </div>
                </div>
                <div className="price-body">
                  <ul>
                    <li className="active">
                      Upload Video up to 720p Resolution
                    </li>
                    <li className="active">Attachment & Post Scheduling</li>
                    <li className="active">Set your rates</li>
                    <li className="active">Exclusive Deals</li>
                    <li className="inactive">Advanced Statistics</li>
                  </ul>
                  <h4>
                    $123 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose Plan <i className="feather-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three price-five flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Enterprise</h6>
                  </div>
                </div>
                <div className="price-body">
                  <ul>
                    <li className="active">
                      Upload Video up to 720p Resolution
                    </li>
                    <li className="active">Attachment & Post Scheduling</li>
                    <li className="active">Set your rates</li>
                    <li className="active">Exclusive Deals</li>
                    <li className="active">Advanced Statistics</li>
                  </ul>
                  <h4>
                    $123 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose Plan <i className="feather-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plan */}

      {/* Testimonial */}
      <Testimonial5 />
      {/* Testimonial */}

      {/* Our Latest Blog */}
      <section className="latest-blog-five">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading heading-five aos"
                data-aos="fade-up"
              >
                <h2>Our Latest Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="#">
                      <div className="articles-img">
                        <img src={Blog16} className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user"></i> John Doe
                        </li>
                        <li>
                          <i className="feather-calendar"></i> 13 Aug, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="#">
                          Lorem ipsum dolor amet, adipiscing ut labore{" "}
                        </Link>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </p>
                      <Link
                        to="#"
                        className="btn articles-read-more"
                      >
                        Read More<i className="feather-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="#">
                      <div className="articles-img">
                        <img src={Blog17} className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user"></i> Darren Elder
                        </li>
                        <li>
                          <i className="feather-calendar"></i> 10 Sep, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="#">
                          Lorem ipsum dolor amet, adipiscing ut labore{" "}
                        </Link>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </p>
                      <Link
                        to="#"
                        className="btn articles-read-more"
                      >
                        Read More<i className="feather-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="#">
                      <div className="articles-img">
                        <img src={Blog18} className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user"></i> Ruby Perrin
                        </li>
                        <li>
                          <i className="feather-calendar"></i> 30 Oct, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="#">
                          Lorem ipsum dolor amet, adipiscing ut labore{" "}
                        </Link>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </p>
                      <Link
                        to="#"
                        className="btn articles-read-more"
                      >
                        Read More<i className="feather-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="#">
                      <div className="articles-img">
                        <img src={Blog19} className="img-fluid" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user"></i> John Doe
                        </li>
                        <li>
                          <i className="feather-calendar"></i> 22 Sep 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="#">
                          Lorem ipsum dolor consectetur adipiscing{" "}
                        </Link>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste voluptatem accusantium
                        doloremque laudantium, totam rem aperiam
                      </p>
                      <Link
                        to="#"
                        className="btn articles-read-more"
                      >
                        Read More<i className="feather-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Latest Blog */}

      {/* Stay Tuned */}
      <section className="stay-tuned stay-turn-five">
        <div className="container">
          <div className="stay-with-us">
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
      </section>
      {/* Stay Tuned */}

      <Footer5 />
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

export default Home5;
