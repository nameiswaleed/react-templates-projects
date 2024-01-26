import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Service01,
  Service02,
  Service03,
  Service04,
  TitelImg,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const PopularSearch = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-heading-two text-center">
          <div className="row">
            <div
              className="col-md-12 aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <p>Loved One</p>
              <h2>Popular Searches</h2>
              <img src={TitelImg} className="img-fluid" alt="title-img" />
            </div>
          </div>
        </div>
        <div className=" search-slider">
          <Slider {...settings}>
            <div className="item">
              <div className="popular-wrap">
                <div className="popular-img p-0">
                  <img src={Service01} className="img-fluid" alt="icons" />
                  <Link to="listing-grid-sidebar.html" className="btn">
                    Venues
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="popular-wrap">
                <div className="popular-img p-0">
                  <img src={Service02} className="img-fluid" alt="icons" />
                  <Link to="listing-grid-sidebar.html" className="btn">
                    Bridal Makeup
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="popular-wrap">
                <div className="popular-img p-0">
                  <img src={Service03} className="img-fluid" alt="icons" />
                  <Link to="listing-grid-sidebar.html" className="btn">
                    Catering Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="popular-wrap">
                <div className="popular-img p-0">
                  <img src={Service04} className="img-fluid" alt="icons" />
                  <Link to="listing-grid-sidebar.html" className="btn">
                    Photographers
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="popular-wrap">
                <div className="popular-img p-0">
                  <img src={Service02} className="img-fluid" alt="icons" />
                  <Link to="listing-grid-sidebar.html" className="btn">
                    Venues
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularSearch;
