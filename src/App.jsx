import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import SubHeader from './Pages/Header/SubHeader';
import Landing from './Pages/Landing/Landing';
import Trending from './Pages/Trending/Trending';
import Footer from './Components/Footer/Footer';
import FooterBottom from './Components/Footer/FooterBottom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import { Toaster } from 'react-hot-toast';
import Search from './Pages/Search/Search';

function AppContent() {
  const navigate = useNavigate(); // Now safely within Router context
  const [searchItem, setSearchItem] = useState('');
  const [itemCount, setItemCount] = useState(0); // Declare itemCount state

  const SearchItem = () => {  
    const item = document.getElementById('searchItem').value;
    if (!item) {
      return;
    }
    console.log(item);
    setSearchItem(item);
    navigate('/search', { state: { searchItem: item } });
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItemCount(cartItems.length); // Update item count on load
  }, []);

  const updateItemCount = (newCount) => {
    setItemCount(newCount); 
  };

  return (
    <>
      <div className="part1">
        <Header SearchItem={SearchItem} itemCount={itemCount} /> {/* Pass itemCount to Header */}
        {/* <SubHeader /> */}
      </div>

      <div className="part2">
        <Routes>
          <Route
            index
            element={
              <>
                <Landing />
                <Trending />
              </>
            }
          />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart updateItemCount={updateItemCount} />} /> {/* Pass updateItemCount */}
        </Routes>
      </div>

      <div className="part3">
        <Footer />
        <FooterBottom />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

// Main App component wrapped inside Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
