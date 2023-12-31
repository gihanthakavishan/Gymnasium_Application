import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id='home'>

      <div className="blur hero-blur"></div>
        <div className="left-h">
         <Header/>
{/*the ad section*/}
         <div className="the-best-ad">
          <motion.div
          initial = {{left: mobile? "165px":'238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}  
          ></motion.div>
          <span>The best partner for your health</span>
         </div>
{/*hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape Up </span>
            <span>Your</span>
          </div> 
          <div>
            <span>Life Healthy</span>
            </div>
          <div>
              <span>In here we will make sure to upgrade your
                physiacl health and level up your life all the way</span>
            </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
             <span>
              <NumberCounter end={100} start={85} delay='4' preFix="+"/>
             </span>
             <span>Expert trainers</span>
           </div>
          <div>
             <span>
                <NumberCounter end={500} start={475} delay='4' preFix="+"/>
             </span>
             <span>Customer engagements</span>
          </div>
          <div>
             <span>
                <NumberCounter end={35} start={25} delay='3' preFix="+"/>
              </span>
             <span>Special schedule</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
           <button className="btn">Let's Begin</button>
           <button className="btn">See More</button>
        </div>
        </div>
        <div className="right-h">
           <button className='btn'>Join Now</button>

           <motion.div 
           initial={{right: "-1rem"}}
           whileInView={{right: "4rem"}}
           transition={transition}
           className="heart-rate">
             <img src={Heart} alt="" />
             <span>Heart Rate</span>
             <span> 99bpm</span>
           </motion.div>

           {/*hero images*/}

           <img src={hero_image} alt=""  className="hero-image"/>
           <motion.img 
           initial={{right: '11rem'}}
           whileInView={{right:'19.5rem'}}
           transition={transition}
           src={hero_image_back} alt="" className="hero-image-back" />

           {/*calories*/}
           <motion.div 
           initial={{right: "32rem"}}
           whileInView={{right:"28rem"}}
           transition={transition}
           className="calories">
            <img src={Calories} alt="" />
            <div>
               <span>Calories Burned</span>
               <span>365kcal</span>
            </div>
           </motion.div>
        </div>
    </div>
  )
}

export default Hero