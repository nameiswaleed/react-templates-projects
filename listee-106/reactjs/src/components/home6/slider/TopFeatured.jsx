import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  FeatureCar1,
  FeatureCar2,
  FeatureCar3,
  FeatureCar4,
  ProfileAvatar02,
  ProfileAvatar04,
  ProfileAvatar05,
  ProfileAvatar08,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const TopFeatured = () => {
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
    <div className="car-class-carousel">
      <div >
        <OwlCarousel {...settings} className="car-featured-slider owl-carousel owl-theme">
          <div className="featured-car-item">
            <div className="featured-car-item-list">
              <Link className="featurecar-img" to="/categories">
                <img src={FeatureCar1} alt="" />
              </Link>
              <div className="featured-car-center">
                <div className="featured-car-center-list">
                  <h5>Manufactured</h5>
                  <p>2010</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Total</h5>
                  <p>20000 KM</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Engine</h5>
                  <p>Petrol</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Car Type</h5>
                  <p>Automatic</p>
                </div>
              </div>
              <div className="featured-car-bottom">
                <h6>Coupe</h6>
                <Link to="/categories">
                  <h3>AG MC Ford Raptor</h3>
                </Link>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, aliquid ex commodi minima veniam
                </p>
              </div>
              <div className="featured-car-foot">
                <Link to="/profile">
                  <div className="featured-car-foot-right">
                    <div className="property-profile feature-owner">
                      <img src={ProfileAvatar02} className="img-fluid" alt="" />
                    </div>
                    <p>
                      Dealer : <span>Mic Harzdeni</span>
                    </p>
                  </div>
                </Link>
                <div className="featured-car-foot-left">
                  <span>$25000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-car-item">
            <div className="featured-car-item-list">
              <Link className="featurecar-img" to="/categories">
                <img src={FeatureCar2} alt="" />
              </Link>
              <div className="featured-car-center">
                <div className="featured-car-center-list">
                  <h5>Manufactured</h5>
                  <p>2000</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Total</h5>
                  <p>2040 KM</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Engine</h5>
                  <p>Desiel</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Car Type</h5>
                  <p>Manual</p>
                </div>
              </div>
              <div className="featured-car-bottom">
                <h6>Coupe</h6>
                <Link to="/categories">
                  <h3>Benz G-Class</h3>
                </Link>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, aliquid ex commodi minima veniam
                </p>
              </div>
              <div className="featured-car-foot">
                <Link to="/profile">
                  <div className="featured-car-foot-right">
                    <div className="property-profile feature-owner">
                      <img src={ProfileAvatar04} className="img-fluid" alt="" />
                    </div>
                    <p>
                      Dealer : <span>Rebecca</span>
                    </p>
                  </div>
                </Link>
                <div className="featured-car-foot-left">
                  <span>$43000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-car-item">
            <div className="featured-car-item-list">
              <Link className="featurecar-img" to="/categories">
                <img src={FeatureCar3} alt="" />
              </Link>
              <div className="featured-car-center">
                <div className="featured-car-center-list">
                  <h5>Manufactured</h5>
                  <p>2020</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Total</h5>
                  <p>5000 KM</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Engine</h5>
                  <p>Hybrid</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Car Type</h5>
                  <p>Automatic</p>
                </div>
              </div>
              <div className="featured-car-bottom">
                <h6>Coupe</h6>
                <Link to="/categories">
                  <h3>Toyota Camry</h3>
                </Link>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, aliquid ex commodi minima veniam
                </p>
              </div>
              <div className="featured-car-foot">
                <Link to="/profile">
                  <div className="featured-car-foot-right">
                    <div className="property-profile feature-owner">
                      <img src={ProfileAvatar05} className="img-fluid" alt="" />
                    </div>
                    <p>
                      Dealer : <span>Fernanderz</span>
                    </p>
                  </div>
                </Link>
                <div className="featured-car-foot-left">
                  <span>$81000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-car-item">
            <div className="featured-car-item-list">
              <Link className="featurecar-img" to="/categories">
                <img src={FeatureCar4} alt="" />
              </Link>
              <div className="featured-car-center">
                <div className="featured-car-center-list">
                  <h5>Manufactured</h5>
                  <p>2000</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Total</h5>
                  <p>2040 KM</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Engine</h5>
                  <p>Desiel</p>
                </div>
                <div className="featured-car-center-list">
                  <h5>Car Type</h5>
                  <p>Manual</p>
                </div>
              </div>
              <div className="featured-car-bottom">
                <h6>Coupe</h6>
                <Link to="/categories">
                  <h3>Benz G-Class</h3>
                </Link>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, aliquid ex commodi minima veniam
                </p>
              </div>
              <div className="featured-car-foot">
                <Link to="/profile">
                  <div className="featured-car-foot-right">
                    <div className="property-profile feature-owner">
                      <img src={ProfileAvatar08} className="img-fluid" alt="" />
                    </div>
                    <p>
                      Dealer : <span>Rebecca</span>
                    </p>
                  </div>
                </Link>
                <div className="featured-car-foot-left">
                  <span>$43000</span>
                </div>
              </div>
            </div>
          </div>
          </OwlCarousel>
      </div>
    </div>
  );
};

export default TopFeatured;
