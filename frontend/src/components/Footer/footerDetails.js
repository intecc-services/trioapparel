import React from "react";
import { ImFacebook } from "react-icons/im";
import { TfiLinkedin } from "react-icons/tfi";
import { SiTwitter } from "react-icons/si";

import "./styles.css";
import Contact from "./Contact";
function FooterDetails() {
  return (
    <>
      <Contact />

      <div className="contactInfoContainer2" id="contact">
        <div className="gMap">
          <iframe
            title="google map"
            style={{ paddingBottom: "20px" }}
            width="300"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=382&amp;height=297&amp;hl=en&amp;q=TRIO%20APPARELS,%20Hosapalaya,%20Muneshwara%20Nagar,%20Bengaluru,%20Karnataka%20560068%20Bengaluru%20+(Location)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>

          <h6 className="gMap-font-color">
            ©copyright 2022, All rights reserved
          </h6>
          <p className="mob-thankyou">Designed and developed by Intecc</p>
        </div>

        <div className="footer-main-content">
          <div className="footer-1-content">
            <div className="regOffice">
              <h2>Registered Office </h2>
              <br />
              <h6>
                # 174, VNBCS Layout, 3rd Cross,
                <br />
                West of Chord Road,
                <br />
                Bengaluru - 560086
                <br />
                Karnataka State,
                <br />
                INDIA.
              </h6>
            </div>
            <div className="branchOffice">
              <h2 className="branch-office">Branch Office: </h2>
              <br />
              <h6 className="branch-addr">
                6 th Floor, Gayathri Towers,
                <br />
                A-60, Vengal Rao Nagar,
                <br />
                Hyderabad -38
                <br />
              </h6>
            </div>
          </div>
          <div className="footer-2-content">
            <div className="footer-nav-links">
              <a className="footer-a" href="/">
                Home
              </a>{" "}
              |
              <a className="footer-a" href="/aboutus">
                {" "}
                About Us{" "}
              </a>
              |
              <a className="footer-a" href="/product">
                {" "}
                Product
              </a>
            </div>
            <div className="thankYou">Designed and Developed by Intecc</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FooterDetails;
