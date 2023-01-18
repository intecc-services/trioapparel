import React from "react";
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";
import { carousel1 } from "../../general";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel'
import { Carousel } from "react-bootstrap";
const MyCarousel = () => {
  return (
    <div className="my-carousel">
      <Carousel>
        {
          carousel1.map((item,index)=>{
            return <Carousel.Item>
            <div className="main-item">
              <img
                className="carousel-img"
                src={item.image}
                alt="First slide"
              />
            </div>
            <div className="img-overlay"></div>
            <Carousel.Caption>
              <p className="main-text">
                {item.text1}
              </p>
              <p className="main-text">
                {item.text2}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          })
        }
      </Carousel>
    </div>
  );
};

export default MyCarousel;
