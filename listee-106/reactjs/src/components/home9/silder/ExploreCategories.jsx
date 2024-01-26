import React from "react";
import { best_room_img_1, best_room_img_2, best_room_img_3, best_room_img_4 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";



const ExploreCategories=()=>{
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
                items: 4,
            },
        },
    };
    return(
        <>
         <div
              
              data-aos="fade-right"
            >
                <OwlCarousel {...settings} className="best-places-rent-slider owl-carousel owl-theme">
              <div className="best-room">
                <div className="best-room-img">
                  <Link to="/listing-list-sidebar">
                    <img
                      src={best_room_img_1}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/listing-list-sidebar">
                  <div className="best-room-type">
                    <h5>Shared Rooms</h5>
                    <span>40 Listings</span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </Link>
              </div>
              <div className="best-room">
                <div className="best-room-img">
                  <Link to="/listing-list-sidebar">
                    <img
                      src={best_room_img_2}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/listing-list-sidebar">
                  <div className="best-room-type">
                    <h5>Bed Room</h5>
                    <span>30 Listings</span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </Link>
              </div>
              <div className="best-room">
                <div className="best-room-img">
                  <Link to="/listing-list-sidebar">
                    <img
                      src={best_room_img_3}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/listing-list-sidebar">
                  <div className="best-room-type">
                    <h5>Villas</h5>
                    <span>50 Listings</span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </Link>
              </div>
              <div className="best-room">
                <div className="best-room-img">
                  <Link to="/listing-list-sidebar">
                    <img
                      src={best_room_img_4}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/listing-list-sidebar">
                  <div className="best-room-type">
                    <h5>Condos</h5>
                    <span>45 Listings</span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </Link>
              </div>
              <div className="best-room">
                <div className="best-room-img">
                  <Link to="/listing-list-sidebar">
                    <img
                      src={best_room_img_1}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/listing-list-sidebar">
                  <div className="best-room-type">
                    <h5>Shared Rooms</h5>
                    <span>40 Listings</span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </Link>
              </div>
              <div className="best-room">
                <div className="best-room-img">
                  <Link to="/listing-list-sidebar">
                    <img
                      src={best_room_img_2}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <Link to="/listing-list-sidebar">
                  <div className="best-room-type">
                    <h5>Bed Room</h5>
                    <span>30 Listings</span>
                    <i className="fa-solid fa-arrow-right-long" />
                  </div>
                </Link>
              </div>
              </OwlCarousel>
            </div>
        </>
    );
}
export default ExploreCategories;