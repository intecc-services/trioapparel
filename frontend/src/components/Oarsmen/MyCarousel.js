import React, { useRef, useState } from "react";
import { oarsmen } from "../../general";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="oarsmen-carousel">
      <div className="oarsmen-carousel-wrapper">
        <div className="oarsmen-bg">
          <img src="/images/oarsmen/oarsmen.png" className="oarsmen-img-bg"/>
        <div className="oarsmen-heading">OARSMEN</div>
          
          </div>
        <Carousel
          nextIcon={<FaAngleRight color="white" className="icon-imp" />}
          prevIcon={<FaAngleLeft color="white" className="icon-imp" />}
          activeIndex={index}
          onSelect={handleSelect}
          indicators={true}
        >
          {oarsmen.map((item) => {
            return (
              <Carousel.Item className="item-oars">
                <div className="item-wrapper">
                  <div className="item-img-carousel">
                    <img
                      className="item-img"
                      src={item.image}
                      alt="First slide"
                    />
                  </div>
                  {/* <div className="caption-wrapper"> */}
                  <div className="item-caption">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-p">{item.text1}</p>
                  </div>
                </div>
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
