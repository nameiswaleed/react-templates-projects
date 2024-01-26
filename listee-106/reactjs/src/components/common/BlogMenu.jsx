import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogMenu = ({ activesMenus }) => {
  const [menu5, setMenu5] = useState(false);
  return (
    <li className={activesMenus === "/blog-list" || activesMenus === "/blog-grid" ||activesMenus === "/blog-details" ||activesMenus === "/blog-list-sidebar" ||activesMenus === "/blog-grid-sidebar" ? "has-submenu active" : "has-submenu"} >
      <Link to="" className={menu5 ? 'submenu' : ""}>
        Blog <i className="fas fa-chevron-down" onClick={() => setMenu5(!menu5)}></i>
      </Link>
      <ul className={menu5 ? "submenu d-block" : "submenu"}>
        <li className={activesMenus === "/blog-list" ? "active" : ""}>
          <Link to="/blog-list">Blog List</Link>
        </li>
        <li className={activesMenus === "/blog-grid" ? "active" : ""}>
          <Link to="/blog-grid">Blog Grid</Link>
        </li>
        <li className={activesMenus === "/blog-details" ? "active" : ""}>
          <Link to="/blog-details">Blog Details</Link>
        </li>
        <li className={activesMenus === "/blog-list-sidebar" ? "active" : ""}>
          <Link to="/blog-list-sidebar">Blog List Sidebar</Link>
        </li>
        <li className={activesMenus === "/blog-grid-sidebar" ? "active" : ""}>
          <Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link>
        </li>
      </ul>
    </li>
  );
};

export default BlogMenu;
