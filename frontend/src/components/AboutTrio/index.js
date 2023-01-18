import React from "react";
import "./styles.css";
import Heading from "./Heading";
import MyCarousel from "./MyCarousel";
import Info from "./Info";
const AboutTrio = () => {
  return (
    <div>
      <div className="about-1">
        <Heading />
      </div>
      <div className="about-2">
        <MyCarousel />
      </div>
      <div className="info-main">
        <Info />
      </div>
    </div>
  );
};

export default AboutTrio;
