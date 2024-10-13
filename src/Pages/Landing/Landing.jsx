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
        <h1>Groceries</h1>
        <ProductList cat="groceries" />
        <h1>Motorcycle</h1>
        <ProductList cat="motorcycle" />
        <h1>Sunglasses</h1>
        <ProductList cat="sunglasses" />
        <h1>Bags</h1>
        <ProductList cat="womens-bags" />
      </div>
    
    </div>
    
  )
}

export default Landing
