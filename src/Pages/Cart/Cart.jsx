import React, { useEffect, useState } from 'react';
import './Cart.css';
import { Button } from '@mui/material';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className='cart-items'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <img src={item.thumbnail} alt={item.title} />
              <div className='cart-item-details'>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <Button className='bttn'
                  variant="outlined" 
                  color="error" 
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className='cart-total'>
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
