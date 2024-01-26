import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TitelImg, Venue01, Venue02, Venue03 } from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const WeddingVenues = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <section className="venue-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading-two text-center">
              <p>Look at this</p>
              <h2>Wedding Venues</h2>
              <img src={TitelImg} className="img-fluid" alt="title-img" />
            </div>
            <Slider {...settings} className=" venue-slider">
              <div className="venue-item aos" data-aos="fade-up">
                <div className="venue-image">
                  <Link to="/service-details">
                    <img className="img-fluid" src={Venue01} alt="Image" />
                  </Link>
                </div>
                <div className="venue-content">
                  <h3>
                    <Link to="/service-details">
                      Wedding Palace Grand Resort
                    </Link>
                  </h3>
                  <p>
                    <i className="feather-map-pin"></i> NSW, Australia
                  </p>
                  <div className="price-review">
                    <h6>
                      <span>
                        <i className="fa-solid fa-star"></i> 4.9
                      </span>
                      (2,012 Reviews)
                    </h6>
                    <p>$620</p>
                  </div>
                  <ul>
                    <li>
                      <span>
                        <i className="feather-user"></i>
                      </span>
                      <p>600 Guests</p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-mug-hot"></i>
                      </span>
                      <p>Pure Veg</p>
                    </li>
                    <li>
                      <span>
                        <i className="feather-home"></i>
                      </span>
                      <p>10+ Rooms</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="venue-item aos" data-aos="fade-up">
                <div className="venue-image">
                  <Link to="/service-details">
                    <img className="img-fluid" src={Venue02} alt="Image" />
                  </Link>
                </div>
                <div className="venue-content">
                  <h3>
                    <Link to="/service-details">Wedding Hall Banquet</Link>
                  </h3>
                  <p>
                    <i className="feather-map-pin"></i> Texas, USA
                  </p>
                  <div className="price-review">
                    <h6>
                      <span>
                        <i className="fa-solid fa-star"></i> 4.8
                      </span>
                      (1,612 Reviews)
                    </h6>
                    <p>$700</p>
                  </div>
                  <ul>
                    <li>
                      <span>
                        <i className="feather-user"></i>
                      </span>
                      <p>800 Guests</p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-mug-hot"></i>
                      </span>
                      <p>Dinner</p>
                    </li>
                    <li>
                      <span>
                        <i className="feather-home"></i>
                      </span>
                      <p>20+ Rooms</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="venue-item aos" data-aos="fade-up">
                <div className="venue-image">
                  <Link to="/service-details">
                    <img className="img-fluid" src={Venue03} alt="Image" />
                  </Link>
                </div>
                <div className="venue-content">
                  <h3>
                    <Link to="/service-details">
                      Wedding Ceremony Decorations
                    </Link>
                  </h3>
                  <p>
                    <i className="feather-map-pin"></i> Johor, Malaysia
                  </p>
                  <div className="price-review">
                    <h6>
                      <span>
                        <i className="fa-solid fa-star"></i> 4.9
                      </span>
                      (2,500 Reviews)
                    </h6>
                    <p>$720</p>
                  </div>
                  <ul>
                    <li>
                      <span>
                        <i className="feather-user"></i>
                      </span>
                      <p>600 Guests</p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-mug-hot"></i>
                      </span>
                      <p>Pure Veg</p>
                    </li>
                    <li>
                      <span>
                        <i className="feather-home"></i>
                      </span>
                      <p>10+ Rooms</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="venue-item aos" data-aos="fade-up">
                <div className="venue-image">
                  <Link to="/service-details">
                    <img className="img-fluid" src={Venue02} alt="Image" />
                  </Link>
                </div>
                <div className="venue-content">
                  <h3>
                    <Link to="/service-details">
                      Wedding Resort Near Beach
                    </Link>
                  </h3>
                  <p>
                    <i className="feather-map-pin"></i> Middlesex, UK
                  </p>
                  <div className="price-review">
                    <h6>
                      <span>
                        <i className="fa-solid fa-star"></i> 4.9
                      </span>
                      (1,512 Reviews)
                    </h6>
                    <p>$750</p>
                  </div>
                  <ul>
                    <li>
                      <span>
                        <i className="feather-user"></i>
                      </span>
                      <p>500 Guests</p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-mug-hot"></i>
                      </span>
                      <p>Pure Veg</p>
                    </li>
                    <li>
                      <span>
                        <i className="feather-home"></i>
                      </span>
                      <p>12+ Rooms</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingVenues;
