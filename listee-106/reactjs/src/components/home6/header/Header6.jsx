import React, { useEffect, useState } from "react";
import BlogMenu from "../../common/BlogMenu";
import HomeMenu from "../../common/HomeMenu";
import ListingMenu from "../../common/ListingMenu";
import PagesMenu from "../../common/PagesMenu";
import UserPagesMenu from "../../common/UserPagesMenu";
import { LogoPng, LogoWhiteSvg, SearchIcon } from "../../imagepath";
import { Link } from "react-router-dom";

const Header6 = () => {
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
  return (
    <header className={scroll?"header header-six fixed":"header header-six"} onClick={(value) => toggleMobileMenu()}>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="selection-list">
                <div className="head-contact-six">
                  <i className="feather-phone me-1"></i>
                  <Link to="#">+1 56622 49854</Link>
                </div>
                <div className="head-contact-six">
                  <i className="feather-mail me-1 "></i>
                  <Link to="#">listee@example.com</Link>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <ul className="d-flex justify-content-end car-top-left">
                <li className="d-flex align-items-center">
                  <Link to="/login">Already a User</Link>
                </li>
                <li className="d-flex align-items-center">
                  <Link to="/signup">Become a dealer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
            <Link to="/index" className="navbar-brand logo">
              <img src={LogoWhiteSvg} className="img-fluid" alt="Logo" />
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
              <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
                {" "}
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="navbar-nav main-nav my-2 my-lg-0">
              <HomeMenu activeMenu={"Car"} />
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
            <Link to="/categories" className="car-list-btn">
              <img src={SearchIcon} alt="" />
              <span>List a Car</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header6;
