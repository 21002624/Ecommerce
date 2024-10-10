import React, { useEffect, useState } from 'react'
import './Products.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products,setproducts]=useState([]);
  const [loading ,setloading]=useState(true);

  useEffect(()=>{
    fetch('https://dummyjson.com/products/category/smartphones')
    .then((Response)=>Response.json())
    .then((data)=>{
      setproducts(data.products);
      setloading(false);
    })
    .catch((error)=>{
      console.error('Error fetching',error);
      setloading(false);
    })
  },[]);

  if(loading){
    return <div className='loading'> <CircularProgress /></div>
  }

  return (
    <div className='productGrid'>
      <h1>Products</h1>
      <div className='grid'>
      {products.map((product) => (
            <Link to={`/ProductDetails/${product.id}`} key={product.id}>
            <div className='productBox'>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.id}</p>
                  <p>Price: ${product.price}</p>
            </div>
            </Link>
              
            ))}
      </div>
      
    </div>
  )
}

export default Products
