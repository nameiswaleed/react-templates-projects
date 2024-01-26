import React from "react";
import {
  BannerPng,
  Category01Jpg,
  Category02Jpg,
  Category03Jpg,
  Category04Jpg,
  Category05Jpg,
  Category06Jpg,
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  CategoryImg,
  CelebrateBg01,
  CelebrateImg,
  CelebratePng,
  Couple01,
  Couple02,
  Couple03,
  SuccessImg,
  Timeline01,
  Timeline02,
  Timeline03,
  Timeline04,
  Timeline05,
  Timeline06,
  Timeline07,
  TitelImg,
  TitleImgWhite,
  WedIcon01,
  WedIcon02,
  WedIcon03,
} from "../imagepath";
import Footer2 from "./footer";
import Header2 from "./header";
import Select2 from "./select/Select2";
import SelectCommon from "../common/SelectCommon";
import CelebratingLove from "./slider/CelebratingLove";
import LatestBlogs from "./slider/LatestBlogs";
import PopularSearch from "./slider/PopularSearch";
import Portfolio from "./slider/Portfolio";
import Testimonial2 from "./slider/Testimonial2";
import WeddingVenues from "./slider/WeddingVenues";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home2 = () => {
  const vendorOptions = [
    { label: "Wedding Venue", value: "Wedding Venue" },
    { label: "Reception", value: "Reception" },
    { label: "Party Hall", value: "Party Hall" },
  ];
  const locationOptions = [
    { label: "Bangalore, India", value: "Bangalore" },
    { label: "Delhi", value: "Delhi" },
    { label: "Hyderabad", value: "Hyderabad" },
  ];
  const guestOptions = [
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "30", value: "30" },
  ];
  const countryOptions = [
    { label: "India", value: "India" },
    { label: "UK", value: "Uk" },
    { label: "Japan", value: "Japan" },
  ];
  const currencyOptions = [
    { label: "USD", value: "USD" },
    { label: "Euro", value: "Euro" },
  ];
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
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
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="selection-list">
                <div className="lang-select">
                  <span className="select-icon">
                    <i className="feather-globe"></i>
                  </span>
                  <div className="countrys">
                  <SelectCommon options={countryOptions} />
                  </div>
                  
                </div>
                <div className="currency-select">
                  <SelectCommon options={currencyOptions} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <ul className="d-flex justify-content-end">
                <li className="d-flex align-items-center">
                  <i className="feather-map-pin me-1"></i> 4998 Elk Creek Road
                  Canton GA 30114
                </li>
                <li className="d-flex align-items-center">
                  <i className="feather-mail me-1"></i> admin@example.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header Top */}
      {/* Header */}
      <Header2 />
      {/* Header */}

      {/* Banner Section */}
      <section className="banner-section banner-section-two">
        <img src={BannerPng} className="img-fluid" alt="bannercircle" />
        <div className="home-banner-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto">
                <div className="banner-content aos" data-aos="fade-up">
                  <h1>Find the Perfect Wedding Vendor</h1>
                  <p>
                    Browse the best wedding vendors in your area — from venues
                    and photographers, to wedding planners, caterers, florists
                    and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-box">
                <form action="listing-grid-sidebar" className="d-flex">
                  <div className="searchbox-list">
                    <div className="search-input line">
                      <span className="search-icon">
                        <i className="feather-navigation"></i>
                      </span>
                      <div className="form-group ms-0 mb-0 h50">
                        <label>Choose Vendor Type</label>
                        <div className="wedding">
                        <Select2 options={vendorOptions} />
                        </div>
                        
                      </div>
                    </div>
                    <div className="search-input">
                      <span className="search-icon">
                        <i className="feather-map-pin"></i>
                      </span>
                      <div className="form-group mb-0 h50">
                        <label>Location</label>
                        <Select2 options={locationOptions} />
                      </div>
                    </div>
                    <div className="search-input">
                      <span className="search-icon">
                        <i className="feather-user"></i>
                      </span>
                      <div className="form-group mb-0 h50">
                        <label>Number of Guest</label>
                        <Select2 options={guestOptions} />
                      </div>
                    </div>
                  </div>
                  <div className="search-btn">
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section */}

      {/* Popular Search Section */}
      <PopularSearch />
      {/* Popular Search Section */}

      {/* Celebrating Love */}
      <CelebratingLove />
      {/* Celebrating Love */}

      {/* Wedding Section */}
      <section className="wedding-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading-two text-center">
                <p>Loved One</p>
                <h2>Wedding Categories</h2>
                <img src={TitelImg} className="img-fluid" alt="title-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="wedding-wrap aos" data-aos="fade-up">
                <div className="wedding-img">
                  <Link to="/categories">
                    <img
                      className="img-fluid"
                      src={Category01Jpg}
                      alt="locations"
                    />
                  </Link>
                </div>
                <div className="wedding-content">
                  <h6>
                    <Link to="/categories">Venues</Link>
                  </h6>
                  <p>
                    Banquet Halls, Lawns / Farmhouses, Resorts, Small Function /
                    Party Halls, Destination Wedding, Kalyan Mandapam, 4 Star &
                    Above Hotels
                  </p>
                  <Link to="/categories">
                    Explore <i className="feather-arrow-right-circle"></i>
                  </Link>
                </div>
              </div>
              <div className="wedding-wrap aos" data-aos="fade-up">
                <div className="wedding-img">
                  <Link to="/categories">
                    <img
                      className="img-fluid"
                      src={Category02Jpg}
                      alt="locations"
                    />
                  </Link>
                </div>
                <div className="wedding-content">
                  <h6>
                    <Link to="/categories">Photographers</Link>
                  </h6>
                  <p>
                    Engagement, Pre Wedding, Wedding, Post Wedding, Couples
                    Shoot, Outdoor
                  </p>
                  <Link to="/categories">
                    Explore <i className="feather-arrow-right-circle"></i>
                  </Link>
                </div>
              </div>
              <div className="wedding-wrap aos" data-aos="fade-up">
                <div className="wedding-img">
                  <Link to="/categories">
                    <img
                      className="img-fluid"
                      src={Category03Jpg}
                      alt="locations"
                    />
                  </Link>
                </div>
                <div className="wedding-content">
                  <h6>
                    <Link to="/categories">Groom and Bridal Makeup</Link>
                  </h6>
                  <p>
                    Bridal Makeup, Airbrush Makeup, Party Makeup, Engagement
                    Makeup, Hairstyling, Draping, False Lashes
                  </p>
                  <Link to="/categories">
                    Explore <i className="feather-arrow-right-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 wedding-wrap-img aos" data-aos="fade-up">
              <img className="img-fluid" src={CategoryImg} alt="locations" />
            </div>
            <div className="col-lg-5 col-md-6 aos" data-aos="fade-up">
              <div className="wedding-wrap wedding-align">
                <div className="wedding-content">
                  <h6>
                    <Link to="/categories">Groom and Bride Wear</Link>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                  </p>
                  <Link to="/categories">
                    Explore <i className="feather-arrow-right-circle"></i>
                  </Link>
                </div>
                <div className="wedding-img align-right">
                  <Link to="/categories">
                    <img
                      className="img-fluid"
                      src={Category04Jpg}
                      alt="locations"
                    />
                  </Link>
                </div>
              </div>
              <div
                className="wedding-wrap wedding-align aos"
                data-aos="fade-up"
              >
                <div className="wedding-content">
                  <h6>
                    <Link to="/categories">Mehandi</Link>
                  </h6>
                  <p>
                    Banquet Halls, Lawns / Farmhouses, Resorts, Small Function /
                    Party Halls, Destination Wedding, Kalyan Mandapam, 4 Star &
                    Above Hotels
                  </p>
                  <Link to="/categories">
                    Explore <i className="feather-arrow-right-circle"></i>
                  </Link>
                </div>
                <div className="wedding-img align-right">
                  <Link to="/categories">
                    <img
                      className="img-fluid"
                      src={Category05Jpg}
                      alt="locations"
                    />
                  </Link>
                </div>
              </div>
              <div
                className="wedding-wrap wedding-align aos"
                data-aos="fade-up"
              >
                <div className="wedding-content">
                  <h6>
                    <Link to="/categories">Catering</Link>
                  </h6>
                  <p>
                    Banquet Halls, Lawns / Farmhouses, Resorts, Small Function /
                    Party Halls, Destination Wedding, Kalyan Mandapam, 4 Star &
                    Above Hotels
                  </p>
                  <Link to="/categories">
                    Explore <i className="feather-arrow-right-circle"></i>
                  </Link>
                </div>
                <div className="wedding-img align-right">
                  <Link to="/categories">
                    <img
                      className="img-fluid"
                      src={Category06Jpg}
                      alt="locations"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Wedding Section */}

      {/* Vendor Section */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-sec">
            <h3>Lets Celebrate Your Love</h3>
            <img className="img-fluid" src={CelebrateImg} alt="img" />
            <p>20% Off Special Offer</p>
            <Link to="/contact" className="btn btn-grey">
              Contact Now
            </Link>
            <div className="offer-img">
              <div className="offer-img-left">
                <img className="img-fluid" src={CelebratePng} alt="img" />
              </div>
              <div className="offer-img-right">
                <img className="img-fluid" src={CelebrateBg01} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vendor Section */}

      {/* Wedding Venues */}
      <WeddingVenues />
      {/* Wedding Venues */}

      {/* Package Section */}
      <section className="package-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading-two white-text text-center">
                <p>Loved One</p>
                <h2>Wedding Packages</h2>
                <img
                  src={TitleImgWhite}
                  className="img-fluid"
                  alt="title-img"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="package-wrap flex-fill">
                <div className="section-heading-two text-center">
                  <h2>Sliver Package</h2>
                  <p>$7200 Package </p>
                  <img src={TitelImg} className="img-fluid" alt="title-img" />
                </div>
                <ul>
                  <li>Bridal Makeup (3)</li>
                  <li>Morning Breakfast</li>
                  <li>Bridal and Groom Wear</li>
                  <li>Single Photography</li>
                  <li>Decoration</li>
                  <li>2 Rooms for bridal and Groom</li>
                </ul>
                <Link to="/login" className="btn btn-primary">
                  Choose Plan
                </Link>
                <div className="couple-img">
                  <img src={Couple01} className="img-fluid" alt="title-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="package-wrap flex-fill">
                <div className="section-heading-two text-center">
                  <h2>Gold Package</h2>
                  <p>$15000 Package</p>
                  <img src={TitelImg} className="img-fluid" alt="title-img" />
                </div>
                <ul>
                  <li>Bridal Makeup (6)</li>
                  <li>Morning Breakfast & Noon Lunch</li>
                  <li>Bridal and Groom Wear</li>
                  <li>Double Photography</li>
                  <li>Decoration, E-Invitation and DJ</li>
                  <li>10 Rooms</li>
                </ul>
                <Link to="/login" className="btn btn-primary">
                  Choose Plan
                </Link>
                <div className="couple-img">
                  <img src={Couple02} className="img-fluid" alt="title-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="package-wrap flex-fill">
                <div className="section-heading-two text-center">
                  <h2>Platinum Package</h2>
                  <p>$18000 Package </p>
                  <img src={TitelImg} className="img-fluid" alt="title-img" />
                </div>
                <ul>
                  <li>Bridal Makeup (6)</li>
                  <li>Morning Breakfast & Noon Lunch</li>
                  <li>Bridal and Groom Wear</li>
                  <li>Double Photography</li>
                  <li>Decoration, E-Invitation and DJ</li>
                  <li>15+ Rooms, Cake and Beverage</li>
                </ul>
                <Link to="/login" className="btn btn-primary">
                  Choose Plan
                </Link>
                <div className="couple-img">
                  <img src={Couple03} className="img-fluid" alt="title-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Package Section */}

      {/* Success Section */}
      <section className="success-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 aos" data-aos="fade-up">
              <div className="success-img">
                <img src={SuccessImg} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-md-7 aos" data-aos="fade-up">
              <div className="success-wrap">
                <div className="section-heading-two text-center">
                  <p>Who we are</p>
                  <h2>Our Success Story</h2>
                  <img src={TitelImg} className="img-fluid" alt="title-img" />
                </div>
                <div className="success-sec">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                      <div className="success-item">
                        <img
                          src={WedIcon01}
                          className="img-fluid"
                          alt="title-img"
                        />
                        <h6>180+Wedding Venues & Vendors</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                      <div className="success-item">
                        <img
                          src={WedIcon02}
                          className="img-fluid"
                          alt="title-img"
                        />
                        <h6>350+ Real Wedding Event Success</h6>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                      <div className="success-item">
                        <img
                          src={WedIcon03}
                          className="img-fluid"
                          alt="title-img"
                        />
                        <h6>More than 65+ Cities Available</h6>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Success Section */}

      {/* Category Section */}
      <section className="categories-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading-two text-center">
                <p>Try This</p>
                <h2>Venues by Category</h2>
                <img src={TitelImg} className="img-fluid" alt="title-img" />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="category-item aos" data-aos="fade-up">
                    <div className="category-img">
                      <img src={Category1} className="img-fluid" alt="img" />
                      <Link to="/categories" className="btn">
                        Banquet halls
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="category-item aos" data-aos="fade-up">
                        <div className="category-img">
                          <img
                            src={Category2}
                            className="img-fluid"
                            alt="img"
                          />
                          <Link to="/categories" className="btn">
                            Outdoors
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="category-item aos" data-aos="fade-up">
                        <div className="category-img">
                          <img
                            src={Category3}
                            className="img-fluid"
                            alt="img"
                          />
                          <Link to="/categories" className="btn">
                            Beaches and Islands{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="category-item aos" data-aos="fade-up">
                        <div className="category-img">
                          <img
                            src={Category4}
                            className="img-fluid"
                            alt="img"
                          />
                          <Link to="/categories" className="btn">
                            Hotels
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="category-item aos" data-aos="fade-up">
                        <div className="category-img">
                          <img
                            src={Category5}
                            className="img-fluid"
                            alt="img"
                          />
                          <Link to="/categories" className="btn">
                            House
                          </Link>
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
      {/* Category Section */}

      {/* Portfolio Section */}
      <Portfolio />
      {/* Portfolio Section */}

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading-two text-center">
                <p>How it Works</p>
                <h2>Wedding Timeline & How it Works</h2>
                <img src={TitelImg} className="img-fluid" alt="title-img" />
              </div>
            </div>
          </div>
          <div className="timeline-sec">
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <ul className="timeline-wrap">
                  <li className="time-box box-bottom">
                    <div className="date">
                      <img src={Timeline01} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        4:30<span>Ceremony</span>
                      </p>
                    </div>
                  </li>
                  <li className="time-box box-top">
                    <div className="date">
                      <img src={Timeline02} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        7:30<span>Wedding</span>
                      </p>
                    </div>
                  </li>
                  <li className="time-box box-bottom">
                    <div className="date">
                      <img src={Timeline03} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        10:00<span>Album Time</span>
                      </p>
                    </div>
                  </li>
                  <li className="time-box box-top">
                    <div className="date">
                      <img src={Timeline04} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        12:30<span>Food Lunch</span>
                      </p>
                    </div>
                  </li>
                  <li className="time-box box-bottom">
                    <div className="date">
                      <img src={Timeline05} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        3:30<span>Reception</span>
                      </p>
                    </div>
                  </li>
                  <li className="time-box box-top">
                    <div className="date">
                      <img src={Timeline06} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        6:30<span>Cake Cutting</span>
                      </p>
                    </div>
                  </li>
                  <li className="time-box box-bottom">
                    <div className="date">
                      <img src={Timeline07} className="img-fluid" alt="img" />
                    </div>
                    <div className="box-content">
                      <p>
                        7:30<span>DJ & Dinner</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}

      {/* Testimonial Section */}
      <Testimonial2 />
      {/* Testimonial Section */}

      {/* Latest Blogs Section */}
      <LatestBlogs />
      {/* Latest Blogs Section */}

      {/* Appoinment Section */}
      <section className="appointment-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="appointment-sec aos" data-aos="fade-up">
                <div className="wedding-form">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="section-heading-two text-center">
                          <p>Try This</p>
                          <h2>Are You Attending?</h2>
                          <img
                            src={TitelImg}
                            className="img-fluid"
                            alt="title-img"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-group">
                          <select className="select form-control">
                            <option>Service</option>
                            <option>Hall</option>
                            <option>Decoration</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <select className="select form-control">
                            <option>Number of Guest</option>
                            <option>100</option>
                            <option>500</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <select className="select form-control">
                            <option>Meal preference</option>
                            <option>Veg</option>
                            <option>Non veg</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Appoinment Section */}

      {/* Vendor Section */}
      <section className="vendor-section">
        <div className="container">
          <div className="vendor-sec">
            <div className="vendor-info aos" data-aos="fade-up">
              <h3>Grow your Business with “DreamsWedding”</h3>
              <Link to="/signup" className="btn btn-grey">
                Register as a Vendor
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Vendor Section */}

      {/* Footer */}
      <Footer2 />
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

export default Home2;
