import React from "react";
import { ProfileAvatar06, Testimonial1, Testimonial2 } from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial5 = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  return (
    <section className="testimonial-five-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div
              className="section-heading heading-five aos"
              data-aos="fade-up"
            >
              <h2>Our Customer’s Says</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="silderBotton testi-five-slider">
              <Slider {...settings}>
                <div
                  className="testimonial-info testi-four testi-five aos"
                  data-aos="fade-up"
                >
                  <div className="testimonialslider-content">
                    <span>
                      <i className="fa-solid fa-quote-left"></i>
                    </span>
                    <h6>It was a wonderful experience</h6>
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
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
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-info testi-four testi-five aos"
                  data-aos="fade-up"
                >
                  <div className="testimonialslider-content">
                    <span>
                      <i className="fa-solid fa-quote-left"></i>
                    </span>
                    <h6>It was a very good experience</h6>
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
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
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-info testi-four testi-five aos"
                  data-aos="fade-up"
                >
                  <div className="testimonialslider-content">
                    <span>
                      <i className="fa-solid fa-quote-left"></i>
                    </span>
                    <h6>It was a good experience</h6>
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
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

export default Testimonial5;
