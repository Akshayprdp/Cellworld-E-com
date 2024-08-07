import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Singleproduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart, faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons';
import { getProductById } from '../../../Services/UserApi';
import { useNavigate } from 'react-router-dom';
import { userInstance } from '../../../Axios/Axiosinstance';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Singleproduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        if (response.data.status) {
          setProduct(response.data.product);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToWishlist = async (productId) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("User not logged in");
      return;
    }
    console.log('Adding to wishlist:', { userId, productId });

    try {
      const response = await userInstance.post('/api/wishlist/add', { userId, productId });
      console.log(response.data.message);
      if(response.data.success){
        toast.success('Item added to wishlist successfully')}
        else{toast.error(response.data.message)}
      // navigate('/wishlist');
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  const addToCart = async (productId) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("User not logged in");
      toast.error("Please log in to add items to your cart");
      return;
    }

    console.log('Adding to cart:', { userId, productId, quantity: 1 });

    try {
      const response = await userInstance.post('/api/cart/add', { userId, productId, quantity: 1 });

      if (response.data.success) {
        toast.success("Item added to cart successfully");
        navigate('/cart');
      } else {
        if (response.status === 409) {
          toast.info(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error("Error adding to cart", error);
      toast.warn("This item is already in your cart.");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const trimmedDescription = product.description.split(' ').slice(0, 100).join(' ') + (product.description.split(' ').length > 100 ? '...' : '');

  return (
    <div className='wrap0'>
      <div className='wrap1'>
        <div className='wrap2'>
          <h2 className='model'>{product.productName}</h2>
          <div className='image'>
            <img className="product-image" src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
          </div>
          <div className="rating-single">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <p className='price-single'>Special price :</p>
            <p className="special-price">₹{product.price}</p>
          </div>
          {/* <Link to="/wishlist" className="wishlist-link"> */}
             <div className="wishlist-link">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" onClick={() => addToWishlist(product._id)} />
            </div>
          {/* </Link> */}
          <button className="add-to-cart" onClick={() => addToCart(product._id)}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
          <Link to="/checkout">
            <button className="buy-now">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </Link>
          <p className="item-description">
            {trimmedDescription}
          </p>
          <div className="bank-offers">
            <h1>Available offers</h1>
            <br />
            <ul>
              <li>10% off on XYZ Bank Credit Cards</li>
              <li>5% cashback with ABC Bank Debit Cards</li>
              <li>No Cost EMI available</li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Singleproduct;
