import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ProfileAvatar01, ProfileAvatar02, ProfileAvatar03, ProfileAvatar04 } from "../../imagepath";



const BiggestClients=()=>{
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
        <div >
            <OwlCarousel {...settings} className="test-slider owl-carousel owl-theme">
          <div className="testi-widget-seven aos" data-aos="fade-up">
            <div className="test-details">
              <div className="icon-blk">
                <img
                  src={ProfileAvatar01}
                  alt="Dreamstrip Testimonials"
                />
              </div>
              <div className="people-name">
                <h5>Lisa</h5>
                <div className="review">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="testi-content">
              <h5>Great Services!!!</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu
                aliquam consequat morbi leo. Pharetra lacus vitae nisl porttitor
                duis. In et velit turpis nisl vulputate in nunc, habitant eget.
                Dui
              </p>
            </div>
            <div className="testi-location">
              <h6>Radon Restaurant</h6>
              <p>
                <i className="feather-map-pin" /> London
              </p>
            </div>
          </div>
          <div className="testi-widget-seven aos" data-aos="fade-up">
            <div className="test-details">
              <div className="icon-blk">
                <img
                  src={ProfileAvatar02}
                  alt="Dreamstrip Testimonials"
                />
              </div>
              <div className="people-name">
                <h5>John Doe</h5>
                <div className="review">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="testi-content">
              <h5>Good !!!</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu
                aliquam consequat morbi leo. Pharetra lacus vitae nisl porttitor
                duis. In et velit turpis nisl vulputate in nunc, habitant eget.
                Dui
              </p>
            </div>
            <div className="testi-location">
              <h6>Food Trucks</h6>
              <p>
                <i className="feather-map-pin" /> Mexico
              </p>
            </div>
          </div>
          <div className="testi-widget-seven aos" data-aos="fade-up">
            <div className="test-details">
              <div className="icon-blk">
                <img
                  src={ProfileAvatar03}
                  alt="Dreamstrip Testimonials"
                />
              </div>
              <div className="people-name">
                <h5>William</h5>
                <div className="review">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="testi-content">
              <h5>Nice !!!</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu
                aliquam consequat morbi leo. Pharetra lacus vitae nisl porttitor
                duis. In et velit turpis nisl vulputate in nunc, habitant eget.
                Dui
              </p>
            </div>
            <div className="testi-location">
              <h6>Pop-up Restaurants</h6>
              <p>
                <i className="feather-map-pin" /> Canada
              </p>
            </div>
          </div>
          <div className="testi-widget-seven aos" data-aos="fade-up">
            <div className="test-details">
              <div className="icon-blk">
                <img
                  src={ProfileAvatar04}
                  alt="Dreamstrip Testimonials"
                />
              </div>
              <div className="people-name">
                <h5>Lisa</h5>
                <div className="review">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            <div className="testi-content">
              <h5>Wonderful!!!</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eu
                aliquam consequat morbi leo. Pharetra lacus vitae nisl porttitor
                duis. In et velit turpis nisl vulputate in nunc, habitant eget.
                Dui
              </p>
            </div>
            <div className="testi-location">
              <h6>Fine Dining Restaurant</h6>
              <p>
                <i className="feather-map-pin" /> Australia
              </p>
            </div>
          </div>
          </OwlCarousel>
        </div>
    );
}
export default BiggestClients;