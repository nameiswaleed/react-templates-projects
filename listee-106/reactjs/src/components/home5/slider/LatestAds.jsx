import React from "react";
import {
  Latest1,
  Latest2,
  Latest3,
  Latest4,
  ProfileAvatar02,
  ProfileAvatar03,
  ProfileAvatar04,
  ProfileAvatar05,
  ProfileAvatar06,
} from "../../imagepath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const LatestAds = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  return (
    <section className="business-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div
              className="section-heading heading-five aos"
              data-aos="fade-up"
            >
              <h2>Latest Ads</h2>
            </div>
          </div>
        </div>
        <div className="silderBotton business-slider grid-view">
          <Slider {...settings}>
            <div className="card business-card aos" data-aos="fade-up">
              <div className="blog-widget">
                <div className="blog-img">
                  <Link to="/service-details">
                    <img src={Latest1} className="img-fluid" alt="blog-img" />
                  </Link>
                  <div className="fav-item  justify-content-end">
                    <Link to="#" className="fav-icon">
                      <i className="feather-heart"></i>
                    </Link>
                  </div>
                </div>
                <div className="bloglist-content">
                  <div className="card-body">
                    <span className="Featured-text">Featured</span>
                    <div className="grid-author">
                      <img src={ProfileAvatar03} alt="author" />
                    </div>
                    <div className="blogfeaturelink">
                      <div className="blog-features">
                        <Link to="#">
                          <span>
                            {" "}
                            <i className="fa-regular fa-circle-stop"></i> Cinema
                          </span>
                        </Link>
                      </div>
                      <div className="blog-author text-end">
                        <span>
                          <i className="feather-map-pin"></i> Paris
                        </span>
                      </div>
                    </div>
                    <h6>
                      <Link to="/service-details">Cinema</Link>
                    </h6>
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
            <div className="card business-card aos" data-aos="fade-up">
              <div className="blog-widget">
                <div className="blog-img">
                  <Link to="/service-details">
                    <img src={Latest2} className="img-fluid" alt="blog-img" />
                  </Link>
                  <div className="fav-item  justify-content-end">
                    <Link to="#" className="fav-icon">
                      <i className="feather-heart"></i>
                    </Link>
                  </div>
                </div>
                <div className="bloglist-content">
                  <div className="card-body">
                    <span className="Featured-text">Featured</span>
                    <div className="grid-author">
                      <img src={ProfileAvatar02} alt="author" />
                    </div>
                    <div className="blogfeaturelink">
                      <div className="blog-features">
                        <Link to="#">
                          <span>
                            {" "}
                            <i className="fa-regular fa-circle-stop"></i>{" "}
                            Lodging
                          </span>
                        </Link>
                      </div>
                      <div className="blog-author text-end">
                        <span>
                          <i className="feather-map-pin"></i> New York
                        </span>
                      </div>
                    </div>
                    <h6>
                      <Link to="/service-details">Lodging</Link>
                    </h6>
                    <div className="amount-details">
                      <div className="amount">
                        <span className="validrate">$370</span>
                        <span>$470</span>
                      </div>
                      <div className="ratings">
                        <span>4.7</span> (50)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card business-card aos" data-aos="fade-up">
              <div className="blog-widget">
                <div className="blog-img">
                  <Link to="/service-details">
                    <img src={Latest3} className="img-fluid" alt="blog-img" />
                  </Link>
                  <div className="fav-item  justify-content-end">
                    <Link to="#" className="fav-icon">
                      <i className="feather-heart"></i>
                    </Link>
                  </div>
                </div>
                <div className="bloglist-content">
                  <div className="card-body">
                    <span className="Featured-text">Featured</span>
                    <div className="grid-author">
                      <img src={ProfileAvatar04} alt="author" />
                    </div>
                    <div className="blogfeaturelink">
                      <div className="blog-features">
                        <Link to="#">
                          <span>
                            {" "}
                            <i className="fa-regular fa-circle-stop"></i>{" "}
                            Outdoors
                          </span>
                        </Link>
                      </div>
                      <div className="blog-author text-end">
                        <span>
                          <i className="feather-map-pin"></i> Australia
                        </span>
                      </div>
                    </div>
                    <h6>
                      <Link to="/service-details">Outdoors</Link>
                    </h6>
                    <div className="amount-details">
                      <div className="amount">
                        <span className="validrate">$300</span>
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
            <div className="card business-card aos" data-aos="fade-up">
              <div className="blog-widget">
                <div className="blog-img">
                  <Link to="/service-details">
                    <img src={Latest4} className="img-fluid" alt="blog-img" />
                  </Link>
                  <div className="fav-item  justify-content-end">
                    <Link to="#" className="fav-icon">
                      <i className="feather-heart"></i>
                    </Link>
                  </div>
                </div>
                <div className="bloglist-content">
                  <div className="card-body">
                    <span className="Featured-text">Featured</span>
                    <div className="grid-author">
                      <img src={ProfileAvatar05} alt="author" />
                    </div>
                    <div className="blogfeaturelink">
                      <div className="blog-features">
                        <Link to="#">
                          <span>
                            {" "}
                            <i className="fa-regular fa-circle-stop"></i>{" "}
                            Automotive
                          </span>
                        </Link>
                      </div>
                      <div className="blog-author text-end">
                        <span>
                          <i className="feather-map-pin"></i> Texas
                        </span>
                      </div>
                    </div>
                    <h6>
                      <Link to="/service-details">Automotive</Link>
                    </h6>
                    <div className="amount-details">
                      <div className="amount">
                        <span className="validrate">$250</span>
                        <span>$370</span>
                      </div>
                      <div className="ratings">
                        <span>4.7</span> (50)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card business-card aos" data-aos="fade-up">
              <div className="blog-widget">
                <div className="blog-img">
                  <Link to="/service-details">
                    <img src={Latest2} className="img-fluid" alt="blog-img" />
                  </Link>
                  <div className="fav-item  justify-content-end">
                    <Link to="#" className="fav-icon">
                      <i className="feather-heart"></i>
                    </Link>
                  </div>
                </div>
                <div className="bloglist-content">
                  <div className="card-body">
                    <span className="Featured-text">Featured</span>
                    <div className="grid-author">
                      <img src={ProfileAvatar06} alt="author" />
                    </div>
                    <div className="blogfeaturelink">
                      <div className="blog-features">
                        <Link to="#">
                          <span>
                            {" "}
                            <i className="fa-regular fa-circle-stop"></i>{" "}
                            Lodging
                          </span>
                        </Link>
                      </div>
                      <div className="blog-author text-end">
                        <span>
                          <i className="feather-map-pin"></i> Florida
                        </span>
                      </div>
                    </div>
                    <h6>
                      <Link to="/service-details">Lodging</Link>
                    </h6>
                    <div className="amount-details">
                      <div className="amount">
                        <span className="validrate">$330</span>
                        <span>$350</span>
                      </div>
                      <div className="ratings">
                        <span>4.7</span> (50)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestAds;
