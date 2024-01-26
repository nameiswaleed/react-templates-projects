import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ProfileAvatar02 } from "../../imagepath";
import { top_rent_room_img_1 } from "../../imagepath";
import { area_icon } from "../../imagepath";
import { bed_icon } from "../../imagepath";
import { bath_icon } from "../../imagepath";
import { floor_icon } from "../../imagepath";
import { guest_icon } from "../../imagepath";
import { top_rent_room_img_2 } from "../../imagepath";
import { ProfileAvatar05 } from "../../imagepath";
import { ProfileAvatar06 } from "../../imagepath";
import { Link } from "react-router-dom";




const RentProperties=()=>{
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
            items: 1,
        },
        1170: {
            items: 2,
        },
    },
};
    return(
        <>
        <div
              
              data-aos="fade-right"
            >
              <OwlCarousel {...settings} className="top-listings-rent-slider owl-carousel">
              <div className="top-rent-room">
                <div className="top-room-img">
                  <Link to="/categories">
                    <img
                      src={top_rent_room_img_1}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="top-listing-rounded-img">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar02}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pent-house">
                  <span>Pent house</span>
                </div>
                <div className="top-rent-room-info">
                  <div className="top-rent-room-location">
                    <div className="room-address">
                      <span>
                        <i className="fa-solid fa-location-dot" />
                        Mattapan, Boston
                      </span>
                      <Link to="/categories">
                        <h5>South King Royal Palace </h5>
                      </Link>
                    </div>
                    <div className="star-rated">
                      <span>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </span>
                      <p>
                        <span>$600 </span>Per day
                      </p>
                    </div>
                  </div>
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
                    <div className="area">
                      <span>
                        <img
                          src={floor_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Floors:4
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={guest_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Guest:4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-rent-room">
                <div className="top-room-img">
                  <Link to="/categories">
                    <img
                      src={top_rent_room_img_2}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="top-listing-rounded-img">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar02}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pent-house">
                  <span>Pent house</span>
                </div>
                <div className="top-rent-room-info">
                  <div className="top-rent-room-location">
                    <div className="room-address">
                      <span>
                        <i className="fa-solid fa-location-dot" />
                        East Side, New York
                      </span>
                      <Link to="/categories">
                        <h5>Victorian Bed &amp; Breakfast</h5>
                      </Link>
                    </div>
                    <div className="star-rated">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <p>
                        <span>$600 </span>Per day
                      </p>
                    </div>
                  </div>
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
                    <div className="area">
                      <span>
                        <img
                          src={floor_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Floors:4
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={guest_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Guest:4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-rent-room">
                <div className="top-room-img">
                  <Link to="/categories">
                    <img
                      src={top_rent_room_img_1}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="top-listing-rounded-img">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar05}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pent-house">
                  <span>Pent house</span>
                </div>
                <div className="top-rent-room-info">
                  <div className="top-rent-room-location">
                    <div className="room-address">
                      <span>
                        <i className="fa-solid fa-location-dot" />
                        Mattapan, Boston
                      </span>
                      <Link to="/categories">
                        <h5>South King Royal Palace </h5>
                      </Link>
                    </div>
                    <div className="star-rated">
                      <span>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </span>
                      <p>
                        <span>$600 </span>Per day
                      </p>
                    </div>
                  </div>
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
                    <div className="area">
                      <span>
                        <img
                          src={floor_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Floors:4
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={guest_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Guest:4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-rent-room">
                <div className="top-room-img">
                  <Link to="/categories">
                    <img
                      src={top_rent_room_img_2}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="top-listing-rounded-img">
                  <div className="favourite-small-user">
                    <img
                      src={ProfileAvatar06}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pent-house">
                  <span>Pent house</span>
                </div>
                <div className="top-rent-room-info">
                  <div className="top-rent-room-location">
                    <div className="room-address">
                      <span>
                        <i className="fa-solid fa-location-dot" />
                        East Side, New York
                      </span>
                      <Link to="/categories">
                        <h5>Victorian Bed &amp; Breakfast</h5>
                      </Link>
                    </div>
                    <div className="star-rated">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <p>
                        <span>$600 </span>Per day
                      </p>
                    </div>
                  </div>
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
                    <div className="area">
                      <span>
                        <img
                          src={floor_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Floors:4
                      </span>
                    </div>
                    <div className="area">
                      <span>
                        <img
                          src={guest_icon}
                          className="img-fluid"
                          alt=""
                        />
                        Guest:4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            </div>
        </>
    );
}
export default RentProperties;