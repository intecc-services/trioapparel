import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <div>

        </div>
        <div className="brand-name">
          TRIO APPARELS
        </div>
      </div>
      <div className="navContent">
        <div className="nav-part">
          <NavLink to="/" className="link-about-us">
            About us
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/" className="link-product">
            Product
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/" className="link-client">
            Clientele
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/" className="link-career">
            Careers
          </NavLink>
        </div>
        <div className="nav-part-home">
          <NavLink to="/" className="link-home">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
