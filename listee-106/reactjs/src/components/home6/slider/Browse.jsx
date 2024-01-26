import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
} from "../../imagepath";
import { Link } from "react-router-dom";


const Browse = () => {
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
        items: 5,
      },
    },
  };
  return (
    <div className="car-class-carousel">
      <div >
        <OwlCarousel {...settings} className="car-brand-slider owl-carousel owl-theme">
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-left">
              <img src={Brand1} alt="" />
              <p>
                Audi <span>(30)</span>
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-right">
              <img src={Brand2} alt="" />
              <p>
                KIA <span>(30)</span>
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-left">
              <img src={Brand3} alt="" />
              <p>
                Honda <span>(30)</span>
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-right">
              <img src={Brand4} alt="" />
              <p>
                Chevorlet <span>(30)</span>
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-left">
              <img src={Brand5} alt="" />
              <p>
                Nissan <span>(30)</span>
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-right">
              <img src={Brand6} alt="" />
              <p>
                Bently <span>(30)</span>
              </p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="browse-by-brand-item aos" data-aos="flip-left">
              <img src={Brand1} alt="" />
              <p>
                Audi <span>(30)</span>
              </p>
            </div>
          </Link>
        </OwlCarousel>
      </div>
    </div>

  );
};

export default Browse;
