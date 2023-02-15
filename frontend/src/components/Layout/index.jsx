import React from 'react';
import Navbar from '../navbar';
import NavbarMobile from '../navbar/NavbarMobile';

export default function Layout() {
  return (
    <div>
      <div className="navbar-main">
        <Navbar />
      </div>
      <div className="navbar-mobile">
        <NavbarMobile />
      </div>
    </div>
  );
}
