import React from 'react';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Category() {
  return (
    <div className="category-container">
      <div className="category-box">
        <h2>Android Phones</h2>
        <div className="products-list">
          {/* Rendering Android phone products */}
          <div className="product-item">
            <img className="product-pic" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Android Phone 1" />
            <h3>Android Phone 1</h3>
            <div className="product-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="product-price">$199.99</p>
            <button className="details-button">View Details</button>
          </div>
          <div className="product-item">
            <img className="product-pic" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Android Phone 2" />
            <h3>Android Phone 2</h3>
            <div className="product-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="product-price">$249.99</p>
            <button className="details-button">View Details</button>
          </div>
        </div>
      </div>
      <div className="category-box">
        <h2>Apple Phones</h2>
        <div className="products-list">
          {/* Rendering Apple phone products */}
          <div className="product-item">
            <img className="product-pic" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Apple Phone 1" />
            <h3>Apple Phone 1</h3>
            <div className="product-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="product-price">$699.99</p>
            <button className="details-button">View Details</button>
          </div>
          <div className="product-item">
            <img className="product-pic" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Apple Phone 2" />
            <h3>Apple Phone 2</h3>
            <div className="product-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="product-price">$799.99</p>
            <button className="details-button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;