import React, { useEffect } from "react";
import {
  BannerSixBg1,
  BannerSixBg2,
  BrandBg,
  BrandBg2,
  Car,
  CarIcon,
  CarRental1,
  ProfileAvatar12,
  ProfileAvatar13,
  ProfileAvatar14,
  TitleSvg,
  WhiteSearch,
  become_dealer_bg,
  blog_six_1,
  blog_six_2,
  blog_six_3,
  bx_gift,
  bx_map_pin,
  bx_pie_chart,
  bx_planet,
  bx_power_off,
  bx_repost,
  bx_trophy,
  bx_wrench,
  car_location_1,
  car_location_2,
  car_location_3,
  car_location_4,
  car_location_5,
  car_location_6,
  footer_six_bg,
} from "../imagepath";
import Header6 from "./header/Header6";
import Browse from "./slider/Browse";
import CarRental from "./slider/CarRental";
import ChooseAClass from "./slider/ChooseAClass";
import TopFeatured from "./slider/TopFeatured";
import Trending6 from "./slider/Trending6";
import OurTeam from "./slider/OurTeam";
import Testimonials from "./slider/CilentTestimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [toggleState,setToggleState]=useState(1);

  const toggleTap=(index)=>{
    setToggleState(index)
  }
  return (
    <div className="main-wrapper home-six">
      <Header6 />

      {/* Banner Section */}
      <section className="banner-section banner-six">
        <div className="floating-bg">
          <img src={Car} alt="" />
        </div>
        <div className="floating-watermark">
          <img src={BannerSixBg1} alt="" />
          <img src={BannerSixBg2} alt="" />
        </div>
        <div className="container">
          <div className="home-banner">
            <div className="row aos" data-aos="fade-up">
              <div className="col-lg-6">
                <div className="banner-contents">
                  <h1
                    className="aos"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Find / Sell a Car with your Favourite Listee.
                  </h1>
                  <p className="aos" data-aos="fade-up" data-aos-delay="200">
                    Book better cars from local hosts Across the globe
                  </p>
                  <Link to="/categories">
                    <img src={CarIcon} alt="" />
                    <span>List your car </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section */}

      {/* Search Filter */}
      <section
        className="car-search-filter aos"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="car-filter-section">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={toggleState === 1?"nav-link active":"nav-link "}
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      onClick={()=>toggleTap(1)}
                    >
                      All Conditions
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={toggleState === 2?"nav-link active":"nav-link "}
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      onClick={()=>toggleTap(2)}
                    >
                      New Cars
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={toggleState === 3?"nav-link active":"nav-link "}
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                      onClick={()=>toggleTap(3)}
                    >
                      Used Cars
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={toggleState === 4?"nav-link active":"nav-link "}
                      id="pills-certified-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-certified"
                      type="button"
                      role="tab"
                      aria-controls="pills-certified"
                      aria-selected="false"
                      onClick={()=>toggleTap(4)}
                    >
                      Certified
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className={toggleState === 1?"tab-pane fade show active":"tab-pane fade "}
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabindex="0"
                  >
                    <div className="search-tab-col">
                      <form action="listing-grid-sidebar">
                        <div className="row align-items-center search-form">
                          <div className="col-12 col-lg-11 datepicker-col search-group">
                            <ul className="car-search-filter-nav gap-3 d-flex">
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-map-pin"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Location</span>
                                    <input
                                      type="text"
                                      name="name"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Newyork, USA"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-pie-chart"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Make</span>
                                    <input
                                      type="text"
                                      name="checkin"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-refresh-ccw"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Models</span>
                                    <input
                                      type="text"
                                      name="checkout"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-tag"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Prices</span>
                                    <input
                                      type="text"
                                      name="mobile"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Benz C class"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-lg-1 car-search-btn">
                            <button className="btn car-search-icon" type="submit">
                              <img src={WhiteSearch} alt="" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={toggleState === 2?"tab-pane fade show active":"tab-pane fade "}
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabindex="0"
                  >
                    <div className="search-tab-col">
                      <form action="listing-grid-sidebar" method="post">
                        <div className="row align-items-center search-form">
                          <div className="col-12 col-lg-11 datepicker-col search-group">
                            <ul className="gap-3 d-flex">
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-map-pin"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Location</span>
                                    <input
                                      type="text"
                                      name="name"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Newyork, USA"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-pie-chart"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Make</span>
                                    <input
                                      type="text"
                                      name="checkin"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-refresh-ccw"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Models</span>
                                    <input
                                      type="text"
                                      name="checkout"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-tag"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Prices</span>
                                    <input
                                      type="text"
                                      name="mobile"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Benz C class"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-lg-1 car-search-btn">
                            <button className="btn car-search-icon">
                              <img src={WhiteSearch} alt="" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={toggleState === 3?"tab-pane fade show active":"tab-pane fade "}
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabindex="0"
                  >
                    <div className="search-tab-col">
                      <form action="listing-grid-sidebar" method="post">
                        <div className="row align-items-center search-form">
                          <div className="col-12 col-lg-11 datepicker-col search-group">
                            <ul className="gap-3 d-flex">
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-map-pin"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Location</span>
                                    <input
                                      type="text"
                                      name="name"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Newyork, USA"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-pie-chart"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Make</span>
                                    <input
                                      type="text"
                                      name="checkin"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-refresh-ccw"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Models</span>
                                    <input
                                      type="text"
                                      name="checkout"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-tag"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Prices</span>
                                    <input
                                      type="text"
                                      name="mobile"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Benz C class"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-lg-1 car-search-btn">
                            <button className="btn car-search-icon">
                              <img src={WhiteSearch} alt="" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={toggleState === 4?"tab-pane fade show active":"tab-pane fade "}
                    id="pills-certified"
                    role="tabpanel"
                    aria-labelledby="pills-certified-tab"
                    tabindex="0"
                  >
                    <div className="search-tab-col">
                      <form action="listing-grid-sidebar" method="post">
                        <div className="row align-items-center search-form">
                          <div className="col-12 col-lg-11 datepicker-col search-group">
                            <ul className="gap-3 d-flex">
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-map-pin"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Location</span>
                                    <input
                                      type="text"
                                      name="name"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Newyork, USA"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-pie-chart"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Make</span>
                                    <input
                                      type="text"
                                      name="checkin"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-refresh-ccw"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Models</span>
                                    <input
                                      type="text"
                                      name="checkout"
                                      className="border-0 text-truncate px-0 form-control datetimepicker"
                                      placeholder="28/12/2022"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="car-search-grid d-flex">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <div className="icon-blk rounded-circle">
                                      <i className="feather-tag"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 ms-3">
                                    <span className="label">Prices</span>
                                    <input
                                      type="text"
                                      name="mobile"
                                      className="border-0 text-truncate px-0 form-control"
                                      placeholder="Benz C class"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 col-lg-1 car-search-btn">
                            <button className="btn car-search-icon">
                              <img src={WhiteSearch} alt="" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search Filter */}

      {/* Trending */}
      <Trending6 />
      {/* Trending */}

      {/* Choose a class */}
      <ChooseAClass />
      {/* Choose a class */}

      {/* Car Testimonial */}
      <section className="car-testimonial common-padding ">
        <div className="container">
          <div className="row aos" data-aos="zoom-in">
            <div className="col-lg-4 col-md-6">
              <div className="car-testimonial-content">
                <h3>.01</h3>
                <h5>FIND THE CAR IN YOUR DREAM</h5>
                <p>
                  With the function search of listee, you can find the exactly
                  any type of car that you want in a few minutes. Fast & Exactly
                  !
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="car-testimonial-content">
                <h3>.02</h3>
                <h5>CHECK PRICE AND INFORMATION OF VEHICLE</h5>
                <p>
                  Check price and informations about vehicle. You can also
                  estimate your payment with our Financial Caculator
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="car-testimonial-content">
                <h3>.03</h3>
                <h5>BOOK APPOINTMENTS WITH A TAP</h5>
                <p>
                  Easy to make an appointments with agents or dealers. Agents or
                  dealers will call again for you in 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Car Testimonial */}

      {/* Browse By Brand */}
      <section className="browse-by-brand common-padding">
        <div className="car-float-bg aos" data-aos="fade-down">
          <img src={BrandBg} alt="" />
          <img src={BrandBg2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-six-heading-section">
                <div className="home-six-title d-flex justify-content-center align-items-center">
                  <h2>Browse By Make</h2>
                  <img src={TitleSvg} alt="" />
                </div>
                <p>
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <Browse />
            </div>
          </div>
        </div>
      </section>
      {/* Browse By Brand */}

      {/* Top Featured */}
      <section className="top-featured-car common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-six-heading-section aos" data-aos="fade-up">
                <div className="home-six-title d-flex justify-content-center align-items-center">
                  <h2>Top Featured Cars</h2>
                  <img src={TitleSvg} alt="" />
                </div>
                <p>
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-12">
              <TopFeatured />
            </div>
          </div>
        </div>
      </section>
      {/* Top Featured */}

      {/* Car Rental */}
      <section className="car-rental-slider-section aos" data-aos="fade-up">
        <div className="car-rental-carousel">
          <CarRental />
        </div>
      </section>
      {/* Car Rental */}

      {/* Service Section */}
      <section className="car-service-section common-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-up">
              <div className="car-service-container ">
                <img src={bx_wrench} alt="" />
                <h4>Auto Repair</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-down">
              <div className="car-service-container ">
                <img src={bx_map_pin} alt="" />
                <h4>Rental Service</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-up">
              <div className="car-service-container">
                <img src={bx_pie_chart} alt="" />
                <h4>Tire Change</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-up">
              <div className="car-service-container">
                <img src={bx_planet} alt="" />
                <h4>Official Dealers</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-up">
              <div className="car-service-container">
                <img src={bx_gift} alt="" />
                <h4>Paint Work</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-down">
              <div className="car-service-container">
                <img src={bx_power_off} alt="" />
                <h4>Car Diagonostics</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="flip-up">
              <div className="car-service-container">
                <img src={bx_trophy} alt="" />
                <h4>Battery Replacements</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6  aos" data-aos="flip-down">
              <div className="car-service-container">
                <img src={bx_repost} alt="" />
                <h4>Dry Cleaning Car</h4>
                <p>We buy and sale barand new car and also used car of any brand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}


      {/* Our Team */}
      <section className="our-team-car common-padding">
        <div className="container">
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-12">
              <div className="home-six-heading-section">
                <div className="home-six-title d-flex justify-content-center align-items-center">
                  <h2>Our Team</h2>
                  <img src={TitleSvg} alt="" />
                </div>
                <p>
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div
            className="car-class-carousel aos"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <OurTeam />
          </div>
        </div>
      </section>
      {/* /Our Team */}

      {/* Search By Location */}
      <section className="car-location common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-six-heading-section aos" data-aos="fade-up">
                <div className="home-six-title d-flex justify-content-center align-items-center">
                  <h2>Search by Locations</h2>
                  <img src={TitleSvg} alt="" />
                </div>
                <p>
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <Link to="/service-details">
                <div
                  className="car-location-img aos"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <img
                    src={car_location_1}
                    className="img-fluid"
                    alt=""
                  />
                  <span>Las Vegas</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-5">
              <Link to="/service-details">
                <div
                  className="car-location-img aos"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <img
                    src={car_location_2}
                    className="img-fluid"
                    alt=""
                  />
                  <span>Singapore</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="/service-details">
                <div
                  className="car-location-img aos"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <img
                    src={car_location_3}
                    className="img-fluid"
                    alt=""
                  />
                  <span>Denmark</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="/service-details">
                <div
                  className="car-location-img aos"
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  <img
                    src={car_location_4}
                    className="img-fluid"
                    alt=""
                  />
                  <span>France</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-5">
              <Link to="/service-details">
                <div
                  className="car-location-img aos"
                  data-aos="fade-up"
                  data-aos-delay={1000}
                >
                  <img
                    src={car_location_5}
                    className="img-fluid"
                    alt=""
                  />
                  <span>Indonesia</span>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/service-details">
                <div
                  className="car-location-img aos"
                  data-aos="fade-up"
                  data-aos-delay={1200}
                >
                  <img
                    src={car_location_6}
                    className="img-fluid"
                    alt=""
                  />
                  <span>New York</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Search By Location */}

      {/* Clients Testimonials */}
      <section className="car-clients common-padding">
        <div className="container">
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-12">
              <div className="home-six-heading-section">
                <div className="home-six-title d-flex justify-content-center align-items-center">
                  <h2>Clients Testimonials</h2>
                  <img src={TitleSvg} alt="" />
                </div>
                <p>
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div
            className="car-class-carousel aos"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <Testimonials />
          </div>
        </div>
      </section>
      {/* /Clients Testimonials */}

      {/* Blog  Section */}
      <section className="blog-section">
        <div className="container">
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-12">
              <div className="home-six-heading-section">
                <div className="home-six-title d-flex justify-content-center align-items-center">
                  <h2>News &amp; Information</h2>
                  <img src={TitleSvg} alt="" />
                </div>
                <p>
                  Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                  diamlorem malesu, vitae mauris.
                </p>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={blog_six_1}
                      alt="Post Image"
                    />
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
                          <img
                            src={ProfileAvatar14}
                            alt="Post Author"
                          />
                        </div>
                        <Link to="#" className="mb-0">
                          {" "}
                          <span> Amara </span>
                        </Link>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days" /> October 4, 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Three Powerful Tricks for Online Advertising
                    </Link>
                  </h3>
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur em
                    adipiscing elit,
                  </p>
                  <p className="viewlink">
                    <Link to="/blog-details">
                      View Details <i className="feather-arrow-right" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={blog_six_2}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <p className="blog-category">
                    <Link to="#">
                      <span>Care &amp; Tips</span>
                    </Link>
                  </p>
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <div className="post-author-img">
                          <img
                            src={ProfileAvatar12}
                            alt="Post Author"
                          />
                        </div>
                        <Link to="#" className="mb-0">
                          <span> Darryl </span>
                        </Link>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days" /> October 6, 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Three Powerful Tricks For Online Advertising
                    </Link>
                  </h3>
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur em
                    adipiscing elit,
                  </p>
                  <p className="viewlink">
                    <Link to="/blog-details">
                      View Details <i className="feather-arrow-right" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={blog_six_3}
                      alt="Post Image"
                    />
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
                          <img
                            src={ProfileAvatar13}
                            alt="Post Author"
                          />
                        </div>
                        <Link to="#" className="mb-0">
                          {" "}
                          <span> Mary </span>
                        </Link>
                      </div>
                    </li>
                    <li className="date-icon">
                      <i className="fa-solid fa-calendar-days" /> October 10, 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Competitive Analysis for Enterprerneurs in 20232
                    </Link>
                  </h3>
                  <p className="blog-description">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                    do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur em
                    adipiscing elit,
                  </p>
                  <p className="viewlink">
                    <Link to="/blog-details">
                      View Details <i className="feather-arrow-right" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
              <div className="car-more-blog">
                <Link to="/blog-list">More Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Blog  Section */}

      {/* Join Us */}
      <section className="join-us-dealer common-padding">
        <div className="join-us-dealer-bg">
          <img src={become_dealer_bg} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center aos" data-aos="fade-up">
            <div className="col-lg-6 col-md-12">
              <div className="joinus-dealer-content">
                <h3 className="aos" data-aos="fade-up" data-aos-delay={200}>
                  Become a Dealer with Listee?
                </h3>
                <p className="aos" data-aos="fade-up" data-aos-delay={300}>
                  Sell your car Free with Listee and earn commision up to 70%.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="join-as-dealer-btn">
                <Link to="/signup">
                  Create an Account <i className="feather-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Join Us */}

      {/* Footer */}
      <section className="footer-six common-padding">
        <div className="footer-six-bg">
          <img src={footer_six_bg} alt="" />
        </div>
        <div className="container">
          <div className="footer-six-top">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="footer-six-top-list">
                  <h4>Network</h4>
                  <ul>
                    <li>
                      <Link to="#">Browse by Make</Link>
                    </li>
                    <li>
                      <Link to="#">Add Car</Link>
                    </li>
                    <li>
                      <Link to="#">Sitemap</Link>
                    </li>
                    <li>
                      <Link to="#">My Favourite</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="footer-six-top-list">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/contact">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">Blog</Link>
                    </li>
                    <li>
                      <Link to="/signup">Become a dealer</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="footer-six-top-list">
                  <h4>Help Center</h4>
                  <ul>
                    <li>
                      <Link to="/faq">Faq’s</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-condition">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/howitworks">How it works</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="footer-six-right">
                  <div className="footer-send-mail">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subscribe to Get Updates"
                    />
                    <Link to="#">Send mail</Link>
                  </div>
                </div>
                <div className="social-icon-six">
                  <h3>Follow us on</h3>
                  <ul>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-facebook-f" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-twitter" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-six-center">
            <div className="footer-six-center-content">
              <h6>Our Total Visitors</h6>
              <Link to="#">4,56,6597</Link>
            </div>
            <div className="footer-six-center-content">
              <h6>Need live support?</h6>
              <Link to="#">listee@example.com</Link>
            </div>
            <div className="footer-six-center-content">
              <h6>Toll Free Customer Care</h6>
              <Link to="#">+91 26447 99875</Link>
            </div>
            <div className="footer-six-center-list">
              <ul>
                <li>
                  <Link to="/index-6"> Home</Link>
                </li>
                <li>
                  <Link to="#"> Site Map</Link>
                </li>
                <li>
                  <Link to="/privacy-policy"> Privacy policy</Link>
                </li>
                <li>
                  <Link to="/privacy-policy"> Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="custom-line mb-0" />
          <div className="footer-six-bottom">
            <p>© 2023 Listee. All Rights Reserved.</p>
          </div>
        </div>
      </section>
      {/* /Footer */}



    </div>
  );
};

export default Home6;
