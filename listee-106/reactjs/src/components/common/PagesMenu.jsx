import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PagesMenu = ({ activeMenus}) => {
  
  

  const [menu3, setMenu3] = useState(false);
  return (
    <li className={activeMenus=== "/about"|| activeMenus=== "/service-details" || activeMenus=== "/pricing" || activeMenus=== "/faq"|| activeMenus=== "/gallery" || activeMenus=== "/categories" || activeMenus=== "/howitworks" || activeMenus=== "/terms-condition" || activeMenus=== "/privacy-policy" ? "has-submenu active" : "has-submenu"}>
      <Link to="" className={menu3 ? 'submenu' : ""}>
        Pages <i className="fas fa-chevron-down" onClick={() => setMenu3(!menu3)}></i>
      </Link>
      <ul className={menu3 ? "submenu d-block" : "submenu"}>
        <li className={activeMenus=== "/about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={activeMenus=== "/service-details" ? "active" : ""}>
          <Link to="/service-details">Service Details </Link>
        </li>
        <li className={activeMenus=== "/pricing" ? "active" : ""}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className={activeMenus=== "/faq" ? "active" : ""}>
          <Link to="/faq">FAQ</Link>
        </li>
        <li className={activeMenus=== "/gallery" ? "active" : ""}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className={activeMenus=== "/categories" ? "active" : ""}>
          <Link to="/categories">Category</Link>
        </li>
        <li className={activeMenus=== "/howitworks" ? "active" : ""}>
          <Link to="/howitworks">How it Works</Link>
        </li>
        <li className={activeMenus=== "/terms-condition" ? "active" : ""}>
          <Link to="/terms-condition">Terms & Conditions</Link>
        </li>
        <li className={activeMenus=== "/privacy-policy" ? "active" : ""}>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li className={activeMenus=== "/error-404" ? "active" : ""}>
          <Link to="/error-404">404 Error</Link>
        </li>
        <li className={activeMenus=== "/error-500" ? "active" : ""}>
          <Link to="/error-500">500 Error</Link>
        </li>
      </ul>
    </li>
  );
};

export default PagesMenu;
