import React, { useEffect, useState } from 'react'
import HomeMenu from '../../common/HomeMenu'
import ListingMenu from '../../common/ListingMenu'
import PagesMenu from '../../common/PagesMenu'
import UserPagesMenu from '../../common/UserPagesMenu'
import BlogMenu from '../../common/BlogMenu'
import { logo_new } from '../../imagepath'
import { Link } from 'react-router-dom'

const Header7 = () => {
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
    <>
      {/* Header */}
      <header className={scroll?"header header-four header-seven fixed":"header header-four header-seven"} onClick={(value) => toggleMobileMenu()}>
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
                <img
                  src={logo_new}
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/index" className="menu-logo">
                  <img
                    src={logo_new}
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <HomeMenu activeMenu={"hotel"} />
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
              <ul className="nav header-navbar-rht nav">
                <li className="nav-item">
                  <Link className="nav-link header-login" to="/login">
                    {" "}
                    <i className="fa-solid fa-plus" />
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-login" to="/add-listing">
                    {" "}
                    <i className="fa-solid fa-plus" /> Add Listing{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>

  )
}

export default Header7;