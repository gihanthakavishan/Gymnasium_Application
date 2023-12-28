import React from 'react';
import './Reasons.css';
import image1 from "../../assets/image1.jpg";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image2 from "../../assets/image2.jpg";
import nb  from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
           left
        </div>
        <div className="right-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
    </div>
  );
};

export default Reasons;