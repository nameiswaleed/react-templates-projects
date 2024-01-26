import React from "react";
import { property } from "../../imagepath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";




const PropertiesManagement=()=>{
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
                items: 4,
            },
        },
    };
    return(
        <>
        <div >
        <OwlCarousel {...settings} className="property-listing-slider owl-carousel owl-theme">
              <div className="property-item">
                <Link to="/categories" />
                <div className="companies-set mb-4">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>121</span>Properties
                        </h5>
                        <h6>Elite Poperty</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>45</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>45</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>45</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/categories" />
                <div className="companies-set">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>188</span>Properties
                        </h5>
                        <h6>Private Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>66</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>87</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>22</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-item">
                <Link to="/categories" />
                <div className="companies-set mb-4">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>671</span>Properties
                        </h5>
                        <h6>Tangible Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>05</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>99</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>76</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/categories" />
                <div className="companies-set">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>165</span>Properties
                        </h5>
                        <h6>Personal Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>77</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>22</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>06</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-item">
                <Link to="#/categories"> </Link>
                <div className="companies-set mb-4">
                  <Link to="#/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>991</span>Properties
                        </h5>
                        <h6>Public Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>87</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>32</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>64</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/categories" />
                <div className="companies-set">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>101</span>Properties
                        </h5>
                        <h6>Personal Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>45</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>98</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>32</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-item">
                <Link to="/categories" />
                <div className="companies-set mb-4">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>876</span>Properties
                        </h5>
                        <h6>Tangible Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>09</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>77</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>44</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/categories" />
                <div className="companies-set">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>921</span>Properties
                        </h5>
                        <h6>Public Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>90</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>76</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>51</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-item">
                <Link to="/categories" />
                <div className="companies-set mb-4">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>331</span>Properties
                        </h5>
                        <h6>Elite Poperty</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>49</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>88</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>41</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/categories" />
                <div className="companies-set">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>555</span>Properties
                        </h5>
                        <h6>Public Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>09</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>99</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>66</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property-item">
                <Link to="/categories" />
                <div className="companies-set mb-4">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>765</span>Properties
                        </h5>
                        <h6>Personal Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>79</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>44</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>45</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/categories" />
                <div className="companies-set">
                  <Link to="/categories">
                    <div className="companies-set-head">
                      <div className="companies-set-logo">
                        <span>
                          <img src={property} alt="img" />
                        </span>
                      </div>
                      <div className="companies-set-content">
                        <h5>
                          <span>191</span>Properties
                        </h5>
                        <h6>Tangible Property</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="companies-set-count">
                    <Link to="/categories">
                      <ul>
                        <li>
                          <h6>90</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>75</h6>
                          <span>Listing</span>
                        </li>
                        <li>
                          <h6>12</h6>
                          <span>Listing</span>
                        </li>
                      </ul>
                    </Link>
                    <div className="companies-set-btn">
                      <Link to="/categories"></Link>
                      <Link
                        to="/listing-list-sidebar"
                        className="btn btn-linebtn"
                      >
                        View All Listing
                        <i
                          className="fa fa-arrow-right ms-3"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </OwlCarousel>
            </div>
        </>
    );
}
export default PropertiesManagement;