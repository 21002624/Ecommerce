import React from 'react'
import Slider from './Slider'
import './Landing.css';
import OfferTitle from './OfferTitle';
import Slider2 from './Slider2';
import ProductList from './ProductList';

const Landing = () => {
  return (

    <div className='Landing'>
      <div>
        <OfferTitle />
      </div>

      <div className='Part-1'>
        <Slider />
        <Slider2 />
      </div>

      <div className='ProductList'>
        <ProductList cat="groceries" />
        <ProductList cat="motorcycle" />
        <ProductList cat="sunglasses" />
        <ProductList cat="womens-bags" />
      </div>
    
    </div>
    
  )
}

export default Landing
