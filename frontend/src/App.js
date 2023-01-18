import "./App.css";
import AboutTrio from "./components/AboutTrio";
import Info from "./components/OurProducts/Info";
import Clientele from "./components/Clientele";
import Footer from "./components/Footer";
import ImgSlider from "./components/ImgSlider";
import Infrastructure from "./components/Infrastructure";
import Oarsmen from "./components/Oarsmen";
import OurProducts from "./components/OurProducts";
import OurProducts2 from "./components/OurProducts/OurProducts2";
import SectionOne from "./components/SectionOne";
import SectionOneStrip from "./components/SectionOneStrip";
import WhyTrio from "./components/WhyTrio";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdStar } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import SectionOneContact from "./components/SectionOne/SectionOneContact";
import NavbarMobile from "./components/navbar/NavbarMobile";

function App() {
  return (
    <div className="App">
      <div className="navbar-main"><Navbar/></div>
      <div className="navbar-mobile"><NavbarMobile/></div>
      {/* <ImgSlider img1={img1} img2={img1} img3={img1} img4={img1} img5={img1} img6={img1}/> */}
      <div className="sectionOne">
        <SectionOne />
      </div>
      <div className="sectionOneStrip">
        <SectionOneStrip />
        <div className="section-one-contact-resp">
          <SectionOneContact/>
        </div>
      </div>
      <div className="our-products">
        <OurProducts />
      </div>
      <div className="our-products-2">
        <Info/>
      </div>
      <div className="about-trio">
        <AboutTrio />
      </div>
      <div className="why-trio">
        <WhyTrio />
      </div>
      <div className="infrastructure">
        {/* <Infrastructure /> */}
      </div>
      <div className="oarsmen-main">
        <Oarsmen />
      </div>
      <div>
        <Clientele />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
