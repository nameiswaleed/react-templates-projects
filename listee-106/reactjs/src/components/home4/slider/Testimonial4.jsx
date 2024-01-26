import React, { useRef } from "react";
import {
  ProfileAvatar06,
  SpaceImg,
  Testimonial1,
  Testimonial2,
} from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial4 = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  const slider = useRef();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="section-heading heading-four aos" data-aos="fade-up">
            <h2>People Talking About Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
        <div className="col-md-4 text-md-end aos" data-aos="fade-up">
          <div className="interset-btn">
            <div className="owl-nav mynav1">
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
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Slider
            {...settings}
            ref={slider}
            className=" testi-slider"
          >
            <div className="testimonial-info testi-four aos" data-aos="fade-up">
              <div className="testimonialslider-content">
                <span>
                  <i className="fa-solid fa-quote-left"></i>
                </span>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6>It was a wonderful experience</h6>
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={Testimonial1}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Dev</h6>
                  <p>Lead Intranet Technician</p>
                </div>
              </div>
            </div>
            <div className="testimonial-info testi-four aos" data-aos="fade-up">
              <div className="testimonialslider-content">
                <span>
                  <i className="fa-solid fa-quote-left"></i>
                </span>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6>It was a very good experience</h6>
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={Testimonial2}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Esther Hills</h6>
                  <p>Lead Intranet Technician</p>
                </div>
              </div>
            </div>
            <div className="testimonial-info testi-four aos" data-aos="fade-up">
              <div className="testimonialslider-content">
                <span>
                  <i className="fa-solid fa-quote-left"></i>
                </span>
                <div className="rating">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6>It was a good experience</h6>
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={ProfileAvatar06}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Hannah Schmitt</h6>
                  <p>Intranet Technician</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial4;
