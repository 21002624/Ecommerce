import React, { useState } from 'react'
import './Header.css';
import { BrowserRouter, Link,Router,Routes } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaBox,FaSearch } from 'react-icons/fa';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png';


const Header = () => {

  const [searchItem,setSearchItem]=useState('');
  const navigate = useNavigate();

  const SearchItem=()=>{
    const item=document.getElementById('searchItem').value;
    if (!item) {
      return; 
  }
    console.log(item);
    setSearchItem(item);
    navigate('/search', { state: { searchItem: item } });
  };


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
        <TextField 
        className='searchBar'
          id="searchItem"
          label="Search field"
          type="search"
          variant="filled"
        />
          {/* <Link to='/search'></Link> */}
          <button onClick={SearchItem} className='SearchButton'><FaSearch /></button>
        
        </div>
        
        <nav className="nav-links">
            <Link to='/cart'> <FaShoppingCart /></Link>
            <Link to="/login"><FaUserAlt /> </Link>      
            <Link to="/cart"><FaBox /> </Link>
        </nav>
        
        
    </header>
  )
}

export default Header
