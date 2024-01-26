import React from "react";
import Header8 from "./header/header8";
import { Logomark_1, Logomark_2, Logomark_3, Logomark_4, Logomark_5, Logomark_6, ProfileAvatar05, ads_1, ads_banner, banner_center_bg, banner_left_bottom, banner_left_bottom_shadow, banner_middle, banner_right_bottom, banner_right_bottom_shadow, banner_top, cate_bg_1, cate_bg_2, circle_11, content_img, icons_1, icons_10, icons_11, icons_12, icons_2, icons_3, icons_4, icons_5, icons_6, icons_7, icons_8, icons_9, job_img, job_logomark_1, job_logomark_2, job_logomark_3, job_logomark_4, job_logomark_5, job_logomark_6, job_role, main_banner_7, news_article_1, news_article_2, news_article_3, popular_bg_1, popular_bg_2, pricing_bg, test_bg } from "../imagepath";
import OurPartner from "./slider/OurPartner";
import JobHolder from "./slider/JobHolder";
import { Link } from "react-router-dom";





const Home8=()=>{
    return(
        <>
        <div className="main-wrapper">
            <Header8/>
        <>
  {/* Banner Section */}
  <section className="banner-section banner-eight">
    <div className="container">
      <div className="home-banner">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div
              className="section-search section-search-eight aos"
              data-aos="fade-up"
            >
              <h1>
                {" "}
                <span>Change your world,</span> Set <br /> your tech career in
                motion with
                <span>Listee</span>
              </h1>
              <p className="paragraph">
                Finding a job shouldn’t be a full-time job. 1,50,334 jobs listed
                here! Your dream job is waiting.
              </p>
              <div className="search-box">
                <form action="listing-grid-sidebar" className="d-flex">
                  <div className="search-input line">
                    <div className="form-group">
                      <div className="group-img">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your skill or other"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="search-input">
                    <div className="form-group">
                      <div className="group-img">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Place you want?"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="search-btn">
                    <button className="btn btn-primary" type="submit">
                      {" "}
                      <i className="fa fa-search" aria-hidden="true" /> Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="popular-search">
                <span>Popular Searches: </span>
                <Link to="#">WordPress</Link>
                <Link to="#">HTML5</Link>
                <Link to="#">UI UX Designer</Link>
                <Link to="#">Marketing</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5"></div>
          <div className="banner-main-img">
            <div className="banner-imgs">
              <img
                src={main_banner_7}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
            <div className="banner-imgs-2">
              <img
                src={circle_11}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
            <div className="main-banner-left">
              <img
                src={banner_left_bottom}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
            <div className="main-banner-left-shadow">
              <img
                src={banner_left_bottom_shadow}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
            <div className="main-banner-right">
              <img
                src={banner_right_bottom}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
            <div className="main-banner-right-shadow">
              <img
                src={banner_right_bottom_shadow}
                className="img-fluid"
                alt="bannerimage"
              />
            </div>
            <div className="banner-topic ">
              <div className="topic-content one shape-1">
                <div className="topic-img">
                  <img
                    src={content_img}
                    className="img-fluid"
                    alt="bannerimage"
                  />
                </div>
                <div className="topic-details ">
                  <h4>Finance</h4>
                  <p>3000+ Jobs Available</p>
                </div>
              </div>
              <div className="topic-content two shape-2">
                <div className="topic-img">
                  <img
                    src={content_img}
                    className="img-fluid"
                    alt="bannerimage"
                  />
                </div>
                <div className="topic-details">
                  <h4>Teacher</h4>
                  <p>2000+ Jobs Available</p>
                </div>
              </div>
              <div className="topic-content three shape-2">
                <div className="topic-details">
                  <h4>Marketing &amp; Sales</h4>
                  <p>1500+ Jobs Available</p>
                </div>
                <div className="topic-img">
                  <img
                    src={content_img}
                    className="img-fluid"
                    alt="bannerimage"
                  />
                </div>
              </div>
              <div className="topic-content four shape-1">
                <div className="topic-details">
                  <h4>App Development</h4>
                  <p>5000+ Jobs Available</p>
                </div>
                <div className="topic-img">
                  <img
                    src={content_img}
                    className="img-fluid"
                    alt="bannerimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-main-bg">
      <div className="bannerleftop">
        <img
          src={banner_top}
          className="img-fluid"
          alt="arrow"
        />
      </div>
      <div className="bannerleftbottom">
        <img
          src={banner_center_bg}
          className="img-fluid"
          alt="arrow"
        />
      </div>
      <div className="bannermiddle">
        <img
          src={banner_middle}
          className="img-fluid"
          alt="arrow"
        />
      </div>
    </div>
  </section>
  {/* /Banner Section */}

  {/* Category Section */}
  <section className="category-section category-eight ">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Browse Jobs By Category</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </div>
      <div className="category-details">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6  aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_1}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>UI/UX Design</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6  aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_2}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Digital Marketing</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6  aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_3}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Content Writing </h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6  aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_4}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>HR Management</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6  aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_5}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Account Finance </h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_6}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Sales</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_7}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Project Management</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_8}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Customer Support Care</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_9}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Business &amp; Consulting</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_10}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Web Developer</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_11}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Construction</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 aos" data-aos="fade-up">
            <div className="category-inner">
              <div className="category-img-two">
                <img
                  src={icons_12}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="category-content">
                <h4>Health and Care</h4>
                <p>43 Jobs Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="align-items-center justify-content-center d-flex">
          <Link to="listing-grid-sidebar" className="category-btn">
            View All Category
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* /Category Section */}

  {/* Vaciencies Section */}
  <section className="vaciencies-section vaciencies-eight ">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Latest Job Vacancies</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </div>
      <div className="vacancies-details">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="vacancies-box">
              <div className="vacancies-top">
                <span className="topic">Support</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="vacancies-inner">
                <div className="vaca-img">
                  <img
                    src={Logomark_1}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="vacancies-content">
                  <h4>
                    <Link to="/categories">Technical Support Engineer</Link>
                  </h4>
                  <div className="vaca-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> San Diego,
                      CA
                    </p>
                  </div>
                </div>
              </div>
              <div className="vaca-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolore magna aliqua.
                </p>
              </div>
              <div className="vaca-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      {" "}
                      <i className="feather-dollar-sign"> </i> $30k - $45k{" "}
                    </span>
                  </p>
                </div>
                <div className="footer-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="vacancies-box">
              <div className="vacancies-top">
                <span className="topic">Development</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="vacancies-inner">
                <div className="vaca-img">
                  <img
                    src={Logomark_2}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="vacancies-content">
                  <h4>
                    <Link to="/categories">Android Developer </Link>
                  </h4>
                  <div className="vaca-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> New York
                    </p>
                  </div>
                </div>
              </div>
              <div className="vaca-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolore magna aliqua.
                </p>
              </div>
              <div className="vaca-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $40k - $80k{" "}
                    </span>
                  </p>
                </div>
                <div className="footer-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="vacancies-box">
              <div className="vacancies-top">
                <span className="topic"> Design</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="vacancies-inner">
                <div className="vaca-img">
                  <img
                    src={Logomark_3}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="vacancies-content">
                  <h4>
                    <Link to="/categories">Junior Graphic Designer</Link>
                  </h4>
                  <div className="vaca-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> California
                    </p>
                  </div>
                </div>
              </div>
              <div className="vaca-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolore magna aliqua.
                </p>
              </div>
              <div className="vaca-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $20k - $50k
                    </span>
                  </p>
                </div>
                <div className="footer-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="vacancies-box">
              <div className="vacancies-top">
                <span className="topic">Sales</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="vacancies-inner">
                <div className="vaca-img">
                  <img
                    src={Logomark_4}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="vacancies-content">
                  <h4>
                    <Link to="/categories">Product Sales Specialist</Link>
                  </h4>
                  <div className="vaca-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> Montreal,
                      Quebec
                    </p>
                  </div>
                </div>
              </div>
              <div className="vaca-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolore magna aliqua.
                </p>
              </div>
              <div className="vaca-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $1L - $3L
                    </span>
                  </p>
                </div>
                <div className="footer-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="vacancies-box">
              <div className="vacancies-top">
                <span className="topic">Account</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="vacancies-inner">
                <div className="vaca-img">
                  <img
                    src={Logomark_5}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="vacancies-content">
                  <h4>
                    <Link to="/categories">General Ledger Accountant</Link>
                  </h4>
                  <div className="vaca-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> Boston
                    </p>
                  </div>
                </div>
              </div>
              <div className="vaca-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolore magna aliqua.
                </p>
              </div>
              <div className="vaca-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $60k - $80k{" "}
                    </span>
                  </p>
                </div>
                <div className="footer-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="vacancies-box">
              <div className="vacancies-top">
                <span className="topic">Marketing</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="vacancies-inner">
                <div className="vaca-img">
                  <img
                    src={Logomark_6}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="vacancies-content">
                  <h4>
                    <Link to="/categories">Technical Support Engineer</Link>
                  </h4>
                  <div className="vaca-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> San Diego,
                      CA
                    </p>
                  </div>
                </div>
              </div>
              <div className="vaca-details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod dolore magna aliqua.
                </p>
              </div>
              <div className="vaca-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $10k - $55k{" "}
                    </span>
                  </p>
                </div>
                <div className="footer-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="align-items-center justify-content-center d-flex aos"
          data-aos="fade-up"
        >
          <Link to="/categories" className="category-btn">
            View All Category
          </Link>
        </div>
      </div>
      <div className="cat-bg-one">
        <img src={cate_bg_1} alt="no-img" />
      </div>
      <div className="cat-bg-two">
        <img src={cate_bg_2} alt="no-img" />
      </div>
    </div>
  </section>
  {/* /Vaciencies Section */}

  {/* Job Section */}
  <section className="cta-section job-section-eight">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 position-relative aos" data-aos="fade-up">
          <div className="job-img">
            <img src={job_img} className="img-fluid" alt="CTA" />
          </div>
          <div className="job-role job-one ">
            <div className="job-role-img">
              <img
                src={job_role}
                className="img-fluid"
                alt="CTA"
              />
            </div>
            <div className="job-title">
              <p>Total Employees Hired</p>
              <h3>
                <span className="counterUp">1.5</span>M+
              </h3>
            </div>
          </div>
          <div className="job-role job-two ">
            <div className="job-role-img">
              <img
                src={job_role}
                className="img-fluid"
                alt="CTA"
              />
            </div>
            <div className="job-title">
              <p>Platform downloaded</p>
              <h3>
                <span className="counterUp">5</span>M+
              </h3>
            </div>
          </div>
          <div className="job-role job-three ">
            <div className="job-role-img">
              <img
                src={job_role}
                className="img-fluid"
                alt="CTA"
              />
            </div>
            <div className="job-title">
              <p>Total Jobs</p>
              <h3>
                <span className="counterUp">5</span>M+
              </h3>
            </div>
          </div>
          <div className="job-role job-four ">
            <div className="job-role-img">
              <img
                src={job_role}
                className="img-fluid"
                alt="CTA"
              />
            </div>
            <div className="job-title">
              <p>Company satisfied rate</p>
              <h3>
                <span className="counterUp">5</span>M+
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 aos" data-aos="fade-up">
          <div className="cta-content job-content">
            <div className="section-heading heading-eight">
              <h2>How It Works</h2>
              <p className="vaca-para">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
            <div className="preferred-part">
              <div className="prefer-img">
                <img
                  src={icons_2}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="preferred-content">
                <h5>Search for you preferred Job</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="preferred-part">
              <div className="prefer-img">
                <img
                  src={icons_9}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="preferred-content">
                <h5>Search for you preferred Job</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="preferred-part">
              <div className="prefer-img">
                <img
                  src={icons_11}
                  className="img-fluid"
                  alt="no-img"
                />
              </div>
              <div className="preferred-content">
                <h5>Search for you preferred Job</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Job Section */}

  {/* Partners Section */}
  <div className="partners-section partner-section-eight">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Our Partners </h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </div>
      <OurPartner/>
    </div>
  </div>
  {/* /Partners  Section */}

  {/* Popular Section */}
  <section className="popular-section popular-eight ">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Most Popular Jobs</h2>
            <p>Highlight the most popular owners</p>
          </div>
        </div>
      </div>
      <div className="popular-details">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="popular-box">
              <div className="popular-top">
                <span className="topic">Marketing</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="popular-inner">
                <div className="popular-img">
                  <img
                    src={job_logomark_1}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="popular-content ">
                  <h4>
                    {" "}
                    <Link to="/categories"> Digital Marketer</Link>
                  </h4>
                  <div className="popular-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> San Diego,
                      CA
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $20k - $25k{" "}
                    </span>
                  </p>
                </div>
                <div className="popular-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="popular-box">
              <div className="popular-top">
                <span className="topic">Support</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="popular-inner">
                <div className="popular-img">
                  <img
                    src={job_logomark_2}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="popular-content">
                  <h4>
                    <Link to="/categories"> IT Support Associate </Link>
                  </h4>
                  <div className="popular-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> New York
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i>$30k - $35k{" "}
                    </span>
                  </p>
                </div>
                <div className="popular-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="popular-box">
              <div className="popular-top">
                <span className="topic"> Support</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="popular-inner">
                <div className="popular-img">
                  <img
                    src={job_logomark_3}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="popular-content">
                  <h4>
                    <Link to="/categories"> Technical Support Engineer </Link>
                  </h4>
                  <div className="popular-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> San Diego,
                      CA
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $40k - 425k
                    </span>
                  </p>
                </div>
                <div className="popular-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="popular-box">
              <div className="popular-top">
                <span className="topic">Sales</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="popular-inner">
                <div className="popular-img">
                  <img
                    src={job_logomark_4}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="popular-content">
                  <h4>
                    {" "}
                    <Link to="/categories"> Product Sales Specialist </Link>
                  </h4>
                  <div className="popular-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> Montreal,
                      Quebec
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $35k - $65k
                    </span>
                  </p>
                </div>
                <div className="popular-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="popular-box">
              <div className="popular-top">
                <span className="topic">Account</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="popular-inner">
                <div className="popular-img">
                  <img
                    src={job_logomark_5}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="popular-content">
                  <h4>
                    {" "}
                    <Link to="/categories"> General Ledger Accountant </Link>
                  </h4>
                  <div className="popular-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> Boston
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i>$40k - $55k{" "}
                    </span>
                  </p>
                </div>
                <div className="popular-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 aos" data-aos="fade-up">
            <div className="popular-box">
              <div className="popular-top">
                <span className="topic">Design</span>
                <Link to="#" className="fav-icon-top">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </div>
              <div className="popular-inner">
                <div className="popular-img">
                  <img
                    src={job_logomark_6}
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <div className="popular-content">
                  <h4>
                    {" "}
                    <Link to="/categories"> Junior Graphic Designer </Link>
                  </h4>
                  <div className="popular-location">
                    <p>Company Name</p>
                    <p className="light-color">|</p>
                    <p>
                      <i className="fas fa-light fa-location-dot" /> California
                    </p>
                  </div>
                </div>
              </div>
              <div className="popular-footer">
                <div className="time">
                  <p>
                    <i className="feather-briefcase" /> Full Time
                    <span className="p-rate">
                      <i className="feather-dollar-sign"> </i> $10k - $25k{" "}
                    </span>
                  </p>
                </div>
                <div className="popular-btn">
                  <Link to="/categories" className="btn-view">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="align-items-center justify-content-center d-flex aos"
          data-aos="fade-up"
        >
          <Link to="/categories" className="category-btn">
            View All Category
          </Link>
        </div>
      </div>
      <div className="pop-bg-one">
        <img src={popular_bg_1} alt="no-img" />
      </div>
      <div className="pop-bg-two">
        <img src={popular_bg_2} alt="no-img" />
      </div>
    </div>
  </section>
  {/* /Popular Section */}
  {/* /Ads Section */}
  <section className="advertisement advertisement-eight">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-6 aos" data-aos="fade-up">
          <div className="adv-box adv-bg-one">
            <div className="adv-img">
              <img src={ads_1} alt="no-img" />
            </div>
            <div className="adv-content">
              <h4>Employers</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna
                aliqua. Ut enim ad minim veniam, quis ea commodo consequat.
              </p>
              <div className="adver-btn">
                <Link to="#" className="btn-primary">
                  Register Account
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-6 aos" data-aos="fade-up">
          <div className="adv-box adv-bg-two">
            <div className="adv-img">
              <img src={ads_1} alt="no-img" />
            </div>
            <div className="adv-content">
              <h4>Candidate</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna
                aliqua. Ut enim ad minim veniam, quis ea commodo consequat.
              </p>
              <div className="adver-btn">
                <Link to="#" className="btn-primary btn-dark">
                  Register Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Ads Section */}

  {/* Pricing Plan Section */}
  <section className="pricingplan-section pricing-eight">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Our Pricing plans</h2>
            <p>Highlight the most popular owners</p>
          </div>
          <div
            className="col-md-12 text-md-end aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="interset-btn">
              <div className="status-toggle d-inline-flex align-items-center">
                Monthly
                <input type="checkbox" id="status_1" className="check" />
                <label htmlFor="status_1" className="checktoggle">
                  checkbox
                </label>
                Yearly
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 d-flex col-md-6 aos" data-aos="fade-up">
          <div className="price-card price-content flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h2> &nbsp;</h2>
              </div>
              <h4>All limited links</h4>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">Own analytics platform</li>
                <li className="active">Chat support</li>
                <li className="active">Number of users</li>
                <li className="inactive">Optimize hashtags</li>
                <li className="inactive">Account manager</li>
                <li className="inactive">Number of articles</li>
                <li className="inactive">Satisfaction guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-flex col-md-6 aos" data-aos="fade-up">
          <div className="price-card main-price flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h2>Starter</h2>
              </div>
              <h3>
                $10<span>/ month</span>
              </h3>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">1 user</li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="inactive into-color">
                  <i className="fa-solid fa-xmark" />
                </li>
                <li className="inactive into-color">
                  <i className="fa-solid fa-xmark" />
                </li>
              </ul>
              <div>
                <Link to="/login" className="btn viewdetails-btn">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-flex col-md-6 aos" data-aos="fade-up">
          <div className="price-card main-price flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h2>Pro</h2>
              </div>
              <h3>
                $100<span>/ month</span>
              </h3>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">3 user</li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="inactive">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="inactive into-color">
                  <i className="fa-solid fa-xmark" />
                </li>
              </ul>
              <div>
                <Link to="/login" className="btn viewdetails-btn">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-flex col-md-6 aos" data-aos="fade-up">
          <div className="price-card main-price flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h2>Enterprise</h2>
              </div>
              <h3>
                $200 <span>/ month</span>
              </h3>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="active">Unlimited</li>
                <li className="active">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="inactive">
                  <i className="fa-solid fa-check" />
                </li>
                <li className="inactive">
                  <i className="fa-solid fa-check" />
                </li>
              </ul>
              <div>
                <Link to="/login" className="btn viewdetails-btn">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pricing-pg-one">
      <img src={banner_middle} alt="img" />
    </div>
    <div className="pricing-pg-two">
      <img src={pricing_bg} alt="img" />
    </div>
  </section>
  {/* /Pricing Plan Section */}

   {/* Testimonial  Section */}
   <section className="testimonial-section-eight">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>What Jobholders Say’s About Us </h2>
            <p>Highlight the most popular owners</p>
          </div>
        </div>
      </div>
      <div className="testi-carousel ">
        <JobHolder/>
      </div>
      <div className="testimonial-nav"></div>
    </div>
    <div className="test-bg">
      <img src={test_bg} className="img-fluid" alt="img" />
    </div>
  </section>
  {/* /Testimonial Section */}

  {/* Blog-section start */}
  <section className="blog-eight-section">
    <div className="container">
      <div className="section-heading heading-eight">
        <div className="row align-items-center">
          <div
            className="col-md-12 aos aos-init aos-animate text-center"
            data-aos="fade-up"
          >
            <h2>Recent News &amp; Articles </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
            <div
              className="blog-eight grid-blog-eight aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="blog-image-eight">
                <Link to="/blog-details">
                  <img
                    src={news_article_1}
                    className="img-fluid"
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content-eight">
                <p className="blog-category-eight">
                  <Link to="#">
                    <span>Popular Jobs</span>
                  </Link>
                  <Link to="#">
                    <span>UX Designer</span>
                  </Link>
                  <Link to="#">
                    <span>Paris</span>
                  </Link>
                </p>
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </Link>
                </h3>
                <p className="blog-description-eight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  lectus elementum lectus eu nisl, purus...
                </p>
                <ul className="entry-meta meta-item-eight">
                  <li>
                    <div className="post-author-eight">
                      <div className="post-author-img-eight">
                        <img
                          src={ProfileAvatar05}
                          alt="Post Author"
                        />
                      </div>
                      <Link to="#" className="mb-0">
                        {" "}
                        <span> John </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="post-author-btn ">
                      <Link to="/blog-details">
                        {" "}
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
            <div
              className="blog-eight grid-blog-eight aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="blog-image-eight">
                <Link to="/blog-details">
                  <img
                    className="img-fluid"
                    src={news_article_2}
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content-eight">
                <p className="blog-category-eight">
                  <Link to="#">
                    <span>Popular Jobs</span>
                  </Link>
                  <Link to="#">
                    <span>Web Designer</span>
                  </Link>
                  <Link to="#">
                    <span>London</span>
                  </Link>
                </p>
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </Link>
                </h3>
                <p className="blog-description-eight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  lectus elementum lectus eu nisl, purus...
                </p>
                <ul className="entry-meta meta-item-eight">
                  <li>
                    <div className="post-author-eight">
                      <div className="post-author-img-eight">
                        <img
                          src={ProfileAvatar05}
                          alt="Post Author"
                        />
                      </div>
                      <Link to="#" className="mb-0">
                        {" "}
                        <span> Smith </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="post-author-btn ">
                      <Link to="/blog-details">
                        {" "}
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
            <div
              className="blog-eight grid-blog-eight aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="blog-image-eight">
                <Link to="/blog-details">
                  <img
                    className="img-fluid"
                    src={news_article_3}
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content-eight">
                <p className="blog-category-eight">
                  <Link to="#">
                    <span>Popular Jobs</span>
                  </Link>
                  <Link to="#">
                    <span>UI Designer</span>
                  </Link>
                  <Link to="#">
                    <span>New York</span>
                  </Link>
                </p>
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </Link>
                </h3>
                <p className="blog-description-eight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  lectus elementum lectus eu nisl, purus...
                </p>
                <ul className="entry-meta meta-item-eight">
                  <li>
                    <div className="post-author-eight">
                      <div className="post-author-img-eight">
                        <img
                          src={ProfileAvatar05}
                          alt="Post Author"
                        />
                      </div>
                      <Link to="#" className="mb-0">
                        {" "}
                        <span> David </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="post-author-btn ">
                      <Link to="/blog-details">
                        {" "}
                        Read More
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="align-items-center justify-content-center d-flex aos"
        data-aos="fade-up"
      >
        <Link to="/blog-details" className="category-btn">
          View All Category
        </Link>
      </div>
    </div>
  </section>
  {/* Blog-section end */}

  {/* /Ads-banner-section start */}
  <section className="advertisement-section advertisement-section-eight">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
          <div className="left-ads">
            <div className="ads-img">
              <img
                src={ads_banner}
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div
          className="col-lg-8 col-md-6 d-flex align-items-center aos"
          data-aos="fade-up"
        >
          <div className="right-ads">
            <div className="ads-content">
              <h1>
                Get Matched the most valuable jobs, Just drop your CV at Listee
              </h1>
              <p>
                Lorem Ipsum is simply dummy text printing and type setting
                industry printing and type setting industryLorem Ipsum is simply
                dummy text printing and type setting industry printing and type
                setting industry
              </p>
              <div className="advs-btn">
                <Link to="/contact">Upload your CV</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ads-bg-right" />
  </section>
  {/* /Ads-banner-section end */}

  {/* Footer */}
  <footer className="footer footer-eight">
    {/* Footer Top */}
    <div className="footer-top aos aos-init aos-animate" data-aos="fade-up">
      <div className="container">
        {/* /Footer  Counter Section*/}
        <div className="row">
          <div className="col-lg-2 col-md-6 aos" data-aos="fade-up">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Company</h2>
              <ul>
                <li>
                  <Link to="javascript:void(0)">About Us</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Careers</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Press</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">News</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Media Kit</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Contact</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6 aos" data-aos="fade-up">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Product</h2>
              <ul>
                <li>
                  <Link to="javascript:void(0)">Overview</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Features</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Solutions</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Tutorials</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Pricing</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Releases</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6 aos" data-aos="fade-up">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Resources</h2>
              <ul>
                <li>
                  <Link to="/blog-details">Blog</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Newsletter</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Events</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Help Centre</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Tutorials</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Support</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6 aos" data-aos="fade-up">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Social</h2>
              <ul>
                <li>
                  <Link to="javascript:void(0)">Twitter</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">LinkedIn </Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Facebook</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">GitHub</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">AngelList</Link>
                </li>
                <li>
                  <Link to="javascript:void(0)">Dribble</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Subscribe</h2>
              <p>
                Subscribe to stay tuned for new web design and latest updates.
                Let's do it!
              </p>
              <div className="update-form">
                <form action="#">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter you email"
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <div className="copyright-text">
                    <p className="mb-0"> © 2023 Listee. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-md-6 aos" data-aos="fade-up">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="/about">About Us </Link>
                      </li>
                      <li>
                        <Link to="#">Careers </Link>
                      </li>
                      <li>
                        <Link to="#">Press </Link>
                      </li>
                      <li>
                        <Link to="#">News </Link>
                      </li>
                      <li>
                        <Link to="#">Media Kit </Link>
                      </li>
                      <li>
                        <Link to="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
  </footer>
  {/* /Footer */}

  
  
</>

        </div>
        </>
    );
}
export default Home8;