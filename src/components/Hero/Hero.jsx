import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
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
        <div className="right-h">right hand</div>
    </div>
  )
}

export default Hero