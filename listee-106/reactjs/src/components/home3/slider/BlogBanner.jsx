import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Blog1Jpg,
  Blog2Jpg,
  Blog3Jpg,
  Blog4Jpg,
  TripIcon10,
  TripIcon6,
  TripIcon7,
  TripIcon8,
  TripIcon9,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BlogBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    lazyLoad: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };
  const [toggleState,setToggleState]=useState(1);

  const toggleTap=(index)=>{
    setToggleState(index)
  }
  return (
    <section className="section-blk blog-blk">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-blk justify-content-center text-center">
              <h2>Get inspiration for your next trip</h2>
              <h5>Lorem Ipsum is simply dummy text of the printing</h5>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="recommended-tabs-blk">
                  <ul className="nav tabs-style gap-3" data-bs-tabs="tabs">
                    <li>
                      <Link
                        className={toggleState === 1?"active":""}
                        aria-current="true"
                        data-bs-toggle="tab"
                        to="#Bloghotel"
                        onClick={()=>toggleTap(1)}
                      >
                        <span>
                          <img src={TripIcon6} alt="Dreamstrip Recommended" />
                        </span>
                        hotel
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#Blogrestaurants" className={toggleState === 2?"active":""} onClick={()=>toggleTap(2)}>
                        <span>
                          <img src={TripIcon7} alt="Dreamstrip Recommended" />
                        </span>
                        Restaurants
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#Blogshops" className={toggleState === 3?"active":""} onClick={()=>toggleTap(3)}>
                        <span>
                          <img src={TripIcon8} alt="Dreamstrip Recommended" />
                        </span>
                        shops
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#Blogbusiness" className={toggleState === 4?"active":""} onClick={()=>toggleTap(4)}>
                        <span>
                          <img src={TripIcon9} alt="Dreamstrip Recommended" />
                        </span>
                        business
                      </Link>
                    </li>
                    <li>
                      <Link data-bs-toggle="tab" to="#Bloglifestyle" className={toggleState === 5?"active":""} onClick={()=>toggleTap(5)}>
                        <span>
                          <img src={TripIcon10} alt="Dreamstrip Recommended" />
                        </span>
                        lifestyle
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body tab-content">
              <div className="tab-pane active" id="Bloghotel">
                <div className="recommended-carousel">
                  <Slider
                    {...settings}
                    className="recommended-slider  owl-theme"
                  >
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>December 30,2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Jan 30,2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Jan 26, 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Jan 25, 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Jan 28, 2023</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="tab-pane fade" id="Blogrestaurants">
                <div className="recommended-carousel">
                  <Slider
                    {...settings}
                    className="recommended-slider owl-carousel owl-theme"
                  >
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="tab-pane fade" id="Blogshops">
                <div className="recommended-carousel">
                  <Slider
                    {...settings}
                    className="recommended-slider owl-carousel owl-theme"
                  >
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="tab-pane fade" id="Blogbusiness">
                <div className="recommended-carousel">
                  <Slider
                    {...settings}
                    className="recommended-slider owl-carousel owl-theme"
                  >
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="tab-pane fade" id="Bloglifestyle">
                <div className="recommended-carousel">
                  <Slider
                    {...settings}
                    className="recommended-slider owl-carousel owl-theme"
                  >
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog2Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog3Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog4Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <div className="img-blk">
                        <Link to="/blog-details">
                          <img
                            src={Blog1Jpg}
                            className="img-fluid"
                            alt="List 1"
                          />
                        </Link>
                      </div>
                      <div className="content-blk">
                        <p>
                          <Link to="/blog-details">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply
                          </Link>
                        </p>
                        <div className="date-blk">
                          <p>Westminster , London</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
