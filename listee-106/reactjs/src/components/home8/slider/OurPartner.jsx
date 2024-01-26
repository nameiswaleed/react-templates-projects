import React from "react";
import { Partners1, Partners2, Partners3, Partners4, Partners5, Partners6 } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";



const OurPartner=()=>{
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
            items: 6,
          },
        },
      };
    return(
        <ul >
            <OwlCarousel {...settings} className="owl-carousel partnerslist_eight d-flex">
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners1}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners2}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners3}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners4}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners5}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners6}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners1}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners2}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners3}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners4}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners5}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={Partners6}
              alt="partners"
            />
          </Link>
        </li>
        </OwlCarousel>
      </ul>
    );
}
export default OurPartner;