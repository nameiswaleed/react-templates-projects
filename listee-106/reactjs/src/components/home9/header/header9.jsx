import React, { useState } from "react";
import HomeMenu from "../../common/HomeMenu";
import ListingMenu from "../../common/ListingMenu";
import PagesMenu from "../../common/PagesMenu";
import UserPagesMenu from "../../common/UserPagesMenu";
import BlogMenu from "../../common/BlogMenu";
import { LogoPng, LogoSvg } from "../../imagepath";

import { Link } from "react-router-dom";



const Header9 = () => {
  const [menu, setMenu] = useState(false);
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
    
  return (
    <>
      {/* Header */}
      <header className="header header-nine" onClick={(value) => toggleMobileMenu()}>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ul className="d-flex justify-content-start car-top-left">
                  <li className="d-flex align-items-center">
                    <Link to="/categories">Find an agent</Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link to="/signup">Become a dealer</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="selection-list">
                  <div className="head-contact">
                    <i className="feather-lock me-1" />
                    <Link to="/login">Login</Link>
                  </div>
                  <span>/</span>
                  <div className="head-contact">
                    <i className="feather-user me-1 " />
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#">
                <span className="bar-icon" onClick={() => onHandleMobileMenu()}>
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/index" className="navbar-brand logo">
                <img
                  src={LogoSvg}
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link to="/index" className="navbar-brand logo-small">
                <img src={LogoPng} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/index" className="menu-logo">
                  <img src={LogoPng} className="img-fluid" alt="Logo" />
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
              <ul className="navbar-nav main-nav my-2 my-lg-0">
                <HomeMenu activeMenu={"Business"} />
                <ListingMenu />
                <PagesMenu />
                <UserPagesMenu />
                <BlogMenu />
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="login-link">
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className="login-link">
                  <Link to="/login">Sign In</Link>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center block-e">
              <Link to="/categories" className="car-list-btn header-phone">
                <i className="feather-phone" />
                <span>+1 56622 49854</span>
              </Link>
              <Link to="/categories" className="car-list-btn">
                <i className="feather-plus-circle" />
                <span>Submit Property</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>

  );
}
export default Header9;