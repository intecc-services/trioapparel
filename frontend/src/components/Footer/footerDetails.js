import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { TfiLinkedin } from 'react-icons/tfi';
import { SiTwitter } from 'react-icons/si';

import './styles.css';
function FooterDetails() {
  return (
    <div className="contactInfoContainer2">
      <div className="gMap">
        <iframe
          title="google map"
          style={{ paddingBottom: '20px' }}
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
      </div>

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
        <div style={{ paddingTop: '20%' }}>
          <a className="footer-a" href="/">
            Home
          </a>{' '}
          |
          <a className="footer-a" href="/">
            {' '}
            About Us{' '}
          </a>
          |
          <a className="footer-a" href="/">
            {' '}
            Product
          </a>
        </div>
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
        <div className="footer-extra-links">
          <div className="footer-extra-links-wrapper">
            <a href="/" className="footer-icons">
              <div className="footer-icon-wrapper">
                <ImFacebook className="icon-main" />
              </div>
            </a>
          </div>
          <div className="footer-extra-links-wrapper">
            <a href="/" className="footer-icons">
              <div className="footer-icon-wrapper">
                <TfiLinkedin className="icon-main" />
              </div>
            </a>
          </div>
          <div className="footer-extra-links-wrapper">
            <a href="/" className="footer-icons">
              <div className="footer-icon-wrapper">
                <SiTwitter className="icon-main" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterDetails;
