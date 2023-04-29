import React from "react";
import { MdStar } from "react-icons/md";
import "./styles.css";
import { BsShieldFillCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SectionOneContact = () => {
  return (
    <div className="section-one-contact">
      <div className="section-one-part-1">
       <NavLink to='/aboutus'><button className="btn-contact">Contact Us</button></NavLink> 
      </div>
      <div className="section-one-part-2">
        <div className="bs-icon">
          <BsShieldFillCheck
            color="#00D856"
            size={"2rem"}
            className="icon-section-one"
          />
        </div>
        <NavLink to="/whytrio" style={{"textDecoration" : "none "}}><p className="why-trio-p">Why Trio?</p></NavLink>
      </div>
    </div>
  );
};

export default SectionOneContact;
