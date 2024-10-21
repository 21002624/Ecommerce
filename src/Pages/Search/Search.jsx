import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const { searchItem } = location.state || {}; // Get the searchItem from the state, defaulting to undefined

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (searchItem) { // Only fetch if searchItem is defined
            axios.get(`https://dummyjson.com/products/search?q=${searchItem}`)
                .then((response) => {
                    setProducts(response.data.products);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching', error);
                    setLoading(false);
                });
        } else {
            setLoading(false); // Set loading to false if there's no searchItem
        }
    }, [searchItem]); // Add searchItem as a dependency

    if (loading) {
        return <div className='loading'> <CircularProgress /></div>;
    }
    const inr = (price) => {
        return (price * 84).toFixed(2);
    };

    const name = (title) => {
        const words = title.split(' '); // Split the title into words
        return words.length > 2 ? `${words[0]}...` : title; // Return first word and ellipsis if more than one word
    };

    return (
        <div className='SearchContainer'>
            <h2>Search Results for: {searchItem}</h2>
            <div className='searchResult'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/ProductDetails/${product.id}`} key={product.id}>
                        <div className='searchResultList'>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{name(product.title)}</h3>
                            <p>Price: ₹ {product.price}</p>
                        </div>
                        </Link>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
