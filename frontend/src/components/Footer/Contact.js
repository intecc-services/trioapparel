import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div className="contactInfoContainer">
      <div className="image">
        <div className="whatsapp-image-div">
          <img src="/images/whatsapp.png" className="whatsapp-icon" />
        </div>
        <div className="whatsapp-contact">+91-80-4113 4135</div>
      </div>

      <div className="email">
        <h2 className="email-footer-sec">Email: </h2>
        <h6 className="footer-text-sec">trioapparels2011@gmail.com</h6>
        <h6 className="footer-text-sec">sreenath.trioapparels@gmail.com</h6>
      </div>
      <div className="fax">
        <h2 className="fax-heading">
          Ph No/Fax: <span className="fax-contact">+91-80-4113 4135</span>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
