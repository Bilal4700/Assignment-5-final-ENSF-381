// ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from backend API when component mounts
    fetch('http://127.0.0.1:5000/products')    
      .then(response => response.json()) // Parse response as JSON
      .then(data => setProducts(data)) // Set fetched products to state
      .catch(error => console.error('Error fetching products:', error)); // Handle fetch errors
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="product-list">
      {/* Map over products array to render each product */}
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
