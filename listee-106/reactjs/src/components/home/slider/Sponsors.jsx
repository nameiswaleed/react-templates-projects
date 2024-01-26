import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Partners1,
  Partners2,
  Partners3,
  Partners4,
  Partners5,
  Partners6,
} from "../../imagepath";
import { Link } from "react-router-dom";

export default function Sponsors() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    // draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  return (
    <ul className=" partnerslist">
      <Slider {...settings}>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners1} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners2} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners3} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners4} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners5} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners6} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners1} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners2} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners3} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners4} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners5} alt="partners" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="img-fluid" src={Partners6} alt="partners" />
          </Link>
        </li>
      </Slider>
    </ul>
  );
}
