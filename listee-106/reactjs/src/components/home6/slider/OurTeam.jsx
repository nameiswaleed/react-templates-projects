import React from "react";
// import Slider from "react-slick";
import { business_team_1, business_team_2, business_team_3, business_team_4, business_team_5 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

const OurTeam = () => {
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
    <>
      <div >
        <OwlCarousel {...settings} className="our-team-car-slider owl-carousel owl-theme">
          <div className="our-team-block">
            <div className="our-team-img">
              <Link to="/profile">
                <img
                  src={business_team_1}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="our-team-bottom">
              <Link to="/profile">
                <h4>Joana Dewel</h4>
              </Link>
              <p>Car Dealer</p>
            </div>
          </div>
          <div className="our-team-block">
            <div className="our-team-img">
              <Link to="/profile">
                <img
                  src={business_team_2}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="our-team-bottom">
              <Link to="/profile">
                <h4>Mark Antonio</h4>
              </Link>
              <p>Car Dealer</p>
            </div>
          </div>
          <div className="our-team-block">
            <div className="our-team-img">
              <Link to="/profile">
                <img
                  src={business_team_3}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="our-team-bottom">
              <Link to="/profile">
                <h4>Alexander Rebel</h4>
              </Link>
              <p>Car Dealer</p>
            </div>
          </div>
          <div className="our-team-block">
            <div className="our-team-img">
              <Link to="/profile">
                <img
                  src={business_team_4}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="our-team-bottom">
              <Link to="/profile">
                <h4>Richerd Dewel</h4>
              </Link>
              <p>Car Dealer</p>
            </div>
          </div>
          <div className="our-team-block">
            <div className="our-team-img">
              <Link to="/profile">
                <img
                  src={business_team_5}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="our-team-bottom">
              <Link to="/profile">
                <h4>John Dew</h4>
              </Link>
              <p>Car Dealer</p>
            </div>
          </div>
        </OwlCarousel>
      </div>

    </>
  );
};

export default OurTeam;
