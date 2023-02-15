import React from 'react';
import Infrastructure from '../components/Infrastructure';
import '../App.css';
import Navbar from '../components/navbar';
import NavbarMobile from '../components/navbar/NavbarMobile';

export default function infrastructure() {
  return (
    <div>
      <div className="navbar-main">
        <Navbar />
      </div>
      <div className="navbar-mobile">
        <NavbarMobile />
      </div>
      <Infrastructure />
    </div>
  );
}
