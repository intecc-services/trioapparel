import React from "react";
import "./styles.css";
const Info = () => {
  return (
    <div className="info-our-products">
      <div className="info-image">
        <img className="img-info-tag" src="/images/bg3.png" alt="not found" />
      </div>
      <div className="overlay-info"></div>
      <div className="info-content">
        <div className="info-image-content">
          <div className="images-info">
            <div className="img-mains">
              <img src="/images/img1.png" className="img-tag-info" />
              <div className="img-content">KIDS</div>
            </div>
          </div>

          <div className="images-info">
            <div className="img-mains">
              <img src="/images/img2.png" className="img-tag-info" />
              <div className="img-content">BOYS</div>
            </div>
          </div>

          <div className="images-info">
            <div className="img-mains">
              <img src="/images/img3.png" className="img-tag-info" />
              <div className="img-content">MENS</div>
            </div>
          </div>
        </div>

        <div className="info-content-main">
          <div className="info-part-1">
            <div className="info-part-1-1">
              <div className="info-main-part-con">Formals</div>
              <div className="info-main-part-con">Semi Formals</div>
            </div>
            <div className="info-part-1-2">
              <div className="info-main-part-con">Casuals</div>
              <div className="info-main-part-con">Semi Casuals</div>
            </div>
          </div>
          <div className="info-part-2">
            <span className="for-bold">Sizes of shirts for Kids:</span> 6, 12, 18 and 24 (indicates number of
            months of the kid)
          </div>
          <div className="info-part-3">
          <span className="for-bold">Sizes of shirts for Boys:</span> 3A, 4A, 5A, 6A, 7A, 8A, 9A, S and M
            (indicates the age of the boy by years)
          </div>
          <div className="info-part-4">
          <span className="for-bold">Sizes of shirts for Adults:</span> S, M, L, XL, XXL, XXXL, 9XL (to fit as
            per the body shape and size of the adult)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
