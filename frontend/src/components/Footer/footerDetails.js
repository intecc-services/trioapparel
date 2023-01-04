import React from 'react'
import './styles.css'
function FooterDetails() {
    return (
        <div className='contactInfoContainer'  >
            <div className='gMap'>
                <img src="/images/gmap.png" style={{ paddingBottom: "2%" }} />
                <h6>©copyright 2022, All rights reserved</h6>

            </div>

            <div className='regOffice'>
                <h2>Registered Office </h2>
                <br/>
                <h6>
                    # 174, VNBCS Layout, 3rd Cross,
                    West of Chord Road,
                    Bengaluru - 560086
                    Karnataka State,
                    INDIA.
                </h6>
                <div style={{paddingTop:"20%"}}>
                    <a href=''>Home</a> | 
                    <a href="" >  About Us </a>| 
                    <a href="">  Product</a>
                </div>
            </div>
            <div className='branchOffice'>
                <h2>Branch Office: </h2>
                <br/>
                <h6>
                    6 th Floor, Gayathri Towers,
                    A-60, Vengal Rao Nagar,
                    Hyderabad -38
                </h6>
                <div style={{paddingTop:"25%"}}>
                    <a href="" ><img src="/images/fb.png" height="40px"/></a> 
                    <a href="" style={{paddingLeft:"2%",paddingRight:"2%"}}  >  <img src="/images/linkedIn.png" height="40px"/></a> 
                    <a href="">  <img src="/images/twitter.png" height="40px"/></a>
                </div>
            </div>

        </div>
    )
}
export default FooterDetails;