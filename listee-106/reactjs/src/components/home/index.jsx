import React from "react";
import {
  ArrowBanner,
  BannerArrow,
  Bannerbg,
  BannerEllipse,
  Blog1,
  Blog2,
  Blog3,
  Category10Svg,
  Category11Svg,
  Category12Svg,
  Category2Svg,
  Category3Svg,
  Category4Svg,
  Category5Svg,
  Category6Svg,
  Category7Svg,
  Category8Svg,
  Category9Svg,
  Category1Svg,
  CtaImg,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
  Feature7,
  Feature8,
  Feature9,
  LocationsAustralia,
  LocationsCanada,
  LocationsChina,
  LocationsFrance,
  LocationsUk,
  LocationsUsa,
  Partners1,
  Partners2,
  Partners3,
  Partners4,
  Partners5,
  Partners6,
  PopularImg,
  ProfileAvatar02,
  ProfileAvatar03,
  ProfileAvatar04,
  ProfileAvatar05,
  ProfileAvatar06,
  ProfileAvatar07,
  ProfileAvatar12,
  ProfileAvatar13,
  ProfileAvatar14,
  Quotes,
  RightImg,
  Testimonial1,
  Testimonial2,
} from "../imagepath";
import Carousel from "./slider/Carousel";
import Footer from "./footer/Footer";

