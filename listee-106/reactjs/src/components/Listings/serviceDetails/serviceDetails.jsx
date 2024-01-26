import React from "react";
import Header from "../../home/header";
import { Feature_1_svg, Feature_2_svg, Feature_3_svg, Feature_4_svg, Feature_5_svg, Feature_6_svg, Feature_7_svg, Feature_8_svg, GalleryImg1, GalleryImg10, GalleryImg11, GalleryImg2, GalleryImg3, GalleryImg9, ProfileAvatar01, ProfileAvatar02, ProfileAvatar10, ProfileAvatar12, avatar_11, details_icon, gallery_09, gallery_10, gallery_11, gallery_1_jpg, gallery_2_jpg, gallery_3_jpg, gallery_4_jpg, gallery_5_jpg, gallery_6_jpg, gallery_8_jpg, galleryicon, statistic_icon, website } from "../../imagepath";
import Footer from "../../home/footer/Footer";
import StickyBox from "react-sticky-box";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import { Link, useLocation } from "react-router-dom";
import Rooms from "./myComponent2";
import Roomspics from "./myComponent3";
import RoomsProfile from "./myComponent4";



const ServiceDetails = () => {
  const [showFancyBox, setBox] = useState(false);
  let imagess = [
    {
      url: { gallery_1_jpg },

    },
    {
      url: { gallery_2_jpg },

    }
  ]

  const parms=useLocation().pathname
  return (
    <>
      <Header parms={parms}/>
      {/*Galler Slider Section*/}
      <div className="bannergallery-section">
        <div className="gallery-slider d-flex">
          <Rooms/>
          <div className="showphotos">
            <Link
              // to={gallery_3_jpg}
              data-fancybox="gallery1"
              onClick={() => setBox(true)}
            >
              ... Show Photos
            </Link>
          </div>
          {showFancyBox && (
            <Lightbox images={imagess} onClose={true} />
          )}
        </div>
      </div>
      {/*/Galler Slider Section*/}
      {/*Details Description  Section*/}
      <section className="details-description">
        <div className="container">
          <div className="about-details">
            <div className="about-headings">
              <div className="author-img">
                <img src={ProfileAvatar10} alt="authorimg" />
              </div>
              <div className="authordetails">
                <h5>Sleep In a Room in Apartment</h5>
                <p>Luxury hotel in the heart of Blommsbury</p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fa-regular fa-star rating-color" />
                  <span className="d-inline-block average-rating"> 4.5 </span>
                </div>
              </div>
            </div>
            <div className="rate-details">
              <h2>$350</h2>
              <p>Fixed</p>
            </div>
          </div>
          <div className="descriptionlinks">
            <div className="row">
              <div className="col-lg-9">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="feather-map" /> Get Directions
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={website} alt="website" />
                      Website
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="feather-share-2" /> share
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-regular fa-comment-dots" /> Write a review
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="feather-flag" /> report
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="feather-heart" /> Save
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="callnow">
                  <Link to="contact.html">
                    {" "}
                    <i className="feather-phone-call" /> Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Details Description  Section*/}
      {/*Details Main  Section*/}
      <div className="details-main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card ">
                <div className="card-header">
                  <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                  <h4>Description</h4>
                </div>
                <div className="card-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              {/*Listing Features Section*/}
              <div className="card ">
                <div className="card-header">
                  <i className="feather-list" />
                  <h4>Listing Features</h4>
                </div>
                <div className="card-body">
                  <div className="lisiting-featues">
                    <div className="row">
                      <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_1_svg}
                            alt="Room amenties"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Room <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_2_svg}
                            alt="Bathroom amenities"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Bathroom <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_3_svg}
                            alt="Media Technology"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Media &amp; Technology <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_4_svg}
                            alt="Food Security"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Food &amp; Security <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_5_svg}
                            alt="Media Technology"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Services &amp; Extra <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_6_svg}
                            alt="Media Technology"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Outdoor &amp; View <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex  access-feature align-items-center col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_7_svg}
                            alt="Media Technology"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Accessibility <br /> amenities
                          </h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center access-feature col-lg-4 col-md-4">
                        <div className="feature-img">
                          <img
                            src={Feature_8_svg}
                            alt="Media Technology"
                          />
                        </div>
                        <div className="featues-info">
                          <h6>
                            Safety &amp; Security
                            <br /> amenities
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/Listing Features Section*/}
              {/*Gallery Section*/}
              <div className="card gallery-section ">
                <div className="card-header ">
                  <img src={galleryicon} alt="gallery" />
                  <h4>Gallery</h4>
                </div>
                <div className="card-body">
                  <div className="gallery-content">
                    <div className="row">
                      <Roomspics/>
                    </div>
                  </div>
                </div>
              </div>
              {/*/Gallery Section*/}
              {/*Ratings Section*/}
              <div className="card ">
                <div className="card-header  align-items-center">
                  <i className="feather-star" />
                  <h4>Ratings</h4>
                </div>
                <div className="card-body">
                  <div className="ratings-content">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="ratings-info">
                          <p className="ratings-score">
                            <span>4</span>/5
                          </p>
                          <p>OVERALL</p>
                          <p>
                            {" "}
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fa-regular fa-star" />
                          </p>
                          <p>Based on Listing</p>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="ratings-table table-responsive">
                          <table className="">
                            <tbody>
                              <tr>
                                <td className="star-ratings">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                </td>
                                <td className="scrore-width">
                                  <span> </span>
                                </td>
                                <td> 0</td>
                              </tr>
                              <tr>
                                <td className="star-ratings">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-color" />
                                </td>
                                <td className="scrore-width selected">
                                  <span> </span>
                                </td>
                                <td> 1</td>
                              </tr>
                              <tr>
                                <td className="star-ratings">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-color" />
                                  <i className="fa-regular fa-star rating-color" />
                                </td>
                                <td className="scrore-width">
                                  <span> </span>
                                </td>
                                <td> 0</td>
                              </tr>
                              <tr>
                                <td className="star-ratings">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-color" />
                                  <i className="fa-regular fa-star rating-color" />
                                  <i className="fa-regular fa-star rating-color" />
                                </td>
                                <td className="scrore-width">
                                  <span> </span>
                                </td>
                                <td> 0</td>
                              </tr>
                              <tr>
                                <td className="star-ratings">
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-color" />
                                  <i className="fa-regular fa-star rating-color" />
                                  <i className="fa-regular fa-star rating-color" />
                                  <i className="fa-regular fa-star rating-color" />
                                </td>
                                <td className="scrore-width">
                                  <span> </span>
                                </td>
                                <td> 0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/Ratings Section*/}
              {/*Review  Section*/}
              <div className="card review-sec  mb-0">
                <div className="card-header  align-items-center">
                  <i className="fa-regular fa-comment-dots" />
                  <h4>Write a Review</h4>
                </div>
                <div className="card-body">
                  <div className="review-list">
                    <ul className="">
                      <li className="review-box ">
                        <div className="review-profile">
                          <div className="review-img">
                            <img
                              src={avatar_11}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="review-details">
                          <h6>Joseph</h6>
                          <div className="rating">
                            <div className="rating-star">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star rating-overall" />
                            </div>
                            <div>
                              <i className="fa-sharp fa-solid fa-calendar-days" /> 4
                              months ago
                            </div>
                            <div>by: Demo Test</div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div className="row">
                            <RoomsProfile/>
                          </div>
                          <div className="reply-box ">
                            <p>
                              Was This Review...?{" "}
                              <Link to="#" className="thumbsup">
                                <i className="feather-thumbs-up" /> Like{" "}
                              </Link>
                              <Link to="#" className="thumbsdown">
                                <i className="feather-thumbs-down" /> Dislike{" "}
                              </Link>
                            </p>
                            <Link to="#" className="replylink">
                              <i className="feather-corner-up-left" /> Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <img
                              src={ProfileAvatar02}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="review-details">
                          <h6>Dev</h6>
                          <div className="rating">
                            <div className="rating-star">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star rating-overall" />
                            </div>
                            <div>
                              <i className="fa-sharp fa-solid fa-calendar-days" /> 4
                              months ago
                            </div>
                            <div>by: Demo Test</div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </li>
                      <li className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <img
                              src={ProfileAvatar01}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="review-details">
                          <h6>Johnson</h6>
                          <div className="rating">
                            <div className="rating-star">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star rating-overall" />
                            </div>
                            <div>
                              <i className="fa-sharp fa-solid fa-calendar-days" /> 4
                              months ago
                            </div>
                            <div>by: Demo Test</div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div className="reply-box ">
                            <p>
                              Was This Review...?{" "}
                              <Link to="#" className="thumbsup">
                                <i className="feather-thumbs-up" /> Like{" "}
                              </Link>
                              <Link to="#" className="thumbsdown">
                                <i className="feather-thumbs-down" /> Dislike{" "}
                              </Link>
                            </p>
                            <Link to="#" className="replylink">
                              <i className="feather-corner-up-left" /> Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="review-box feedbackbox mb-0">
                        <div className="review-details">
                          <h6>Leave feedback about this</h6>
                        </div>
                        <div className="card-body">
                          <form className="">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                              />
                            </div>
                            <div className="namefield">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name*"
                                  required=""
                                />
                              </div>
                              <div className="form-group me-0">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email*"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <textarea
                                rows={4}
                                className="form-control"
                                placeholder="Write a Review*"
                                required=""
                                defaultValue={""}
                              />
                            </div>
                            <div className="reviewbox-rating">
                              <p>
                                <span> Rating</span>
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                              </p>
                            </div>
                            <div className="submit-section">
                              <button
                                className="btn btn-primary submit-btn"
                                type="submit"
                              >
                                {" "}
                                Submit Review
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/Review Section*/}
            </div>
            <div className="col-lg-3 theiaStickySidebar">
              <StickyBox>
                <div className="rightsidebar">
                  <div className="card">
                    <h4>
                      <img src={details_icon} alt="details-icon" />{" "}
                      Details
                    </h4>
                    <ul>
                      <li>
                        Contract <span>For Rent</span>
                      </li>
                      <li>
                        Location <span>New York, USA</span>
                      </li>
                      <li>
                        Year Built <span>1988</span>
                      </li>
                      <li>
                        Rooms <span>3</span>
                      </li>
                      <li>
                        Beds <span>4</span>
                      </li>
                      <li>
                        Baths<span>8</span>
                      </li>
                      <li>
                        Gadgets <span>6</span>
                      </li>
                      <li>
                        Home Area <span>30sqft</span>
                      </li>
                      <li>
                        Lot Dimensions <span>30*30*20 ft</span>
                      </li>
                      <li className="p-0">
                        Lot Area <span>50 ft</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4>
                      <img src="assets/img/breifcase.svg" alt="" /> Business Info
                    </h4>
                    <div className="map-details">
                      <div className="map-frame">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2238528387797!2d-122.41637708468208!3d37.78479337975754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090475dcdc3%3A0x417fdbbd16e076ed!2s484%20Ellis%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sin!4v1669879954211!5m2!1sen!2sin"
                          width={200}
                          height={160}
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                      <ul className="info-list">
                        <li>
                          <i className="feather-map-pin" /> 484, Ellis st, San
                          Fransisco,
                          <br />
                          CS 94102, United States
                        </li>
                        <li>
                          <i className="feather-phone-call" /> + 62 8245 9875
                        </li>
                        <li>
                          <i className="feather-mail" /> support@listee.com
                        </li>
                        <li>
                          <img src={website} alt="website" />{" "}
                          www.listee.com
                        </li>
                        <li className="socialicons pb-0">
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook-f" />{" "}
                          </Link>
                          <Link to="#" target="_blank">
                            <i className="fab fa-twitter" />
                          </Link>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram" />
                          </Link>
                          <Link to="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <h4>
                      <img src={statistic_icon} alt="location" />{" "}
                      Statisfic
                    </h4>
                    <ul className="statistics-list">
                      <li>
                        <div className="statistic-details">
                          <span className="icons">
                            <i className="fa-regular fa-eye" />
                          </span>
                          Views{" "}
                        </div>
                        <span className="text-end"> 453563</span>
                      </li>
                      <li>
                        <div className="statistic-details">
                          <span className="icons">
                            <i className="feather-star" />
                          </span>
                          Ratings{" "}
                        </div>
                        <span className="text-end"> 153</span>
                      </li>
                      <li>
                        <div className="statistic-details">
                          <span className="icons">
                            <i className="feather-heart" />
                          </span>
                          Favuorites{" "}
                        </div>
                        <span className="text-end"> 123</span>
                      </li>
                      <li className="mb-0">
                        <div className="statistic-details">
                          <span className="icons">
                            <i className="feather-share-2" />
                          </span>
                          Shares{" "}
                        </div>
                        <span className="text-end"> 50</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4>
                      {" "}
                      <i className="feather-user" /> Author
                    </h4>
                    <div className="sidebarauthor-details align-items-center">
                      <div className="sideauthor-img">
                        <img src={ProfileAvatar12} alt="author" />
                      </div>
                      <div className="sideauthor-info">
                        <p className="authorname">Johnson</p>
                        <p>Member since Nov 24, 2017</p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <h4>
                      {" "}
                      <i className="feather-phone-call" /> Contact Business
                    </h4>
                    <form className="contactbusinessform">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          rows={6}
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
      {/* /Details Main Section */}
      <Footer />
    </>

  );
}
export default ServiceDetails;