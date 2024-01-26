import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Gallery1Jpg,
  Gallery2Jpg,
  Gallery3Jpg,
  Gallery4Jpg,
  TripIcon1,
  TripIcon2,
  TripIcon3,
  TripIcon4,
  TripIcon5,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";

const Recommended = () => {
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
    <section className="section-blk recommended-blk style1-blk">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-blk justify-content-center text-center">
              <h2>Recommended</h2>
              <h5>These popular destinations have a lot to offer</h5>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="recommended-tabs-blk">
                  <ul className="nav tabs-style gap-3" data-bs-tabs="tabs">
                    <li>
                      <Link
                        className={toggleState === 1?"active":""}
                        aria-current="true"
                        data-bs-toggle="tab"
                        to="#hotels"
                        onClick={()=>toggleTap(1)}
                      >
                        <span>
                          <img src={TripIcon1} alt="Dreamstrip Recommended" />
                        </span>
                        hotel
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#restaurants" onClick={()=>toggleTap(2)} className={toggleState === 2?"active":""}>
                        <span>
                          <img src={TripIcon2} alt="Dreamstrip Recommended" />
                        </span>
                        Restaurants
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#shops" onClick={()=>toggleTap(3)} className={toggleState === 3?"active":""}>
                        <span>
                          <img src={TripIcon3} alt="Dreamstrip Recommended" />
                        </span>
                        shops
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#business" onClick={()=>toggleTap(4)} className={toggleState === 4?"active":""}>
                        <span>
                          <img src={TripIcon4} alt="Dreamstrip Recommended" />
                        </span>
                        business
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#lifestyle" onClick={()=>toggleTap(5)} className={toggleState === 5?"active":""}>
                        <span>
                          <img src={TripIcon5} alt="Dreamstrip Recommended" />
                        </span>
                        lifestyle
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body tab-content">
              <div className={toggleState === 1?"tab-pane active":"tab-pane "} id="hotels">
                <div className="recommended-carousel">
                  <Slider
                    {...settings}
                    className="recommended-slider  owl-theme"
                  >
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            America – Grand canyon, Golden Gate
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$42</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,312 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk top-rated-style">
                          <p>top rated</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Argentina – Great Diving Trip
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$62</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,312 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Brazil – Rio de Janeiro
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$32</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(1,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk bf-style">
                          <p>Break Fast Included</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            India – Mumbai, New Delhi
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$82</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Lorem Ipsum is simply dummy text of the printing
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(3,012 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className={toggleState === 2?"tab-pane active":"tab-pane "} id="restaurants">
                <div className="recommended-carousel">
                  <div >
                  <Slider
                    {...settings} className="recommended-slider  owl-theme">
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            America – Grand canyon, Golden Gate
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$34</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,355 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk top-rated-style">
                          <p>top rated</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Argentina – Great Diving Trip
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$52</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Brazil – Rio de Janeiro
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk bf-style">
                          <p>Break Fast Included</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            India – Mumbai, New Delhi
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Lorem Ipsum is simply dummy text of the printing
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className={toggleState === 3?"tab-pane active":"tab-pane "} id="shops">
                <div className="recommended-carousel">
                  <div className="recommended-slider owl-theme">
                  <Slider
                    {...settings}>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            America – Grand canyon, Golden Gate
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk top-rated-style">
                          <p>top rated</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Argentina – Great Diving Trip
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Brazil – Rio de Janeiro
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$45</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk bf-style">
                          <p>
                            <Link to="/service-details">
                              Break Fast Included
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>India – Mumbai, New Delhi</p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Lorem Ipsum is simply dummy text of the printing
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className={toggleState === 4?"tab-pane active":"tab-pane "} id="business">
                <div className="recommended-carousel">
                  <div className="recommended-slider  owl-theme">
                  <Slider
                    {...settings}>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            America – Grand canyon, Golden Gate
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$67</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk top-rated-style">
                          <p>top rated</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Argentina – Great Diving Trip
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Brazil – Rio de Janeiro
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk bf-style">
                          <p>Break Fast Included</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            India – Mumbai, New Delhi
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Lorem Ipsum is simply dummy text of the printing
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className={toggleState === 5?"tab-pane  active":"tab-pane "} id="lifestyle">
                <div className="recommended-carousel">
                  <div className="recommended-slider  owl-theme">
                  <Slider
                    {...settings}>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            America – Grand canyon, Golden Gate
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk top-rated-style">
                          <p>top rated</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Argentina – Great Diving Trip
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$72</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Brazil – Rio de Janeiro
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$39</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk bf-style">
                          <p>Break Fast Included</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            India – Mumbai, New Delhi
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$56</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recommended-widget">
                      <div className="img-blk">
                        <Link to="/service-details">
                          <img
                            src={Gallery2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                        <div className="top-blk">
                          <p>best seller</p>
                        </div>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/service-details">
                            Lorem Ipsum is simply dummy text of the printing
                          </Link>
                        </p>
                        <div className="loc-blk">
                          <i className="feather-map-pin"></i>
                          <p>Westminster , London</p>
                        </div>
                        <div className="detail-blk">
                          <p>
                            Starting from <span>US$34</span>
                          </p>
                          <div className="detail-btm-blk">
                            <div className="rating-badge">
                              <span className="material-icons">star</span>
                              4.9
                            </div>
                            <small>(2,612 Reviews)</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
