import React from "react";
import {
  Business1,
  Business2,
  Business3,
  Business4,
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

const Trending5 = () => {
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
              <h2>Trending Business Places</h2>
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          className="silderBotton  business-slider grid-view"
        >
          <div className="card business-card aos" data-aos="fade-up">
            <div className="blog-widget">
              <div className="blog-img">
                <Link to="/service-details">
                  <img src={Business1} className="img-fluid" alt="blog-img" />
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
                          <i className="fa-regular fa-circle-stop"></i>{" "}
                          Restaurant
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
                    <Link to="/service-details">Mattone Restaurant</Link>
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
                  <img src={Business2} className="img-fluid" alt="blog-img" />
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
                          <i className="fa-regular fa-circle-stop"></i> Fitness
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
                    <Link to="/service-details">Gym Equipment</Link>
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
                  <img src={Business3} className="img-fluid" alt="blog-img" />
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
                          <i className="fa-regular fa-circle-stop"></i> Beauty
                          Care
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
                    <Link to="/service-details">Beauty Parlour</Link>
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
                  <img src={Business4} className="img-fluid" alt="blog-img" />
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
                          <i className="fa-regular fa-circle-stop"></i> Shopping
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
                    <Link to="/service-details">Shop Mall</Link>
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
                  <img src={Business2} className="img-fluid" alt="blog-img" />
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
                          <i className="fa-regular fa-circle-stop"></i> Gym
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
                    <Link to="/service-details">Gym Equipment</Link>
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
    </section>
  );
};

export default Trending5;
