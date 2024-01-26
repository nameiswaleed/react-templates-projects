import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  EarthIcon,
  ProfileAvatar01,
  ProfileAvatar12,
  ProfileAvatar13,
  ProfileAvatar14,
  TestiCirlce1,
  TestiCirlce2,
  TestiCirlce3,
  TestiCirlce4,
} from "../../imagepath";
import { Link } from "react-router-dom";

const Testimonial3 = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  return (
    <section className="section-blk testi-blk">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-blk">
              <div className="title-left">
                <h2>What our customers are saying us?</h2>
                <h5>These popular destinations have a lot to offer</h5>
              </div>

              <div className="theme-btn">
                <Link to="/service-details" className="btn">
                  View All Destinations
                  <span className="material-icons">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="testi-carousel">
              <Slider
                {...settings}
                className="testim-slider  owl-theme"
              >
                <div className="testi-widget">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img
                          src={ProfileAvatar12}
                          alt="Dreamstrip Testimonials"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Deirdre Carolyn</h4>
                      <p className="text-gray-style">Newyork</p>
                    </div>
                  </div>
                  <div className="testi-info-blk">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                  <hr className="custom-hr" />
                  <div className="testi-btm-blk">
                    <div className="circle-grp">
                      <img src={TestiCirlce1} alt="" />
                      <img src={TestiCirlce2} alt="" />
                      <img src={TestiCirlce3} alt="" />
                      <img src={TestiCirlce4} alt="" />
                    </div>
                    <div className="circle-right">
                      <img src={EarthIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="testi-widget">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img
                          src={ProfileAvatar01}
                          alt="Dreamstrip Testimonials"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Christopher Sebastian</h4>
                      <p className="text-gray-style">London</p>
                    </div>
                  </div>
                  <div className="testi-info-blk">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                  <hr className="custom-hr" />
                  <div className="testi-btm-blk">
                    <div className="circle-grp">
                      <img src={TestiCirlce1} alt="" />
                      <img src={TestiCirlce2} alt="" />
                    </div>
                    <div className="circle-right">
                      <img src={EarthIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="testi-widget">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img
                          src={ProfileAvatar14}
                          alt="Dreamstrip Testimonials"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Thomas Warren</h4>
                      <p className="text-gray-style">UAE</p>
                    </div>
                  </div>
                  <div className="testi-info-blk">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                  <hr className="custom-hr" />
                  <div className="testi-btm-blk">
                    <div className="circle-grp">
                      <img src={TestiCirlce1} alt="" />
                    </div>
                    <div className="circle-right">
                      <img src={EarthIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="testi-widget">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="icon-blk rounded-circle overflow-hidden">
                        <img
                          src={ProfileAvatar13}
                          alt="Dreamstrip Testimonials"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>Deirdre Carolyn</h4>
                      <p className="text-gray-style">Kenya</p>
                    </div>
                  </div>
                  <div className="testi-info-blk">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since.
                    </p>
                  </div>
                  <hr className="custom-hr" />
                  <div className="testi-btm-blk">
                    <div className="circle-grp">
                      <img src={TestiCirlce1} alt="" />
                      <img src={TestiCirlce2} alt="" />
                    </div>
                    <div className="circle-right">
                      <img src={EarthIcon} alt="" />
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

export default Testimonial3;
