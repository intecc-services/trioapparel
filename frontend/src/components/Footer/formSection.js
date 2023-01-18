import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

function FormSection() {
  return (
    <div>
      <div className="form-section">
        <img src="/images/footer.png" className="footer-image"></img>
        <div className="footer-overlay"></div>
        <div className="footer-section-content-main">
          <div className="footer-section-content">
            <div className="FooterText">
              <h1 className="apply-now">Apply now</h1>
              <h1 className="for-trio">for TRIO</h1>
            </div>
            <div className="card-section">
              <Card className="form-card">
                <Card.Body>
                  <div>
                    <form>
                      <input
                        className="input-fields"
                        type="text"
                        placeholder="enter your name"
                      />
                      <br />
                      <br />
                      <input
                        className="input-fields"
                        type="email"
                        placeholder="enter your Email"
                      />
                      <br />
                      <br />
                      <input
                        className="input-fields"
                        type="text"
                        placeholder="enter your number"
                      />
                      <br />
                      <br />
                      <textarea
                        className="text-area"
                        placeholder="Write a comment"
                      />
                    </form>
                  </div>
                  <Button variant="outline-dark" className="form-button">
                    Clear
                  </Button>
                  <Button variant="dark" className="form-button">
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="contactInfoContainer">
            <div className="image">
              <div className="whatsapp-image-div">
                <img src="/images/whatsapp.png" className="whatsapp-icon" />
              </div>
              {/* <BsWhatsapp color={"white"} className='whatsapp-icon'/> */}
              <div className="whatsapp-contact">345554113 4135</div>
            </div>

            <div className="email">
              <h2 className="email-footer-sec">Email: </h2>
              <h6 className="footer-text-sec">trioapparels2011@gmail.com</h6>
              <h6 className="footer-text-sec">sreenath.trioapparels@gmail.com</h6>
            </div>
            <div className="fax">
              <h2 className="fax-heading">Ph No/Fax: <span className="fax-contact">+91-80-4113 4135</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormSection;
