import React, { useState } from 'react';
import './Cartitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Cartitems() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(2);

  const totalInRupees = (299.99 * quantity1 + 399.99 * quantity2).toFixed(2);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (itemId === 1) {
      setQuantity1(newQuantity);
    } else if (itemId === 2) {
      setQuantity2(newQuantity);
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-div">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          <div className="cart-item" key={1}>
            <img className="cart-item-image" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Phone Model 1" />
            <div className="cart-item-details">
              <h4>Phone Model 1</h4>
              <p>Price: ₹299.99</p>
              <p>Quantity: {quantity1}</p>
              <p>Total: ₹{(299.99 * quantity1).toFixed(2)}</p>
              <button onClick={() => handleQuantityChange(1, quantity1 - 1)} disabled={quantity1 <= 1} style={{ marginRight: '5px' }}>-</button>
              <button onClick={() => handleQuantityChange(1, quantity1 + 1)} style={{ marginLeft: '5px' }}>+</button>
            </div>
            <button className="remove-item">
              <FontAwesomeIcon icon={faTrashAlt} /> Remove
            </button>
          </div>
          <div className="cart-item" key={2}>
            <img className="cart-item-image" src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Phone Model 2" />
            <div className="cart-item-details">
              <h4>Phone Model 2</h4>
              <p>Price: ₹399.99</p>
              <p>Quantity: {quantity2}</p>
              <p>Total: ₹{(399.99 * quantity2).toFixed(2)}</p>
              <button onClick={() => handleQuantityChange(2, quantity2 - 1)} disabled={quantity2 <= 1} className='qty' style={{ marginRight: '5px' }}>-</button>
              <button onClick={() => handleQuantityChange(2, quantity2 + 1)} className='qty' style={{ marginLeft: '5px' }}>+</button>
            </div>
            <button className="remove-item">
              <FontAwesomeIcon icon={faTrashAlt} /> Remove
            </button>
          </div>
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Total Price: ₹{totalInRupees}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
