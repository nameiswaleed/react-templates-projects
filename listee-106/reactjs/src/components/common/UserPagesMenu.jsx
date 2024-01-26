import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserPagesMenu = ({ activesMenu }) => {
  const [menu4, setMenu4] = useState(false);
  return (
    <li className={activesMenu=== "/dashboard" || activesMenu=== "/profile" || activesMenu=== "/add-listing" || activesMenu=== "/reviews" || activesMenu=== "/messages" || activesMenu=== "/my-listing" || activesMenu=== "/bookmarks" ? "has-submenu active" : "has-submenu"}>
      <Link to="" className={menu4 ? 'submenu' : ""}>
        User Pages <i className="fas fa-chevron-down" onClick={() => setMenu4(!menu4)}></i>
      </Link>
      <ul className={menu4 ? "submenu d-block" : "submenu"}>
        <li className={activesMenu === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={activesMenu === "/profile" ? "active" : ""}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={activesMenu === "/my-listing" ? "active" : ""}>
          <Link to="/my-listing">My Listing</Link>
        </li>
        <li className={activesMenu === "/bookmarks" ? "active" : ""}>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
        <li className={activesMenu === "/messages" ? "active" : ""}>
          <Link to="/messages">Messages</Link>
        </li>
        <li className={activesMenu === "/reviews" ? "active" : ""}>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className={activesMenu === "/add-listing" ? "active" : ""}>
          <Link to="/add-listing">Add Listing</Link>
        </li>
      </ul>
    </li>
  );
};

export default UserPagesMenu;
