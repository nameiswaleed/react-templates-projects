import React, { useEffect } from "react";
import Header7 from "./header/header7";
import { ProfileAvatar01, ProfileAvatar02, ProfileAvatar03, ProfileAvatar04, ProfileAvatar06, ProfileAvatar07, ProfileAvatar08, Restaurant_1, Restaurant_2, Restaurant_3, Restaurant_4, banner_bottom_bg, banner_img_1, banner_img_2, banner_img_3, banner_img_4, banner_left_bg, banner_right_bg, blog_seven1, blog_seven2, blog_seven3, category_img_1, category_img_2, category_img_3, category_img_4, category_img_5, category_img_6, cities_1, cities_2, cities_3, cities_4, cities_5, cities_6, heading_logo, heading_logo_small, latest_restaurant_1, latest_restaurant_2, latest_restaurant_3, latest_restaurant_4, logo_new, main_img } from "../imagepath";
import Select from "../home/select";
import BiggestClients from "./slider/BiggestClients";
import AOS from "aos";
import "aos/dist/aos.css";
import Select5 from "../home5/select5/Select5";
import { Link } from "react-router-dom";



const Home7 = () => {

  const country = [
    { label: "Choose Category", value: "Choose Category" },
    { label: "USA", value: "USA" },
    { label: "UK", value: "UK" },
    { label: "UAE", value: "UAE" },

  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <Header7 />
        {/* Banner Section */}
        <section className="banner-section banner-seven">
          <div className="container">
            <div className="home-banner">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="section-search aos" data-aos="fade-up">
                    <p>Discover the best restaurant.</p>
                    <h1>Discover Places that People Love</h1>
                    <div className="search-box search-box-seven">
                      <form
                        action="listing-grid-sidebar"
                        className="form-block d-flex"
                      >
                        <div className="search-input line">
                          <div className="form-group mb-0">
                            <div className="categoryselectbox">
                            <Select />
                            </div>
                            
                          </div>
                        </div>
                        <div className="search-input line">
                          <div className="form-group select-location mb-0">
                            {/* <select className="form-control select category-select">
                              <option value="">Location</option>
                              <option>USA</option>
                              <option>UK</option>
                              <option>UAE</option>
                            </select> */}
                            <div className="country form-control select category-select">
                              <Select5 options={country} />
                            </div>
                            <i className="feather-map-pin" />
                          </div>
                        </div>
                        <div className="search-btn">
                          <button className="btn btn-primary" type="submit">
                            Search Now
                            <i className="fa fa-search" aria-hidden="true" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="banner-imgs aos" data-aos="fade-up">
                    <div className="main-banner-1">
                      <img
                        src={banner_img_1}
                        className="img-fluid "
                        alt="bannerimage"
                      />
                    </div>
                    <div className="main-banner-2">
                      <img
                        src={banner_img_2}
                        className="img-fluid "
                        alt="bannerimage"
                      />
                    </div>
                    <div className=" main-banner-3">
                      <img
                        src={banner_img_3}
                        className="img-fluid"
                        alt="bannerimage"
                      />
                    </div>
                    <div className="main-banner-4">
                      <img
                        src={banner_img_4}
                        className="img-fluid "
                        alt="bannerimage"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-bg-img">
                <div className="bg-one">
                  <img
                    src={banner_left_bg}
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="bg-two">
                  <img
                    src={banner_right_bg}
                    className="img-fluid "
                    alt="image"
                  />
                </div>
                <div className="bg-three">
                  <img
                    src={banner_bottom_bg}
                    className="img-fluid "
                    alt="image"
                  />
                </div>
              </div>
              <div className="foods-title aos" data-aos="fade-up">
                <Link to="#">Breakfast</Link>
                <Link to="#">Lunch</Link>
                <Link to="#">Snacks</Link>
                <Link to="#">Dinner</Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Banner Section */}

        {/* Our-Category Section */}
        <section className="our-category-section our-category-section-seven">
          <div className="container">
            <div className="restaurants-sec">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="section-heading section-heading-seven d-flex align-items-center aos"
                    data-aos="fade-up"
                  >
                    <div className="heading-img ">
                      <img
                        src={heading_logo}
                        className="img-fluid m-0"
                        alt="img"
                      />
                    </div>
                    <div>
                      <h2>Our Category</h2>
                      <p>Explore restaurants and cafes by your favorite cuisine</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-md-end aos" data-aos="fade-up">
                  <div className="interset-btn">
                    <Link
                      to="/service-details"
                      className="btn btn-primary more-btn more-btn-two"
                    >
                      View All
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6  aos" data-aos="fade-up">
                  <div className="our-category-box">
                    <Link to="#">
                      <div className="our-category-img">
                        <img
                          src={category_img_1}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </Link>
                    <div className="our-category-info">
                      <h5>
                        <Link to="#">Pizza</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 aos" data-aos="fade-up">
                  <div className="our-category-box">
                    <Link to="#">
                      <div className="our-category-img">
                        <img
                          src={category_img_2}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </Link>
                    <div className="our-category-info">
                      <h5>
                        <Link to="#">Broast</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6  aos" data-aos="fade-up">
                  <div className="our-category-box">
                    <Link to="#">
                      <div className="our-category-img">
                        <img
                          src={category_img_3}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </Link>
                    <div className="our-category-info">
                      <h5>
                        <Link to="#">Chicken</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6  aos" data-aos="fade-up">
                  <div className="our-category-box">
                    <Link to="#">
                      <div className="our-category-img">
                        <img
                          src={category_img_4}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </Link>
                    <div className="our-category-info">
                      <h5>
                        <Link to="#">Burgers</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6  aos" data-aos="fade-up">
                  <div className="our-category-box">
                    <Link to="#">
                      <div className="our-category-img">
                        <img
                          src={category_img_5}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </Link>
                    <div className="our-category-info">
                      <h5>
                        <Link to="#">Sandwiches</Link>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6  aos" data-aos="fade-up">
                  <div className="our-category-box">
                    <Link to="#">
                      <div className="our-category-img">
                        <img
                          src={category_img_6}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </Link>
                    <div className="our-category-info">
                      <h5>
                        <Link to="#">Shakes</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Our-Category Section */}

        {/* Restaurant Section */}
        <section className="restaurant-section restaurant-section-seven">
          <div className="container">
            <div className="section-heading-two section-heading-seven text-center">
              <div className="row">
                <div
                  className="col-md-12 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <img
                    src={heading_logo_small}
                    className="img-fluid"
                    alt="title-img"
                  />
                  <h2>Popular Restaurant</h2>
                  <p>What are you interested near you.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="dishes-box aos" data-aos="fade-up">
                  <div className="dishes-img">
                    <Link to="#">
                      <img
                        src={Restaurant_1}
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                    <div className="feature-content justify-content-end">
                      <span className="featured-text">Featured</span>
                    </div>
                    <div className="fav-item  justify-content-end">
                      <Link to="#" className="fav-icon">
                        <i className="fa-regular fa-bookmark" />
                      </Link>
                    </div>
                  </div>
                  <div className="dishes-content">
                    <div className="dishes-inner">
                      <div className="author-img-new">
                        <div className="inner-img">
                          <img
                            src={ProfileAvatar06}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <p className="title">USA</p>
                      <h5>
                        <Link to="#">
                          {" "}
                          Fine dining <i className="fa-solid fa-circle-check" />
                        </Link>
                      </h5>
                      <div className="dishes-review">
                        <h6>
                          <i className="fa-regular fa-clock" />
                          Open
                        </h6>
                        <h6 className="review-color">
                          4.0
                          <i className="fa-solid fa-star review-color" />
                          <span className="img-fluid">8.5(Reviews)</span>
                        </h6>
                      </div>
                    </div>
                    <div className="dishes-footer">
                      <div className="landmark">
                        <h5>
                          {" "}
                          <i className="feather-map-pin" />
                          Europe
                        </h5>
                      </div>
                      <div className="amount">
                        <h5>
                          $400
                          <span>/ hour</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="dishes-box aos" data-aos="fade-up">
                  <div className="dishes-img">
                    <Link to="#">
                      <img
                        src={Restaurant_2}
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                    <div className="feature-content justify-content-end">
                      <span className="featured-text">Featured</span>
                    </div>
                    <div className="fav-item  justify-content-end">
                      <Link to="#" className="fav-icon">
                        <i className="fa-regular fa-bookmark" />
                      </Link>
                    </div>
                  </div>
                  <div className="dishes-content">
                    <div className="dishes-inner">
                      <div className="author-img-new">
                        <div className="inner-img">
                          <img
                            src={ProfileAvatar07}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <p className="title">Europe</p>
                      <h5>
                        {" "}
                        <Link to="#">
                          {" "}
                          Casual dining <i className="fa-solid fa-circle-check" />
                        </Link>
                      </h5>
                      <div className="dishes-review">
                        <h6>
                          <i className="fa-regular fa-clock" />
                          Open
                        </h6>
                        <h6 className="review-color">
                          4.5
                          <i className="fa-solid fa-star review-color" />
                          <span className="img-fluid">10(Reviews)</span>
                        </h6>
                      </div>
                    </div>
                    <div className="dishes-footer">
                      <div className="landmark">
                        <h5>
                          {" "}
                          <i className="feather-map-pin" />
                          United States
                        </h5>
                      </div>
                      <div className="amount">
                        <h5>
                          $300
                          <span>/ hour</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="dishes-box aos" data-aos="fade-up">
                  <div className="dishes-img">
                    <Link to="#">
                      <img
                        src={Restaurant_3}
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                    <div className="feature-content justify-content-end">
                      <span className="featured-text">Featured</span>
                    </div>
                    <div className="fav-item  justify-content-end">
                      <Link to="#" className="fav-icon">
                        <i className="fa-regular fa-bookmark" />
                      </Link>
                    </div>
                  </div>
                  <div className="dishes-content">
                    <div className="dishes-inner">
                      <div className="author-img-new">
                        <div className="inner-img">
                          <img
                            src={ProfileAvatar08}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <p className="title">China</p>
                      <h5>
                        <Link to="#">
                          {" "}
                          Family-style dining{" "}
                          <i className="fa-solid fa-circle-check" />
                        </Link>
                      </h5>
                      <div className="dishes-review">
                        <h6>
                          <i className="fa-regular fa-clock" />
                          Open
                        </h6>
                        <h6 className="review-color">
                          3.0
                          <i className="fa-solid fa-star review-color" />{" "}
                          <span className="img-fluid">7.0(Reviews)</span>
                        </h6>
                      </div>
                    </div>
                    <div className="dishes-footer">
                      <div className="landmark">
                        <h5>
                          {" "}
                          <i className="feather-map-pin" />
                          China
                        </h5>
                      </div>
                      <div className="amount">
                        <h5>
                          $250
                          <span>/ hour</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="dishes-box aos" data-aos="fade-up">
                  <div className="dishes-img">
                    <Link to="#">
                      <img
                        src={Restaurant_4}
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                    <div className="feature-content justify-content-end">
                      <span className="featured-text">Featured</span>
                    </div>
                    <div className="fav-item  justify-content-end">
                      <Link to="#" className="fav-icon">
                        <i className="fa-regular fa-bookmark" />
                      </Link>
                    </div>
                  </div>
                  <div className="dishes-content">
                    <div className="dishes-inner">
                      <div className="author-img-new">
                        <div className="inner-img">
                          <img
                            src={ProfileAvatar02}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                      <p className="title">England</p>
                      <h5>
                        <Link to="#">
                          {" "}
                          Fast-casual dining{" "}
                          <i className="fa-solid fa-circle-check" />
                        </Link>
                      </h5>
                      <div className="dishes-review">
                        <h6>
                          <i className="fa-regular fa-clock" />
                          Open
                        </h6>
                        <h6 className="review-color">
                          2.5
                          <i className="fa-solid fa-star review-color" />{" "}
                          <span className="img-fluid">5.0(Reviews)</span>
                        </h6>
                      </div>
                    </div>
                    <div className="dishes-footer">
                      <div className="landmark">
                        <h5>
                          {" "}
                          <i className="feather-map-pin" />
                          Denmark
                        </h5>
                      </div>
                      <div className="amount">
                        <h5>
                          $300
                          <span>/ hour</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Restaurant Section */}

        {/* Cities Section */}
        <section className="cities-section">
          <div className="container">
            <div className="cities-sec">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="section-heading section-heading-seven d-flex align-items-center aos"
                    data-aos="fade-up"
                  >
                    <div className="heading-img">
                      <img
                        src={heading_logo}
                        className="img-fluid m-0"
                        alt="img"
                      />
                    </div>
                    <div>
                      <h2>Featured Cities </h2>
                      <p>Explore restaurants &amp; cafes by locality</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
                  <div className="cities-box">
                    <div className="cities-img">
                      <img
                        src={cities_1}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <div className="cities-overlay-item">
                      <div className="cities-overlay">
                        <div className="rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <h5>New York</h5>
                        <div className="cities-location">
                          <p>
                            <i className="feather-map-pin" />
                            12 Cities{" "}
                          </p>
                          <p>
                            {" "}
                            <i className="fa-solid fa-map" />
                            30+ Listing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
                  <div className="cities-box">
                    <div className="cities-img ">
                      <img
                        src={cities_2}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <div className="cities-overlay-item">
                      <div className="cities-overlay">
                        <div className="rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <h5>Sydney</h5>
                        <div className="cities-location">
                          <p>
                            <i className="feather-map-pin" />
                            10 Cities{" "}
                          </p>
                          <p>
                            {" "}
                            <i className="fa-solid fa-map" />
                            50+ Listing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
                  <div className="cities-box">
                    <div className="cities-img">
                      <img
                        src={cities_3}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <div className="cities-overlay-item">
                      <div className="cities-overlay">
                        <div className="rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <h5>London</h5>
                        <div className="cities-location">
                          <p>
                            <i className="feather-map-pin" />
                            18 Cities{" "}
                          </p>
                          <p>
                            {" "}
                            <i className="fa-solid fa-map" />
                            15+ Listing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-6 col-sm-6 aos" data-aos="fade-up">
                  <div className="cities-box cities-spl-box">
                    <div className="cities-img cities-height">
                      <img
                        src={cities_4}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <div className="cities-overlay-item">
                      <div className="cities-overlay">
                        <div className="rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <h5>New York</h5>
                        <div className="cities-location">
                          <p>
                            <i className="feather-map-pin" />8 Cities{" "}
                          </p>
                          <p>
                            {" "}
                            <i className="fa-solid fa-map" />
                            22+ Listing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 aos" data-aos="fade-up">
                  <div className="cities-box">
                    <div className="cities-img loca-height">
                      <img
                        src={cities_5}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <div className="cities-overlay-item">
                      <div className="cities-overlay">
                        <div className="rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <h5>Miami</h5>
                        <div className="cities-location">
                          <p>
                            <i className="feather-map-pin" />
                            15 Cities{" "}
                          </p>
                          <p>
                            {" "}
                            <i className="fa-solid fa-map" />
                            35+ Listing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 aos" data-aos="fade-up">
                  <div className="cities-box">
                    <div className="cities-img">
                      <img
                        src={cities_6}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <div className="cities-overlay-item">
                      <div className="cities-overlay">
                        <div className="rating">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <h5>London</h5>
                        <div className="cities-location">
                          <p>
                            <i className="feather-map-pin" />
                            10 Cities{" "}
                          </p>
                          <p>
                            {" "}
                            <i className="fa-solid fa-map" />
                            20+ Listing
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
        {/* /Cities Section  end*/}
        {/* /restaurateurs-bg-section start */}
        <section className="restaurateurs-bg">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="restaurateurs-img">
                <img src={main_img} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0 restaurateurs-main-bg d-flex align-items-center  ">
              <div className="right-content">
                <div className="restaurateurs-content section-heading-seven">
                  <img
                    src={heading_logo_small}
                    className="img-fluid"
                    alt="img"
                  />
                  <h2>Restaurateurs join us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,eiusmod
                    tempor incididunt ullamco minim ut labore et dolore magna aliqua.
                  </p>
                  <Link to="/signup" className="btn">
                    Join Us <i className="fa-solid fa-arrow-right" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /restaurateurs-bg-section end */}

        {/* Restaurant Section */}
        <section className="latest-restaurant-section ">
          <div className="container">
            <div className="section-heading-two mb-0">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="section-heading section-heading-seven d-flex align-items-center aos"
                    data-aos="fade-up"
                  >
                    <div className="heading-img">
                      <img
                        src={heading_logo}
                        className="img-fluid m-0"
                        alt="img"
                      />
                    </div>
                    <div>
                      <h2>Latest Restaurant</h2>
                      <p>What are you interested near you.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dishes-box aos" data-aos="fade-up">
                    <div className="dishes-img">
                      <Link to="#">
                        <img
                          src={latest_restaurant_1}
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="feature-content justify-content-end">
                        <span className="featured-text">Featured</span>
                      </div>
                      <div className="fav-item  justify-content-end">
                        <Link to="#" className="fav-icon">
                          <i className="fa-regular fa-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <div className="dishes-content">
                      <div className="dishes-inner">
                        <div className="author-img-new">
                          <div className="inner-img">
                            <img
                              src={ProfileAvatar01}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <p className="title">China</p>
                        <h5>
                          <Link to="#">
                            {" "}
                            Fast-casual dining{" "}
                            <i className="fa-solid fa-circle-check" />
                          </Link>
                        </h5>
                        <div className="dishes-review">
                          <h6>
                            <i className="fa-regular fa-clock" />
                            Open
                          </h6>
                          <h6 className="review-color">
                            5.0
                            <i className="fa-solid fa-star review-color" />
                            <span className="img-fluid">10(Reviews)</span>
                          </h6>
                        </div>
                      </div>
                      <div className="dishes-footer">
                        <div className="landmark">
                          <h5>
                            {" "}
                            <i className="feather-map-pin" />
                            United States
                          </h5>
                        </div>
                        <div className="amount">
                          <h5>
                            $300
                            <span>/ hour</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dishes-box aos" data-aos="fade-up">
                    <div className="dishes-img">
                      <Link to="#">
                        <img
                          src={latest_restaurant_2}
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="feature-content justify-content-end">
                        <span className="featured-text">Featured</span>
                      </div>
                      <div className="fav-item  justify-content-end">
                        <Link to="#" className="fav-icon">
                          <i className="fa-regular fa-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <div className="dishes-content">
                      <div className="dishes-inner">
                        <div className="author-img-new">
                          <div className="inner-img">
                            <img
                              src={ProfileAvatar02}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <p className="title">Japan</p>
                        <h5>
                          <Link to="#">
                            {" "}
                            Family-style dining{" "}
                            <i className="fa-solid fa-circle-check" />
                          </Link>
                        </h5>
                        <div className="dishes-review">
                          <h6>
                            <i className="fa-regular fa-clock" />
                            Open
                          </h6>
                          <h6 className="review-color">
                            5.0
                            <i className="fa-solid fa-star review-color" />
                            <span className="img-fluid">10(Reviews)</span>
                          </h6>
                        </div>
                      </div>
                      <div className="dishes-footer">
                        <div className="landmark">
                          <h5>
                            {" "}
                            <i className="feather-map-pin" />
                            Tokyo
                          </h5>
                        </div>
                        <div className="amount">
                          <h5>
                            $200
                            <span>/ hour</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dishes-box aos" data-aos="fade-up">
                    <div className="dishes-img">
                      <Link to="#">
                        <img
                          src={latest_restaurant_3}
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="feature-content justify-content-end">
                        <span className="featured-text">Featured</span>
                      </div>
                      <div className="fav-item  justify-content-end">
                        <Link to="#" className="fav-icon">
                          <i className="fa-regular fa-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <div className="dishes-content">
                      <div className="dishes-inner">
                        <div className="author-img-new">
                          <div className="inner-img">
                            <img
                              src={ProfileAvatar03}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <p className="title">England</p>
                        <h5>
                          <Link to="#">
                            {" "}
                            Fine dining
                            <i className="fa-solid fa-circle-check" />
                          </Link>
                        </h5>
                        <div className="dishes-review">
                          <h6>
                            <i className="fa-regular fa-clock" />
                            Open
                          </h6>
                          <h6 className="review-color">
                            3.0
                            <i className="fa-solid fa-star review-color" />
                            <span className="img-fluid">8(Reviews)</span>
                          </h6>
                        </div>
                      </div>
                      <div className="dishes-footer">
                        <div className="landmark">
                          <h5>
                            {" "}
                            <i className="feather-map-pin" />
                            Germany
                          </h5>
                        </div>
                        <div className="amount">
                          <h5>
                            $300
                            <span>/ hour</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="dishes-box aos" data-aos="fade-up">
                    <div className="dishes-img">
                      <Link to="#">
                        <img
                          src={latest_restaurant_4}
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="feature-content justify-content-end">
                        <span className="featured-text">Featured</span>
                      </div>
                      <div className="fav-item  justify-content-end">
                        <Link to="#" className="fav-icon">
                          <i className="fa-regular fa-bookmark" />
                        </Link>
                      </div>
                    </div>
                    <div className="dishes-content">
                      <div className="dishes-inner">
                        <div className="author-img-new">
                          <div className="inner-img">
                            <img
                              src={ProfileAvatar02}
                              className="img-fluid"
                              alt="no-img"
                            />
                          </div>
                        </div>
                        <p className="title">Australia</p>
                        <h5>
                          <Link to="#">
                            {" "}
                            Casual dining
                            <i className="fa-solid fa-circle-check" />
                          </Link>
                        </h5>
                        <div className="dishes-review">
                          <h6>
                            <i className="fa-regular fa-clock" />
                            Open
                          </h6>
                          <h6 className="review-color">
                            4.0
                            <i className="fa-solid fa-star review-color" />
                            <span>9(Reviews)</span>
                          </h6>
                        </div>
                      </div>
                      <div className="dishes-footer">
                        <div className="landmark">
                          <h5>
                            {" "}
                            <i className="feather-map-pin" />
                            China
                          </h5>
                        </div>
                        <div className="amount">
                          <h5>
                            $250
                            <span>/ hour</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Restaurant Section */}

        {/* Pricing-Two  Plan */}
        <section className="pricing-plan pricing-plan-seven">
          <div className="container">
            <div className="section-heading-two section-heading-seven text-center">
              <div className="row">
                <div
                  className="col-md-12 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <img
                    src={heading_logo_small}
                    className="img-fluid"
                    alt="title-img"
                  />
                  <h2>Our Pricing Plan</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="price-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="price-card price-seven flex-fill">
                    <div>
                      <div className="price-head">
                        <h4>
                          $10 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Intro</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>For most businesses that want to otpimize web queries</p>
                        <ul>
                          <li className="active">Chat support</li>
                          <li className="active">All limited links</li>
                          <li className="active">Own analytics platform</li>
                          <li className="active">Optimize hashtags</li>
                          <li className="active">Unlimited users</li>
                        </ul>
                      </div>
                    </div>
                    <div className="choose-btn">
                      <Link to="/login" className="btn viewdetails-btn">
                        Choose Plan
                        <i className="fa-solid fa-arrow-right"> </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="price-card price-seven   flex-fill">
                    <div>
                      <div className="price-head">
                        <h4>
                          $50 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Base</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>For most businesses that want to otpimize web queries</p>
                        <ul>
                          <li className="active">Chat support</li>
                          <li className="active">All limited links</li>
                          <li className="active">Own analytics platform</li>
                          <li className="active">Optimize hashtags</li>
                          <li className="active">Unlimited users</li>
                        </ul>
                      </div>
                    </div>
                    <div className="choose-btn">
                      <Link to="/login" className="btn viewdetails-btn">
                        Choose Plan
                        <i className="fa-solid fa-arrow-right"> </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
                  <div className="price-card price-seven active flex-fill">
                    <div>
                      <div className="price-head">
                        <div className="text-end pop">
                          <span className="feature">MOST POPULAR</span>
                        </div>
                        <h4>
                          $100 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Pro</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>For most businesses that want to otpimize web queries</p>
                        <ul>
                          <li className="active">Chat support</li>
                          <li className="active">All limited links</li>
                          <li className="active">Own analytics platform</li>
                          <li className="active">Optimize hashtags</li>
                          <li className="active">Unlimited users</li>
                        </ul>
                      </div>
                    </div>
                    <div className="choose-btn">
                      <Link to="/login" className="btn viewdetails-btn">
                        Choose Plan
                        <i className="fa-solid fa-arrow-right"> </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up">
                  <div className="price-card price-seven flex-fill">
                    <div>
                      <div className="price-head">
                        <h4>
                          $200 <span>/ month</span>
                        </h4>
                        <div className="price-level">
                          <h6>Enterprise</h6>
                        </div>
                      </div>
                      <div className="price-body">
                        <p>For most businesses that want to otpimize web queries</p>
                        <ul>
                          <li className="active">Chat support</li>
                          <li className="active">All limited links</li>
                          <li className="active">Own analytics platform</li>
                          <li className="active">Optimize hashtags</li>
                          <li className="active">Unlimited users</li>
                        </ul>
                      </div>
                    </div>
                    <div className="choose-btn">
                      <Link to="/login" className="btn viewdetails-btn">
                        Choose Plan
                        <i className="fa-solid fa-arrow-right"> </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Pricing-Two  Plan */}

        {/* testimonial-section-seven Section */}
        <section className="testimonial-section-seven">
          <div className="container">
            <div className="section-heading-two section-heading-seven text-center">
              <div className="row">
                <div
                  className="col-md-12 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <img
                    src={heading_logo_small}
                    className="img-fluid"
                    alt="title-img"
                  />
                  <h2>People Talking About Us</h2>
                  <p>Our biggest clients</p>
                </div>
              </div>
            </div>
            <div className="testi-carousel ">
              <BiggestClients />
            </div>
          </div>
        </section>
        {/* /testimonial-section-seven Section */}

        {/* Blog-section start */}
        <section className="blog-seven-section">
          <div className="container">
            <div className="section-heading-two section-heading-seven text-center">
              <div className="row">
                <div
                  className="col-md-12 aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <img
                    src={heading_logo_small}
                    className="img-fluid"
                    alt="title-img"
                  />
                  <h2>From Our Blog</h2>
                  <p>Checkout what people are saying about our commuity businesses</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="blog-seven grid-blog-seven aos" data-aos="fade-up">
                    <div className="blog-image-seven">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={blog_seven1}
                          alt="Post Image"
                        />
                      </Link>
                      <div className="blog-date">
                        <h4>
                          09 <br />
                          <span>Jun</span>{" "}
                        </h4>
                      </div>
                    </div>
                    <div />
                    <div className="blog-content-seven">
                      <p className="blog-category-seven">
                        <Link to="#">
                          <span>Breakfast</span>
                        </Link>
                      </p>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Competitive Analysis for Enterprerneurs in 2023
                        </Link>
                      </h3>
                      <p className="blog-description-seven">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        lectus elementum lectus eu nisl, purus...
                      </p>
                      <ul className="entry-meta meta-item-seven">
                        <li>
                          <div className="post-author-seven">
                            <div className="post-author-img-seven">
                              <img
                                src={ProfileAvatar02}
                                alt="Post Author"
                              />
                            </div>
                            <Link to="#" className="mb-0">
                              {" "}
                              <span> Amara </span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="blog-seven grid-blog-seven aos" data-aos="fade-up">
                    <div className="blog-image-seven">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={blog_seven2}
                          alt="Post Image"
                        />
                      </Link>
                      <div className="blog-date">
                        <h4>
                          {" "}
                          11 <br /> <span>Aug</span>
                        </h4>
                      </div>
                    </div>
                    <div />
                    <div className="blog-content-seven">
                      <p className="blog-category-seven">
                        <Link to="#">
                          <span>Lunch</span>
                        </Link>
                      </p>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Three Powerful Tricks For Online Advertising
                        </Link>
                      </h3>
                      <p className="blog-description-seven">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        lectus elementum lectus eu nisl, purus...
                      </p>
                      <ul className="entry-meta meta-item-seven">
                        <li>
                          <div className="post-author-seven">
                            <div className="post-author-img-seven">
                              <img
                                src={ProfileAvatar07}
                                alt="Post Author"
                              />
                            </div>
                            <Link to="#" className="mb-0">
                              {" "}
                              <span> John </span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="blog-seven grid-blog-seven aos" data-aos="fade-up">
                    <div className="blog-image-seven">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={blog_seven3}
                          alt="Post Image"
                        />
                      </Link>
                      <div className="blog-date">
                        <h4>
                          {" "}
                          14 <br /> <span>Mar</span>
                        </h4>
                      </div>
                    </div>
                    <div />
                    <div className="blog-content-seven">
                      <p className="blog-category-seven">
                        <Link to="#">
                          <span>Dinner</span>
                        </Link>
                      </p>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          The Best Spa Saloons for your relaxations?
                        </Link>
                      </h3>
                      <p className="blog-description-seven">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        lectus elementum lectus eu nisl, purus...
                      </p>
                      <ul className="entry-meta meta-item-seven">
                        <li>
                          <div className="post-author-seven">
                            <div className="post-author-img-seven">
                              <img
                                src={ProfileAvatar04}
                                alt="Post Author"
                              />
                            </div>
                            <Link to="#" className="mb-0">
                              {" "}
                              <span> Alex </span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Blog-section end */}

        {/* Footer */}
        <footer className="footer footer-seven">
          <div className="container footer-container">
            <div className="stay-tuned">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="footer-left-part pull-left">
                    <h4>Newsletter</h4>
                    <p>Be the first one to know about discounts, offers and events</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="footer-right-part">
                    <form>
                      <div className="form-group">
                        <div className="group-img">
                          <i className="feather-mail" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email"
                          />
                          <button className="btn btn-primary" type="submit">
                            {" "}
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Top */}
          <div className="footer-top aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">About</h2>
                    <ul>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="#">Pages</Link>
                      </li>
                      <li>
                        <Link to="#">Listing</Link>
                      </li>
                      <li>
                        <Link to="#">Category</Link>
                      </li>
                      <li>
                        <Link to="#">In Press</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-2 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Support</h2>
                    <ul>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link to="#">Online Chat</Link>
                      </li>
                      <li>
                        <Link to="#">Whatsapp</Link>
                      </li>
                      <li>
                        <Link to="#">Telegram</Link>
                      </li>
                      <li>
                        <Link to="#">Ticketing</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-2 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">FAQ</h2>
                    <ul>
                      <li>
                        <Link to="#">Account</Link>
                      </li>
                      <li>
                        <Link to="#">Manage Deliveries</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Orders</Link>
                      </li>
                      <li>
                        <Link to="#">Payments</Link>
                      </li>
                      <li>
                        <Link to="/contact">Returns</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-2 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Category</h2>
                    <ul>
                      <li>
                        <Link to="#">Broast</Link>
                      </li>
                      <li>
                        <Link to="#">Pizza </Link>
                      </li>
                      <li>
                        <Link to="#">Chicken</Link>
                      </li>
                      <li>
                        <Link to="#">Burgers</Link>
                      </li>
                      <li>
                        <Link to="#">Sandwiches</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-2 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Location</h2>
                    <ul>
                      <li>
                        <Link to="#">San Francisco</Link>
                      </li>
                      <li>
                        <Link to="#"> London</Link>
                      </li>
                      <li>
                        <Link to="#">Tokyo</Link>
                      </li>
                      <li>
                        <Link to="#">Miami </Link>
                      </li>
                      <li>
                        <Link to="#">Los Angeles</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Footer Widget */}
                </div>
                <div className="col-lg-2 col-md-6">
                  {/* Footer Widget */}
                  <div className="footer-widget">
                    <h2 className="footer-title">Contact Us </h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <p className="footer-icon">
                          <i className="fa-solid fa-phone" />
                        </p>
                        <p> (406) 555-0120 </p>
                      </div>
                      <div className="footer-address">
                        <p className="footer-icon">
                          <i className="fa-solid fa-envelope" />
                        </p>
                        <p> listee@example.com</p>
                      </div>
                      <div className="footer-address">
                        <p className="footer-icon">
                          <i className="fa-solid fa-location-dot" />
                        </p>
                        <p> 2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                      </div>
                    </div>
                  </div>
                  {/* /Footer Widget */}
                </div>
              </div>
              {/* Footer Counter Section*/}
              <div className="footercount">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="vistors-details">
                      <img src={logo_new} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 ">
                    <div className="vistors-details text-lg-center">
                      <div className="social-icon">
                        <ul>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-facebook-square" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-youtube" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-dribbble" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-figma" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 ">
                    <div className="vistors-details text-lg-end">
                      <p>© 2023, All Rights Reserved </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Footer  Counter Section*/}
            </div>
          </div>
          {/* /Footer Top */}
        </footer>
        {/* /Footer */}
      </div>
    </>
  );
}
export default Home7;