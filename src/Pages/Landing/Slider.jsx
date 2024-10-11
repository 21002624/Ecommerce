import React, { useEffect, useState } from 'react'
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';

const Slider = () => {
  const [currentIndex,setCurrentIndex]=useState(0);
  const image=[one,two];
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentIndex((prevIndex)=>
        prevIndex===image.length -1 ? 0 : prevIndex +1
      );
    },2000);
    return ()=>clearInterval(interval);
  },[image.length]);

  return (
    <div className='Slider'>
      <div className='Slidertitle'>
          <h2>Title</h2>
      </div>

      <div className='SliderContent'>
          <img className='one' src={image[currentIndex]} />
          
      </div>
    </div>
  )
}

export default Slider
