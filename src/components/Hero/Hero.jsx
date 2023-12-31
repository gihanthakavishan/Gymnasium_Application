import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">

      <div className="blur hero-blur"></div>
        <div className="left-h">
         <Header/>
{/*the ad section*/}
         <div className="the-best-ad">
          <div></div>
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
             <span>90+</span>
             <span>Expert trainers</span>
           </div>
          <div>
             <span>500+</span>
             <span>Customer engagements</span>
          </div>
          <div>
             <span>35+</span>
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

           <div className="heart-rate">
             <img src={Heart} alt="" />
             <span>Heart Rate</span>
             <span> 99bpm</span>
           </div>

           {/*hero images*/}

           <img src={hero_image} alt=""  className="hero-image"/>
           <img src={hero_image_back} alt="" className="hero-image-back" />

           {/*calories*/}
           <div className="calories">
            <img src={Calories} alt="" />
            <div>
               <span>Calories Burned</span>
               <span>365kcal</span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Hero