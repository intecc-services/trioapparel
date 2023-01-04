import "./App.css";
import AboutTrio from "./components/AboutTrio";
import Footer from "./components/Footer";
import ImgSlider from "./components/ImgSlider";
import OurProducts from "./components/OurProducts";
import SectionOne from "./components/SectionOne";
import SectionOneStrip from "./components/SectionOneStrip";
import Navbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ImgSlider img1={img1} img2={img1} img3={img1} img4={img1} img5={img1} img6={img1}/> */}
      <div className="sectionOne">
        <SectionOne />
      </div>
      <div className="sectionOneStrip">
        <SectionOneStrip />
      </div>
      <div>
        <OurProducts/>
      </div>
      <div>
        <AboutTrio/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
