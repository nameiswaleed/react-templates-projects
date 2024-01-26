import React from "react";
import { Celebrate, Celebrate01, TitelImg } from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const CelebratingLove = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  return (
    <section className="celebrate-section">
      <div className="container">
        <div className="section-heading-two text-center">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <p>Loved One</p>
              <h2>Celebrating Your Love</h2>
              <img src={TitelImg} className="img-fluid" alt="title-img" />
            </div>
          </div>
        </div>
        <div className=" celebrate-slider">
          <Slider {...settings}>
            <div className="item">
              <div className="celebrate-wrap aos" data-aos="fade-up">
                <div className="celebrate-img">
                  <img src={Celebrate} className="img-fluid" alt="img" />
                  <div className="play-btn">
                    <Link
                      to="https://youtu.be/txNwby8qPlg"
                      data-fancybox=""
                      className="play-icon"
                    >
                      <i className="fa-solid fa-play"></i>
                    </Link>
                    <span className="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="celebrate-wrap aos" data-aos="fade-up">
                <div className="celebrate-img">
                  <img src={Celebrate01} className="img-fluid" alt="img" />
                  <div className="play-btn">
                    <Link
                      to="https://youtu.be/txNwby8qPlg"
                      data-fancybox=""
                      className="play-icon"
                    >
                      <i className="fa-solid fa-play"></i>
                    </Link>
                    <span className="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CelebratingLove;
