import React, { useState } from 'react'
import './Header.css';
import { BrowserRouter, Link,Router,Routes } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaBox,FaSearch } from 'react-icons/fa';
import { TextField } from '@mui/material';
import logo from './img/logo.png';


const Header = ({ SearchItem }) => {




  return (
    <div className='headerDiv'>
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
              <TextField 
              className='searchBar'
                id="searchItem"
                label="Search field"
                type="search"
                variant="filled" 
              />
                <button onClick={SearchItem} className='SearchButton'><FaSearch /></button>
              
              </div>
              
              <nav className="nav-links">
                  <Link to='/cart'> <FaShoppingCart /></Link>
                  <Link to="/login"><FaUserAlt /> </Link>      
                  <Link to="/cart"><FaBox /> </Link>
              </nav>
              
              
          </header>

    </div>
    
  )
}

export default Header
