import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './ProductDetails.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import ProductList from '../Landing/ProductList';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null); // Changed from 0 to null
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [buttonMsg, setButtonMsg] = useState('Add to cart');

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className='loading'><CircularProgress /></div>;
  }

  const AddToCartFunction = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += count;
    } else {
      cart.push({ ...product, quantity: count });
      toast.success("Added to Cart")
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setButtonMsg('Added to Cart');
    setTimeout(() => {
      setButtonMsg('Add to cart');
    }, 2000);
    
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {
        product ?
          <div className='ProductDetails'>
            <div className='ProductDetailsLeft'>
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className='ProductDetailsRight'>
              <p>Product Name: {product.title}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Description: {product.description}</p>

              <div className='quantity-controls'>
                <button onClick={decreaseCount}>
                  <RemoveIcon />
                </button>
                <span>{count}</span>
                <button onClick={increaseCount}>
                  <AddIcon />
                </button>
              </div>

              <div className='addToCartDiv'>
                <Button onClick={AddToCartFunction} variant="contained" color="success">
                  {buttonMsg}
                </Button>
              </div>
            </div>
          </div>
          :
          <p>Product not found.</p>
      }
      <div className='ProductList'>
        <ProductList cat={product.category} />
      </div>
    </div>
  );
};

export default ProductDetails;
