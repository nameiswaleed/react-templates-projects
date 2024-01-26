import React from "react";
import { Link } from "react-router-dom";
import {
  Home01,
  Home02,
  Home03,
  Home04,
  Home05,
  Home06,
  Home07,
  Home08,
  Home09,
} from "../imagepath";
import { useState } from "react";

const HomeMenu = ({ activeMenu }) => {
  const [menu1, setMenu1] = useState(false);
  return (
    <li className="has-submenu megamenu ">
      <Link to="" className={menu1 ? 'submenu' : ""}>
        Home <i className="fas fa-chevron-down" onClick={() => setMenu1(!menu1)}></i>
      </Link>
      <ul  className={menu1 ? "submenu mega-submenu d-block" : "submenu mega-submenu"}>
        <li>
          <div className="megamenu-wrapper">
            <div className="row">
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "classNameified"
                      ? "single-demo active"
                      : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index">
                      <img src={Home01} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index">classNameified Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Wedding"
                      ? "single-demo active"
                      : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-2">
                      <img src={Home02} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-2">Wedding Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Tour" ? "single-demo active" : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-3">
                      <img src={Home03} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-3">Tour Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Workspace"
                      ? "single-demo active"
                      : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-4">
                      <img src={Home04} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-4">Workspace Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Business"
                      ? "single-demo active"
                      : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-5">
                      <img src={Home05} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-5">Business Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Car" ? "single-demo active" : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-6">
                      <img src={Home06} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-6">Car Rentals Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Restaurant"
                      ? "single-demo active"
                      : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-7">
                      <img src={Home07} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-7">Restaurant Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "Job" ? "single-demo active" : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-8">
                      <img src={Home08} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-8">Job Listing Home</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div
                  className={
                    activeMenu === "RealEstate"
                      ? "single-demo active"
                      : "single-demo"
                  }
                >
                  <div className="demo-img">
                    <Link to="/index-9">
                      <img src={Home09} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <div className="demo-info">
                    <Link to="/index-9">Realestate Home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default HomeMenu;
