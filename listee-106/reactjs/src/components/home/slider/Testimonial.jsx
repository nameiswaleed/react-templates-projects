import React, { useRef } from "react";
import { Quotes, Testimonial1, Testimonial2 } from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonial() {
  const slider = useRef();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // lazyLoad: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials-section">
      <div className="row">
        <div className="col-lg-5">
          <div className="testimonial-heading d-flex l70">
            <h4>
              {" "}
              Client <br /> Testimonials
            </h4>
            <img src={Quotes} alt="quotes" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="rightimg"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="testimonials-slidersection">
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
            <div className=" testi-slider">
              <Slider ref={slider} {...settings}>
                <div className="testimonial-info">
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
                  <div className="testimonialslider-content">
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
                    </p>
                  </div>
                </div>
                <div className="testimonial-info">
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
                  <div className="testimonialslider-content">
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
                    </p>
                  </div>
                </div>
                <div className="testimonial-info">
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
                  <div className="testimonialslider-content">
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
                    </p>
                  </div>
                </div>
                <div className="testimonial-info">
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
                  <div className="testimonialslider-content">
                    <p>
                      Omnis totam molestiae delectus nemo alias nesciunt harum
                      et. Nobis dolorum excepturi quod vel. Sunt est qui ab non
                      dolores repellat rem impedit dolores. Ut ea rerum cum eum.
                      Alias dolores tempore illo accusantium est et voluptatem
                      voluptas
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
