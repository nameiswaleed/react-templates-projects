import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaterialIcon, {colorPalette} from 'material-icons-react';

import {
  Activity1,
  Activity2,
  Activity3,
  Activity4,
  Activity5,
  Activity6,
  Activity7,
  BalloonImg,
  Banner02,
  BannerBtmImg,
  Cloud01,
  Cloud02,
  DesignationImg1,
  DesignationImg2,
  MailCheck,
  PlanePng,
  Recommend1,
  Recommend2,
  Recommend3,
  Recommend4,
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceImg,
  SubscribeBg,
} from "../imagepath";
import Header3 from "./header/Header3";
import BlogBanner from "./slider/BlogBanner";
import Destination from "./slider/Destination";
import Recommended from "./slider/Recommended";
import Testimonial3 from "./slider/Testimonial3";
import Slider from "react-slick";
import Footer3 from "./footer/Footer3";
import { Link } from "react-router-dom";
import LatestBlogs3 from "./slider/LatestBlogs3";

const Home3 = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  const [toggleState,setToggleState]=useState(1);

  const toggleTap=(index)=>{
    setToggleState(index)
  }
  return (
    <div className="main-wrapper">
      <Header3 />

      {/* Home Banner */}
      <section className="banner-section banner-three">
        <div className="container">
          <div className="row">
            <div className="banner-info-blk">
              <div className="row">
                <div className="col-md-12 col-lg-5">
                  <div className="banner-content-blk">
                    <h1>
                      We Take Care of
                      <br />
                      Your Trip
                    </h1>
                    <h5>Discover amazing places at exclusive deals</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-images">
              <div className="ban-image">
                <img src={BalloonImg} alt="" />
              </div>
              <div className="ban-image-01">
                <img src={Cloud01} alt="" className="cloud-one" />
                <img src={Cloud02} alt="" className="cloud-two" />
              </div>
              <div className="ban-image-02">
                <img src={Banner02} alt="" />
              </div>
              <div className="ban-image-03">
                <img src={PlanePng} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner-btm-img-blk">
                <img src={BannerBtmImg} alt="" />
              </div>
              <div className="banner-btm">
                <div className="search-tab-col">
                  <form action="listing-grid-sidebar" method="post">
                    <div className="row align-items-center search-form">
                      <div className="col-12 col-lg-10 datepicker-col search-group">
                        <ul className="gap-3 d-flex">
                          <li>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="icon-blk rounded-circle">
                                  <span className="material-symbols-outlined">
                                  <MaterialIcon icon="location_on" />
                                    
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <span className="label">Location</span>
                                <input
                                  type="text"
                                  name="name"
                                  className="border-0 text-truncate px-0 form-control"
                                  placeholder="Where are you go?"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="icon-blk rounded-circle">
                                  <span className="material-symbols-outlined">
                                  <MaterialIcon icon="calendar_today" />
                                    
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <span className="label">Check in</span>
                                <input
                                  type="text"
                                  name="checkin"
                                  className="border-0 text-truncate px-0 form-control datetimepicker"
                                  placeholder="Jan 05, 2023"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="icon-blk rounded-circle">
                                  <span className="material-symbols-outlined">
                                  <MaterialIcon icon="calendar_today" />
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <span className="label">Check out</span>
                                <input
                                  type="text"
                                  name="checkout"
                                  className="border-0 text-truncate px-0 form-control datetimepicker"
                                  placeholder="Jan 06, 2023"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="icon-blk rounded-circle">
                                  <span className="material-symbols-outlined">
                                    <MaterialIcon icon="group" />
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <span className="label">Guest</span>
                                <input
                                  type="text"
                                  name="mobile"
                                  className="border-0 text-truncate px-0 form-control"
                                  placeholder="2 adults - 1 children"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-lg-2 search-group">
                        <ul className="p-0">
                          <li>
                            <button className="btn theme-btn">
                              Search <i className="feather-search ms-1"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Banner */}

      {/* Destination Banner */}
      <Destination />
      {/* Destination Banner */}

      {/* Service Banner */}
      <section className="section-blk service-blk">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="service-info-card d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="img-blk">
                    <img
                      src={ServiceImg}
                      className="img-fluid"
                      alt="Dreamstrip Services"
                    />
                  </div>
                </div>
                <div className="service-content flex-grow-1">
                  <h2>Our Services</h2>
                  <div className="body-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>

                  <ul className="service-list d-flex">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="icon-blk rounded-circle">
                            <img src={ServiceIcon1} alt="Service Feature 1" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h6>trip adviser</h6>
                          <p>Lorem Ipsum</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="icon-blk rounded-circle">
                            <img src={ServiceIcon2} alt="Service Feature 2" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h6>accommodation</h6>
                          <p>Lorem Ipsum</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="icon-blk rounded-circle">
                            <img src={ServiceIcon3} alt="Service Feature 3" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h6>guide</h6>
                          <p>Lorem Ipsum</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="icon-blk rounded-circle">
                            <img src={ServiceIcon4} alt="Service Feature 4" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <h6>trip planner</h6>
                          <p>Lorem Ipsum</p>
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
      {/* Service Banner */}

      {/* Recommended Banner */}
      <Recommended />
      {/* Recommended Banner */}

      {/* Offer Banner */}
      <section className="section-blk offer-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box-style sm-mb-23">
                <img
                  src={DesignationImg1}
                  className="img-fluid"
                  alt="Dreamstrip Offers"
                />
                <div className="btm-box-style">
                  <div>
                    <p>Enjoy Summer Deals</p>
                    <h3>Up to 30% Discount!</h3>
                  </div>
                  <div>
                    <div className="theme-btn">
                      <Link to="/categories" className="btn">
                        learn more
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-style">
                <img
                  src={DesignationImg2}
                  className="img-fluid"
                  alt="Dreamstrip Offers"
                />
                <div className="btm-box-style">
                  <div>
                    <p>Enjoy Summer Deals</p>
                    <h3>Up to 30% Discount!</h3>
                  </div>
                  <div>
                    <div className="theme-btn">
                      <Link to="/categories" className="btn">
                        learn more
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banner */}

      {/* Recommendation */}
      <section className="section-blk recommended-blk style2-blk">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-blk justify-content-center text-center">
                <h2>Top Guide Recommentation</h2>
                <h5>These popular destinations have a lot to offer</h5>
              </div>
              <div className="recommended-carousel">
                <Slider
                  {...settings}
                  className="recommended-slider  owl-theme"
                >
                  <div className="recommended-widget">
                    <div className="img-blk">
                      <Link to="#">
                        <img
                          src={Recommend1}
                          className="img-fluid"
                          alt="List 1"
                        />
                      </Link>
                      <div className="top-blk">
                        <p>Adventure</p>
                      </div>
                    </div>
                    <div className="content-blk">
                      <p>
                        <Link to="#">Gordon Evan</Link>
                      </p>
                      <div className="loc-blk">
                        <i className="feather-map-pin"></i>
                        <p>Westminster , London</p>
                      </div>
                      <div className="detail-blk mt-15">
                        <p>
                          US$15 <span>/ Per Hour</span>
                        </p>
                        <div className="detail-btm-blk">
                          <div className="rating-blk">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                          </div>
                          <small>4.9 (2,312 Reviews)</small>
                        </div>
                        <p className="my-10 exp-style">5+ Years Experience</p>
                        <div className="tags-blk">
                          <Link to="#" className="tag-style">
                            English
                          </Link>
                          <Link to="#" className="tag-style">
                            Spanish
                          </Link>
                          <Link to="#" className="tag-style">
                            Japanese
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recommended-widget">
                    <div className="img-blk">
                      <Link to="#">
                        <img
                          src={Recommend2}
                          className="img-fluid"
                          alt="List 1"
                        />
                      </Link>
                      <div className="top-blk top-rated-style">
                        <p>Hunting</p>
                      </div>
                    </div>
                    <div className="content-blk">
                      <p>
                        <Link to="#">
                          Jennifer Bernadette
                        </Link>
                      </p>
                      <div className="loc-blk">
                        <i className="feather-map-pin"></i>
                        <p>NSW , London</p>
                      </div>
                      <div className="detail-blk mt-15">
                        <p>
                          US$20 <span>/ Per Hour</span>
                        </p>
                        <div className="detail-btm-blk">
                          <div className="rating-blk">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                          </div>
                          <small>4.9 (2,612 Reviews)</small>
                        </div>
                        <p className="my-10 exp-style">4+ Years Experience</p>
                        <div className="tags-blk">
                          <Link to="#" className="tag-style">
                            English
                          </Link>
                          <Link to="#" className="tag-style">
                            Spanish
                          </Link>
                          <Link to="#" className="tag-style">
                            Japanese
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recommended-widget">
                    <div className="img-blk">
                      <Link to="#">
                        <img
                          src={Recommend3}
                          className="img-fluid"
                          alt="List 1"
                        />
                      </Link>
                      <div className="top-blk gray-bg-style">
                        <p>Brandon Christopher</p>
                      </div>
                    </div>
                    <div className="content-blk">
                      <p>
                        <Link to="#">Gordon Evan</Link>
                      </p>
                      <div className="loc-blk">
                        <i className="feather-map-pin"></i>
                        <p>Westminster , London</p>
                      </div>
                      <div className="detail-blk mt-15">
                        <p>
                          US$10 <span>/ Per Hour</span>
                        </p>
                        <div className="detail-btm-blk">
                          <div className="rating-blk">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                          </div>
                          <small>4.9 (2,612 Reviews)</small>
                        </div>
                        <p className="my-10 exp-style">6+ Years Experience</p>
                        <div className="tags-blk">
                          <Link to="#" className="tag-style">
                            English
                          </Link>
                          <Link to="#" className="tag-style">
                            Spanish
                          </Link>
                          <Link to="#" className="tag-style">
                            Japanese
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recommended-widget">
                    <div className="img-blk">
                      <Link to="#">
                        <img
                          src={Recommend4}
                          className="img-fluid"
                          alt="List 1"
                        />
                      </Link>
                      <div className="top-blk bf-style">
                        <p>Tour</p>
                      </div>
                    </div>
                    <div className="content-blk">
                      <p>
                        <Link to="#">Grace</Link>
                      </p>
                      <div className="loc-blk">
                        <i className="feather-map-pin"></i>
                        <p>Texas, UK</p>
                      </div>
                      <div className="detail-blk mt-15">
                        <p>
                          US$10 <span>/ Per Hour</span>
                        </p>
                        <div className="detail-btm-blk">
                          <div className="rating-blk">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                          </div>
                          <small>4.9 (2,612 Reviews)</small>
                        </div>
                        <p className="my-10 exp-style">2+ Years Experience</p>
                        <div className="tags-blk">
                          <Link to="#" className="tag-style">
                            English
                          </Link>
                          <Link to="#" className="tag-style">
                            Spanish
                          </Link>
                          <Link to="#" className="tag-style">
                            Japanese
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recommendation */}

      {/* Promo Banner */}
      <section className="section-blk promo-blk">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="promo-style">
                <div className="flex-style">
                  <div>
                    <h3>Save Time : Create a Trip & Get Offers</h3>
                    <div className="list-style">
                      <ul>
                        <li>
                          <span className="position-style">01</span>
                          <span className="count-style">01</span>
                          Create Trip
                        </li>
                        <li>
                          <span className="position-style">02</span>
                          <span className="count-style">02</span>
                          Get offers
                        </li>
                        <li>
                          <span className="position-style">03</span>
                          <span className="count-style">03</span>
                          Search Guide
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="btn-style2">
                    <Link to="#">
                      <span className="text-style">Create a Trip</span>
                      <span className="shape-bg">
                        <span className="material-icons">arrow_forward</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promo Banner */}

      {/* Blog Banner */}
      <BlogBanner />
      {/* Blog Banner */}

      {/* Testimonial */}
      <Testimonial3 />
      {/* Testimonial */}

      {/* FAQ Section */}
      <section className="section-blk faq-blk">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-blk justify-content-center text-center">
                <h2>Frequently asked Questions</h2>
                <h5>Have questions? We're here to help.</h5>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="faq-tabs-blk mb-50">
                    <ul className="nav tabs-style gap-3" data-bs-tabs="tabs">
                      <li>
                        <Link
                          className={toggleState === 1?"active":""}
                          aria-current="true"
                          data-bs-toggle="tab"
                          to="#FAQhotels"
                          onClick={()=>toggleTap(1)}
                        >
                          hotels
                        </Link>
                      </li>
                      <li>
                        <Link data-bs-toggle="tab" to="#FAQpayments"className={toggleState === 2?"active":""} onClick={()=>toggleTap(2)}>
                          Payments
                        </Link>
                      </li>
                      <li>
                        <Link data-bs-toggle="tab" to="#FAQtrip" className={toggleState === 3?"active":""} onClick={()=>toggleTap(3)}>
                          trip
                        </Link>
                      </li>
                      <li>
                        <Link data-bs-toggle="tab" to="#FAQguide" className={toggleState === 4?"active":""} onClick={()=>toggleTap(4)}>
                          guide
                        </Link>
                      </li>
                      <li>
                        <Link data-bs-toggle="tab" to="#FAQcancel" className={toggleState === 5?"active":""} onClick={()=>toggleTap(5)}>
                          cancel
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body tab-content">
                <div className={toggleState === 1?"tab-pane active":"tab-pane "} id="FAQhotels">
                  <div className="row">
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How to book a tour?</h5>
                        <p className="text-gray-style">
                          To book a tour to India, we suggest you that you view
                          the India Journeys Page on the website, which include
                          many tours that are being taken by most of the
                          tourists coming to India. If you intend to make any
                          changes, or customize your travel itinerary, you can
                          request a quote by filling our online query form or
                          sending us an e mail at: bookings@journey.com
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How will I be picked up from the Airport ?</h5>
                        <p className="text-gray-style">
                          You will be picked up by our representative at the
                          arrival hall of the particular International Airport
                          of India. You should not leave Air Port without our
                          representative if you are to be picked up. Pioneer
                          Journeys representative would be holding a welcome
                          board with your name on it. If you are part of a
                          group, the name of the group will be mentioned on the
                          welcome board.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={toggleState === 2?"tab-pane  active":"tab-pane "} id="FAQpayments">
                  <div className="row">
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How to book a tour?</h5>
                        <p className="text-gray-style">
                          To book a tour to India, we suggest you that you view
                          the India Journeys Page on the website, which include
                          many tours that are being taken by most of the
                          tourists coming to India. If you intend to make any
                          changes, or customize your travel itinerary, you can
                          request a quote by filling our online query form or
                          sending us an e mail at: bookings@journey.com
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How will I be picked up from the Airport ?</h5>
                        <p className="text-gray-style">
                          You will be picked up by our representative at the
                          arrival hall of the particular International Airport
                          of India. You should not leave Air Port without our
                          representative if you are to be picked up. Pioneer
                          Journeys representative would be holding a welcome
                          board with your name on it. If you are part of a
                          group, the name of the group will be mentioned on the
                          welcome board.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={toggleState === 3?"tab-pane  active":"tab-pane "} id="FAQtrip">
                  <div className="row">
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How to book a tour?</h5>
                        <p className="text-gray-style">
                          To book a tour to India, we suggest you that you view
                          the India Journeys Page on the website, which include
                          many tours that are being taken by most of the
                          tourists coming to India. If you intend to make any
                          changes, or customize your travel itinerary, you can
                          request a quote by filling our online query form or
                          sending us an e mail at: bookings@journey.com
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How will I be picked up from the Airport ?</h5>
                        <p className="text-gray-style">
                          You will be picked up by our representative at the
                          arrival hall of the particular International Airport
                          of India. You should not leave Air Port without our
                          representative if you are to be picked up. Pioneer
                          Journeys representative would be holding a welcome
                          board with your name on it. If you are part of a
                          group, the name of the group will be mentioned on the
                          welcome board.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={toggleState === 4?"tab-pane  active":"tab-pane "} id="FAQguide">
                  <div className="row">
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How to book a tour?</h5>
                        <p className="text-gray-style">
                          To book a tour to India, we suggest you that you view
                          the India Journeys Page on the website, which include
                          many tours that are being taken by most of the
                          tourists coming to India. If you intend to make any
                          changes, or customize your travel itinerary, you can
                          request a quote by filling our online query form or
                          sending us an e mail at: bookings@journey.com
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How will I be picked up from the Airport ?</h5>
                        <p className="text-gray-style">
                          You will be picked up by our representative at the
                          arrival hall of the particular International Airport
                          of India. You should not leave Air Port without our
                          representative if you are to be picked up. Pioneer
                          Journeys representative would be holding a welcome
                          board with your name on it. If you are part of a
                          group, the name of the group will be mentioned on the
                          welcome board.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={toggleState === 5?"tab-pane  active":"tab-pane "} id="FAQcancel">
                  <div className="row">
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How to book a tour?</h5>
                        <p className="text-gray-style">
                          To book a tour to India, we suggest you that you view
                          the India Journeys Page on the website, which include
                          many tours that are being taken by most of the
                          tourists coming to India. If you intend to make any
                          changes, or customize your travel itinerary, you can
                          request a quote by filling our online query form or
                          sending us an e mail at: bookings@journey.com
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 d-flex">
                      <div className="faq-shadow-blk flex-fill">
                        <h5>How will I be picked up from the Airport ?</h5>
                        <p className="text-gray-style">
                          You will be picked up by our representative at the
                          arrival hall of the particular International Airport
                          of India. You should not leave Air Port without our
                          representative if you are to be picked up. Pioneer
                          Journeys representative would be holding a welcome
                          board with your name on it. If you are part of a
                          group, the name of the group will be mentioned on the
                          welcome board.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btm-style">
                <Link to="#price" className="price-down">
                  <span>
                    <i className="feather-arrow-down"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}

      {/* Price Section */}
      <section className="section-blk price-section" id="price">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <div className="title-blk justify-content-center text-center">
                <h2>Our Pricing Plan</h2>
                <h5>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Intro</h6>
                  </div>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    <li className="active">Basic listing submission</li>
                    <li className="inactive">One Listing</li>
                    <li className="inactive">30 days Availabilty</li>
                    <li className="inactive">Limited Support</li>
                    <li className="inactive">Edit your listing</li>
                  </ul>
                  <h4>
                    $10 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Basic</h6>
                  </div>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    <li className="active">Basic listing submission</li>
                    <li className="active">One Listing</li>
                    <li className="inactive">30 days Availabilty</li>
                    <li className="inactive">Limited Support</li>
                    <li className="inactive">Edit your listing</li>
                  </ul>
                  <h4>
                    $25 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Pro</h6>
                    <span>Save $40</span>
                  </div>
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
                  <h4>
                    $50 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex col-md-6">
              <div className="price-card price-three flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>Enterprise</h6>
                  </div>
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
                  <h4>
                    $100 <span>/ month</span>
                  </h4>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      Choose
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Price Section */}

      <LatestBlogs3/>

      {/* Subscribe Banner */}
      <section className="section-blk subscribe-blk">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="subscribe-style">
                <div className="row align-items-center">
                  <div className="col-md-6 d-sm-none d-md-block">
                    <div className="banner-blk">
                      <img src={SubscribeBg} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="banner-info">
                      <h2>Your Travel Journey Starts Here</h2>
                      <p>Sign up and we'll send the best deals to you</p>
                      <div className="row justify-content-center">
                        <div className="col-md-10">
                          <div className="subscribe-blk bg-white">
                            <div className="input-group align-items-center">
                              <span
                                className="input-group-text material-icons"
                                id="basic-addon1"
                              >
                                mail_outline
                              </span>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email here"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                              />
                              <div className="subscribe-btn-grp">
                                <input
                                  type="submit"
                                  className="btn"
                                  value="Subscribe"
                                />
                                <img src={MailCheck} alt="" />
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
          </div>
        </div>
      </section>
      {/* Subscribe Banner */}

      {/* Activities Banner */}
      <section className="section-blk activities-blk">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-blk justify-content-center text-center">
                <h2 className="m-0">Top destinations with Activities</h2>
              </div>
              <div className="row row-gap-14">
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity1} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Paris</h4>
                      <p>755 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity2} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Dubai</h4>
                      <p>60 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity3} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>London</h4>
                      <p>140 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity4} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>New York</h4>
                      <p>75 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity5} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Amsterdam</h4>
                      <p>60 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity6} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>New Orleans</h4>
                      <p>120 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity7} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Rome</h4>
                      <p>35 Tours & Activities</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="shadow-box d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img src={Activity1} alt="Dreamstrip Activities" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Paris</h4>
                      <p>75 Tours & Activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Activities Banner */}

      {/* Footer */}
      <Footer3 />
      {/* Footer */}
    </div>
  );
};

export default Home3;
