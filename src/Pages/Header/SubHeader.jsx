import React, { useState, useRef, useEffect } from 'react';
// import './SubHeader.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const SubHeader = () => {
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

    return (
        <header className='SubHeader'>
            <nav className="navlinks">
                <div className="button" onClick={toggleSidebar}>
                    <FaBars /> All
                </div>
                <Link to="/">
                <div className="button">Home</div>
                </Link>
                <Link to="/products/smartphones">
                    <div className="button">Smartphones</div>
                </Link>
                <Link to="/products/laptops">
                    <div className="button">Laptops</div>
                </Link>
                <Link to="/products/mens-shirts">
                    <div className="button">Shirts</div>
                </Link>
                <Link to="/products/mens-shoes">
                    <div className="button">Shoes</div>
                </Link>
                <Link to="/products/furniture">
                    <div className="button">Furnitures</div>
                </Link>
            </nav>

            {isSidebarOpen && (
                <div className="sidebar" ref={sidebarRef}>
                    <div className="sidebar-content">
                        <h2>All Items</h2>
                        {/* Add your sidebar links/items here */}
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
}

export default SubHeader;
