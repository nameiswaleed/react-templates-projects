import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Blog10, Blog11, Blog9, ProfileAvatar12, ProfileAvatar13, ProfileAvatar14 } from "../../imagepath";

const LatestBlogs3 = () => {
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
  return (
    <section className="section-blk blog-block">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="title-blk justify-content-center text-center">
              <h2>Latest Blog</h2>
              <h5>Lorem Ipsum is simply dummy text of the printing</h5>
            </div>
            <div >
            <OwlCarousel {...settings} className="testim-slider owl-carousel owl-theme">
              <div className="blog-slide">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog9}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="top-blk">
                      <p>Adventure</p>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img
                              src={ProfileAvatar14}
                              alt="Post Author"
                            />
                          </div>
                          <Link to="#" className="mb-0">
                            {" "}
                            <span> Amara </span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days"></i> October 4,
                        2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        The Best Spa Saloons for your relaxations?
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                      consectetur em adipiscing elit,
                    </p>
                    <p className="viewlink">
                      <Link to="/blog-details">
                        View Details <i className="feather-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-slide">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog10}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="top-blk  top-rated-style">
                      <p>Adventure</p>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img
                              src={ProfileAvatar12}
                              alt="Post Author"
                            />
                          </div>
                          <Link to="#" className="mb-0">
                            <span> Darryl </span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days"></i> October 6,
                        2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Three Powerful Tricks For Online Advertising
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                      consectetur em adipiscing elit,
                    </p>
                    <p className="viewlink">
                      <Link to="/blog-details">
                        View Details <i className="feather-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-slide">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog11}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="top-blk">
                      <p>Travel</p>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img
                              src={ProfileAvatar13}
                              alt="Post Author"
                            />
                          </div>
                          <Link to="#" className="mb-0">
                            {" "}
                            <span> Mary </span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days"></i> October
                        10, 2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Competitive Analysis for Enterprerneurs in 20232
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                      consectetur em adipiscing elit,
                    </p>
                    <p className="viewlink">
                      <Link to="/blog-details">
                        View Details <i className="feather-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-slide">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog10}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="top-blk  top-rated-style">
                      <p>Adventure</p>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img
                              src={ProfileAvatar12}
                              alt="Post Author"
                            />
                          </div>
                          <Link to="#" className="mb-0">
                            <span> Darryl </span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days"></i> October 6,
                        2023
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Three Powerful Tricks For Online Advertising
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                      consectetur em adipiscing elit,
                    </p>
                    <p className="viewlink">
                      <Link to="/blog-details">
                        View Details <i className="feather-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs3;
