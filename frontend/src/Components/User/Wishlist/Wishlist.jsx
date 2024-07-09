import React, { useState, useEffect } from 'react';
import './Wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`/api/wishlist/${userId}`);
        setWishlistItems(response.data.wishlist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWishlistItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      const userId = localStorage.getItem('userId');
      await axios.post('/api/wishlist/remove', { userId, itemId });
      setWishlistItems(wishlistItems.filter(item => item.productId !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wishlist-wrapper">
      <div className="wishlist-div">
        <h2>My Wishlist</h2>
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div className="wishlist-item" key={item.productId}>
              <img className="wishlist-item-image" src={item.product.imageUrl} alt={item.product.productName} />
              <div className="wishlist-item-details">
                <h4>{item.product.productName}</h4>
                <p>Price: ₹{item.product.price}</p>
              </div>
              <button className="remove-item" onClick={() => handleRemoveItem(item.productId)}>
                <FontAwesomeIcon icon={faTrashAlt} /> Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
