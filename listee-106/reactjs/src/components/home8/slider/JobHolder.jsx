import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ProfileAvatar01, ProfileAvatar02, ProfileAvatar03, ProfileAvatar04 } from "../../imagepath";



const JobHolder=()=>{
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
        <OwlCarousel {...settings} className="job-slider owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item cloned">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar02}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Kirsten</h4>
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar03}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Alfred</h4>
                    <p>Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar04}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Kirsten</h4>
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="owl-item active">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar01}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Mike Torello</h4>
                    <p>Mexico</p>
                  </div>
                </div>
              </div>
              <div className="owl-item active">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar02}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Kirsten</h4>
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="owl-item active">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar03}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Alfred</h4>
                    <p>Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="owl-item">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar04}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Kirsten</h4>
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar01}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Mike Torello</h4>
                    <p>Mexico</p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar02}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Kirsten</h4>
                    <p>Marketing Manager</p>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned">
                <div
                  className="testi-widget-eight aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="test-details">
                    <div className="icon-blk">
                      <img
                        src={ProfileAvatar03}
                        alt="Dreamstrip Testimonials"
                      />
                    </div>
                  </div>
                  <div className="testi-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nibh eu aliquam consequat morbi leo. Pharetra lacus vitae
                      nisl porttitor duis. In et velit turpis nisl vulputate in
                      nunc, habitant eget. Dui
                    </p>
                  </div>
                  <div className="testi-location">
                    <h4>Alfred</h4>
                    <p>Graphic Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          </OwlCarousel>
        </div>
        </>
    );
}
export default JobHolder;