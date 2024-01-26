import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { property_blog_1, property_blog_2, property_blog_3 } from "../../imagepath";
import { Link } from "react-router-dom";





const RecentAritical=()=>{
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
        <>
        <div >
        <OwlCarousel {...settings} className="owl-carousel blog-slider">
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={property_blog_1}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Skills That You Can Learn In The Real Estate Market
                    </Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar" /> 7 Jan 2023
                    </li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={property_blog_2}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      5 Essential Steps for Buying an Investment
                    </Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar" /> 15 Jan 2023
                    </li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={property_blog_3}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Bedroom Colors You’ll Never Regret
                    </Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar" /> 27 Feb 2023
                    </li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="blog grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={property_blog_1}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      Skills That You Can Learn In The Real Estate Market
                    </Link>
                  </h3>
                  <ul className="entry-meta meta-item">
                    <li className="date-icon">
                      <i className="feather-calendar" /> 28 Mar 2023
                    </li>
                  </ul>
                  <p className="blog-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                  <div className="viewlink">
                    <Link to="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            </div>
        </>
    );
}
export default RecentAritical;