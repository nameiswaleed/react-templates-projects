import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ProfileAvatar01,
  ProfileAvatar02,
  ProfileAvatar07,
  ProfileAvatar08,
  TitelImg,
} from "../../imagepath";
import Slider from "react-slick";

const Testimonial2 = () => {
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
    <section className="feedback-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading-two text-center">
              <p>Find out</p>
              <h2>Testimonials from Real Brides</h2>
              <img src={TitelImg} className="img-fluid" alt="title-img" />
            </div>
            <Slider
              {...settings}
              className=" feedback-slider aos"
              data-aos="fade-up"
            >
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <span className="testi-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                </div>
                <div className="testimonial-user-info">
                  <img
                    className="img-fluid"
                    src={ProfileAvatar07}
                    alt="Post Image"
                  />
                  <div className="testimonial-user">
                    <h6>Bernadette Elizabeth</h6>
                    <p>Australia</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item aos" data-aos="fade-up">
                <div className="testimonial-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <span className="testi-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                </div>
                <div className="testimonial-user-info">
                  <img
                    className="img-fluid"
                    src={ProfileAvatar01}
                    alt="Post Image"
                  />
                  <div className="testimonial-user">
                    <h6>Christopher Sebastian</h6>
                    <p>USA</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item aos" data-aos="fade-up">
                <div className="testimonial-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <span className="testi-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                </div>
                <div className="testimonial-user-info">
                  <img
                    className="img-fluid"
                    src={ProfileAvatar02}
                    alt="Post Image"
                  />
                  <div className="testimonial-user">
                    <h6>Thomas Warren</h6>
                    <p>New zealand</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-item aos" data-aos="fade-up">
                <div className="testimonial-content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since.
                  </p>
                  <span className="testi-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                </div>
                <div className="testimonial-user-info">
                  <img
                    className="img-fluid"
                    src={ProfileAvatar08}
                    alt="Post Image"
                  />
                  <div className="testimonial-user">
                    <h6>Anjelin Thomas</h6>
                    <p>Chennai, Tamilnadu</p>
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

export default Testimonial2;
