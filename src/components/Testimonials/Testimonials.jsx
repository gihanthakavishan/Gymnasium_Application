import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import {motion} from 'framer-motion';

const Testimonials = () => {
const transition = {type: "spring", duration: 3};
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
          <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition,duration : 2}}
            whileInView={{opacity: 1, x:0}}
          ></motion.div>
          <motion.div
             initial={{opacity:0, x:100}}
             transition={{...transition, duration: 2}}
             whileInView={{opacity:1, x:0}}
          ></motion.div>
            <img src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img 
              onClick={()=> {
                selected === 0
                 ? setSelected(tLength-1)
                 : setSelected((prev) => prev -1);
              }}
             src={leftArrow} alt="" />
            <img
              onClick={()=> {
                selected === tLength - 1
                 ? setSelected(0)
                 : setSelected((prev) => prev + 1);
              }}
            src={rightArrow} alt="" />
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