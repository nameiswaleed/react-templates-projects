import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  TitleSvg,
  TrendingCar1,
  TrendingCar2,
  TrendingCar3,
  TrendingCar4,
  TrendingCar5,
} from "../../imagepath";
import { Link } from "react-router-dom";

const Trending6 = () => {
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
            items: 5,
        },
    },
};
  return (
    <section className="home-six-trending-search common-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-six-heading-section aos" data-aos="fade-up">
              <div className="home-six-title d-flex justify-content-center align-items-center">
                <h2>Trending Search</h2>
                <img src={TitleSvg} alt="" />
              </div>
              <p>
                Rutrum ante tempus mauris facilisi, leo faucibus, egestas
                diamlorem malesu, vitae mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="trending-carousel">
              <div className="trending-carousel-button">
              <OwlCarousel {...settings} className="trending-slider owl-carousel owl-theme">
                  <div className="trending-slider-item aos" data-aos="fade-up">
                    <Link to="/categories">
                      <img src={TrendingCar1} alt="" />
                      <span>Used Cars price from $20,000</span>
                    </Link>
                  </div>
                  <div
                    className="trending-slider-item aos"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <Link to="/categories">
                      <img src={TrendingCar2} alt="" />
                      <span>Low Mileage Pickup Trucks</span>
                    </Link>
                  </div>
                  <div
                    className="trending-slider-item aos"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <Link to="/categories">
                      <img src={TrendingCar3} alt="" />
                      <span>Family Cars from $10,000</span>
                    </Link>
                  </div>
                  <div
                    className="trending-slider-item aos"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <Link to="/categories">
                      <img src={TrendingCar4} alt="" />
                      <span>Cars price more than $5,000</span>
                    </Link>
                  </div>
                  <div
                    className="trending-slider-item aos"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <Link to="/categories">
                      <img src={TrendingCar5} alt="" />
                      <span>Family Cars from $10,000</span>
                    </Link>
                  </div>
                  <div
                    className="trending-slider-item aos"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <Link to="/categories">
                      <img src={TrendingCar2} alt="" />
                      <span>Low Mileage Pickup Trucks</span>
                    </Link>
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

export default Trending6;
