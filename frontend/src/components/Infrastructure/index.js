import React, { useEffect } from "react";
import "./styles.css";
import { infra } from "../../general";
import { infraImages } from "../../general";

const Infrastructure = () => {
  const [selected, setSelected] = React.useState(
    "Sampling and Inventory Section"
  );
  const [image, setImage] = React.useState([
    "/images/infra/infra-grid1.png",
    "/images/infra/infra-grid2.png",
    "/images/infra/infra-grid3.png",
    "/images/infra/infra-grid4.png",
    "/images/infra/infra-grid5.png",
  ]);

  const onClickHandler = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setImage(infraImages[infra.indexOf(selected)][selected]);
  }, [selected, image]);

  return (
    <div className="infrastructure">
      <div className="infra-bg">
        <img src="/images/infra/infrastructure.png" className="infra-img-tag" />
        <div className="infra-heading">INFRASTRUCTURE</div>
      </div>

      <div className="infra">
        <div className="infra-flex">
          <div className="infra-flex-1">
            <div className="infra-images">
              {infraImages.map((image) => {
                return image.name === selected ? (
                  image.images.map((item) => {
                    return (
                      <div className="img-item">
                        <img src={item} className="img-item-tag" />
                      </div>
                    );
                  })
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
          <div className="infra-flex-2">
            <div className="infra-2-content">
              {infra.map((item) => {
                return (
                  <button
                    onClick={onClickHandler}
                    className="infra-2-item"
                    value={item}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="infra-extra-content">
        <div className="infra-text">
          <div className="infra-text-wrap">
            <p className="p-tag">
              <span className="infra-span">Area Covered:</span> 32,000 Sq. ft.
            </p>
            <p className="p-tag">
              <span className="infra-span">Total No. of Machines:</span> 320
              Machines
            </p>
            <p className="p-tag">
              <span className="infra-span">Special Machines:</span> Single
              Needle UBT Machines, Collar & Cuff Turning, Pocket Welt, Button
              Wrapping, Needle Detector{" "}
            </p>
            <p className="p-tag">
              <span className="infra-span">Product Manufactured:</span>
              Readymade Woven Shirts - for Men, Boys and Kids
            </p>
            <p className="p-tag">
              <span className="infra-span">Capacity:</span> 70000 Garments per
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
