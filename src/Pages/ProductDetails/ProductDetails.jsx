import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './ProductDetails.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';

const ProductDetails = () => {
  const params = useParams();
  const id=params.id;

  const [product,SetProduct]=useState('');
  const [loading,setLoading]=useState(true);
  const [buttonMsg,SetButtonMsg]=useState('Add to cart');

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((response)=>{
      SetProduct(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching', error);
      setLoading(false);
    });
  },[id])

  if(loading){
    return <div className='loading'> <CircularProgress /></div>
  }

  const AddToCartFunction=()=>{
    console.log("added");
    SetButtonMsg('Added to Cart')
    setTimeout(() => {
      SetButtonMsg('Add to cart');
    }, 2000);
  }

  return (
    <div>
      {
        product ?
          <div className='ProductDetails'>
            <div className='ProductDetailsLeft'>
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className='ProductDetailsRight'>
              <p>Product Name : {product.title} </p>
                <br/>
              <p>Price : {product.price}</p>
                <br/>
              <p>Rating : {product.rating}</p>
                <br/>
              <p>Discription : {product.description}</p>
                <br/>
              <p>Return Policy : {product.returnPolicy}</p>

              <div className='quantity-controls'>
                <button >
                  <RemoveIcon /> 
                </button>
                <span></span> 
                <button >
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
    </div>
  )
}

export default ProductDetails
