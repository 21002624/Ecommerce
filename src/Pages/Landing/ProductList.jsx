import React, { useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import './Landing.css';

const ProductList = (props) => {
    const [products ,setProduct]=useState([]);
    const [loading,setLoading]=useState(true);

    axios.get(`https://dummyjson.com/products/category/${props.cat}`)
    .then((response)=>{
        setProduct(response.data.products);
        setLoading(false);
    })
    .catch((error)=>{
        console.error('Error fetching', error);
        setLoading(false);
    })

    if(loading){
        return <div className='loading'> <CircularProgress /></div>
    }
  return (
    <div className='productList'>
        <div>
        {products.map((product) => (
            <Link to={`/ProductDetails/${product.id}`} key={product.id}>
            <div className='productListSlider'>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.id}</p>
                  <p>Price: $ {product.price}</p>
            </div>
            </Link>
              
            ))}
        </div>
    </div>
  )
}

export default ProductList
