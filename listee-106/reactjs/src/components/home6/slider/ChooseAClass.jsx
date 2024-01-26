import React from "react";
import {
  CarClass1,
  CarClass2,
  CarClass3,
  CarClass4,
  CarClass5,
  CarClass6,
  TitleSvg,
} from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

const ChooseAClass = () => {
  const settings = {
    // autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: false,
    navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1170: {
            items: 3,
        },
    },
};
  return (
    <section className="choose-car-class-section common-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-six-heading-section aos" data-aos="fade-up">
              <div className="home-six-title d-flex justify-content-center align-items-center">
                <h2>Choose a Class</h2>
                <img src={TitleSvg} alt="" />
              </div>
              <p>
                Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                diamlorem malesu, vitae mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="car-class-carousel">
              <div >
              <OwlCarousel {...settings} className="car-class-slider owl-carousel owl-theme">
                  <div className="car-class-item-block aos" data-aos="fade-up">
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Suv</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass1} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Sports</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass4} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="car-class-item-block aos"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Coupe</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass2} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Sedan</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass5} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="car-class-item-block  aos"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Luxury</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass3} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Vip Cars</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass6} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="car-class-item-block">
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Suv</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass1} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Sports</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass4} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="car-class-item-block">
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Coupe</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass2} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="car-class-item">
                      <Link to="/categories">
                        <div className="car-class-list">
                          <div className="car-class-title d-flex justify-content-between">
                            <h5>Sedan</h5>
                            <span>30 Cars Available</span>
                          </div>
                          <img src={CarClass5} className="img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAClass;
