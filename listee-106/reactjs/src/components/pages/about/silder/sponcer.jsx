import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { partners_1, partners_2, partners_3, partners_4, partners_5, partners_6 } from "../../../imagepath";
import { Link } from "react-router-dom";



const Sponcer=()=>{
    const settings = {
        // autoWidth: true,
        items: 2,
        margin: 25,
        dots: false,
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
        <>
        <ul >
        <OwlCarousel {...settings} className="owl-carousel partnerslist d-flex">
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_1}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_1}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_3}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_4}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_5}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_6}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_1}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_2}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_3}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_4}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_5}
              alt="partners"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="img-fluid"
              src={partners_6}
              alt="partners"
            />
          </Link>
        </li>
        </OwlCarousel>
      </ul>
        </>
    );
}
export default Sponcer;