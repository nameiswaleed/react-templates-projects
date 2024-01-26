import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature9,
  ProfileAvatar02,
  ProfileAvatar04,
  ProfileAvatar05,
  ProfileAvatar06,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Carousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const slider = useRef();
  return (
    <section className="featured-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 aos aos-init aos-animate" data-aos="fade-up">
            <div className="section-heading">
              <h2>
                Featu<span className="title-right magentaCircle">red</span> Ads
              </h2>
              <p>Checkout these latest coo ads from our members</p>
            </div>
          </div>
          <div className="col-md-6 text-md-end aos" data-aos="fade-up">
            <div className="owl-nav mynav2">
              <button
                type="button"
                role="presentation"
                className="owl-prev"
                onClick={() => {console.log(slider?.current); slider?.current?.slickPrev()}}
                
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                type="button"
                role="presentation"
                className="owl-next"
                onClick={() => slider?.current?.slickNext()}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div >
              <Slider ref={slider} {...settings} className=" featured-slider grid-view">
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature9}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            2017 Gulfsteam Ameri-lite
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$350</span>
                            <span>$450</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature2}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar05} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Electronics
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Fashion luxury Men date
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 08
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$250</span>
                            <span>$350</span>
                          </div>
                          <div className="ratings">
                            <span>4.6</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature3}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar04} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Electronics
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Apple Iphone 6 16GB 4G LTE
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 09
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$550</span>
                            <span>$400</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature4}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar05} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Gadgets
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Customized Apple Imac{" "}
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 10
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$450</span>
                            <span>$300</span>
                          </div>
                          <div className="ratings">
                            <span>4.5</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature9}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            2017 Gulfsteam Ameri-lite
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 06
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$350</span>
                            <span>$450</span>
                          </div>
                          <div className="ratings">
                            <span>4.7</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img
                          src={Feature5}
                          className="img-fluid"
                          alt="blog-img"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="Featured-text">Featured</span>
                        <Link to="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink">
                          <div className="grid-author">
                            <img src={ProfileAvatar06} alt="author" />
                          </div>
                          <div className="blog-features">
                            <Link to="#">
                              <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Construction
                              </span>
                            </Link>
                          </div>
                          <div className="blog-author text-end">
                            <span>
                              <i className="feather-eye"></i> 4000{" "}
                            </span>
                          </div>
                        </div>
                        <h6>
                          <Link to="/service-details">
                            Villa 457 sq.m. In Benidorm Fully
                          </Link>
                        </h6>
                        <div className="blog-location-details">
                          <div className="location-info">
                            <i className="feather-map-pin"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days"></i> 11
                            Oct, 2022
                          </div>
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span className="validrate">$650</span>
                            <span>$600</span>
                          </div>
                          <div className="ratings">
                            <span>4.5</span> (50)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
