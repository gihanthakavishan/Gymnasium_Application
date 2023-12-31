import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';
const Join = () => {
   const form = useRef()
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7qfh56', 'template_myhllvk', form.current, 'FEjRiLT53ucrrYb36')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
           <span className='stroke-text'>READY TO</span>
           <span>MASTER YOUR</span>
        </div>
        <div>
          <span>FITNESS LEVEL</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
         <form ref={form} className="contact-container" onSubmit={sendEmail}>
            <input type="email"  name='user-email' placeholder='Enter Your Email Address'/>
            <button className='btn btn-j'>Join Now</button>
         </form>
      </div>
    </div>
  )
}

export default Join