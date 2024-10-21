import React, { useEffect, useState } from 'react';
import './Cart.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import toast from 'react-hot-toast';

const Cart = ({ updateItemCount }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
    updateItemCount(cartItems.length); // Update item count on load (number of unique items)
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * 84 * item.quantity, 0).toFixed(2);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateItemCount(updatedCart.length); 
    toast.error("item removed")
  };

  const increaseCount = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseCount = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
              <img className='cartImg' src={item.thumbnail} alt={item.title} />
              <div className='cart-item-details'>
                <p>{item.title}</p>
                <p>Price: ₹ {item.price * 84}</p>
                <p>Quantity: {item.quantity}</p>

                <div className='quantity-controls'>
                  <button onClick={() => decreaseCount(item.id)}>
                    <RemoveIcon />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseCount(item.id)}>
                    <AddIcon />
                  </button>
                </div>

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
            <p>Total Price: ₹ {calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
