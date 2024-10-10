import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './ProductDetails.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetails = () => {
  const params = useParams();
  const id=params.id;

  const [product,SetProduct]=useState('');
  const [loading,setLoading]=useState(true);

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
                
            </div>
          </div>
            

            

        
        :
          <p>Product not found.</p>
      }
    </div>
  )
}

export default ProductDetails
