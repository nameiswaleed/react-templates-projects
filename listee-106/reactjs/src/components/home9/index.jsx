import React, { useEffect } from "react";
import Header9 from "./header/header9";
import FeatureLisiting from "./silder/featureLisiting";
import { agent_bg, avatar_15, avatar_16, avatar_17, avatar_18, calendersvg, car_location_1, car_location_2, car_location_3, car_location_4, car_location_5, car_location_6, counter_bg, feature_bg, footer_bg, footer_logo_nine, premium_bg, service_1, service_2, service_3, service_4, service_5, service_6, testimonal_bg, usersvg, why_us_1, why_us_2, why_us_3, why_us_4, why_us_bg } from "../imagepath";
import PropertiesManagement from "./silder/propertiesManagement";
import HolidayCabin from "./silder/holiday";
import ExploreCategories from "./silder/ExploreCategories";
import RentProperties from "./silder/rent";
import OurTestimonials from "./silder/OurTestimonials";
import RecentAritical from "./silder/recentAritcal";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home9 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className="main-wrapper home-nine">
        <Header9 />
        {/* Banner */}
        <section className="banner-section banner-nine">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-contents">
                  <h1
                    className="aos"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Find Your Dream Home
                  </h1>
                  <h6
                    className="mb-0 aos"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Only real estate platform with 10,000+ highly rated sellers
                  </h6>
                  <p className="aos" data-aos="fade-up" data-aos-delay={200}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s,
                  </p>
                  <div className="banner-nine-btn-group">
                    <Link
                      to="/categories"
                      className="aos"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <span>Add Listing</span>
                    </Link>
                    <Link
                      to="/categories"
                      className="aos"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <span>Search Property</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Banner */}

        {/* Search Filter Section */}
        <section
          className="car-search-filter realestate-search-filter  aos"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="car-filter-section">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Buy Property
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Sell Property
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabIndex={0}
                    >
                      <div className="search-tab-col">
                        <form action="listing-grid-sidebar">
                          <div className="row align-items-center search-form">
                            <div className="col-12 col-lg-10 datepicker-col search-group">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="d-flex real-estate-search">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <i className="feather-map-pin" />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <input
                                        type="text"
                                        name="name"
                                        className="border-0 text-truncate px-0 form-control"
                                        placeholder="Search location of Property"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex real-estate-search">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <img
                                          src={calendersvg}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <input
                                        type="text"
                                        name="checkin"
                                        className="border-0 text-truncate px-0 form-control datetimepicker"
                                        placeholder="Check-in"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex real-estate-search">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <img
                                          src={calendersvg}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <input
                                        type="text"
                                        name="checkout"
                                        className="border-0 text-truncate px-0 form-control datetimepicker"
                                        placeholder="Check- out"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex real-estate-search real-select">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <img
                                          src={usersvg}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <select className="form-control select category-select">
                                        <option>Guest</option>
                                        <option>User</option>
                                        <option>Admin</option>
                                        <option>Seller</option>
                                        <option>Buyer</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-2 real-search-bar">
                              <button className="btn car-search-icon" type="submit">
                                Search Properties
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabIndex={0}
                    >
                      <div className="search-tab-col">
                        <form action="listing-grid-sidebar">
                          <div className="row align-items-center search-form">
                            <div className="col-12 col-lg-10 datepicker-col search-group">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="d-flex real-estate-search">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <i className="feather-map-pin" />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <input
                                        type="text"
                                        name="name"
                                        className="border-0 text-truncate px-0 form-control"
                                        placeholder="Search location of Property"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex real-estate-search">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <img
                                          src={calendersvg}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <input
                                        type="text"
                                        name="checkin"
                                        className="border-0 text-truncate px-0 form-control datetimepicker"
                                        placeholder="Check-in"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex real-estate-search">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <img
                                          src={calendersvg}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <input
                                        type="text"
                                        name="checkout"
                                        className="border-0 text-truncate px-0 form-control datetimepicker"
                                        placeholder="Check- out"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex real-estate-search real-select">
                                    <div className="flex-shrink-0 d-flex align-items-center">
                                      <div className="icon-blk rounded-circle">
                                        <img
                                          src={usersvg}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <select className="form-control select category-select">
                                        <option>Guest</option>
                                        <option>User</option>
                                        <option>Admin</option>
                                        <option>Seller</option>
                                        <option>Buyer</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-2 real-search-bar">
                              <button className="btn car-search-icon" type="submit">
                                Search Properties
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
        {/* /Search Filter Section */}

        {/* Featured Listings */}
        <section className="featured-listing-section common-padding">
          <div className="footer-six-bg footer-nine-bg">
            <img src={feature_bg} alt="" />
          </div>
          <div className="container">
            <div
              className="section-heading section-heading-nine  aos"
              data-aos="fade-up"
            >
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-3" />
                <div
                  className="col-lg-4 col-md-6 aos aos-init aos-animate text-center"
                  data-aos="fade-up"
                >
                  <h2>Featured Listings</h2>
                  <p>The most trendy accommodations available</p>
                </div>
                <div
                  className="col-lg-4 col-md-3 text-md-end aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Link to="/categories" className="btn  btn-view">
                    View all Properties
                  </Link>
                </div>
              </div>
            </div>
            <div className="row aos" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-12">
                <div className="car-class-carousel">
                  <FeatureLisiting />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Featured Listings */}

        {/* Why Choose Us */}
        <section className="real-why-us common-padding position-relative">
          <div className="real-why-us-floating-bg">
            <img src={why_us_bg} alt="" />
          </div>
          <div className="container">
            <div
              className="section-heading section-heading-nine  aos"
              data-aos="fade-up"
            >
              <div className="row align-items-center">
                <div className="col-md-4" />
                <div
                  className="col-md-4 aos aos-init aos-animate text-center"
                  data-aos="fade-up"
                >
                  <h2>Why Choose Us</h2>
                  <p>We provide full service at every step.</p>
                </div>
                <div
                  className="col-md-4 text-md-end aos aos-init aos-animate"
                  data-aos="fade-up"
                ></div>
              </div>
            </div>
            <div className="row aos" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="choose-set">
                  <span>
                    <img src={why_us_1} alt="img" />
                  </span>
                  <h6>Trusted By Thousands</h6>
                  <p>
                    With over 1 million+ homes for sale available on the website,
                    Listee can match you with a house you will want to call home.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="choose-set">
                  <span>
                    <img src={why_us_2} alt="img" />
                  </span>
                  <h6>Wide Range Of Properties</h6>
                  <p>
                    With over 1 million+ homes for sale available on the website,
                    Listee can match you with a house you will want to call home.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="choose-set">
                  <span>
                    <img src={why_us_3} alt="img" />
                  </span>
                  <h6>Financing Made Easy</h6>
                  <p>
                    With over 1 million+ homes for sale available on the website,
                    Listee can match you with a house you will want to call home.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="choose-set">
                  <span>
                    <img src={why_us_4} alt="img" />
                  </span>
                  <h6>See Neighborhoods</h6>
                  <p>
                    With over 1 million+ homes for sale available on the website,
                    Listee can match you with a house you will want to call home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Why Choose Us */}

        {/* Listed Properties Management Companies */}
  <div className="section properties-managments common-padding">
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-3" />
          <div
            className="col-md-6 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Listed Properties Management Companies</h2>
            <p>The most trendy accommodations available</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/categories" className="btn  btn-view">
              View all Companies
            </Link>
          </div>
        </div>
      </div>
      <div className="row aos" data-aos="fade-up" data-aos-delay={200}>
        <div className="col-lg-12">
          <div className="car-class-carousel">
            <PropertiesManagement/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Listed Properties Management Companies */}

  {/* Perfect Holiday Cabin Section */}
  <section className="perfect-holiday-cabin-section">
    <HolidayCabin/>
  </section>
  {/* /Perfect Holiday Cabin Section */}

  {/* Explore Our Categories */}
  <section className="explore-categories common-padding">
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-3" />
          <div
            className="col-md-6 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Explore Our Categories</h2>
            <p>The most trendy accommodations available</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/categories" className="btn  btn-view">
              View all Catgeorries
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="car-class-carousel">
           <ExploreCategories/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Explore Our Categories */}

  {/* Counter */}
  <section className="property-counter common-padding position-relative">
    <div className="property-counter-float-bg">
      <img src={counter_bg} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="property-counter-list text-center">
            <h4 className="counterUp">66,180</h4>
            <p>HOMES FOR SALE</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="property-counter-list text-center">
            <h4 className="counterUp">4,809</h4>
            <p>OPEN HOUSES</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="property-counter-list text-center">
            <h4 className="counterUp">30,469</h4>
            <p>RECENTLY SOLD</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="property-counter-list text-center">
            <h4 className="counterUp">2,919</h4>
            <p>PRICE REDUCED</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Counter */}

  {/* Recent Properties for Rent */}
  <section className="property-for-rent common-padding">
    <div className="footer-six-bg footer-nine-bg">
      <img src={feature_bg} alt="" />
    </div>
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-3" />
          <div
            className="col-md-6 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Recent Properties for Rent</h2>
            <p>Sense Solutions For All Aspects near your Location.</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/categories" className="btn  btn-view">
              View all Properties
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="car-class-carousel">
            <RentProperties/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Recent Properties for Rent */}

  {/* Premium and essential services */}
  <section className="premium-and-essential-services common-padding position-relative">
    <div className="preminum-float-bg">
      <img src={premium_bg} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="premium-header text-center aos" data-aos="fade-up">
            <h2>
              Premium and essential services in Listee, contributing to
              enhancing residents' life experience
            </h2>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="listee-premium">
            <div className="listee-premium-img">
              <span>
                <img src={service_1} alt="img" />
              </span>
            </div>
            <div className="listee-premium-content">
              <h6>Add your listing</h6>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="listee-premium">
            <div className="listee-premium-img">
              <span>
                <img src={service_2} alt="img" />
              </span>
            </div>
            <div className="listee-premium-content">
              <h6>Easy Finance</h6>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="listee-premium">
            <div className="listee-premium-img">
              <span>
                <img src={service_3} alt="img" />
              </span>
            </div>
            <div className="listee-premium-content">
              <h6>Publish your listing</h6>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="listee-premium bottom-list-premium ">
            <div className="listee-premium-img">
              <span>
                <img src={service_4} alt="img" />
              </span>
            </div>
            <div className="listee-premium-content">
              <h6>Register for free</h6>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="listee-premium bottom-list-premium ">
            <div className="listee-premium-img">
              <span>
                <img src={service_5} alt="img" />
              </span>
            </div>
            <div className="listee-premium-content">
              <h6>Get reservations</h6>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="listee-premium bottom-list-premium ">
            <div className="listee-premium-img">
              <span>
                <img src={service_6} alt="img" />
              </span>
            </div>
            <div className="listee-premium-content">
              <h6>Upload beautiful images</h6>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Premium and essential services */}


  {/* Make It Easy */}
  <section className="make-it-easy common-padding">
    <div className="container">
      <h2 className="mb-0">
        We make it easy to find your perfect fit with over a million available
        rentals.
      </h2>
      <p>Circumstances certain circumstances and owing.</p>
      <Link to="/categories">Search Properties</Link>
    </div>
  </section>
  {/* /Make It Easy */}

  {/* Location */}
  <section className="car-location common-padding">
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-3" />
          <div
            className="col-md-6 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Popular Location of Properties</h2>
            <p>Sense Solutions For All Aspects near your Location.</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/categories" className="btn  btn-view">
              View all Properties
            </Link>
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
  {/* /Location */}

  {/* Verified Owners */}
  <section className="verified-owner-section">
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-3" />
          <div
            className="col-md-6 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Featured Verified Owners</h2>
            <p>Highlight the most popular owners</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          ></div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-4 col-lg-3 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="owner-card">
            <div className="owner-card-img">
              <Link to="/profile">
                <img
                  src={avatar_15}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="owner-info">
              <div className="owner-name">
                <Link to="/profile">Jonny baristow</Link>
                <span className="double-tick">
                  <i className="fa-solid fa-check-double" />
                </span>
              </div>
              <span className="owner-list-span">50 Listings</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-lg-3 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="owner-card">
            <div className="owner-card-img">
              <Link to="/profile">
                <img
                  src={avatar_16}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="owner-info">
              <div className="owner-name">
                <Link to="/profile">Angeline Marshall</Link>
                <span className="double-tick">
                  <i className="fa-solid fa-check-double" />
                </span>
              </div>
              <span className="owner-list-span">25 Listings</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-lg-3 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="owner-card">
            <div className="owner-card-img">
              <Link to="/profile">
                <img
                  src={avatar_17}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="owner-info">
              <div className="owner-name">
                <Link to="/profile">Abraham Musol</Link>
                <span className="double-tick">
                  <i className="fa-solid fa-check-double" />
                </span>
              </div>
              <span className="owner-list-span">30 Listings</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-lg-3 col-sm-6 aos"
          data-aos="fade-up"
          data-aos-delay={800}
        >
          <div className="owner-card">
            <div className="owner-card-img">
              <Link to="/profile">
                <img
                  src={avatar_18}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="owner-info">
              <div className="owner-name">
                <Link to="/profile">Rayon Akram</Link>
                <span className="double-tick">
                  <i className="fa-solid fa-check-double" />
                </span>
              </div>
              <span className="owner-list-span">35 Listings</span>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <Link to="/listingmap-list" className="verified-owner-list-btn">
            View all Owners
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* /Verified Owners */}


  {/* Our Testimonials */}
  <section className=" property-testimonial common-padding position-relative">
    <div className="testimonial-float-bg">
      <img src={testimonal_bg} alt="" />
    </div>
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-3" />
          <div
            className="col-md-6 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Our Testimonials</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 aos" data-aos="fade-up" data-aos-delay={200}>
          <div className="car-class-carousel">
            <OurTestimonials/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Our Testimonials */}

  
  {/* Join Us */}
  <section className="buy-property aos" data-aos="fade-up">
    <div className="container">
      <div className="buy-property-content">
        <h2 className="aos" data-aos="fade-up" data-aos-delay={200}>
          Join the millions getting more from their home.
        </h2>
        <p className="aos" data-aos="fade-up" data-aos-delay={400}>
          With Listee, you can track properties you’re interested in and use our
          price estimates to help you decide when to move. And get expert tips
          on making the most of your space.
        </p>
        <Link to="/my-listing">List Your Space</Link>
      </div>
    </div>
  </section>
  {/* /Join Us */}


  {/* Recent Articles */}
  <section className="property-articles common-padding">
    <div className="container">
      <div
        className="section-heading section-heading-nine  aos"
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          <div className="col-md-9 aos aos-init aos-animate" data-aos="fade-up">
            <h2>Recent Articles</h2>
            <p>The most trendy accommodations available</p>
          </div>
          <div
            className="col-md-3 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/categories" className="btn  btn-view">
              View all Properties
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 aos" data-aos="fade-up">
          <div className="car-class-carousel">
            <RecentAritical/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Recent Articles */}


  {/* Become Agent */}
  <section className="join-us-dealer common-padding">
    <div className="join-us-dealer-bg home-nine-bg">
      <img src={agent_bg} alt="" />
    </div>
    <div className="container">
      <div className="row align-items-center aos" data-aos="fade-up">
        <div className="col-lg-6 col-md-12">
          <div className="joinus-dealer-content">
            <h3 className="aos" data-aos="fade-up" data-aos-delay={200}>
              Become a Real Estate Agent
            </h3>
            <p className="aos" data-aos="fade-up" data-aos-delay={300}>
              Premium and essential services in Listee, contributing to
              enhancing residents' life experience
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="join-as-dealer-btn">
            <Link to="/signup">View all Prroperties</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Become Agent */}
  {/* Footer */}
  <section className="footer-six footer-nine common-padding">
    <div className="footer-six-bg footer-nine-bg">
      <img src={footer_bg} alt="" />
    </div>
    <div className="container">
      <div className="footer-six-top footer-nine-top">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
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
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-six-center foot-nine-list">
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
            </div>
          </div>
        </div>
      </div>
      <div className=" row position-relative">
        <div className="col-lg-4 col-md-6  col-sm-12">
          <div className="foot-nine-logo">
            <Link to="/index-9">
              <img src={footer_logo_nine} alt="" />
            </Link>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard...
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="footer-six-top-list">
            <h4>Discover</h4>
            <ul>
              <li>
                <Link to="#">Chicago</Link>
              </li>
              <li>
                <Link to="#">Los Angeles</Link>
              </li>
              <li>
                <Link to="#">Miami</Link>
              </li>
              <li>
                <Link to="#">New York</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="footer-six-top-list">
            <h4>Lists by Category</h4>
            <ul>
              <li>
                <Link to="#">Apartments</Link>
              </li>
              <li>
                <Link to="#">Condos</Link>
              </li>
              <li>
                <Link to="#">Houses</Link>
              </li>
              <li>
                <Link to="#">Offices</Link>
              </li>
              <li>
                <Link to="#">Retail</Link>
              </li>
              <li>
                <Link to="#">Villas</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="footer-six-top-list">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/terms-condition">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">User’s Guide</Link>
              </li>
              <li>
                <Link to="/contact">Support Center</Link>
              </li>
              <li>
                <Link to="/about">Press Info</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="social-icon-six social-icon-nine">
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
      <hr className="custom-line foot-nine-line" />
      <div className="footer-six-bottom pt-0">
        <p className="mb-0">© 2023 Listee. All Rights Reserved.</p>
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
    </div>
  </section>
  {/* /Footer */}
      </div>

    </>
  );
}
export default Home9;