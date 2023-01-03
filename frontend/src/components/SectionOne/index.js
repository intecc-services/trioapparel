import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
// import {MdStars} from 'react-icons/md'
import { AiFillStar } from "react-icons/ai";

import "./styles.css";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="section-one-1">
        <h2 className="section-one-1-trio">TRIO APPARELS</h2>
        <h1 className="section-one-1-head">Fashion Up Your Look</h1>
        <p className="section-one-1-p">
          Trio Apparels India Private Limited came into being in January 2011
          with the initial idea seeded by our Founder Chairman Late Sri
          Jagannath Naidu
        </p>
        <div className="section-one-contact">
          <div className="section-one-part-1">
            <button className="btn-contact">Contact Us</button>
          </div>
          {/* <img src="/images/icon1.png" alt='not found'/> */}
          <div className="section-one-part-2">
            <BsShieldFillCheck
              color="#00D856"
              size={"2rem"}
              className="icon-section-one"
            />
            <p className="why-trio-p">Why Trio?</p>
          </div>
        </div>
      </div>
      <div className="section-one-2">
        <img
          className="img-section-one"
          src="/images/bg1.png"
          alt="not found"
        />
      </div>
      <div className="section-one-3">
        <div className="section-one-3-1">
          <div className="fill-icon-sec-3-1">
            <AiFillStar color="white" className="icon-sec-3-1" size={'1.5rem'}/>
          </div>
          <div className="icon-sec-content">
            A1 Product
          </div>
        </div>
        <div className="section-one-3-2">
          <div className="fill-icon-sec-3-2">
            <AiFillStar color="white" className="icon-sec-3-1" size={'1.5rem'}/>
          </div>
          <div className="icon-sec-content">
            VERIFIED STYLES
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
