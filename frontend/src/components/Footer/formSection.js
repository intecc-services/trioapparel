import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function FormSection() {
    return (
        <div>
            <div className='form-section'>
                <img src="/images/footer.png" className='footer-image'></img>
                <div className='FooterText'>
                    <h1 style={{ fontWeight: "800", lineHeight: "108.23px", fontSize: "4rem" }}>Apply now</h1>
                    <h1 style={{ fontWeight: "800", fontSize: "4rem" }}>for TRIO</h1>
                </div>
                <div className="card-section">
                    <Card className="form-card" style={{
                        width: '30rem',
                        height: "29rem",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        opacity: "0.8"
                    }}>

                        <Card.Body>
                            <div>
                                <form>
                                    <input className='input-fields' type="text" placeholder='enter your name' />
                                    <br />
                                    <br />
                                    <input className='input-fields' type="email" placeholder='enter your Email' />
                                    <br />
                                    <br />
                                    <input className='input-fields' type="text" placeholder='enter your number' />
                                    <br />
                                    <br />
                                    <textarea className='text-area' placeholder='Write a comment' />
                                </form>
                            </div>
                            <Button variant="outline-dark" style={{marginTop: "5%",padding:"0",marginRight:"3%",fontWeight:"500",fontSize:"20px", width:"30%",height:"10%"}}>Clear</Button>
                            <Button variant="dark"style={{marginTop: "5%",padding:"0",marginRight:"3%",fontWeight:"500",fontSize:"20px", width:"30%",height:"10%"}}>Submit</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='contactInfoContainer' style={{backgroundColor:"black",height:"10rem"}} >
                <div className='image'>
                    <img src="/images/whatsapp.png" style={{paddingRight:"3%"}}/>
                    <h2>345554113 4135</h2>
                </div>
             
                <div className='email'>
                    <h2>Email: </h2>
                    <h6>trioapparels2011@gmail.com</h6>
                    <h6>sreenath.trioapparels@gmail.com</h6>
                </div>
                <div className='fax'>
                    <h2>Ph No/Fax: +91-80-4113 4135</h2>
                </div>
            </div>
        </div>
    );
}
export default FormSection;