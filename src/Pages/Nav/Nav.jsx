import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../Header/img/logo.png';
import { TextField } from '@mui/material';
import { FaShoppingCart, FaUserAlt, FaBox,FaSearch } from 'react-icons/fa';


const Nav = ({ SearchItem }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSearch = () => {
        if (inputValue.trim()) {
          SearchItem(inputValue); // Pass the input value directly to SearchItem
        }
      };
  return (
    <div className='Nav'>
        <div className='logo-icon'>
            <Link to="/"><img className='logoImg' src={logo}/></Link>
        </div>

        <div className="search-bar">
              <TextField 
              onChange={(e) => setInputValue(e.target.value)}
              className='searchBar'
                id="searchItem"
                label="Search field"
                type="search"
                variant="filled" 
              />
                <button onClick={handleSearch} className='SearchButton'><FaSearch /></button>

                <nav className="nav-links">
                  <Link to='/cart'> <FaShoppingCart /></Link>
                  <Link to="/login"><FaUserAlt /> </Link>      
              </nav>
              
        </div>
    </div>
  )
}

export default Nav