import Header from "./header";
import Testimonial from "./slider/Testimonial";
import Sponsors from "./slider/Sponsors";
import Select from "./select";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

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
      <Header />

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-circle">
          <img src={Bannerbg} className="img-fluid" alt="bannercircle" />
        </div>
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-search aos" data-aos="fade-up">
                  <p className="explore-text">
                    {" "}
                    <span>Explore top-rated attractions</span>
                  </p>
                  <img src={ArrowBanner} className="arrow-img" alt="arrow" />
                  <h1>
                    Let us help you <br />
                    <span>Find, Buy</span> & Own Dreams
                  </h1>
                  <p>
                    Countrys most loved and trusted classNameified ad listing
                    website classNameified ad.randomised words which don't look
                    even slightly Browse thousand of items near you.
                  </p>
                  <div className="search-box">
                    <form action="listing-grid-sidebar" className="d-flex">
                      <div className="search-input line">
                        <div className="form-group">
                          <Select />
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="form-group">
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
                          {" "}
                          <i
                            className="fa fa-search"
                            aria-hidden="true"
                          ></i>{" "}
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-imgs">
                  <img src={RightImg} className="img-fluid" alt="bannerimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={BannerEllipse}
          className="img-fluid banner-elipse"
          alt="arrow"
        />
        <img
          src={BannerArrow}
          className="img-fluid bannerleftarrow"
          alt="arrow"
        />
      </section>
      {/* Banner Section */}

      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Our <span className="title-left magentaCircle">Cat</span>egory
                </h2>
                <p>Buy and Sell Everything from Used Our Top Category</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/categories" className="btn  btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="categories" className="category-links">
                <h5>Automotive</h5>
                <span>09 Ads</span>
                <img src={Category1Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Electronics</h5>
                <span>09 Ads</span>
                <img src={Category2Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Fashion Style</h5>
                <span>09 Ads</span>
                <img src={Category3Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Health Care</h5>
                <span>09 Ads</span>
                <img src={Category4Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Job Board</h5>
                <span>09 Ads</span>
                <img src={Category5Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Education</h5>
                <span>09 Ads</span>
                <img src={Category6Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Real Estate</h5>
                <span>09 Ads</span>
                <img src={Category7Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Travel</h5>
                <span>09 Ads</span>
                <img src={Category8Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Sports & Game</h5>
                <span>09 Ads</span>
                <img src={Category9Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Magazines</h5>
                <span>09 Ads</span>
                <img src={Category10Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>Pet & Animal</h5>
                <span>09 Ads</span>
                <img src={Category11Svg} alt="icons" />
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <Link to="/categories" className="category-links">
                <h5>House Hold</h5>
                <span>09 Ads</span>
                <img src={Category12Svg} alt="icons" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section */}

      {/* Featured Ads Section */}
      <Carousel />
      {/* Featured Ads Section */}

      {/* Popular Location Section */}
      <section className="popular-locations">
        <div className="popular-circleimg">
          <img className="img-fluid" src={PopularImg} alt="Popular-sections" />
        </div>
        <div className="container">
          <div className="section-heading">
            <h2>
              Popular <span className="whiteCircle">Loc</span>ations
            </h2>
            <p>
              Start by selecting your favuorite location and explore the goods
            </p>
          </div>
          <div className="location-details d-flex">
            <div className="row">
              <div className="location-info col-lg-4 col-md-6">
                <div className="location-info-details d-flex align-items-center">
                  <div className="location-img">
                    <Link to="listing-grid-sidebar">
                      <img
                        className="img-fluid"
                        src={LocationsUsa}
                        alt="locations"
                      />
                    </Link>
                  </div>
                  <div className="location-content">
                    <Link to="/listing-grid-sidebar">USA</Link>
                    <p>20+ Ads Posted</p>
                    <Link
                      to="/listing-grid-sidebar"
                      className="view-detailsbtn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="location-info col-lg-4 col-md-6">
                <div className="location-info-details d-flex align-items-center">
                  <div className="location-img">
                    <Link to="/listing-grid-sidebar">
                      <img
                        className="img-fluid"
                        src={LocationsCanada}
                        alt="locations"
                      />
                    </Link>
                  </div>
                  <div className="location-content">
                    <Link to="/listing-grid-sidebar">Canada</Link>
                    <p>20+ Ads Posted</p>
                    <Link
                      to="/listing-grid-sidebar"
                      className="view-detailsbtn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="location-info col-lg-4 col-md-6">
                <div className="location-info-details d-flex align-items-center">
                  <div className="location-img">
                    <Link to="/listing-grid-sidebar">
                      <img
                        className="img-fluid"
                        src={LocationsChina}
                        alt="locations"
                      />
                    </Link>
                  </div>
                  <div className="location-content">
                    <Link to="/listing-grid-sidebar">China</Link>
                    <p>20+ Ads Posted</p>
                    <Link
                      to="/listing-grid-sidebar"
                      className="view-detailsbtn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="location-info col-lg-4 col-md-6">
                <div className="location-info-details d-flex align-items-center">
                  <div className="location-img">
                    <Link to="/listing-grid-sidebar">
                      <img
                        className="img-fluid"
                        src={LocationsUk}
                        alt="locations"
                      />
                    </Link>
                  </div>
                  <div className="location-content">
                    <Link to="listing-grid-sidebar">United Kingdom</Link>
                    <p>20+ Ads Posted</p>
                    <Link
                      to="/listing-grid-sidebar"
                      className="view-detailsbtn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="location-info col-lg-4 col-md-6">
                <div className="location-info-details d-flex align-items-center">
                  <div className="location-img">
                    <Link to="/listing-grid-sidebar">
                      <img
                        className="img-fluid"
                        src={LocationsAustralia}
                        alt="locations"
                      />
                    </Link>
                  </div>
                  <div className="location-content">
                    <Link to="/listing-grid-sidebar">Australia</Link>
                    <p>20+ Ads Posted</p>
                    <Link
                      to="/listing-grid-sidebar"
                      className="view-detailsbtn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="location-info col-lg-4 col-md-6">
                <div className="location-info-details d-flex align-items-center">
                  <div className="location-img">
                    <Link to="/listing-grid-sidebar">
                      <img
                        className="img-fluid"
                        src={LocationsFrance}
                        alt="locations"
                      />
                    </Link>
                  </div>
                  <div className="location-content">
                    <Link to="/listing-grid-sidebar">France</Link>
                    <p>20+ Ads Posted</p>
                    <Link
                      to="/listing-grid-sidebar"
                      className="view-detailsbtn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-items-center">
            <Link to="/listing-grid-sidebar" className="browse-btn">
              Browse Ads
            </Link>
          </div>
        </div>
      </section>
      {/* Popular Location Section */}

      {/* Latest ads Section */}
      <section className="latestad-section grid-view featured-slider">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Lat<span className="title-right magentaCircle">est</span> Ads
                </h2>
                <p>checkout these latest cool ads from our members</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/service-details" className="btn  btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="lateestads-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature9}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i> 4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            2017 Gulfsteam Ameri-lite
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 06
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$350</span>
                            <span>$450</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature2}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar03} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Electronics
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i> 4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Fashion luxury Men date
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 08
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$250</span>
                            <span>$350</span>
                          </div>
                          <div className="ratings">
                            <span>4.6</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature3}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar04} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Electronics
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i> 4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Apple Iphone 6 16GB 4G LTE
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 09
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$550</span>
                            <span>$400</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="service-details">
                        <img
                          src={Feature4}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar05} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Gadgets
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              <i className="feather-eye"></i> 4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Customized Apple Imac{" "}
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 10
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$450</span>
                            <span>$300</span>
                          </div>
                          <div className="ratings">
                            <span>4.5</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature5}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar06} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Construction
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Villa 457 sq.m. In Benidorm Fully
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 11
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$650</span>
                            <span>$600</span>
                          </div>
                          <div className="ratings">
                            <span>4.5</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature6}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar03} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Jobs
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            CDL A OTR Compnay Driver Job-N
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 12
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$550</span>
                            <span>$450</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature7}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar06} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Electronics
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              <i className="feather-eye"></i> 4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            HP Gaming 15.6 Touchscren 12G
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 02
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$450</span>
                            <span>$350</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                <div className="card aos flex-fill" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature8}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar07} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Vehicle
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            2012 AudiR8 GT Spider Convrtibile
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 02
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$450</span>
                            <span>$350</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest ads Section */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta-content">
                <h3>
                  Earn Cash by <span>Selling</span> <br />
                  or Find Anything you desire
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humo or randomised words which don't look
                  even slightlys
                </p>
                <div className="cta-btn">
                  <Link
                    to="/add-listing"
                    className="btn-primary postad-btn"
                  >
                    Post Your Ads
                  </Link>
                  <Link to="/listing-grid-sidebar" className="browse-btn">
                    Browse Ads
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta-img">
                <img src={CtaImg} className="img-fluid" alt="CTA" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}

      {/* Client Testimonial Section */}
      <Testimonial />
      {/* Client Testimonial Section */}

      {/* Partners Section */}
      <div className="partners-section">
        <div className="container">
          <p className="partners-heading">
            Over 5,26,000+ Sponsers being contact with us
          </p>
          <Sponsors />
        </div>
      </div>
      {/* Partners Section */}

      {/* Pricing Plan Section */}
      <section className="pricingplan-section">
        <div className="section-heading">
          <div className="container">
            <div className="row text-center">
              <h2>
                Our Pricing <span>Pla</span>n
              </h2>
              <p>checkout these latest cool ads from our members</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Intro</h6>
                  </div>
                  <h4>
                    $10 <span>/ month</span>
                  </h4>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    <li className="active">Basic listing submission</li>
                    <li className="active">One Listing</li>
                    <li className="active">30 days Availabilty</li>
                    <li className="inactive">Limited Support</li>
                    <li className="inactive">Edit your listing</li>
                  </ul>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Basic</h6>
                  </div>
                  <h4>
                    $25 <span>/ month</span>
                  </h4>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    <li className="active">Basic listing submission</li>
                    <li className="active">One Listing</li>
                    <li className="active">30 days Availabilty</li>
                    <li className="inactive">Limited Support</li>
                    <li className="inactive">Edit your listing</li>
                  </ul>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Popular</h6>
                  </div>
                  <h4>
                    $50 <span>/ month</span>
                  </h4>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    <li className="active">Basic listing submission</li>
                    <li className="active">One Listing</li>
                    <li className="active">30 days Availabilty</li>
                    <li className="inactive">Limited Support</li>
                    <li className="inactive">Edit your listing</li>
                  </ul>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Enterprise</h6>
                  </div>
                  <h4>
                    $100 <span>/ month</span>
                  </h4>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    <li className="active">Basic listing submission</li>
                    <li className="active">One Listing</li>
                    <li className="active">30 days Availabilty</li>
                    <li className="inactive">Limited Support</li>
                    <li className="inactive">Edit your listing</li>
                  </ul>
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
      <section className="blog-section">
        <div className="section-heading">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Lat<span className="title-right">est</span> Blog
                </h2>
                <p>people are giving these goods for free so check them out</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/blog-grid" className="btn  btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="blog-details">
                    <img className="img-fluid" src={Blog1} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <p className="blog-category">
                    <Link to="#">
                      <span>Health</span>
                    </Link>
                    <Link to="#">
                      <span>Care</span>
                    </Link>
                  </p>
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <div className="post-author-img">
                          <img src={ProfileAvatar14} alt="Post Author" />
                        </div>
                        <Link to="#" className="mb-0">
                          {" "}
                          <span> Amara </span>
                        </Link>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days"></i> October 4,
                      2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      The Best Spa Saloons for your relaxations?
                    </Link>
                  </h3>
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                    consectetur em adipiscing elit,
                  </p>
                  <p className="viewlink">
                    <Link to="/blog-details">
                      View Details <i className="feather-arrow-right"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog2} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <p className="blog-category">
                    <Link to="#">
                      <span>Health</span>
                    </Link>
                    <Link to="#">
                      <span>Care</span>
                    </Link>
                  </p>
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <div className="post-author-img">
                          <img src={ProfileAvatar12} alt="Post Author" />
                        </div>
                        <Link to="#" className="mb-0">
                          <span> Darryl </span>
                        </Link>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days"></i> October 6,
                      2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Three Powerful Tricks For Online Advertising
                    </Link>
                  </h3>
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                    consectetur em adipiscing elit,
                  </p>
                  <p className="viewlink">
                    <Link to="/blog-details">
                      View Details <i className="feather-arrow-right"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog3} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <p className="blog-category">
                    <Link to="#">
                      <span>Health</span>
                    </Link>
                    <Link to="#">
                      <span>Care</span>
                    </Link>
                  </p>
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <div className="post-author-img">
                          <img src={ProfileAvatar13} alt="Post Author" />
                        </div>
                        <Link to="#" className="mb-0">
                          {" "}
                          <span> Mary </span>
                        </Link>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days"></i> October 10,
                      2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Competitive Analysis for Enterprerneurs in 20222
                    </Link>
                  </h3>
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                    consectetur em adipiscing elit,
                  </p>
                  <p className="viewlink">
                    <Link to="/blog-details">
                      View Details <i className="feather-arrow-right"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
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

export default Home;
