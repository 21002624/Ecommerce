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
    <header className='header'>        
        <nav className="nav-links">
         {/* <a> <FaBars/></a> */}
         {/* <Link>All</Link> */}
         <Link to="/products">
          <img className='listImg' src={phone} />
         </Link>
         <Link to="/beauty">
         <img className='listImg' src={beauty} />
         </Link>
         <Link to="/fragurances">
         <img className='listImg' src={fragurances} />
         </Link>
         <Link to="/laptop">
         <img className='listImg' src={laptop} />
         </Link>
         <Link to="/shirts">
            <img className='listImg' src={shirts} />
         </Link>
         <Link to="/shoes">
            <img className='listImg' src={shoes} />
         </Link>
         <Link to="/furnitures">
            <img className='listImg' src={furnitures} />
         </Link>
        </nav>
    </header>
  )
}

export default SubHeader
