import React from "react";
import "./styles.css";
import { infra } from "../../general";

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <div className="infra-1">
        <div className="infra-heading">Trio Apparels Infrastructure</div>

        <div className="infra-flex">
          <div className="infra-flex-1">
            <div className="infra-img1">
              <img
                src="/images/infra-grid1.png"
                alt="not found"
                className="img-infra-tag1"
              />
            </div>
          </div>
          <div className="infra-flex-2">
            <div className="infra-img2">
              <img
                src="/images/infra-grid2.png"
                alt="not found"
                className="img-infra-tag2"
              />
            </div>
            <div className="infra-img3">
              <img
                src="/images/infra-grid3.png"
                alt="not found"
                className="img-infra-tag3"
              />
            </div>
          </div>
          <div className="infra-flex-3">
            <div className="infra-img4">
              <img
                src="/images/infra-grid4.png"
                alt="not found"
                className="img-infra-tag4"
              />
            </div>
            <div className="infra-img5">
              <img
                src="/images/infra-grid5.png"
                alt="not found"
                className="img-infra-tag5"
              />
            </div>
          </div>
        </div>

        <div className="infra-text">
          <div className="infra-text-wrap">
            <span className="infra-span">Area Covered:</span> 32,000 Sq. ft.<br/> 
            <span className="infra-span">Total No. of Machines:</span> 320 Machines
            <br />
            <span className="infra-span">Special Machines:</span> Single Needle UBT Machines, Collar & Cuff Turning,
            Pocket Welt, Button Wrapping, Needle Detector <br/>
            <span className="infra-span">Product Manufactured:</span>
            Readymade Woven Shirts - for Men, Boys and Kids <br/>
            <span className="infra-span">Capacity:</span> 70000
            Garments per month
            <br />
          </div>
        </div>
      </div>
      <div className="infra-2">
        <div className="infra-2-content">
          {infra.map((item) => {
            return <div className="infra-2-item">{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
