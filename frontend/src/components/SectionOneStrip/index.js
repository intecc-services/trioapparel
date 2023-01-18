import React from "react";
// import {CiGlobe} from 'react-icons/ci'
import { FaGlobe } from "react-icons/fa";
import "./styles.css";

const SectionOneStrip = () => {
  return (
    <div className="strip-1">
      <div className="strip-1-content">
        <div className="strip-icon">
          <span className="fill-icon">
            <FaGlobe color="white" size={"1.5rem"} />
          </span>
        </div>
        <div className="icon-content">TOP BRANDS</div>
      </div>
      <div className="strip-1-content">
        <div className="strip-icon">
          <span className="fill-icon">
            <FaGlobe color="white" size={"1.5rem"} />
          </span>
        </div>
        <div className="icon-content">BEST SERVICES</div>
      </div>
      <div className="strip-1-content">
        <div className="strip-icon">
          <span className="fill-icon">
            <FaGlobe color="white" size={"1.5rem"} />
          </span>
        </div>
        <div className="icon-content">LARGE COLLECTION</div>
      </div>
      <div className="strip-1-content">
        <div className="strip-icon">
          <span className="fill-icon">
            <FaGlobe color="white" size={"1.5rem"} />
          </span>
        </div>
        <div className="icon-content">HIGH TECH</div>
      </div>
      <div className="strip-1-content">
        <div className="strip-icon">
          <span className="fill-icon">
            <FaGlobe color="white" size={"1.5rem"} />
          </span>
        </div>
        <div className="icon-content">TRUSTED BRANDS</div>
      </div>
    </div>
  );
};

export default SectionOneStrip;
