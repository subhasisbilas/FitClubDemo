import React from 'react';
import Customplan from '../../assets/Customplan.png';

import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import './Reasons.css';
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
        <img src={Customplan} alt='' />
      </div>
      <div className='right-r'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>Why </span>
          <span>choose us?</span>
        </div>
        <div className='details-r'>
          <div>
            <img src={tick} alt='' />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>reliable partners</span>
          </div>
        </div>
        <span style={{ color: 'var(--gray)', fontWeight: 'normal' }}>
          OUR PARTNERS
        </span>
        <div className='partners'>
          <img src={nb} alt='' />
          <img src={adidas} alt='' />
          <img src={nike} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
