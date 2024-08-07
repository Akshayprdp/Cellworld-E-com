import React, { useState, useEffect } from 'react';
import './Cartitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getCartItems, removeCartItem } from '../../../Services/UserApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cartitems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const response = await getCartItems(userId);
        if (response.data.status) {
          console.log(response.data);
          setCartItems(response.data.cartItems.proIds);
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

  const handleRemoveItem = async (itemId) => {
    const userId = localStorage.getItem('userId');
    try {
      const response = await removeCartItem(userId, itemId);
      if (response.data.success) {
        setCartItems(cartItems.filter(item => item._id !== itemId));
      } else {
        toast.error("Error removing item from cart");
      }
    } catch (error) {
      console.error("Error removing item", error);
      toast.error("Error removing item from cart");
    }
  };

  const totalInRupees = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-wrapper">
      <ToastContainer />
      <div className="cart-div">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div className="cart-item" key={item._id}>
                  <img className="cart-item-image" src={`http://localhost:4000${item.imageUrl}`} alt={item.productName} />
                  <div className="cart-item-details">
                    <h4>{item.productName}</h4>
                    <br />
                    <p>Price: ₹{item.price.toFixed(2)}</p>
                    
                    {/* <p>Total: ₹{item.price.toFixed(2)}</p> */}
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
          </>
        )}
      </div>
    </div>
  );
}

export default Cartitems;
