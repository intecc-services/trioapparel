import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import './styles.css';
import { navbarContents } from '../../general';
import { NavLink } from 'react-router-dom';

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="navbar-mobile-main">
      {click ? (
        <div className="nav-icon-wrapper">
          <CgClose
            color="white"
            size={'1.5rem'}
            className="bars"
            onClick={() => setClick(!click)}
          />
        </div>
      ) : (
        <div className="nav-icon-wrapper">
          <FaBars
            color="white"
            size={'1.5rem'}
            className="bars"
            onClick={() => setClick(!click)}
          />
        </div>
      )}
      {click ? (
        <div className="drop-down">
          {navbarContents.map((item) => {
            return (
              <div className="nav-mob-item">
                <NavLink className="nav-link" to={item}>
                  {item}
                </NavLink>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavbarMobile;
