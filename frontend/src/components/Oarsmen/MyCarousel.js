import React, { useRef, useState } from "react";
import { oarsmen } from "../../general";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="oarsmen-carousel">
      <div className="oarsmen-carousel-wrapper">
        <div className="oarsmen-heading">OARSMEN</div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {oarsmen.map((item) => {
            return (
              <Carousel.Item className="item-oars">
                <div className="item-img-carousel">
                  <img
                    className="item-img"
                    src={item.image}
                    alt="First slide"
                  />
                </div>
                {/* <div className="caption-wrapper"> */}
                <Carousel.Caption>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-p">{item.text1}</p>
                </Carousel.Caption>
                {/* </div> */}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MyCarousel;
