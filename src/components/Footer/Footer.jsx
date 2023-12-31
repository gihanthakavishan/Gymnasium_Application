import React from 'react';
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";

const Footer = () => {
  return (
    
    <div className="Footer-container">
        <hr />
      <div className="footer">
       <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Facebook} alt="" />
        <img src={Youtube} alt="" />
       </div>
       <div className="copy-rights">
         <h2>@All The CopyRights Are Reseved</h2>
       </div>
     </div>
    </div>
  )
}

export default Footer