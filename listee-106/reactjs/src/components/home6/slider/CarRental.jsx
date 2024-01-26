import React from "react";
// import Slider from "react-slick";
import { CarRental1, CarRental2 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

const CarRental = () => {
  const settings = {
    // autoWidth: true,
    items: 2,
    margin: 25,
    dots: false,
    nav: true,
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
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  return (
    <div className="carrental">
      <OwlCarousel {...settings} >
        <div className="car-rental-slider-item">
          <img
            src={CarRental1}
            className="img-fluid"
            alt=""
          />
          <div className="container">
            <div className="car-rental-carousel-content">
              <h6>Limited Edition</h6>
              <h3 className=" aos" data-aos="fade-up" data-aos-delay={200}>
                2021 Jaguar XF facelift
              </h3>
              <h5 className=" aos" data-aos="fade-up" data-aos-delay={300}>
                <span>$400</span>/ Month
              </h5>
              <p className=" aos" data-aos="fade-up" data-aos-delay={400}>
                $0 First payment paid by jaquar up to $325.
                <br />
                taxes, title and fees extra
              </p>
              <Link to="/contact">Test Drive</Link>
            </div>
          </div>
        </div>
        <div className="car-rental-slider-item">
          <img
            src={CarRental2}
            className="img-fluid"
            alt=""
          />
          <div className="container">
            <div className="car-rental-carousel-content">
              <h6>Limited Edition</h6>
              <h3>2021 Audi RS7</h3>
              <h5>
                <span>$450</span>/ Month
              </h5>
              <p>
                $0 First payment paid by jaquar up to $453.
                <br />
                taxes, title and fees extra
              </p>
              <Link to="/signup">Test Drive</Link>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>

  );
};

export default CarRental;
