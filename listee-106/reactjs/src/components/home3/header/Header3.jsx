import React, { useEffect } from "react";
import BlogMenu from "../../common/BlogMenu";
import HomeMenu from "../../common/HomeMenu";
import ListingMenu from "../../common/ListingMenu";
import PagesMenu from "../../common/PagesMenu";
import UserPagesMenu from "../../common/UserPagesMenu";
import { LogoPng } from "../../imagepath";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header3 = () => {
  const [scroll, setScroll] = useState(false);
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
};

const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
};
const [menu, setMenu] = useState(false);
    const toggleMobileMenu = () => {
        setMenu(!menu)
    }
    
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 85);
   });
   return () => window.removeEventListener('scroll', () => {
    setScroll(window.scrollY > 85);
  });

 }, []);
  return (
    <header className={scroll?"header header-eight fixed":"header header-eight"} onClick={(value) => toggleMobileMenu()}>
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
              <img src={LogoPng} className="img-fluid" alt="Logo" />
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
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="navbar-nav main-nav my-2 my-lg-0">
              <HomeMenu activeMenu={"Tour"} />
              <ListingMenu />
              <PagesMenu />
              <UserPagesMenu />
              <BlogMenu />
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center block-e">
            <div className="cta-btn">
              <Link to="/login" className="btn">
                sign in /
              </Link>
              <Link to="/signup" className="btn ms-1">
                {" "}
                register
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header3;
