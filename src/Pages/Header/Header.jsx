import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaSearch, FaBars, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import lo from './img/logo.png';
import './Header.css';

const Header = ({ SearchItem, itemCount }) => {
  const location = useLocation(); // Get current route
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Check if we are on the home page
  const isHomePage = location.pathname === '/';

  // Handle back button click
  const handleBack = () => {
    window.history.back(); // Goes back to the previous page
  };

  // Determine if the viewport is mobile
  const isMobileView = window.innerWidth <= 768; // Adjust the width threshold as needed

  return (
    <header className="header">
      {/* Show back button only if NOT on home page and in mobile view */}
      {!isHomePage && isMobileView && (
        <div className="bur" onClick={handleBack}>
          <FaArrowLeft />
        </div>
      )}

      {/* Show logo only on the home page */}
      {isHomePage && (
        <div className="logo">
          <div className='logoDiv'>
            <Link to="/"><img className='logoImg' src={lo} alt="Logo" /></Link>
          </div>
          <div className='account-address'>
            <FaMapMarkerAlt />
            <p>Chennai</p> 
          </div>
        </div>
      )}

      <div className="search-bar">
        <input className='searchBar' id="searchItem" label="Search field" type="search" />
        <button onClick={SearchItem} className='SearchButton'><FaSearch /></button>
      </div>
      
      <nav className="nav-links">
        <Link to='/cart'>
          <div className="cartIcon">
            <FaShoppingCart />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            <p>Cart</p>
          </div>
        </Link>
        <Link to="/login"><div><FaUserAlt /><p> Login</p></div></Link>
      </nav>

      <div className="bur" onClick={toggleSidebar}>
        <FaBars />
      </div> 

      {isSidebarOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <div className="sidebar-content">
            <h2>All Items</h2>
            <Link to="/products/smartphones" onClick={closeSidebar}>Smartphones</Link>
            <Link to="/products/laptops" onClick={closeSidebar}>Laptops</Link>
            <Link to="/products/mens-shirts" onClick={closeSidebar}>Shirts</Link>
            <Link to="/products/mens-shoes" onClick={closeSidebar}>Shoes</Link>
            <Link to="/products/furniture" onClick={closeSidebar}>Furnitures</Link>
          </div>
          <button className="close-sidebar" onClick={closeSidebar}>Close</button>
        </div>
      )}
    </header>
  );
};

export default Header;
