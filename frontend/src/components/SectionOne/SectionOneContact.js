import React from "react";
import { MdStar } from "react-icons/md";
import "./styles.css";
import { BsShieldFillCheck } from "react-icons/bs";

const SectionOneContact = () => {
  return (
    <div className="section-one-contact">
      <div className="section-one-part-1">
        <button className="btn-contact">Contact Us</button>
      </div>
      <div className="section-one-part-2">
        <div className="bs-icon">
          <BsShieldFillCheck
            color="#00D856"
            size={"2rem"}
            className="icon-section-one"
          />
        </div>
        <p className="why-trio-p">Why Trio?</p>
      </div>
    </div>
  );
};

export default SectionOneContact;
