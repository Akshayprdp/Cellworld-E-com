import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getproducts } from '../../../Services/UserApi';





const Category = () => {
  const [products, setProducts] = useState([]);
  const [androidProducts, setAndroidProducts] = useState([]);
  const [appleProducts, setAppleProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproducts();
        if (response.data.status) {
          setProducts(response.data.products);
          setAndroidProducts(response.data.products.filter(product => product.category === 'android'));
          setAppleProducts(response.data.products.filter(product => product.category === 'apple'));
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/list/${category}`);
  };

  return (
    <div className="category-container">
      <div className="category-box">
        <h2 onClick={() => handleCategoryClick('android')} className='AandA'>Android Phones</h2>
        <div className="products-list">
          {androidProducts.map(product => (
            <div className="product-item" key={product._id}>
               <Link to={`/product/${product._id}`} className='pncat' >
              <img className="product-pic" src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
              <h3 >{product.productName}</h3>
              </Link>
              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="product-price">₹{product.price}</p>
              {/* <button className="details-button">View Details</button> */}
            </div>
          ))}
        </div>
      </div>
      <div className="category-box">
        <h2 onClick={() => handleCategoryClick('apple')} className='AandA'>Apple Phones</h2>
        <div className="products-list">
          {appleProducts.map(product => (
            <div className="product-item" key={product._id}>
              <Link to={`/product/${product._id}`} className='pncat' >
              <img className="product-pic" src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
              <h3>{product.productName}</h3>
              </Link>
              <div className="product-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="product-price">₹{product.price}</p>
              {/* <button className="details-button">View Details</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
