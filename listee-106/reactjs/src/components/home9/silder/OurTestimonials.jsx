import React from "react";
import { ProfileAvatar01, ProfileAvatar02, ProfileAvatar03 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";





const OurTestimonials=()=>{
    const settings = {
        // autoWidth: true,
        items: 2,
        margin: 25,
        dots:true ,
        nav:false ,
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
        <div
              
              
            >
                <OwlCarousel {...settings} className="verified-owner-slider owl-carousel" data-aos="fade-up">
              <div className="property-testimonial-item">
                <h5 className="mb-0">Really Awesome</h5>
                <div className="car-client-rating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has{" "}
                </p>
                <div className="property-profile-block">
                  <div className="property-profile">
                    <Link to="/profile">
                      <img
                        src={ProfileAvatar01}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="property-client-details">
                    <Link to="/profile">Thompson Greig</Link>
                    <span>Agent</span>
                  </div>
                </div>
              </div>
              <div className="property-testimonial-item">
                <h5 className="mb-0">Really Awesome</h5>
                <div className="car-client-rating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has{" "}
                </p>
                <div className="property-profile-block">
                  <div className="property-profile">
                    <Link to="/profile">
                      <img
                        src={ProfileAvatar02}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="property-client-details">
                    <Link to="/profile">Lori triump</Link>
                    <span>Agent</span>
                  </div>
                </div>
              </div>
              <div className="property-testimonial-item">
                <h5 className="mb-0">Really Awesome</h5>
                <div className="car-client-rating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has{" "}
                </p>
                <div className="property-profile-block">
                  <div className="property-profile">
                    <Link to="/profile">
                      <img
                        src={ProfileAvatar03}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="property-client-details">
                    <Link to="/profile">Angela Mathew</Link>
                    <span>Agent</span>
                  </div>
                </div>
              </div>
              <div className="property-testimonial-item">
                <h5 className="mb-0">Really Awesome</h5>
                <div className="car-client-rating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has{" "}
                </p>
                <div className="property-profile-block">
                  <div className="property-profile">
                    <Link to="/profile">
                      <img
                        src={ProfileAvatar03}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="property-client-details">
                    <Link to="/profile">Angela Mathew</Link>
                    <span>Agent</span>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            </div>
        </>
    );
}
export default OurTestimonials;