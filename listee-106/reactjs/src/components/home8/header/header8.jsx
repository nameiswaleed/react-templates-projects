import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Home01, Home02, Home03, Home04, Home05, Home06, Home07, Home08, Home09, LogoSvg } from "../../imagepath";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




const Header8=()=>{
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 85);
   });
   return () => window.removeEventListener('scroll', () => {
    setScroll(window.scrollY > 85);
  });

 }, []);

 const onHandleMobileMenu = () => {
  var root = document.getElementsByTagName("html")[0];
  root.classList.add("menu-opened");
};

const onhandleCloseMenu = () => {
  var root = document.getElementsByTagName("html")[0];
  root.classList.remove("menu-opened");
};

  const toggleMobileMenu = () => {
      setMenu(!menu)
  }
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return(
        <>
  {/* Header */}
  <header className={scroll?"header header-eight fixed":"header header-eight"} onClick={(value) => toggleMobileMenu()}>
    <div className="container">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </Link>
          <Link to="/index" className="navbar-brand logo">
            <img src={LogoSvg} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/index" className="menu-logo">
              <img src={LogoSvg} className="img-fluid" alt="Logo" />
            </Link>
            <Link
              id="menu_close"
              className="menu-close"
              to="#"
              onClick={() => onhandleCloseMenu()}
            >
              {" "}
              <i className="fas fa-times" />
            </Link>
          </div>
          <ul className="main-nav">
            <li className="has-submenu megamenu active">
              <Link to="/index">
                <i className="feather-home" /> Home
              </Link>
              <ul className="submenu mega-submenu">
                <li>
                  <div className="megamenu-wrapper">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index">
                              <img
                                src={Home01}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index">Classified Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="index-2">
                              <img
                                src={Home02}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-2">Wedding Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index-3">
                              <img
                                src={Home03}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-3">Tour Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index-4">
                              <img
                                src={Home04}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-4">Workspace Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index-5">
                              <img
                                src={Home05}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-5">Business Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index-6">
                              <img
                                src={Home06}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-6">Car Rentals Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index-7">
                              <img
                                src={Home07}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-7">Restaurant Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo active">
                          <div className="demo-img">
                            <Link to="/index-8">
                              <img
                                src={Home08}
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link to="/index-8">Job Listing Home</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="single-demo">
                          <div className="demo-img">
                            <Link to="/index-9">
                              <img
                                src={Home09}
                                className="img-fluid"
                                alt="img"
                              />
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
            <li className="has-submenu">
              <Link to="">
                <i className="feather-search" /> Find Jobs
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/listing-grid">Listing Grid</Link>
                </li>
                <li>
                  <Link to="/listing-grid-sidebar">Listing Grid Sidebar</Link>
                </li>
                <li>
                  <Link to="/listing-list-sidebar">Listing List Sidebar</Link>
                </li>
                <li>
                  <Link to="/listingmap-list">Listing List Map</Link>
                </li>
                <li>
                  <Link to="/listingmap-grid">Listing Grid Map</Link>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <Link to="">
                <i className="feather-list" /> Services{" "}
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/service-details">Service Details </Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/categories">Category</Link>
                </li>
                <li>
                  <Link to="/howitworks">How it Works</Link>
                </li>
                <li>
                  <Link to="/terms-condition">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/error-404">404 Error</Link>
                </li>
                <li>
                  <Link to="/error-500">500 Error</Link>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <Link to="">
                <i className="feather-edit" /> Blog{" "}
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/blog-list">Blog List</Link>
                </li>
                <li>
                  <Link to="/blog-grid">Blog Grid</Link>
                </li>
                <li>
                  <Link to="/blog-details">Blog Details</Link>
                </li>
                <li>
                  <Link to="/blog-list-sidebar">Blog List Sidebar</Link>
                </li>
                <li>
                  <Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <Link to="">
                <i className="feather-info" /> About
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/my-listing">My Listing</Link>
                </li>
                <li>
                  <Link to="/bookmarks">Bookmarks</Link>
                </li>
                <li>
                  <Link to="/messages">Messages</Link>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                  <Link to="/add-listing">Add Listing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">
                <i className="feather-send" /> Contact
              </Link>
            </li>
            <li className="login-link">
              <Link to="/login"> Login</Link>
            </li>
            <li className="login-link">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          <li className="nav-item">
            <Link className="nav-link header-reg" to="/login">
              <i className="feather-unlock" /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link header-reg" to="/signup">
              <i className="feather-user" /> Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link header-login add-listing"
              to="/add-listing"
            >
              {" "}
              Post a job
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  {/* /Header */}
</>

    );
}
export default Header8;