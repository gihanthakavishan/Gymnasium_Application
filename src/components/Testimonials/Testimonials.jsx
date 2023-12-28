import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
          <div></div>
          <div></div>
            <img src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
          
        </div>
        <div className="right-t">
            <span>Testimonials</span>
            <span>What they</span>
            <span className='stroke-text'>Say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color:'lightgreen'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                 - {testimonialsData[selected].status}
            </span>
        </div>
    </div>
  )
}

export default Testimonials