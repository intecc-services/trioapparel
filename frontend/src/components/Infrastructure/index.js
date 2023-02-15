import React, { useEffect } from 'react';
import './styles.css';
import { infra } from '../../general';
import { infraImages } from '../../general';

const Infrastructure = () => {
  const [selected, setSelected] = React.useState(
    'Sampling and Inventory Section'
  );
  const [image, setImage] = React.useState([
    '/images/infra/infra-grid1.png',
    '/images/infra/infra-grid2.png',
    '/images/infra/infra-grid3.png',
    '/images/infra/infra-grid4.png',
    '/images/infra/infra-grid5.png',
  ]);

  const onClickHandler = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setImage(infraImages[infra.indexOf(selected)][selected]);
  }, [selected, image]);

  return (
    <div className="infrastructure">
      <div className="infra-1">
        <div className="infra-heading">Trio Apparels Infrastructure</div>

        <div className="infra-flex">
          <div className="infra-flex-1">
            <div className="infra-img1">
              <img src={image[0]} alt="not found" className="img-infra-tag1" />
            </div>
          </div>
          <div className="infra-flex-2">
            <div className="infra-img2">
              <img src={image[1]} alt="not found" className="img-infra-tag2" />
            </div>
            <div className="infra-img3">
              <img src={image[2]} alt="not found" className="img-infra-tag3" />
            </div>
          </div>
          <div className="infra-flex-3">
            <div className="infra-img4">
              <img src={image[3]} alt="not found" className="img-infra-tag4" />
            </div>
            <div className="infra-img5">
              <img src={image[4]} alt="not found" className="img-infra-tag5" />
            </div>
          </div>
        </div>

        <div className="infra-text">
          <div className="infra-text-wrap">
            <span className="infra-span">Area Covered:</span> 32,000 Sq. ft.
            <br />
            <span className="infra-span">Total No. of Machines:</span> 320
            Machines
            <br />
            <span className="infra-span">Special Machines:</span> Single Needle
            UBT Machines, Collar & Cuff Turning, Pocket Welt, Button Wrapping,
            Needle Detector <br />
            <span className="infra-span">Product Manufactured:</span>
            Readymade Woven Shirts - for Men, Boys and Kids <br />
            <span className="infra-span">Capacity:</span> 70000 Garments per
            month
            <br />
          </div>
        </div>
      </div>
      <div className="infra-2">
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
  );
};

export default Infrastructure;
