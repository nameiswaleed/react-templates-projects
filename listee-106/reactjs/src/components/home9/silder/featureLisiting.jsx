import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ProfileAvatar01, ProfileAvatar02, ProfileAvatar04, area_icon, bath_icon, bed_icon, feature_text_logo, property_feature_1, property_feature_2, property_feature_3 } from "../../imagepath";
import { Link } from "react-router-dom";



const FeatureLisiting=()=>{
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
    return(
        <>
        <div >
        <OwlCarousel {...settings} className="real-featured-listing owl-carousel owl-theme">
              <div className="feature-rent">
                <div className="feature-home-img">
                  <Link to="/listingmap-list">
                    <img
                      src={property_feature_1}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="green-logo">
                  <img
                    src={feature_text_logo}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="select-favourite-room">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar01}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <i className="fa-solid fa-heart" />
                </div>
                <div className="house-location">
                  <span>$700/m</span>
                  <p>
                    <i className="feather-map-pin" />
                    Sydney CBD, NSW
                  </p>
                </div>
                <div className="home-img-text">
                  <div className="star-rated">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <span>2.8</span>
                  </div>
                  <h3>
                    <Link to="/listingmap-list">
                      MS Northbound, Peachfield Road, Uk
                    </Link>
                  </h3>
                  <div className="top-room-details">
                    <div className="area">
                      <span>
                        <img
                          src={area_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Area:56000/m2
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bed_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Beds:3
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bath_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Baths:2
                      </span>
                    </div>
                  </div>
                  <div className="house-type">
                    <span className="room-type">
                      <i className="feather-home" />
                      Apartments
                    </span>
                    <span className="double-tick">
                      <i className="fa-solid fa-check-double" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-rent">
                <div className="feature-home-img">
                  <Link to="/listingmap-list">
                    <img
                      src={property_feature_2}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="green-logo">
                  <img
                    src={feature_text_logo}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="select-favourite-room">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar02}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <i className="fa-solid fa-heart" />
                </div>
                <div className="house-location">
                  <span>$510/m</span>
                  <p>
                    <i className="feather-map-pin" />
                    Sydney CBD, NSW
                  </p>
                </div>
                <div className="home-img-text">
                  <div className="star-rated">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <span>2.8</span>
                  </div>
                  <h3>
                    <Link to="/listingmap-list">
                      Iris Watson, Frederick Nebraska 20620
                    </Link>
                  </h3>
                  <div className="top-room-details">
                    <div className="area">
                      <span>
                        <img
                          src={area_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Area:56000/m2
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bed_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Beds:3
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bath_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Baths:2
                      </span>
                    </div>
                  </div>
                  <div className="house-type">
                    <span className="room-type">
                      <i className="feather-home" />
                      Condos
                    </span>
                    <span className="double-tick">
                      <i className="fa-solid fa-check-double" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-rent">
                <div className="feature-home-img">
                  <Link to="/listingmap-list">
                    <img
                      src={property_feature_3}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="green-logo">
                  <img
                    src={feature_text_logo}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="select-favourite-room">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar02}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <i className="fa-solid fa-heart" />
                </div>
                <div className="house-location">
                  <span>$600/m</span>
                  <p>
                    <i className="feather-map-pin" />
                    Sydney CBD, NSW
                  </p>
                </div>
                <div className="home-img-text">
                  <div className="star-rated">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <span>2.8</span>
                  </div>
                  <h3>
                    <Link to="/listingmap-list">
                      Store in Woodside Park, New York
                    </Link>
                  </h3>
                  <div className="top-room-details">
                    <div className="area">
                      <span>
                        <img
                          src={area_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Area:56000/m2
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bed_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Beds:3
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bath_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Baths:2
                      </span>
                    </div>
                  </div>
                  <div className="house-type">
                    <span className="room-type">
                      <i className="feather-home" />
                      Apartments
                    </span>
                    <span className="double-tick">
                      <i className="fa-solid fa-check-double" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-rent">
                <div className="feature-home-img">
                  <Link to="/listingmap-list">
                    <img
                      src={property_feature_2}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="green-logo">
                  <img
                    src={feature_text_logo}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="select-favourite-room">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar04}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <i className="fa-solid fa-heart" />
                </div>
                <div className="house-location">
                  <span>$510/m</span>
                  <p>
                    <i className="feather-map-pin" />
                    Sydney CBD, NSW
                  </p>
                </div>
                <div className="home-img-text">
                  <div className="star-rated">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <span>2.8</span>
                  </div>
                  <h3>
                    <Link to="/listingmap-list">
                      Iris Watson, Frederick Nebraska 20620
                    </Link>
                  </h3>
                  <div className="top-room-details">
                    <div className="area">
                      <span>
                        <img
                          src={area_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Area:56000/m2
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bed_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Beds:3
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bath_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Baths:2
                      </span>
                    </div>
                  </div>
                  <div className="house-type">
                    <span className="room-type">
                      <i className="feather-home" />
                      Condos
                    </span>
                    <span className="double-tick">
                      <i className="fa-solid fa-check-double" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="feature-rent">
                <div className="feature-home-img">
                  <Link to="/listingmap-list">
                    <img
                      src={property_feature_1}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="green-logo">
                  <img
                    src={feature_text_logo}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="select-favourite-room">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar01}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <i className="fa-solid fa-heart" />
                </div>
                <div className="house-location">
                  <span>$700/m</span>
                  <p>
                    <i className="feather-map-pin" />
                    Sydney CBD, NSW
                  </p>
                </div>
                <div className="home-img-text">
                  <div className="star-rated">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <span>2.8</span>
                  </div>
                  <h3>
                    <Link to="/listingmap-list">
                      MS Northbound, Peachfield Road, Uk
                    </Link>
                  </h3>
                  <div className="top-room-details">
                    <div className="area">
                      <span>
                        <img
                          src={area_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Area:56000/m2
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bed_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Beds:3
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={bath_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Baths:2
                      </span>
                    </div>
                  </div>
                  <div className="house-type">
                    <span className="room-type">
                      <i className="feather-home" />
                      Apartments
                    </span>
                    <span className="double-tick">
                      <i className="fa-solid fa-check-double" />
                    </span>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            </div>
        </>
    );
}
export default FeatureLisiting;