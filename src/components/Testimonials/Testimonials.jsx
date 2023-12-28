import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  return (
    <div className="Testimonials">
        <div className="left-t">
         left
        </div>
        <div className="right-t">
            <span>Testimonials</span>
            <span>What they</span>
            <span className='stroke-text'>Say about us</span>
            <span>
                {testimonialsData[0].review}
            </span>
        </div>
    </div>
  )
}

export default Testimonials