import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import './styles.css'

const HeadingInfo = ({heading}) => {
  return (
    <div className="flex-main-head">
      <div className="heading-flex">{heading}</div>
      <div className="flex-icon">
        <FiCheckSquare color={"#4ECB71"} />
      </div>
    </div>
  );
};

export default HeadingInfo;
