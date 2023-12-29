import React from 'react';
import './Join.css';

const Join = () => {
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
         <form action="" className="contact-container">
            <input type="email"  name='user-email' placeholder='Enter Your Emailaddress'/>
            <button className='btn btn-j'>Join Now</button>
         </form>
      </div>
    </div>
  )
}

export default Join