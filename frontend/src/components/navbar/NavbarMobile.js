import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import "./styles.css";
import { navbarContents } from "../../general";
import { NavLink } from "react-router-dom";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <>
    <div className="navbar-mobile-main">
      <div className="navbar-mobile-flex1">
        {click ? (
          <div className="nav-icon-wrapper">
            <CgClose
              color="white"
              size={"1.5rem"}
              className="bars"
              onClick={() => setClick(!click)}
            />
          </div>
        ) : (
          <div className="nav-icon-wrapper">
            <FaBars
              color="white"
              size={"1.5rem"}
              className="bars"
              onClick={() => setClick(!click)}
            />
          </div>
        )}
      </div>
      <div className="brand-mob">
        <NavLink to="/" className="link-home-mobile" style={{ color: "black" }}>
          <div className="brand-name-mob">
            <div className="brand-logo-mob"></div>
            <div className="brand-main-mob">TRIO APPARELS</div>
          </div>
        </NavLink>
      </div>
    </div>
    {click ? (
          <div className="drop-down">
            {navbarContents.map((item) => {
              return (
                <div className="nav-mob-item">
                  <NavLink className="nav-link" to={item.dest}>
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
    </>
  );
};

export default NavbarMobile;
