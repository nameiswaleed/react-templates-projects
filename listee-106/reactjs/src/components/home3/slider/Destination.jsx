import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Destination1,
  Destination2,
  Destination3,
  Destination4,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Destination = () => {
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
  return (
    <section className="section-blk destination-blk">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-blk">
              <div className="title-left">
                <h2>Popular Destinations</h2>
                <h5>These popular destinations have a lot to offer</h5>
              </div>
              <div className="theme-btn">
                <Link to="/service-details" className="search-btn">
                  view all destination
                  <span>
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="destination-carousel">
              <Slider
                {...settings}
                className="destination-slider  owl-theme"
              >
                <div className="destination-widget">
                  <Link to="javascript:;" className="desti-link">
                    <img
                      src={Destination1}
                      className="img-fluid"
                      alt="find your destination"
                    />
                    <div className="desti-country-list">
                      <span className="desti-btn">New York</span>
                    </div>
                  </Link>
                  <div className="overlay-blk">
                    <h3>New York</h3>
                    <p>
                      New york is the world's second largest and second most-
                      populous continent, being behind Asia in both.
                    </p>
                    <div className="theme-btn">
                      <Link to="/service-details" className="search-btn">
                        Explore
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="destination-widget">
                  <Link to="javascript:;" className="desti-link">
                    <img
                      src={Destination2}
                      className="img-fluid"
                      alt="find your destination"
                    />
                    <div className="desti-country-list">
                      <span className="desti-btn">Dubai</span>
                    </div>
                  </Link>
                  <div className="overlay-blk">
                    <h3>Dubai</h3>
                    <p>
                      New york is the world's second largest and second most-
                      populous continent, being behind Asia in both.
                    </p>
                    <div className="theme-btn">
                      <Link to="/service-details" className="search-btn">
                        Explore
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="destination-widget">
                  <Link to="javascript:;" className="desti-link">
                    <img
                      src={Destination3}
                      className="img-fluid"
                      alt="find your destination"
                    />
                    <div className="desti-country-list">
                      <span className="desti-btn">India</span>
                    </div>
                  </Link>
                  <div className="overlay-blk">
                    <h3>India</h3>
                    <p>
                      New york is the world's second largest and second most-
                      populous continent, being behind Asia in both.
                    </p>
                    <div className="theme-btn">
                      <Link to="/service-details" className="search-btn">
                        Explore
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="destination-widget">
                  <Link to="javascript:;" className="desti-link">
                    <img
                      src={Destination4}
                      className="img-fluid"
                      alt="find your destination"
                    />
                    <div className="desti-country-list">
                      <span className="desti-btn">London</span>
                    </div>
                  </Link>
                  <div className="overlay-blk">
                    <h3>London</h3>
                    <p>
                      New york is the world's second largest and second most-
                      populous continent, being behind Asia in both.
                    </p>
                    <div className="theme-btn">
                      <Link to="/service-details" className="search-btn">
                        Explore
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="destination-widget">
                  <Link to="javascript:;" className="desti-link">
                    <img
                      src={Destination2}
                      className="img-fluid"
                      alt="find your destination"
                    />
                    <div className="desti-country-list">
                      <span className="desti-btn">USA</span>
                    </div>
                  </Link>
                  <div className="overlay-blk">
                    <h3>USA</h3>
                    <p>
                      New york is the world's second largest and second most-
                      populous continent, being behind Asia in both.
                    </p>
                    <div className="theme-btn">
                      <Link to="/service-details" className="search-btn">
                        Explore
                        <span>
                          <i className="feather-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
