import { useState } from 'react';
import './App.css';
import Header from './Pages/Header/Header';
import SubHeader from './Pages/Header/SubHeader';
import Landing from './Pages/Landing/Landing';
import Trending from './Pages/Trending/Trending';
import Footer from './Components/Footer/Footer';
import FooterTop from './Components/Footer/FooterTop';
import FooterBottom from './Components/Footer/FooterBottom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';
import Beauty from './Pages/Products/Beauty';
import Fragurance from './Pages/Products/Fragurances';
import Furnitures from './Pages/Products/Furnitures';
import Laptop from './Pages/Products/Laptops';
import Shirts from './Pages/Products/Shirts';
import Shoes from './Pages/Products/Shoes';
import SignIn from './Pages/Account/SignIn';
import LogIn from './Pages/Account/LogIn';
import Cart from './Pages/Cart/Cart';
import Search from './Pages/Search/Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='part1'>
        <Header />
        <SubHeader />
      </div>

      <div className='part2'>
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
          <Route path='/ProductDetails/:id' element={<ProductDetails />} /> 
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/fragurances' element={<Fragurance />} />
          <Route path='/beauty' element={<Beauty />} />
          <Route path='/shirts' element={<Shirts />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/furnitures' element={<Furnitures />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search/>} />


          
        </Routes>
      </div>

      <div className='part3'>
        {/* <FooterTop /> */}
        <Footer />
        <FooterBottom />
      </div>
    </Router>
  );
}

export default App;
