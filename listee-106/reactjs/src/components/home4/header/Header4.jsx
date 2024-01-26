import React from "react";
import { Link } from "react-router-dom";
import BlogMenu from "../../common/BlogMenu";
import HomeMenu from "../../common/HomeMenu";
import ListingMenu from "../../common/ListingMenu";
import PagesMenu from "../../common/PagesMenu";
import UserPagesMenu from "../../common/UserPagesMenu";
import { LogoSvg } from "../../imagepath";

const Header4 = () => {
  return (
    <header className="header header-four">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
            <Link to="index.html" className="navbar-brand logo">
              <img src={LogoSvg} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="index.html" className="menu-logo">
                <img src={LogoSvg} className="img-fluid" alt="Logo" />
              </Link>
              <Link
                id="menu_close"
                className="menu-close"
                to="javascript:void(0);"
              >
                {" "}
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="main-nav">
              <HomeMenu activeMenu={"Workspace"} />
              <ListingMenu />
              <PagesMenu />
              <UserPagesMenu />
              <BlogMenu />
              <li>
                <Link to="contact.html">Contact</Link>
              </li>
              <li className="login-link">
                <Link to="signup.html">Sign Up</Link>
              </li>
            </ul>
            <ul className="nav header-navbar-rht nav">
              <li className="nav-item">
                <Link className="nav-link header-reg" to="signup.html">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="login.html">
                  {" "}
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="add-listing.html">
                  Add Listing <i className="fa-solid fa-plus"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header4;
