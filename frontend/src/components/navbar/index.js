import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="brand-name">
          <div className="brand-logo"></div>
          <div className="brand-main">TRIO APPARELS</div>
        </div>
      </div>
      <div className="navContent">
        <div className="nav-part">
          <NavLink to="/aboutus" className="link-about-us">
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
