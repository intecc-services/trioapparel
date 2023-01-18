import React from "react";
import "./styles.css";

const Clientele = () => {
  return (
    <div className="clientele">
      <div className="clientele-bg">
        <img
          src="/images/clientele-bg.png"
          alt="not found"
          className="tag-clientele-pic"
        />
        <div className="overlay-clientele"></div>
      </div>

      <div className="clientele-main-content">
        <div className="clientele-heading">CLIENTELE</div>
        <div className="clientele-content">
          <div className="clientele-pic">
            <img
              src="/images/clientele1.png"
              alt="not found"
              className="clientele1-pic"
            />
          </div>
          <div className="clientele-text">
            The satisfied lineup of Indian clients of Trio Apparels who are also
            known internationally
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientele;
