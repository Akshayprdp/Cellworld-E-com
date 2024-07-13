import React, { useEffect, useState } from 'react';
import './PhoneStore.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { getproducts } from '../../../Services/UserApi';
import { userInstance } from '../../../Axios/Axiosinstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneStore = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproducts();
        if (response.data.status) {
          setProducts(response.data.products);
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

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

  const addToWishlist = async (productId) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("User not logged in");
      toast.error("Please log in to add items to your wishlist");
      return;
    }

    console.log('Adding to wishlist:', { userId, productId });

    try {
      const response = await userInstance.post('/api/wishlist/add', { userId, productId });

      if (response.data.success) {
        toast.success("Item added to wishlist successfully");
        navigate('/wishlist');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding to wishlist", error);
      toast.error("Error adding to wishlist. Please try again.");
    }
  };

  return (
    <div className="carousel__image-container">
      <Container className="phone-store-container">
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={3}>
              <Card className="phone-card">
                <Link to={`/product/${product._id}`}>
                  <Card.Img variant="top" src={`http://localhost:4000${product.imageUrl}`} alt={product.productName} />
                </Link>
                <div className="wishlist-icon-store">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="Store-Wishlisticon"
                    onClick={() => addToWishlist(product._id)}
                  />
                </div>
                <Card.Body>
                  <Link to={`/product/${product._id}`} className='storelink'>
                    <Card.Title>{product.productName}</Card.Title>
                  </Link>
                  <Card.Text>₹{product.price}</Card.Text>
                  <div className="button-container">
                    <Button variant="primary" className="cart-button-store" onClick={() => addToCart(product._id)}>Add to Cart</Button>
                    <Link to={`/product/${product._id}`} className='storelinkbutton'>
                      <Button variant="secondary" className="purchase-button-store">Buy Now</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default PhoneStore;
