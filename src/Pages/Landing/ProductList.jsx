import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import './Landing.css';

const ProductList = (props) => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${props.cat}`)
            .then((response) => {
                setProduct(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching', error);
                setLoading(false);
            });
    }, [props.cat]); // Dependency array to refetch if category changes

    if (loading) {
        return <div className='loading'><CircularProgress /></div>;
    }

    const inr = (price) => {
        return (price * 84).toFixed(2);
    };

    const name = (title) => {
        const words = title.split(' '); // Split the title into words
        return words.length > 2 ? `${words[0]}...` : title; // Return first word and ellipsis if more than one word
    };

    return (
        <div className='productList'>
            <div>
                {products.map((product) => (
                    <Link to={`/ProductDetails/${product.id}`} key={product.id}>
                        <div className='productListSlider'>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{name(product.title)}</h3>
                            <p>Price: ₹ {inr(product.price)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
