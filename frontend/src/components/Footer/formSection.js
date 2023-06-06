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
      quantity:formData['quantity']
    };
    emailjs.send("service_lf5lnej","template_ek750cd", templateparam, 'O6ffblOqPJKS8EoIE' )
        .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
  };
  
  return (
    <div>
      <div className="form-section">
        <img src="/images/footer.png" className="footer-image"></img>
        <div className="footer-overlay"></div>
        <div className="footer-section-content-main">
          <div className="footer-section-content">
            <div className="FooterText">
              <h1 className="apply-now">Inquiry Form</h1>
              <h1 className="for-trio">For Orders</h1>
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
                        onChange={handleChange}
                        name = "number"
                        value = {formData.number || ""}
                      />
                      <br />
                      <br />
                      <input
                      type='number'
                        className="text-area"
                        placeholder="Enter Quantity"
                        value={formData.quantity || 0}
                        onChange = {handleChange}
                        name = "quantity"
                      />
                    <Button variant="outline-dark" className="form-button">
                    Clear
                  </Button>
                 
                  <Button onClick={handleSubmit} variant="dark" className="form-button">
                    Submit
                  </Button>
                    </form>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormSection;
