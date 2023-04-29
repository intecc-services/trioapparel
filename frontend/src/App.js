import "./App.css";
import AboutTrio from "./components/AboutTrio";
import Info from "./components/OurProducts/Info";
import Clientele from "./components/Clientele";
import Footer from "./components/Footer";
import Infrastructure from "./components/Infrastructure";
import Oarsmen from "./components/Oarsmen";
import OurProducts from "./components/OurProducts";
import SectionOne from "./components/SectionOne";
import SectionOneStrip from "./components/SectionOneStrip";
import WhyTrio from "./components/WhyTrio";
import Navbar from "./components/navbar";
import SectionOneContact from "./components/SectionOne/SectionOneContact";
import NavbarMobile from "./components/navbar/NavbarMobile";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import FormSection from "./components/Footer/formSection";

function App() {
  return (
    <div className="App">
      <div className="navbar-main">
        <Navbar />
      </div>
      <div className="navbar-mobile">
        <NavbarMobile />
      </div>
      <Routes>
        <Route exact path="/" element={<Page1 />} />
        <Route exact path="/aboutus" element={<Page2 />} />
        <Route exact path="/product" element={<Page3 />} />
        <Route exact path="/oarsmen" element={<Page4 />} />
        <Route exact path="/infrastructure" element={<Page5 />} />
        <Route exact path="/whytrio" element={<Page6 />} />
      </Routes>
      <div>
        <div className="imp-pad">
          <FormSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
