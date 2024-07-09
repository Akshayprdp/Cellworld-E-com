import React, { useState, useEffect } from 'react';
import './Cartitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { userInstance } from '../../../Axios/Axiosinstance';
import { getCartItems, updateCartItem, removeCartItem } from '../../../Services/UserApi';


const Cartitems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = localStorage.getItem('userId');

      try {
        const response = await getCartItems(userId);
        if (response.data.status) {
          setCartItems(response.data.cartItems.proIds.map(item => ({
            ...item,
            quantity: response.data.cartItems.quantity
          })));
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching cart items", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = async (itemId, newQuantity) => {
    const userId = localStorage.getItem('userId');
    try {
      await updateCartItem(userId, itemId, newQuantity);
      setCartItems(cartItems.map(item => item._id === itemId ? { ...item, quantity: newQuantity } : item));
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    const userId = localStorage.getItem('userId');
    try {
      await removeCartItem(userId, itemId);
      setCartItems(cartItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error("Error removing item", error);
    }
  };

  const totalInRupees = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-div">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item._id}>
              <img className="cart-item-image" src={`http://localhost:4000${item.imageUrl}`} alt={item.productName} />
              <div className="cart-item-details">
                <h4>{item.productName}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)} disabled={item.quantity <= 1} style={{ marginRight: '5px' }}>-</button>
                <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)} style={{ marginLeft: '5px' }}>+</button>
              </div>
              <button className="remove-item" onClick={() => handleRemoveItem(item._id)}>
                <FontAwesomeIcon icon={faTrashAlt} /> Remove
              </button>
            </div>
          ))}
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
