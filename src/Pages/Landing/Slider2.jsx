import React, { useState } from 'react'; 
import './css/Slider.css';
import iphone from './img/iphone.webp'

const Slider2 = () => {

  return (
    <div className="Slider2">
      <div className="Slidertitle">
        <h1>Iphone</h1>
        <img className='iphone' src={iphone} />
      </div>

      
    </div>
  );
};

export default Slider2;
