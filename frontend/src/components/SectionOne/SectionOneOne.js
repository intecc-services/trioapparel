import React from "react";
import { MdStars } from "react-icons/md";
import "./styles.css";
import SectionOneContact from "./SectionOneContact";

const SectionOneOne = () => {
  return (
    <div className="section-one-1">
      <div className="sec-one-brand-color">
        {/* <div className="brand-color-sec"></div> */}
        <h2 className="section-one-1-trio">TRIO APPARELS</h2>
      </div>
      <h1 className="section-one-1-head">Fashion Up Your Look</h1>
      <p className="section-one-1-p">
        Trio Apparels India Private Limited came into being in January 2011 with
        the initial idea seeded by our Founder Chairman Late Sri Jagannath Naidu
      </p>
      {}
      <div className="section-one-contact-wrapper">
        <SectionOneContact />
      </div>
    </div>
  );
};

export default SectionOneOne;
