import React from "react";
import SectionOne from "../components/SectionOne";
import SectionOneStrip from "../components/SectionOneStrip";
import SectionOneContact from "../components/SectionOne/SectionOneContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Product from "../components/Product";
import FormSection from "../components/Footer/formSection";
import Clientele from "../components/Clientele";
import './styles.css'

const Page1 = () => {
  return (
    <div>
      <div className="sectionOne">
        <SectionOne />
      </div>

      <div className="sectionOneStrip">
        <SectionOneStrip />
        <div className="section-one-contact-resp">
          <SectionOneContact />
        </div>
      </div>
      <div>
        <Product />
      </div>
      <div className="imp-pad">
        <Clientele />
      </div>
      
    </div>
  );
};

export default Page1;
