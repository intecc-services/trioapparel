import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
// import {MdStars} from 'react-icons/md'
import { AiFillStar } from "react-icons/ai";
import { MdStars } from "react-icons/md";

import "./styles.css";
import SectionOneThree from "./SectionOneThree";
import SectionOneTwo from "./SectionOneTwo";
import SectionOneOne from "./SectionOneOne";

const SectionOne = () => {
  return (
    <div className="section-one">
      <SectionOneOne />
      <div className="section-one-resp">
        <SectionOneTwo />
        <SectionOneThree />
      </div>
      <div className="section-one-desktop">
        <SectionOneTwo />
        <SectionOneThree />
      </div>
    </div>
  );
};

export default SectionOne;
