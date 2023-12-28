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
           <span>Some Reasons</span>
           <div>
            <span className="stroke-text">Our</span>
           <span> Specialities</span>
           </div>

           <div className='details-l'>
              <div>
                 <img src={tick} alt=""></img>
                 <span>FREE PLANS FOR NEWBIES</span>
              </div>
              <div>
                 <img src={tick} alt="" />
                 <span>MORE THAN 100+ QUALIFIED COCHES</span>
              </div>
              <div>
                  <img src={tick} alt="" />
                  <span>SMART WORKOUTS AND SCHEDULE THAN HARD ONES</span>
              </div>
              <div>
                  <img src={tick} alt="" />
                  <span>RELIABLE MENTORS</span>
              </div>
           </div>
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