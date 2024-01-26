import React from "react";
import { area_icon, bed_icon, floor_icon, guest_icon, holiday_cabin_slider, holiday_cabin_slider_2 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const HolidayCabin = () => {
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
    <>
      <div >
        <OwlCarousel {...settings} className="holiday-cabin-img-slider owl-carousel">
          <div className="item">
            <img
              src={holiday_cabin_slider}
              className="img-fluid"
              alt=""
            />
            <div className="container">
              <div className="holiday-cabin-info" data-aos="fade-up">
                <div className="rate-per-day">
                  <span>$64</span>
                  <h6>Per night</h6>
                </div>
                <div className="section-heading">
                  <h2>Perfect Holiday Cabin</h2>
                  <p>
                    Spectacular Condo In Summerlin! View of Spring Mountains and
                    Charleston Peak!!! 1 Bedrooms, Private Bathroom and a Queen Size
                    Vertical Wall Bed. Fireplace, Kitchen, Dishwasher and Microwave
                    , Open And Spacious Floorplan! Great Summerlin Location!
                  </p>
                </div>
                <div className="room-categories">
                  <span>
                    <img
                      src={area_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Area:56000/m2
                  </span>
                  <span>
                    <img
                      src={bed_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Beds:3
                  </span>
                  <span>
                    <img
                      src={floor_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Floors:4
                  </span>
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
          <div className="item">
            <img
              src={holiday_cabin_slider_2}
              className="img-fluid"
              alt=""
            />
            <div className="container">
              <div className="holiday-cabin-info">
                <div className="rate-per-day">
                  <span>$64</span>
                  <h6>Per night</h6>
                </div>
                <div className="section-heading">
                  <h2>Perfect Holiday Cabin</h2>
                  <p>
                    Spectacular Condo In Summerlin! View of Spring Mountains and
                    Charleston Peak!!! 1 Bedrooms, Private Bathroom and a Queen Size
                    Vertical Wall Bed. Fireplace, Kitchen, Dishwasher and Microwave
                    , Open And Spacious Floorplan! Great Summerlin Location!
                  </p>
                </div>
                <div className="room-categories">
                  <span>
                    <img
                      src={area_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Area:56000/m2
                  </span>
                  <span>
                    <img
                      src={bed_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Beds:3
                  </span>
                  <span>
                    <img
                      src={floor_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Floors:4
                  </span>
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
          <div className="item">
            <img
              src={holiday_cabin_slider}
              className="img-fluid"
              alt=""
            />
            <div className="container">
              <div className="holiday-cabin-info">
                <div className="rate-per-day">
                  <span>$64</span>
                  <h6>Per night</h6>
                </div>
                <div className="section-heading">
                  <h2>Perfect Holiday Cabin</h2>
                  <p>
                    Spectacular Condo In Summerlin! View of Spring Mountains and
                    Charleston Peak!!! 1 Bedrooms, Private Bathroom and a Queen Size
                    Vertical Wall Bed. Fireplace, Kitchen, Dishwasher and Microwave
                    , Open And Spacious Floorplan! Great Summerlin Location!
                  </p>
                </div>
                <div className="room-categories">
                  <span>
                    <img
                      src={area_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Area:56000/m2
                  </span>
                  <span>
                    <img
                      src={bed_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Beds:3
                  </span>
                  <span>
                    <img
                      src={floor_icon}
                      className="img-fluid"
                      alt=""
                    />
                    Floors:4
                  </span>
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
export default HolidayCabin;