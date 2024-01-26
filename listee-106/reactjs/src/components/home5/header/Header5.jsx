import React from "react";
import { Link } from "react-router-dom";
import BlogMenu from "../../common/BlogMenu";
import HomeMenu from "../../common/HomeMenu";
import ListingMenu from "../../common/ListingMenu";
import PagesMenu from "../../common/PagesMenu";
import UserPagesMenu from "../../common/UserPagesMenu";
import { LogoSvg } from "../../imagepath";

const Header5 = () => {
  return (
    <header className="header header-four">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#">
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
                to="#"
              >
                {" "}
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="main-nav">
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
            </ul>
          </div>
          <ul className="nav header-navbar-rht nav">
            <li className="nav-item">
              <div className="cta-btn">
                <Link to="/login" className="btn">
                  <i className="feather-user"></i> sign in /
                </Link>
                <Link to="/signup" className="btn ms-1">
                  {" "}
                  register
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header5;
