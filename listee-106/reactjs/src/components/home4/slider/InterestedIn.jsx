import React, { useRef } from "react";
import {
  CategoryIcon13,
  CategoryIcon14,
  CategoryIcon15,
  CategoryIcon16,
  CategoryIcon17,
} from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const InterestedIn = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  const slider = useRef();
  return (
    <section className="cate-section">
      <div className="container">
        <div className="cate-sec">
          <div className="row">
            <div className="col-md-8">
              <div
                className="section-heading heading-four aos"
                data-aos="fade-up"
              >
                <h2>What Are You interested in?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <div className="interset-btn aos" data-aos="fade-up">
                <div className="mynav3">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                    onClick={() => slider?.current?.slickPrev()}
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                    onClick={() => slider?.current?.slickNext()}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
                <Link to="/categories" className="btn btn-primary more-btn">
                  View More <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <Slider
                ref={slider}
                {...settings}
                className=" cat-slider"
              >
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon13}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Restaurants</h5>
                    <span>20</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon14}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Job & Feeds</h5>
                    <span>08</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon15}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Gym & Sports</h5>
                    <span>12</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon16}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Game & Field</h5>
                    <span>05</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon17}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Parking</h5>
                    <span>10</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon15}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Restaurants</h5>
                    <span>20</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="cat-wrap aos" data-aos="fade-up">
                    <div className="cat-img">
                      <img
                        src={CategoryIcon15}
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                    <h5>Gym & Sports</h5>
                    <span>12</span>
                    <Link to="/categories">
                      <i className="feather-arrow-right"></i>
                    </Link>
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

export default InterestedIn;
