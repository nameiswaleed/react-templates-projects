import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import { details_icon } from "../../imagepath";
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';





const Sidebar=()=>{
  const [value, setValue] = useState(50);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
    return(
        
        <div className="col-lg-4 theiaStickySidebar">
            <StickyBox>
          <div className="listings-sidebar">
            <div className="card">
              <h4>
                <img src={details_icon} alt="details-icon" />{" "}
                Filter
              </h4>
              <form>
                <div className="filter-content looking-input form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                </div>
                <div className="filter-content form-group">
                  <select className="form-control select category-select">
                    <option value="">Choose Category</option>
                    <option>Computer</option>
                    <option>Electronics</option>
                    <option>Car wash</option>
                  </select>
                </div>
                <div className="filter-content looking-input form-group input-placeholder">
                  <div className="group-img">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where to look?"
                    />
                    <i className="feather-map-pin" />
                  </div>
                </div>
                <div className="filter-content form-group region">
                  <select className="form-control select region-select">
                    <option value="">Region</option>
                    <option>Canada</option>
                    <option>USA</option>
                    <option>india</option>
                  </select>
                </div>
                <div className="filter-content form-group amenities">
                  <h4> Amenities</h4>
                  <ul>
                    <li>
                      <label className="custom_check">
                        <input type="checkbox" name="wireless-internet" />
                        <span className="checkmark" /> Wireless Internet
                      </label>
                    </li>
                    <li>
                      <label className="custom_check">
                        <input type="checkbox" name="accept-credit-card" />
                        <span className="checkmark" /> Accepts Credit Cards
                      </label>
                    </li>
                    <li>
                      <label className="custom_check">
                        <input type="checkbox" name="Coupouns" />
                        <span className="checkmark" /> Coupouns
                      </label>
                    </li>
                    <li>
                      <label className="custom_check">
                        <input type="checkbox" name="parking-street" />
                        <span className="checkmark" /> Parking Street
                      </label>
                    </li>
                    <li>
                      <label className="custom_check">
                        <input type="checkbox" name="bike-parking" />
                        <span className="checkmark" /> Bike Parking
                      </label>
                    </li>
                    <li>
                      <label className="custom_check">
                        <input type="checkbox" name="Smoking-Allowed" />
                        <span className="checkmark" /> Smoking Allowed
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="filter-content form-group amenities radius">
                  <div className="slidecontainer">
                    <div className="slider-info">
                      <h4> Radius</h4>
                      <div className="demo">
                        <span>50</span> Radius
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="filter-range">
                    <InputRange
      maxValue={100}
      minValue={0}
      value={value}
      onChange={handleValueChange}
    />
                    </div>
                  </div>
                </div>
                <div className="filter-content amenities mb-0">
                  <h4> Price Range</h4>
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Min"
                    />
                    <input
                      type="text"
                      className="form-control me-0"
                      placeholder="Max"
                    />
                  </div>
                  <div className="search-btn">
                    <button className="btn btn-primary" type="submit">
                      {" "}
                      <i className="fa fa-search" aria-hidden="true" /> Search
                    </button>
                    <button className="btn btn-reset mb-0" type="submit">
                      {" "}
                      <i className="fas fa-light fa-arrow-rotate-right" /> Reset
                      Filters
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </StickyBox>
        </div>
        
    );
}
export default Sidebar; 