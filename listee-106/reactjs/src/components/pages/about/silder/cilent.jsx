import React from "react";
import { Testimonial1, Testimonial2 } from "../../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const Cilent=()=>{
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
            items: 2,
          },
        },
      };
    return(
        <>
        <div >
        <OwlCarousel {...settings} className="owl-carousel testi-slider">
            <div className="testimonial-info">
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={Testimonial1}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Dev</h6>
                  <p>Lead Intranet Technician</p>
                </div>
              </div>
              <div className="testimonialslider-content">
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
            </div>
            <div className="testimonial-info">
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={Testimonial2}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Esther Hills</h6>
                  <p>Lead Intranet Technician</p>
                </div>
              </div>
              <div className="testimonialslider-content">
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
            </div>
            <div className="testimonial-info">
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={Testimonial1}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Dev</h6>
                  <p>Lead Intranet Technician</p>
                </div>
              </div>
              <div className="testimonialslider-content">
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
            </div>
            <div className="testimonial-info">
              <div className="testimonialslider-heading d-flex">
                <div className="testi-img">
                  <img
                    src={Testimonial2}
                    className="img-fluid"
                    alt="testi-img"
                  />
                </div>
                <div className="testi-author">
                  <h6>Esther Hills</h6>
                  <p>Lead Intranet Technician</p>
                </div>
              </div>
              <div className="testimonialslider-content">
                <p>
                  Omnis totam molestiae delectus nemo alias nesciunt harum et.
                  Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores
                  repellat rem impedit dolores. Ut ea rerum cum eum. Alias
                  dolores tempore illo accusantium est et voluptatem voluptas
                </p>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </>
    );
}
export default Cilent;