import React from 'react'
import './SubHeader.css';
import { BrowserRouter, Link,Router,Routes } from 'react-router-dom';
import {FaBars } from 'react-icons/fa';
import beauty from './img/beauty.jpg';
import fragurances from './img/fragurances.webp';
import laptop from './img/laptop.jpg';
import shirts from './img/shirts.jpg';
import shoes from './img/shoes.jpg';
import phone from './img/phone.webp';
import furnitures from './img/furnitures.webp';
const SubHeader = () => {
  return (
    <header className='SubHeader'>        
        <nav className="navlinks">
         {/* <a> <FaBars/></a> */}
         {/* <Link>All</Link> */}
         <Link to="/products">
            <div class="button">Mobile</div>
         </Link>
         <Link to="/beauty">
            <div class="button">Beauty</div>
         </Link>
         <Link to="/fragurances">
            <div class="button">fragurences</div>
         </Link>
         <Link to="/laptop">
            <div class="button">laptops</div>
         </Link>
         <Link to="/shirts">
            <div class="button">shirts</div>
         </Link>
         <Link to="/shoes">
            <div class="button">shoes</div>
         </Link>
         <Link to="/furnitures">
            <div class="button">furnitures</div>
         </Link>
        </nav>
    </header>
  )
}

export default SubHeader
