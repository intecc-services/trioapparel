import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContent">
        <div className="brand">
          <NavLink to="/" className="link-home" style={{ color: "black" }}>
            <div className="brand-name">
              <div className="brand-logo"></div>
              <div className="brand-main">TRIO APPARELS</div>
            </div>
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/aboutus" className="link-about-us">
            About us
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/product" className="link-product">
            Product
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/oarsmen" className="link-client">
            Oarsmen
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="/infrastructure" className="link-career">
            Infrastructure
          </NavLink>
        </div>
        <div className="nav-part">
          <NavLink to="./whytrio" className="link-career">
            Why Trio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
