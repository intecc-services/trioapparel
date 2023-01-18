import React from "react";
import { MdStars } from "react-icons/md";
import "./styles.css";
import SectionOneContact from "./SectionOneContact";

const SectionOneOne = () => {
  return (
    <div className="section-one-1">
      <h2 className="section-one-1-trio">TRIO APPARELS</h2>
      <h1 className="section-one-1-head">Fashion Up Your Look</h1>
      <p className="section-one-1-p">
        Trio Apparels India Private Limited came into being in January 2011 with
        the initial idea seeded by our Founder Chairman Late Sri Jagannath Naidu
      </p>
        {/* <img src="/images/icon1.png" alt='not found'/> */}
        <div className="section-one-contact-wrapper"><SectionOneContact/></div>
    </div>
  );
};

export default SectionOneOne;
