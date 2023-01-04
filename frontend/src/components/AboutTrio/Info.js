import React, { useState } from "react";
import { flexInfo } from "../../general";
import {FiCheckSquare} from 'react-icons/fi'

const Info = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <div className="info-box">
          <div
            className="flex-item"
            onMouseOver={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className="flex-item-img">
              <img
                src={flexInfo[0].image}
                alt="img not found"
                className="img-flex-tag"
              />
            </div>
            {hover1 ? <div className="for-overlay-flex-hover">
              <p className="flex-p1">{flexInfo[0].heading}</p>
              <p className="flex-p2">{flexInfo[0].p1}</p>
              <p className="flex-p3">{flexInfo[0].p2}</p>
            </div> : <div className="for-overlay-flex">
              <div className="flex-main-head">
                <div className="heading-flex">{flexInfo[0].heading}</div>
                <div className="flex-icon">
                  <FiCheckSquare color={'#4ECB71'}/>
                </div>
              </div>
            </div>}
          </div>

          <div
            className="flex-item"
            onMouseOver={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div className="flex-item-img">
              <img
                src={flexInfo[1].image}
                alt="img not found"
                className="img-flex-tag"
              />
            </div>
            {hover2 ? <div className="for-overlay-flex-hover">
              <p className="flex-p1">{flexInfo[1].heading}</p>
              <p className="flex-p2">{flexInfo[1].p1}</p>
              <p className="flex-p3">{flexInfo[1].p2}</p>
            </div> : <div className="for-overlay-flex">
              <div className="flex-main-head">
                <div className="heading-flex">{flexInfo[1].heading}</div>
                <div className="flex-icon">
                  <FiCheckSquare color={'#4ECB71'}/>
                </div>
              </div>
            </div>}
          </div>

          <div
            className="flex-item"
            onMouseOver={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <div className="flex-item-img">
              <img
                src={flexInfo[2].image}
                alt="img not found"
                className="img-flex-tag"
              />
            </div>
            {hover3 ? <div className="for-overlay-flex-hover">
              <p className="flex-p1">{flexInfo[2].heading}</p>
              <p className="flex-p2">{flexInfo[2].p1}</p>
              <p className="flex-p3">{flexInfo[2].p2}</p>
            </div> : <div className="for-overlay-flex">
              <div className="flex-main-head">
                <div className="heading-flex">{flexInfo[2].heading}</div>
                <div className="flex-icon">
                  <FiCheckSquare color={'#4ECB71'}/>
                </div>
              </div>
            </div>}
          </div>
    </div>
  );
};

export default Info;
