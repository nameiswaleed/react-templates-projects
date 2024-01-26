import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogMenu from "../../common/BlogMenu";
import HomeMenu from "../../common/HomeMenu";
import ListingMenu from "../../common/ListingMenu";
import PagesMenu from "../../common/PagesMenu";
import UserPagesMenu from "../../common/UserPagesMenu";
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
  LogoSvg,
} from "../../imagepath";

const Header = ({parms}) => {
  console.log(parms,"header");

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
  return (
    <header className="header" onClick={(value) => toggleMobileMenu()}>
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
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="main-nav">
              <HomeMenu activeMenu={"Classified"} />
              <ListingMenu activeMenu={parms}/>
              <PagesMenu activeMenus={parms}/>
              <UserPagesMenu />
              <BlogMenu activesMenus={parms}/>
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
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-reg" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to="/login">
                {" "}
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link header-login add-listing"
                to="/add-listing"
              >
                <i className="fa-solid fa-plus"></i> Add Listing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
