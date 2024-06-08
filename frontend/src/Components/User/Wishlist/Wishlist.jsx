import React, { useState, useEffect } from 'react';
import './Wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  // State to hold wishlist items
  const [wishlistItems, setWishlistItems] = useState([]);

  // Use useEffect to simulate data fetching
  useEffect(() => {
    // Simulate an API call to fetch wishlist items
    const fetchWishlistItems = async () => {
      // Replace this with actual API call
      const items = [
        {
          id: 1,
          name: 'Phone Model 1',
          image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 299.99,
        },
        {
          id: 2,
          name: 'Phone Model 2',
          image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: 399.99,
        },
      ];
      setWishlistItems(items);
    };

    fetchWishlistItems();
  }, []);

  return (
    <div className="wishlist-wrapper">
      <div className="wishlist-div">
        <h2>My Wishlist</h2>
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div className="wishlist-item" key={item.id}>
              <img className="wishlist-item-image" src={item.image} alt={item.name} />
              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <button className="remove-item">
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
