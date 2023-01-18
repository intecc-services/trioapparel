import React from "react";
import "./styles.css";
import { MdStars } from "react-icons/md";

const SectionOneThree = () => {
  return (
    <div className="section-one-3">
      <div className="section-one-3-1">
        <MdStars color="#FDA015" className="icon-sec-3-1" size={"4rem"} />
        <div className="icon-sec-content">A1 Product</div>
      </div>
      <div className="section-one-3-2">
        <MdStars color="#FDA015" className="icon-sec-3-1" size={"4rem"} />
        <div className="icon-sec-content">VERIFIED STYLES</div>
      </div>
    </div>
  );
};

export default SectionOneThree;
