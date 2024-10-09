import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [products,setProducts]=useState([]);
  const [loading ,setLoading]=useState(true);

  useEffect(()=>{
    axios.get('https://dummyjson.com/products/category/mens-shoes')
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching', error);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <div> loading</div>
  }

  return (
    <div className='productGrid'>
      <h1>Products</h1>
      <div className='grid'>
          {products.map((product) => (
              <div className='productBox'  key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                {/* <p>{product.description}</p> */}
                <p>Price: ${product.price}</p>
              </div>
            ))}
      </div>
      
    </div>
  )
}

export default Products
