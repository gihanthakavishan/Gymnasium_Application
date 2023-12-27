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
            <span>Shape Up </span>
            <span>Your</span>
          </div> 
          <div>
            <span>Healthy Life</span>
            </div>
        </div>
        </div>
        <div className="right-h">right hand</div>
    </div>
  )
}

export default Hero