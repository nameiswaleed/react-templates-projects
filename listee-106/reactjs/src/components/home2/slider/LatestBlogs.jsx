import React from "react";
import { Blog6, Blog7, Blog8, TitelImg } from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  return (
    <section className="blog-section-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading-two text-center">
              <p>Tips and News</p>
              <h2>Latest Blogs</h2>
              <img src={TitelImg} className="img-fluid" alt="title-img" />
            </div>
            <Slider {...settings} className=" blog-slider">
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog6} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">Wedding Tips For Fashion</Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar"></i> 7 Jan 2023
                    </li>
                    <li className="blog-cat">Wedding</li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">
                      View More <i className="feather-arrow-right-circle"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog7} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">Pre-Wedding Photoshoot</Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar"></i> 15 Jan 2023
                    </li>
                    <li className="blog-cat">Photography</li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">
                      View More <i className="feather-arrow-right-circle"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog8} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">Special Food wedding</Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar"></i> 27 Feb 2023
                    </li>
                    <li className="blog-cat">Catering</li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">
                      View More <i className="feather-arrow-right-circle"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog7} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">Pre-Wedding Photoshoot</Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar"></i> 28 Mar 2023
                    </li>
                    <li className="blog-cat">Photography</li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">
                      View More <i className="feather-arrow-right-circle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
