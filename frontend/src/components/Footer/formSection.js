import React, { useState, useEffect } from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

function FormSection() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
      setFormData(data);
    }
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData['email']);
    var templateparam = {
      name: formData['name'],
      email: formData['email'],
    };
    emailjs.send('XXXXX', 'XXXXXXX', templateparam, 'XXXXXX').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

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
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                      />
                      <br />
                      <br />
                      <input
                        className="input-fields"
                        type="email"
                        placeholder="enter your Email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
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
                      <Button variant="outline-dark" className="form-button">
                        Clear
                      </Button>

                      <Button
                        onClick={handleSubmit}
                        variant="dark"
                        className="form-button"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
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
              <h6 className="footer-text-sec">
                sreenath.trioapparels@gmail.com
              </h6>
            </div>
            <div className="fax">
              <h2 className="fax-heading">
                Ph No/Fax: <span className="fax-contact">+91-80-4113 4135</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormSection;
