import React from 'react'
import './Header.css';
import { BrowserRouter, Link,Router,Routes } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaBox } from 'react-icons/fa';
import logo from './img/logo.png';
const Header = () => {
  return (
    <header className="header">
        <div className="logo">
          <div className='logo-icon'>
          <Link to="/"><img className='logoImg' src={logo}/></Link>
          
          </div>
          <div className='account-address'>
             <p>Chennai</p> 
          </div>
          
        </div>

        <div className="search-bar">

          <input type="text" className="searchbar-input"  placeholder="Search Google" />

        </div>
        
        <nav className="nav-links">
            <Link to="/cart"> <FaShoppingCart /></Link>
            <Link to="/user-account"><FaUserAlt /> </Link>      
            <Link to="/cart"><FaBox /> </Link>
        </nav>
        
        
    </header>
  )
}

export default Header
