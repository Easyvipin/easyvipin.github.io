import React from "react";
import { Link } from "react-router-dom";

const Navlinks = ({ toggleMenu }) => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" onClick={toggleMenu}>
            ABOUT &#x1F3D8;
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" onClick={toggleMenu}>
            BLOG &#x270D;
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/work" onClick={toggleMenu}>
            WORK &#x1F5A5;
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" onClick={toggleMenu}>
            CONTACT &#x1F4DE;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
