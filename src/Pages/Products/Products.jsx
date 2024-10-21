import React, { useEffect, useState } from 'react';
import './Products.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useParams } from 'react-router-dom';

const Products = () => {
    const { category } = useParams(); // Get the category from URL params
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Fetch products based on category
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
                if (data.products.length > 0) {
                    setSelectedProduct(data.products[0]); // Select the first product by default
                }
            })
            .catch((error) => {
                console.error('Error fetching', error);
                setLoading(false);
            });
    }, [category]);

    const handleProductSelection = (product) => {
        setSelectedProduct(product);
    };
    const name = (title) => {
      const words = title.split(' '); 
      return words.length > 2 ? `${words[0]}...` : title; 
    };
    const inr = (price) => {
      return (price * 84).toFixed(2);
    };

    if (loading) {
        return <div className='loading'><CircularProgress /></div>;
    }

    return (
        <div className='productGrid'>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
            <div className='grid'>
                {products.map((product) => (
                    <Link to={`/ProductDetails/${product.id}`} key={product.id}>
                    <div className='productBox' key={product.id} onClick={() => handleProductSelection(product)}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{name(product.title)}</h3>
                          <p>Price: ₹ {inr(product.price)}</p>
                    </div>
                     </Link>
                ))}
            </div>

          
        </div>
    );
}

export default Products;
