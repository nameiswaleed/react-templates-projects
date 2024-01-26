import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Gallery01,
  Gallery02,
  Gallery03,
  Gallery04,
  Gallery05,
  Gallery06,
  TitelImg,
} from "../../imagepath";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading-two text-center">
              <p>Portfolio</p>
              <h2>Our Amazing Work</h2>
              <img src={TitelImg} className="img-fluid" alt="title-img" />
            </div>
            <Slider {...settings} className=" portfolio-slider">
              <div className="portfolio-wrap">
                <div className="row gx-2 bg-white port-wrap">
                  <div className="col-md-3 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={Gallery01} className="img-fluid" alt="img" />
                      </div>
                      <div className="portfolio-overlay-item">
                        <Link to={Gallery01} data-fancybox="gallery1">
                          <div className="portfolio-overlay">
                            <h6>Wedding Venues</h6>
                            <p>15 Photos and 5 Videos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={Gallery02} className="img-fluid" alt="img" />
                      </div>
                      <div className="portfolio-overlay-item">
                        <Link to={Gallery02} data-fancybox="gallery1">
                          <div className="portfolio-overlay">
                            <h6>Wedding Venues</h6>
                            <p>55 Photos and 5 Videos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={Gallery03} className="img-fluid" alt="img" />
                      </div>
                      <div className="portfolio-overlay-item">
                        <Link to={Gallery03} data-fancybox="gallery1">
                          <div className="portfolio-overlay">
                            <h6>Wedding Venues</h6>
                            <p>135 Photos and 5 Videos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="row gx-2">
                      <div className="col-md-6">
                        <div className="portfolio-item">
                          <div className="portfolio-img">
                            <img
                              src={Gallery04}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <div className="portfolio-overlay-item">
                            <Link to={Gallery04} data-fancybox="gallery1">
                              <div className="portfolio-overlay">
                                <h6>Wedding Venues</h6>
                                <p>115 Photos and 5 Videos</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="portfolio-item">
                          <div className="portfolio-img">
                            <img
                              src={Gallery05}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <div className="portfolio-overlay-item">
                            <Link to={Gallery05} data-fancybox="gallery1">
                              <div className="portfolio-overlay">
                                <h6>Wedding Venues</h6>
                                <p>155 Photos and 5 Videos</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="portfolio-item">
                          <div className="portfolio-img">
                            <img
                              src={Gallery06}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <div className="portfolio-overlay-item">
                            <Link to={Gallery06} data-fancybox="gallery1">
                              <div className="portfolio-overlay">
                                <h6>Wedding Venues</h6>
                                <p>155 Photos and 5 Videos</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-wrap">
                <div className="row gx-2 bg-white">
                  <div className="col-md-3 col-sm-6">
                    <div className="portfolio-item mb-0">
                      <div className="portfolio-img">
                        <img src={Gallery02} className="img-fluid" alt="img" />
                      </div>
                      <div className="portfolio-overlay-item">
                        <Link to={Gallery02} data-fancybox="gallery1">
                          <div className="portfolio-overlay">
                            <h6>Wedding Venues</h6>
                            <p>155 Photos and 5 Videos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="portfolio-item mb-0">
                      <div className="portfolio-img">
                        <img src={Gallery01} className="img-fluid" alt="img" />
                      </div>
                      <div className="portfolio-overlay-item">
                        <Link to={Gallery01} data-fancybox="gallery1">
                          <div className="portfolio-overlay">
                            <h6>Wedding Venues</h6>
                            <p>155 Photos and 5 Videos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={Gallery03} className="img-fluid" alt="img" />
                      </div>
                      <div className="portfolio-overlay-item">
                        <Link to={Gallery03} data-fancybox="gallery1">
                          <div className="portfolio-overlay">
                            <h6>Wedding Venues</h6>
                            <p>155 Photos and 5 Videos</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="row gx-0">
                      <div className="col-md-6">
                        <div className="portfolio-item mb-0">
                          <div className="portfolio-img">
                            <img
                              src={Gallery04}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <div className="portfolio-overlay-item">
                            <Link to={Gallery04} data-fancybox="gallery1">
                              <div className="portfolio-overlay">
                                <h6>Wedding Venues</h6>
                                <p>155 Photos and 5 Videos</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="portfolio-item mb-0">
                          <div className="portfolio-img">
                            <img
                              src={Gallery05}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <div className="portfolio-overlay-item">
                            <Link to={Gallery05} data-fancybox="gallery1">
                              <div className="portfolio-overlay">
                                <h6>Wedding Venues</h6>
                                <p>155 Photos and 5 Videos</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="portfolio-item mb-0">
                          <div className="portfolio-img">
                            <img
                              src={Gallery06}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                          <div className="portfolio-overlay-item">
                            <Link to={Gallery06} data-fancybox="gallery1">
                              <div className="portfolio-overlay">
                                <h6>Wedding Venues</h6>
                                <p>155 Photos and 5 Videos</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
