import React from 'react';
import { plansData } from "../../data/plansData";
import './Plans.css';

const Plans = () => {
  return (
<div className="plans-container">
    <div className="programs-header" style={{gap:'3.5rem'}}>
        <span>LET'S GET</span>
        <span className='stroke-text'>STARTED</span>
        <span>WITHUS</span>
    </div>

    {/*Plans card*/}
    <div className="plans">
        {plansData.map((plan, i)=> (
            <div className="plan" key={i}>
               {plan.icon}
               <span>{plan.name}</span>
               <span>{plan.price}</span>
                
                <div className="features">
                    {plan.features.map((feature, i)=> (
                        <div className="feature">

                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Plans